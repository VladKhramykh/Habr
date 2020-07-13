const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const userRepo = require("../db/repositories/userRepo");
const config = require("../config/keys").jwt;

exports.login = function (req, res) {
    let user = req.body;

    userRepo.findOneByEmail(user.email)
        .then((foundedUser) => {
            if (foundedUser) {
                let passwordIsValid = bcrypt.compareSync(user.password, foundedUser.password);
                if (!passwordIsValid) {
                    return res.status(401).send({auth: false, token: null});
                }
                let token = jwt.sign({id: foundedUser.id}, config.appSession.secret, {
                    expiresIn: 86400
                });
                res.status(200);
                res.json({auth: true, token: token, user: foundedUser});
            } else {
                res.status(404);
                res.json('No user found');
            }
        });
};