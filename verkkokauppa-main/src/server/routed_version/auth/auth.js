require('dotenv').config();
const jwt = require('jsonwebtoken');

/**
 * Middleware for authorization. Checks the token validity
 * and parses the username from the token. 
 */
function auth(req,res,next){
    //Get the bearer token from authorization header
    const token = req.headers.authorization?.split(' ')[1];

    //Verify the token. Verified token contains username
    //res.locals stores the username during the life of the request
    //next() directs to the next middleware in stack.
    try{
        const username = jwt.verify(token, process.env.JWT_KEY).username;
        res.locals.username = username;
        next();
    }catch(err){
        res.status(403).send('Access forbidden.');
    }
}

/**
 * Creates a JWT token containing the username. 
 */
function createToken(username){
    return jwt.sign({username: username}, process.env.JWT_KEY);
}


module.exports =  {auth, createToken};