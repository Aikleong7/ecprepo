const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Product = db.define('product',
    {
        product_id:     { type: Sequelize.STRING, primaryKey: true, unique: true },
        product_name:   { type: Sequelize.STRING },
        category:       { type: Sequelize.STRING },
        sub_category:   { type: Sequelize.STRING },
        Size_XS:        { type: Sequelize.INTEGER },
        Size_S:         { type: Sequelize.INTEGER },
        Size_M:         { type: Sequelize.INTEGER },
        Size_L:         { type: Sequelize.INTEGER },
        Size_XL:        { type: Sequelize.INTEGER },
        Size_XXL:       { type: Sequelize.INTEGER },
        Size_3XL:       { type: Sequelize.INTEGER },
        Size_4XL:       { type: Sequelize.INTEGER },
        total_stock:    { type: Sequelize.INTEGER },
        selling_price:  { type: Sequelize.FLOAT },
        unit_price:     { type: Sequelize.FLOAT },
        earnings:       { type: Sequelize.FLOAT },
        Description:    { type: Sequelize.STRING },
        units_sold:     { type: Sequelize.INTEGER }
    });

    Product.removeAttribute('id')
module.exports = Product;
