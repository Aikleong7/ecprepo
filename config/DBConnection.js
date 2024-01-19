const mySQLDB = require('./DBConfig');

const AddOn = require('../models/AddOn');
const Booking = require('../models/Booking');
const BundleDeal = require('../models/BundleDeal');
const Campaign = require('../models/Campaign');
const Cart = require('../models/Cart');
// const DiscountPromo = require('../models/DiscountPromo');
const Favourite = require('../models/Favourite');
const LoyaltyVoucher = require('../models/LoyaltyVoucher');
const Notification = require('../models/Notification');
const Product = require('../models/Product');
const MerchVoucher = require('../models/MerchVoucher');
const PurchaseHistory = require('../models/PurchaseHistory');
const Review = require('../models/Review');
const UserVoucher = require('../models/UserVoucher.js');
const User = require('../models/User');
const Voucher = require('../models/Voucher');
const Audit = require('../models/Audit');


// If drop is true, all existing tables are dropped and recreated 
const setUpDB = (drop) => {
    mySQLDB.authenticate()
        .then(() => {
            console.log('Database connected');

            Campaign.hasMany(MerchVoucher, { onDelete: 'CASCADE' });


            BundleDeal.hasMany(Product);
            BundleDeal.belongsTo(User);

            Cart.belongsTo(User);
            Cart.belongsTo(Product);

            // DiscountPromo.belongsTo(Product);
            // DiscountPromo.hasMany(Product);

            LoyaltyVoucher.hasMany(UserVoucher, { onDelete: 'CASCADE' });

            Product.belongsTo(BundleDeal);
            // Product.belongsTo(DiscountPromo);
            // Product.hasMany(DiscountPromo);
            Product.hasMany(Review);
            Product.belongsTo(User);

            PurchaseHistory.belongsTo(Product);
            PurchaseHistory.belongsTo(User);

            MerchVoucher.belongsTo(User);

            Review.belongsTo(Product);
            Review.belongsTo(User);

            UserVoucher.belongsTo(User)
            UserVoucher.belongsTo(Voucher)
            UserVoucher.belongsTo(LoyaltyVoucher)
            UserVoucher.belongsTo(MerchVoucher)

            User.hasMany(AddOn, { onDelete: 'CASCADE' });
            User.hasMany(Audit);
            User.hasMany(LoyaltyVoucher);
            User.hasMany(Booking);
            User.hasMany(BundleDeal);
            // User.hasMany(DiscountPromo);
            User.hasMany(Notification, { onDelete: 'CASCADE' });
            User.hasMany(Product);
            User.hasMany(MerchVoucher);
            User.hasMany(PurchaseHistory);
            User.hasMany(Review);
            User.hasMany(UserVoucher);

            Favourite.belongsTo(Product, { onDelete: 'CASCADE' });
            Favourite.belongsTo(User);


            mySQLDB.sync({
                force: drop
            });

            var sql = "CREATE TABLE IF NOT EXISTS Earnings (product_id_earnings VARCHAR(255) PRIMARY KEY, product_name_earnings VARCHAR(255), category_earnings VARCHAR(255), sub_category_earnings VARCHAR(255), selling_price_earnings FLOAT, unit_price_earnings FLOAT, earnings_earnings FLOAT, units_sold_earnings INT, userUserId_earnings VARCHAR(255))";
            mySQLDB.query(sql)
            var chart = "CREATE TABLE IF NOT EXISTS line_chart (date_time DATE, earnings FLOAT(7,2), userUserId VARCHAR(255))";
            mySQLDB.query(chart)
       
        })
        .catch(err => console.log(err));
};


module.exports = { setUpDB };
