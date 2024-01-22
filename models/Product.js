const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Product = db.define('product',
    {
        product_id:     { type: Sequelize.STRING, primaryKey: true, unique: true },
        product_name:   { type: Sequelize.STRING },
        product_img:    { type: Sequelize.STRING },
        category:       { type: Sequelize.STRING },
        total_stock:    { type: Sequelize.INTEGER },
        selling_price:  { type: Sequelize.FLOAT },
        Description:    { type: Sequelize.STRING },
    });

    Product.removeAttribute('id')
module.exports = Product;
