const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const AddOn = db.define("add_on", {
    add_on_id:          { type: Sequelize.STRING, primaryKey:true, unique: true },
    main_product_id:    { type: Sequelize.STRING },
    main_product_name:  { type: Sequelize.STRING },
    sub_product_id:     { type: Sequelize.STRING },
    sub_product_name:   { type: Sequelize.STRING },
    percentage_off:     { type: Sequelize.DOUBLE }
});
AddOn.removeAttribute('id')
module.exports = AddOn;