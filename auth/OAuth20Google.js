const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys').google;
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const userRepo = require('../db/repositories/userRepo.js');

passport.use(new GoogleStrategy({
        clientID: keys.clientID,
        clientSecret: keys.clientSecret,
        callbackURL: "/login/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        userRepo.findOneByEmail(profile._json.email)
            .then((user) => {
                if (user) {
                    done(null, user);
                } else {
                    let activationCode = '';
                    if(!profile._json.email_verify) {
                        activationCode = uuid.v4();
                    }
                    let newUser = {
                        firstName: profile._json.given_name,
                        secondName: profile._json.family_name,
                        email: profile._json.email,
                        activationCode: activationCode,
                        password: bcrypt.hashSync(profile._json.sub, 8)
                    };

                    userRepo.add(newUser);

                    done(null, newUser);
                }
            });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});
