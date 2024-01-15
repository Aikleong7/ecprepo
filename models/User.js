const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

// Create users table in MySQL Database
const User = db.define('user',
    {
        user_id:                { type: Sequelize.STRING, primaryKey: true, unique: true },
        google:                 {type: Sequelize.STRING},
        username:               { type: Sequelize.STRING},
        email:                  { type: Sequelize.STRING },
        password:               { type: Sequelize.STRING },
        phone:                  { type: Sequelize.INTEGER },
        address:                { type: Sequelize.STRING },               
        role:                   { type: Sequelize.STRING },
        total_points:           { type: Sequelize.INTEGER },
        points:                 { type: Sequelize.INTEGER },
        user_tier_level:        { type: Sequelize.STRING },
        Country_of_residence:   {type: Sequelize.STRING},
        Gender:                 {type: Sequelize.STRING}, 
        DOB:                    {type: Sequelize.DATE}
    });
    User.removeAttribute('id')
module.exports = User;