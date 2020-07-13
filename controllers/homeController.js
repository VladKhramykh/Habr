const userRepo = require("../db/repositories/userRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const config = require("../config/keys").jwt;
const uuid = require('uuid');
const mailer = require('../utils/nodemailer').activate;

exports.index = function (req, res) {
    res.send("Index");
};
exports.about = function (req, res) {
    res.send("About");
};
exports.registration = function (req, res) {
    let user = req.body;
    if(user) {
        userRepo.findOneByEmail(user.email)
            .then((foundedUser) => {
                if (!foundedUser) {
                    user.password = bcrypt.hashSync(user.password, 8);
                    user.activationCode = uuid.v4();
                    user.role = 'user';
                    mailer(user);
                    userRepo.add(user)
                        .then((created) => {
                            let token = jwt.sign({id: created.id}, config.appSession.secret, {
                                expiresIn: 86400
                            });
                            res.status(201);
                            res.json({auth: true, token: token, user: created});
                        })
                } else {
                    res.status(404).send('User with the same email exists');
                }
            });
    } else {
        res.status(404).send('Bad request');
    }
};
exports.googleLogin = function (req, res) {

};