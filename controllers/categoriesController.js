const repo = require("../db/repositories/categoryRepo.js");
const config = require("../db/config.js");

exports.addCategoy = function (req, res) {
    let name = req.body.name;
    if (!name) {
        res.status(400);
        res.json({error: "Bad request"});
    } else {
        repo.addCategory(req.body)
            .then((message) => {
                res.json(message);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            })
    }

};
exports.getCategories = function (req, res) {
    repo.findAll()
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.status(500);
            res.json(err);
        })
};

exports.getCategoriesAndSub = function (req, res) {
    repo.findAllAndSub()
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.status(500);
            res.json(err);
        })
};

exports.getCategory = function (req, res) {
    res.send("getCategory");
};
exports.updateCategory = function (req, res) {
    res.send("updateCategory");
};
exports.deleteById = function (req, res) {
    let id = req.params.id;
    if (!id) {
        res.status(400);
        res.json({error: 'Bad request'});
    } else {
        repo.deleteById(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500);
                res.json({error: err});
            })
    }

};