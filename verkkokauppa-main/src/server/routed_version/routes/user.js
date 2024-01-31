require('dotenv').config();
const router = require('express').Router();
const {register, getPw, getUserData} = require('../db_tools/user_db');
const multer = require('multer');
const upload = multer({ dest: "uploads/" });
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const {auth, createToken} = require('../auth/auth');


/**
 * Endpoing for registering a new user. 
 * Returns jwt authentication token if the user is registered.
 * Supports urlencoded and multipart.
 */
router.post('/register', upload.none(), async (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const uname = req.body.username;
    const pw = req.body.pw;

    try {
        const pw_hash = await bcrypt.hash(pw,10);
        await register([fname,lname,uname, pw_hash]);
        const token = createToken(uname);
        res.status(200).json({jwtToken: token});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }

});

/**
 * Endpoint for checking the username and password.
 * Returns jwt authentication token if authorized. 
 * Supports urlencoded or multipart
 */
router.post('/login', upload.none(), async (req, res) => {
    
    const uname = req.body.username;
    const pw = req.body.pw;

    try {
        const db_pw = await getPw(uname);

        if(db_pw){
            const isAuth = await bcrypt.compare(pw, db_pw);
            if(isAuth){
                const token = jwt.sign({username: uname}, process.env.JWT_KEY);
                res.status(200).json({jwtToken: token});
            }else{
                res.status(401).end('User not authorized');
            }
        }else{
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
});


/**
 * Endpoint for getting user spesific data.
 * Token is verified in the auth middleware.
 */
router.get('/customer', auth, async(req,res) => {
    try{
        const userdata = await getUserData(res.locals.username);
        if(!userdata){
            res.status(404).json({error: 'User not found!'});
        }
        res.status(200).json(userdata);
    }catch(error){
        console.log(error);
        res.status(505).json({error: error.message});
    }
});

module.exports = router;