const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Reviews = db.define('reviews',
    {
        review_id:  { type: Sequelize.STRING, primaryKey: true, unique: true },
        stars:      { type: Sequelize.INTEGER },
        review:     { type: Sequelize.STRING }
    });
    Reviews.removeAttribute('id')
module.exports = Reviews;