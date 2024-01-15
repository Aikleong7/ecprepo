const Sequelize = require("sequelize");
const db = require("../config/DBConfig");

//Create BundleDeal table in MySQL database
const BundleDeal = db.define("bundle_deal", {
  bundle_deal_id:   { type: Sequelize.STRING, primaryKey: true },
  name:             { type: Sequelize.STRING },
  start_date:       { type: Sequelize.DATE },
  end_date:         { type: Sequelize.DATE },
  criteria:         { type: Sequelize.INTEGER },
  percentage_off:   { type: Sequelize.DOUBLE },
  product_names:    { type: Sequelize.STRING(1000) }
});
BundleDeal.removeAttribute('id')
module.exports = BundleDeal;