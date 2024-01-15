const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Booking = db.define('booking',
{
    booking_id:     { type: Sequelize.STRING, primaryKey: true, unique: true},
    date:           { type: Sequelize.DATEONLY },
    location:       { type: Sequelize.STRING },
    timing:         { type: Sequelize.TIME },
    special_req:    { type: Sequelize.STRING(200) },
    tracker_id:     { type: Sequelize.STRING(36) }
});
Booking.removeAttribute('id')
module.exports = Booking;   