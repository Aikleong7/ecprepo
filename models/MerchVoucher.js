const Sequelize = require("sequelize");
const db = require("../config/DBConfig");

const MerchVoucher = db.define("merch_voucher", {
  voucher_id:     { type: Sequelize.STRING, primaryKey: true, unique: true },
  name:           { type: Sequelize.STRING },
  start_date:     { type: Sequelize.DATE },
  end_date:       { type: Sequelize.DATE },
  usage_limit:    { type: Sequelize.INTEGER },
  min_spend:      { type: Sequelize.DOUBLE },
  discount_type:  { type: Sequelize.STRING },
  discount_off:   { type: Sequelize.DOUBLE }
});
MerchVoucher.removeAttribute('id')
module.exports = MerchVoucher;
