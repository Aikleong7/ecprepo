const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Campaign = db.define("campaign", {
    campaign_id:    { type: Sequelize.STRING, primaryKey: true, unique: true },
    name:           { type: Sequelize.STRING },
    start_date:     { type: Sequelize.DATE },
    end_date:       { type: Sequelize.DATE },
});
Campaign.removeAttribute('id')
module.exports = Campaign;