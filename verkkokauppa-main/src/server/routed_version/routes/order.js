const router = require('express').Router();
const {addOrder, customerExists, getCustomerOrders} = require('../db_tools/order_db');
const jwt = require('jsonwebtoken');
const {auth} = require('../auth/auth');

/**
 * Endpoint for placing an order 
 */
router.post('/order', async (req, res) => {

    try {
        const order = req.body;

        if(await !customerExists(order.customerId)){
            res.status(404).json({ error: 'Customer not found. Incorrect customer id.' });
        }
        const id = await addOrder(order);
        res.status(200).json({orderId: id});

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

/**
 * Endpoint for getting orders of the customer
 * Token is verified in the auth middleware.
 */
router.get('/orders', auth, async (req,res) => {
    try{
        const orders = await getCustomerOrders(res.locals.username);
        res.status(200).json(orders);
    }catch(err){
        console.log(err.message);
        res.status(403).send('Access forbidden.');
    }
});


module.exports = router;