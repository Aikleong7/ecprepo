const mySQLDB = require('./DBConfig');

const Cart = require('../models/Cart');
const Product = require('../models/Product');
const PurchaseHistory = require('../models/PurchaseHistory');
const User = require('../models/User');


// If drop is true, all existing tables are dropped and recreated 
const setUpDB = (drop) => {
    mySQLDB.authenticate()
        .then(() => {
            console.log('Database connected');

            Cart.belongsTo(User);
            Cart.belongsTo(Product);

            PurchaseHistory.belongsTo(Product);
            PurchaseHistory.belongsTo(User);

            User.hasMany(PurchaseHistory);

            mySQLDB.sync({
                force: drop
            });
        })
        .catch(err => console.log(err));
};

module.exports = { setUpDB };
