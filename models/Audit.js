const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Audit = db.define("audit_logs", {
    audit_id:           { type: Sequelize.STRING, primaryKey:true, unique: true },
    items:              { type: Sequelize.STRING },
    method:             {type: Sequelize.STRING},
    type:               {type: Sequelize.STRING}

});
Audit.removeAttribute('id')
module.exports = Audit;