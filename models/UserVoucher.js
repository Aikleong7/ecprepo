const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

// Create users table in MySQL Database
const UserVoucher = db.define('user_voucher',
    {

    });
    UserVoucher.removeAttribute('id')

module.exports = UserVoucher;