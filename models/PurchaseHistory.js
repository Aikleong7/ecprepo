const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const PurchaseHistory = db.define('purchase_history',
    {
        purchase_history_id:    { type: Sequelize.STRING, primaryKey: true, unique: true },
        quantity:               { type: Sequelize.INTEGER },
        order_total:            { type: Sequelize.INTEGER },
        delivery_type:          { type: Sequelize.STRING },
        status:                 { type: Sequelize.BOOLEAN }
    });
    PurchaseHistory.removeAttribute('id')
module.exports = PurchaseHistory;