const Sequelize = require('sequelize');
const db = require('../config/DBConfig');


const Notification = db.define("notification", {
    notification_id:    { type: Sequelize.STRING, primaryKey: true, unique: true },
    message:            { type: Sequelize.STRING },
    read:               { type: Sequelize.BOOLEAN },
    role:               { type: Sequelize.STRING }
});
Notification.removeAttribute('id')
module.exports = Notification;