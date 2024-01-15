const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const LoyaltyVoucher = db.define('loyalty_voucher',
    {
        voucher_id:     { type: Sequelize.STRING, primaryKey: true, unique: true},
        name:           { type: Sequelize.STRING },
        tier_level:     { type: Sequelize.STRING },
        voucher_type:   { type: Sequelize.STRING },
        discount_off:   { type: Sequelize.INTEGER },
        usage_length:   { type: Sequelize.INTEGER },
        min_spend:      { type: Sequelize.INTEGER }

    });
    LoyaltyVoucher.removeAttribute('id')
module.exports = LoyaltyVoucher;