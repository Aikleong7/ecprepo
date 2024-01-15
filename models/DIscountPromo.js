const Sequelize = require("sequelize");
const db = require("../config/DBConfig");

const DiscountPromo = db.define("discount_promo", {
  discount_promo_id: { type: Sequelize.STRING, primaryKey: true, unique: true },
  name: { type: Sequelize.STRING },
  start_date: { type: Sequelize.DATE },
  end_date: { type: Sequelize.DATE },
  percentage_off: { type: Sequelize.DOUBLE },
  product_name: { type: Sequelize.STRING },
});
DiscountPromo.removeAttribute("id");
module.exports = DiscountPromo;
