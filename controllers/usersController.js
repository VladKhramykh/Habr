const userRepo = require("../db/repositories/userRepo.js");
const postRepo = require("../db/repositories/postRepo.js");
const config = require("../db/config.js");

exports.addUser = function (req, res) {
    userRepo.addUser(req.data)
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.status(500);
            res.json(err);
        })
};
exports.getUsers = function (req, res) {
    userRepo.findAll()
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.status(500);
            res.json(err);
        })
};
exports.activateUser = function (req, res) {
    let receivedCode = req.query.activationCode;
    userRepo.updateByActivationCode(receivedCode)
        .then((user) => {
            res.json(user);
        })
};
exports.getUser = async function (req, res) {
    let id = req.params["id"];
    let foundedUser;
    let foundedHubs;
    foundedUser = await userRepo.findOneById(id);
    let countOfPublications = await postRepo.countOfPublicationsByUserId(id);
    console.log(foundedUser);
    foundedHubs = await postRepo.findContributionsByUserId(id);
    res.json({
        user: foundedUser,
        countOfPublications: countOfPublications,
        hubs: foundedHubs
    });
};
exports.updateUser = function (req, res) {
    let user = req.body;
    console.log(user);
    if(user) {
        userRepo.update(user)
            .then(data => {
                res.status(200);
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json({error: err});
            })
    } else {
        res.status(400);
        res.json({error: 'Bad request'});
    }
};
exports.removeUser = function (req, res) {
    res.send("removeUser");
};