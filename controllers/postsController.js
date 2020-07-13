const repo = require("../db/repositories/postRepo.js");
const config = require("../db/config.js");

const LAST_TYPE = 'last';
const LAST_INFO_TYPE = 'last-info';
const NOT_ACCEPT = 'notaccept';
const ORDER_DESC = 'desc';

exports.addPost = function (req, res) {
    let post = req.body;
    if (!post) {
        res.status(400);
        res.json({error: "Bad request"});
    } else {
        repo.addPost(post)
            .then((message) => {
                res.json(message);
            })
            .catch((err) => {
                console.log(err);
                res.status(500);
                res.json(err);
            })
    }
};


exports.getPosts = function (req, res) {
    let categoryId = req.query.categoryId;
    let subcategoryId = req.query.subcategoryId;
    let page = req.query.page;
    let perPage = req.query.perPage;
    let userId = req.query.userId;
    let type = req.query.type;
    let orderby = req.query.orderby;
    if (categoryId) {
        if (page && perPage) {
            if (orderby === ORDER_DESC) {
                repo.findAllByCategoryAndPageDesc(categoryId, page, perPage)
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.status(500);
                        res.json(err);
                    })
            } else {
                repo.findAllByCategoryAndPage(categoryId, page, perPage)
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.status(500);
                        res.json(err);
                    })
            }

        } else {
            repo.findAllByCategory(categoryId)
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.status(500);
                    res.json(err);
                })
        }
    } else if (categoryId && subcategoryId) {
        if (page && perPage) {
            repo.findAllByCategoryAndSubcategoryPage(categoryId, subcategoryId, page, perPage)
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.status(500);
                    res.json(err);
                })
        } else {
            repo.findAllByCategoryAndSubcategory(categoryId, subcategoryId)
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.status(500);
                    res.json(err);
                })
        }
    } else if (userId) {
        repo.findAllByUserId(userId)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            })
    } else if (type === LAST_TYPE) {
        if (page && perPage) {
            if (orderby === ORDER_DESC) {
                repo.findAllLastByPageDesc(page, perPage)
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.status(500);
                        res.json(err);
                    })
            } else {
                repo.findAllLastByPage(page, perPage)
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.status(500);
                        res.json(err);
                    })
            }

        } else {
            repo.findAllLast()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.status(500);
                    res.json(err);
                });
        }
    } else if (type === LAST_INFO_TYPE) {
        repo.getLastInfoByCategories()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            });
    } else if (type === NOT_ACCEPT) {
        repo.getNotAcceptedPosts()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            });
    } else {
        repo.findAll()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            })
    }
};
exports.getPost = function (req, res) {
    let id = req.params["id"];
    if (id) {
        repo.findOneById(id)
            .then((resp) => {
                let data = resp[0];
                let postDto = {
                    id: data.id,
                    title: data.title,
                    text: data.text,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    user: {
                        id: data.userId,
                        firstName: data.userFirstName,
                        secondName: data.userSecondName,
                        email: data.userEmail
                    },
                    category: {
                        id: data.categoryId,
                        name: data.categoryName
                    },
                    subcategory: {
                        id: data.subcategoryId,
                        name: data.subcategoryName
                    }
                };
                res.json(postDto);
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

exports.getInfoByCategories = function (req, res) {
    repo.getInfoByCategories()
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err);
            res.status(500);
        });
};

exports.setStatusPost = function (req, res) {
    let status = req.body.status;
    let id = req.body.id;
    console.log(status + id);
    if (status && id) {
        if (status === 'accept') {
            repo.acceptPost(id)
                .then(data => {
                    res.json(data);
                })
                .catch(err => {
                    res.json(err);
                    res.status(500);
                });
        } else if (status === 'refuse') {
            repo.refusePost(id)
                .then(data => {
                    res.json(data);
                })
                .catch(err => {
                    res.json(err);
                    res.status(500);
                });
        } else {
            res.status(400);
            res.json({error: 'Bad request'});
        }

    }

}

exports.updatePost = function (req, res) {
    res.send("updatePost");
};
exports.removePost = function (req, res) {
    res.send("removePost");
};