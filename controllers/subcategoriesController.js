const repo = require("../db/repositories/subcategoryRepo.js");
const config = require("../db/config.js");

exports.addCategoy = function (req, res) {
    let sub = req.body;
    if (sub) {
        repo.add(sub)
            .then((message) => {
                res.json(message);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            })
    } else {
        res.status(400);
        res.json({error: 'Bad request'});
    }

};
exports.getCategories = function (req, res) {
    let categoryId = req.query.categoryId;
    if (categoryId) {
        repo.findAllByCategoryId(categoryId)
            .then((data) => {
                res.json(data);
            })
    } else {
        repo.findAll()
            .then((message) => {
                res.json(message);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            })
    }

};
exports.getCategory = function (req, res) {
    res.send("getCategory");
};
exports.updateCategory = function (req, res) {
    res.send("updateCategory");
};
exports.removeCategory = function (req, res) {
    let id = req.params["id"];
    if (!id) {
        res.status(400);
        res.json({error: 'Bad request'});
    } else {
        repo.deleteById(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json({error: err});
            })
    }
};