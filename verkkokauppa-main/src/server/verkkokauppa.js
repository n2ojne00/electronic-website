require('dotenv').config()
const axios = require('axios');


const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require('cors');

const multer = require('multer');
const upload = multer({ dest: "uploads/" });

var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dateStrings: false,
    timezone: '+00:00'
}

  


/**
 * Gets the products
 * Optional category query parameter for filtering only products from that category
 */
app.get('/products', async (req, res) => {
    try {
        const connection = await mysql.createConnection(conf);

        const category = req.query.category;
        const search = req.query.search;

        let result;        

        if(category){
            result = await connection.execute
            ("SELECT id, product_name productName, product_description description,product_description1 description1,product_description2 description2,product_description3 description3, price, price_usd, image_url imageUrl, category  FROM product WHERE category=?",
                 [category]);
        } else if (search) {
            result = await connection.execute
            ("SELECT id, product_name productName,product_description description,product_description1 description1, product_description2 description2,product_description3 description3, price, price_usd, image_url imageUrl, category FROM product WHERE product_name LIKE ?", 
                [`%${search}%`]);
        }
        
        else{
            result = await connection.execute(
                "SELECT id, product_name productName,product_description description,product_description1 description1,product_description2 description2,product_description3 description3, price, price_usd, image_url imageUrl, category  FROM product"
                );
        }
        
        //First index in the result contains the rows in an array
        res.json(result[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


/**
 * Gets all the categories
 */
app.get('/categories', async (req, res) => {

    try {
        const connection = await mysql.createConnection(conf);

        const [rows] = await connection.execute("SELECT category_name categoryName, category_description description FROM product_category");

        res.json(rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/customer', async(req,res) => {

    //Get the bearer token from authorization header
    const token = req.headers.authorization?.split(' ')[1];

    //Verify the token. Verified token contains username
    try{
        const username = jwt.verify(token, 'mysecretkey').username;
        const connection = await mysql.createConnection(conf);
        const [rows] = await connection.execute('SELECT first_name fname, last_name lname, username, is_admin FROM customer WHERE username=?',[username]);
        res.status(200).json(rows[0]);
    }catch(err){
        console.log(err.message);
        res.status(403).send('Access forbidden.');
    }
});

/**
 * Adds new product categories
 */
app.post('/categories', async (req, res) => {

    const connection = await mysql.createConnection(conf);

    try {
        
        connection.beginTransaction();
        const categories = req.body;
        
        for (const category of categories) {
            await connection.execute("INSERT INTO product_category VALUES (?,?)",[category.categoryName, category.description]);
        }
    
        connection.commit();
        res.status(200).send("Categories added!");

    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


/**
 * Adds new products */
app.post('/addproducts', async (req, res) => {

    const connection = await mysql.createConnection(conf);

    try {
        
        connection.beginTransaction();
        const products = req.body;
        

        for (const product of products) {
            await connection.execute("INSERT INTO product (product_name, product_description, product_description1, product_description2, product_description3, price, price_usd, image_url,category) VALUES (?,?,?,?,?,?,?,?,?)",[product.productName, product.productDescription,product.productDescription1,product.productDescription2,product.productDescription3, product.price,product.priceUsd, product.imageUrl, product.category]);
        }
    
        connection.commit();
        res.status(200).send("Products added!");

    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


/**
 * Place an order. 
 */
app.post('/order', async (req, res) => {

    

    let connection;

    try {

        const token = req.headers.authorization?.split(' ')[1];
  
      if (!token) {
        return res.status(401).send('Unauthorized');
      }
    
        const username = jwt.verify(token, 'mysecretkey').username;
        const customerId = await getCustomerId(username);

        connection = await mysql.createConnection(conf);
        connection.beginTransaction();

        const order = req.body;
        
        const [info] = await connection.execute("INSERT INTO customer_order (order_date, customer_id) VALUES (NOW(),?)",[customerId]);
        
        const orderId = info.insertId;

        for (const product of order.products) {
            await connection.execute("INSERT INTO order_line (order_id, product_id, quantity) VALUES (?,?,?)",[orderId, product.id, product.count]);            
        }

        connection.commit();
        res.status(200).json({orderId: orderId});

    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    
    }
    
    async function getCustomerId(username) {
        const connection = await mysql.createConnection(conf);
        const [rows] = await connection.execute(
          'SELECT id FROM customer WHERE username = ?',
          [username]
        );
      
        if (rows.length > 0) {
          return rows[0].id;
        }
      
        throw new Error('Customer not found');
      }
});


//(Authentication/JWT could be done with middleware also)


/**
 * Registers user. Supports urlencoded and multipart
 */
app.post('/register', upload.none(), async (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const uname = req.body.username;
    const pw = req.body.pw;

    try {
        const connection = await mysql.createConnection(conf);

        const pwHash = await bcrypt.hash(pw, 10);

        const [rows] = await connection.execute('INSERT INTO customer(first_name,last_name,username,pw) VALUES (?,?,?,?)',[fname,lname,uname,pwHash]);

        res.status(200).end();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

/** Tähän tulee Joni Neuvosen palaute-osion post/get tietokantaohjelmoinnin tehtävä.
 */

app.post('/palaute', upload.none(), async (req, res) => {
    const feedback = req.body.feedback;
    const tuote = req.body.tuote;

    try {
        //tässä luodaan yhteys tietokantaan
        const connection = await mysql.createConnection(conf);
        // lisätään tuotteen arvostelu tietokantaan
        const [rows] = await connection.execute('INSERT INTO palaute(feedback, tuote) VALUES(?,?)', [feedback, tuote]);

        res.status(200).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/palaute', async (req, res) => {
    try {
        //luodaan yhteys tietokantaan
        const connection = await mysql.createConnection(conf);
        //haetaan palautteet tietokannasta
        const [rows] = await connection.execute('SELECT * FROM palaute');

        res.json(rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//Tämä on osa Topias Tynin tietokantaohjelmoinnin tehtävää 
app.post('/changepassword', upload.none(), async (req, res) => {
    const username = req.body.username;
    const oldPassword = req.body.pw;  
    const newPassword = req.body.npw;  

    try {
        //luodaan tietokantayhteys
        const connection = await mysql.createConnection(conf);
        //haetaan salasana tietokannasta
        const [rows] = await connection.execute('SELECT pw FROM customer WHERE username=?', [username]);
        //tarkistetaan löytyykö käyttäjää
        if (rows.length === 0) {
            res.status(404).json({ error: 'Käyttäjää ei löydy' });
        }

        const currentPasswordHash = rows[0].pw;
        //tarkistetaan onko annettu salasana sama kuin tietokannassa oleva
        const isPasswordValid = await bcrypt.compare(oldPassword, currentPasswordHash);
        //tarkistetaan onko vanhasalasana oikea
        if (!isPasswordValid) {
        res.status(401).json({ error: 'Virheellinen vanha salasana' });
        }
        //hashataan uusi salasana
        const newPasswordHash = await bcrypt.hash(newPassword, 10);
        //päivitetään tietokantaan uusi hashatty salasana
        await connection.execute('UPDATE customer SET pw=? WHERE username=?', [newPasswordHash, username]);
        //ilmoitus jos onnistuu
        res.status(200).json({ message: 'Salasana vaihdettu onnistuneesti' });

    } catch (err) {
        //erroria jos ei onnistunut
        res.status(500).json({ error: err.message });
    }
});
//Tähän tulee toinen osa Topias Tynin tietokantaohjelmoinnin tehtävästä
app.get('/users', async (req, res) => {
    try {
        //luodaan tietokantayhteys
        const connection = await mysql.createConnection(conf);

        //haetaan tietokannasta halutut tiedot
        const [rows] = await connection.execute('SELECT first_name, last_name, username FROM customer');

        //palautettaan tiedot jsonina
        res.json(rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


/**
 * Checks the username and password and returns jwt authentication token if authorized. 
 * Supports urlencoded or multipart
 */
app.post('/login', upload.none(), async (req, res) => {
    const uname = req.body.username;
    const pw = req.body.pw;


    try {
        const connection = await mysql.createConnection(conf);

        const [rows] = await connection.execute('SELECT pw FROM customer WHERE username=?', [uname]);

        if(rows.length > 0){
            const isAuth = await bcrypt.compare(pw, rows[0].pw);
            
            if(isAuth){
                const token = jwt.sign({username: uname}, 'mysecretkey');
                res.status(200).json({jwtToken: token});
            }else{
                res.status(401).end('User not authorized');
            }
        }else{
            res.status(404).send('User not found');
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



/**
 * Gets orders of the customer
 */
app.get('/orders', async (req,res) => {
    
    //Get the bearer token from authorization header
    const token = req.headers.authorization?.split(' ')[1];

    //Verify the token. Verified token contains username
    try{
        const username = jwt.verify(token, 'mysecretkey').username;
        const orders = await getOrders(username);
        res.status(200).json(orders);
    }catch(err){
        console.log(err.message);
        res.status(403).send('Access forbidden.');
    }
});

async function getOrders(username){
    try {
        const connection = await mysql.createConnection(conf);
        const [rows] = await connection.execute('SELECT customer_order.order_date AS date, customer_order.id as orderId FROM customer_order INNER JOIN customer ON customer.id = customer_order.customer_id WHERE customer.username=?', [username]);

        let result = [];

        for (const row of rows) {
            const [products] = await connection.execute("SELECT id,product_name productName,price,image_url imageUrl, category, quantity  FROM product INNER JOIN order_line ON order_line.product_id = product.id WHERE order_line.order_id=?", [row.orderId]);

            let order ={
                orderDate: row.date,
                orderId: row.orderId,
                products: products
            }

            result.push(order);
        }


        return result;
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: err.message });
    }
}

/**----FEEDBACK OSIO----- */

app.post('/customerfeedback', async (req, res) => {
    const { email, nickname, feedback, rating } = req.body;
  
    try {
      const connection = await mysql.createConnection(conf);
      await connection.execute('INSERT INTO customerfeedback (email, nickname, feedback, rating) VALUES (?, ?, ?, ?)', [email, nickname, feedback, rating]);
      connection.end();
      res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

/**----FEEDBACK OSIO----- */