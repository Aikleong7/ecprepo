const express = require('express');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { config } = require('dotenv');
const User = require('../models/User');
function localStrategy(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField:'password',passReqToCallback: true }, function(req, email, password, done) {
            User.findOne({ where: { email: email, role: req.body.role, google: null} })
                .then(user => {
                    console.log(req.body)
                    if (!user) {
                        console.log("User not found");
                        return done(null, false, { message: 'No User Found' });
                    
                    }
                    isMatch = bcrypt.compareSync(password, user.password);
                    
                    if (!isMatch) {
                        console.log("User password incorrect");
                        return done(null, false, { message: password });
                    }
                    

                    
                    console.log("User found");
                    return done(null, user);
                
                })
        }));

    // Serializes (stores) user id into session upon successful 
    // authentication 
    passport.serializeUser((user, done) => {
        // user.id is used to identify authenticated user 
        done(null, user.user_id);
    });

    // User object is retrieved by userId from session and 
    // put into req.user 
    passport.deserializeUser((userId, done) => {
        User.findByPk(userId)
            .then((user) => {
                done(null, user);
                // user object saved in req.session 
            })
            .catch((done) => {
                // No user found, not stored in req.session 
                console.log(done);
            });
    });
}

// function facebookStrategy(passport) {
//     passport.use(
//         new FacebookStrategy({
//             clientID: "1109214256297133",
//             clientSecret: "31dd51c302735eeb48799992b3cde67a",
//             callbackURL: "/auth/facebook/callback",
//             enableProof: true,
            
//         }, function(accessToken, refreshToken, profile, cb) {
//             User.findOrCreate({ userId: profile.id }, function (err, user) {
//               return cb(err, user);
//             });
//           })
//     )

//     passport.serializeUser(function (user, cb) {
//         cb(null, user);
//       });
      
//       passport.deserializeUser(function (userId, cb) {
//         cb(null, userId);
//       });
// }

function googleStrategy(passport) {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback",
            passReqToCallback : true    
        },
        async function(req,res, accessToken, refreshToken, profile, done){
            try {
                let existingUser = await User.findOne({where :{google : profile.id, role: global.role}});
                if (existingUser){
                    return done(null, existingUser)
                }
                
                console.log('Creating new user...');
                    const newUser = await User.create({user_id:uuidv4(),google: profile.id, username: profile.displayName, email: profile.emails[0].value })
                    return done(null, newUser);
            }
            catch (error) {
                return done(error, false)
        }
    }
        ))
        passport.serializeUser((user, done) => {
            // user.id is used to identify authenticated user 
            done(null, user.user_id);
        });
    
        // User object is retrieved by userId from session and 
        // put into req.user 
        passport.deserializeUser((id, done) => {
            User.findByPk(id)
                .then((user) => {
                    done(null, user);
                    // user object saved in req.session 
                })
                .catch((done) => {
                    // No user found, not stored in req.session 
                    console.log(done);
                });
        });
}
module.exports = { localStrategy, googleStrategy };