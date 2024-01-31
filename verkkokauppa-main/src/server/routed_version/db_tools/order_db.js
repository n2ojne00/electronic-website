const dbPool = require('./mysql2connection');

//SQL commands
const sql = {
    INSERT_ORDER: 'INSERT INTO customer_order (order_date, customer_id) VALUES (NOW(),?)',
    INSERT_ORDER_PRODUCTS: 'INSERT INTO order_line (order_id, product_id, quantity) VALUES (?,?,?)',
    CHECK_CUSTOMER_ID: 'SELECT id FROM customer WHERE id=?'
}

/**
 * Checks if there's a customer with the given id.
 */
async function customerExists(customerId){
    const connection = await dbPool.getConnection();
    const [rows] = await connection.execute(sql.CHECK_CUSTOMER_ID, [customerId]);
    return rows.lenght > 0;
}

/**
 * Adds a new order for the customer
 */
async function addOrder(order){

    let connection;
    try{
        const connection = await dbPool.getConnection();

        await connection.beginTransaction();
        
        const [info] = await connection.execute(sql.INSERT_ORDER, [order.customerId]);

        const orderId = info.insertId;
        
        for (const p of order.products) {
            await connection.execute(sql.INSERT_ORDER_PRODUCTS, [orderId, p.id, p.quantity]);
        }

        await connection.commit();
        return orderId;

    }catch(error){
        await connection.rollback();
        throw error;
    }
}

/**
 * Gets all the orders of the customer by username
 */
async function getCustomerOrders(username){
    try {
        const [rows] = await dbPool.execute('SELECT customer_order.order_date AS date, customer_order.id as orderId FROM customer_order INNER JOIN customer ON customer.id = customer_order.customer_id WHERE customer.username=?', [username]);

        let result = [];

        for (const row of rows) {
            const [products] = await dbPool.execute("SELECT id,product_name productName,price,image_url imageUrl, category, quantity  FROM product INNER JOIN order_line ON order_line.product_id = product.id WHERE order_line.order_id=?", [row.orderId]);

            let order ={
                orderDate: row.date,
                orderId: row.orderId,
                products: products
            }

            result.push(order);
        }
        return result;
    } catch (error) {
       throw new Error(error.message);
    }
}

module.exports = {addOrder, customerExists, getCustomerOrders}
