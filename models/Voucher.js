const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Voucher = db.define('voucher',
    {
        voucher_id:     { type: Sequelize.STRING, primaryKey: true, unique: true},
        name:           { type: Sequelize.STRING },
        amt_off:        { type: Sequelize.INTEGER },
        voucher_type:   { type: Sequelize.STRING }
    });
    Voucher.removeAttribute('id')
module.exports = Voucher;