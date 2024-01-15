const Sequelize  = require('sequelize');
const db = require('../config/DBConfig');

const Cart = db.define('cart',
    {
        quantity: { type: Sequelize.INTEGER }
    });
    Cart.removeAttribute('id')
module.exports = Cart;