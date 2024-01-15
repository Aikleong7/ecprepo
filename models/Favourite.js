const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Favourite = db.define('favourite',
{
    fav_id: { type: Sequelize.STRING, primaryKey: true, unique: true},
});
Favourite.removeAttribute('id')
module.exports = Favourite;