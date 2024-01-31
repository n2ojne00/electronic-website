const dbPool = require('./mysql2connection');

//SQL commands
const sql = {
    GET_PRODUCTS: 'SELECT id, product_name productName, price, image_url imageUrl, category FROM product',
    GET_PRODUCTS_CATEGORY: 'SELECT id, product_name productName, price, image_url imageUrl, category  FROM product WHERE category=?',
    INSERT_PRODUCTS: 'INSERT INTO product (product_name, price, image_url,category) VALUES (?,?,?,?)',
    GET_CATEGORIES: 'SELECT category_name categoryName, category_description description FROM product_category',
    INSERT_CATEGORIES: 'INSERT INTO product_category VALUES (?,?)'
}

/**
 * Gets all the products
 */
async function getProducts(category){
    let result;
    if(category){
        result = await dbPool.execute(sql.GET_PRODUCTS_CATEGORY, [category]);
    }else{
        result = await dbPool.execute(sql.GET_PRODUCTS);
    }
    
    return result[0];
}

/**
 * Gets all the products by category
 */
async function getCategoryProducts(category){
    const [rows] = await dbPool.execute(sql.GET_PRODUCTS_CATEGORY, [category]);
    return await rows;
}

/**
 * Adds new products by using transaction
 */
async function addProducts(products){
    let connection;
    try{
        const connection = await dbPool.getConnection();
        await connection.beginTransaction();

        for (const p of products) {
            console.log(p);
            await connection.execute(sql.INSERT_PRODUCTS, [p.productName, p.price, p.imageUrl, p.category]);
        }

        await connection.commit();

    }catch(error){
        await connection.rollback();
        throw error;
    }
}

/**
 * Gets all the categories
 */
async function getCategories(){
    const [row] = await dbPool.execute(sql.GET_CATEGORIES);
    return row;
}

/**
 * Adds new categories
 */
async function addCategories(categories){
    let connection;
    try{
        const connection = await dbPool.getConnection();
        await connection.beginTransaction();

        for (const c of categories) {
            await connection.execute(sql.INSERT_CATEGORIES, [c.categoryName, c.description]);
        }

        await connection.commit();

    }catch(error){
        await connection.rollback();
        throw error;
    }
}


module.exports = {getProducts, getCategoryProducts, addProducts, getCategories, addCategories};