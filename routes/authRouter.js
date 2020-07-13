const url = require('url');

const router = require('express').Router();
const passport = require('passport');
const loginController = require("../controllers/loginController");
const config = require('../config/keys').google;

router.post("/", loginController.login);

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.status(200);
    // res.redirect(url.format({
    //     pathname: 'http://localhost:8081',
    //     query: req.query
    // }));
    res.json({auth: true, token: config.clientSecret, user: req.user});
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
