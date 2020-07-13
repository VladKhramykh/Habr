let {Post, Category, Subcategory, sequelize} = require("../models.js");
let {QueryTypes, Op} = require('sequelize');


let POST_STATUS_ACCEPT = 'accept';
let POST_STATUS_NOT_ACCEPT = 'refuse';

let updatePost = (post) => {
    return Post.update({
        text: post.text,
    }, {
        where: {
            id: post.id
        }
    });
};

let addPost = (post) => {
    return Post.create(post);
};

let deletePost = (id) => {

};

let findAll = () => {
    return Post.findAll();
};

let findOneById = (id) => {
    incrementPostViews(id);
    return sequelize.query('exec getFullPostById :id', {
        replacements: {id: id},
        type: QueryTypes.SELECT
    });
};

let findAllByCategory = async (categoryId) => {
    return Post.findAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            category: categoryId
        }
    });
};

let findAllLast = () => {
    return Post.findAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            createdAt: {
                [Op.lt]: new Date(),
                [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
            }
        }
    });
};

let findAcceptedPosts = () => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            category: categoryId,
            accepted: true
        },
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};

let findAllByUserId = (userId) => {
    return Post.findAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            author: userId
        }
    });
};

let countOfPublicationsByUserId = (userId) => {
    return Post.count({
        where: {
            author: userId
        }
    })
};

let findContributionsByUserId = (userId) => {
    return Post.findAll({
        attributes: [[sequelize.fn('count', sequelize.col('posts.id')), 'countOfPublications']],
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            }
        ],
        where: {
            author: userId
        },
        group: ['post_category.id', 'post_category.name']
    });
};

let findAllLastByPage = (page, perPage) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            createdAt: {
                [Op.lt]: new Date(),
                [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
            },
            status: POST_STATUS_ACCEPT
        },
        order: [
            ['createdAt', 'ASC']
        ],
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};

let findAllByCategoryAndPage = (categoryId, page, perPage) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            category: categoryId,
            status: POST_STATUS_ACCEPT
        },
        order: [
            ['createdAt', 'ASC']
        ],
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};

let findAllByCategoryAndSubcategoryPage = (categoryId, subcategoryId, page, perPage) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            category: categoryId,
            status: POST_STATUS_ACCEPT
        },
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};


let findAllByCategoryAndPageDesc = (categoryId, page, perPage) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            category: categoryId,
            status: POST_STATUS_ACCEPT
        },
        order: [
            ['createdAt', 'DESC']
        ],
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};

let findAllLastByPageDesc = (page, perPage) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            createdAt: {
                [Op.lt]: new Date(),
                [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
            },
            status: POST_STATUS_ACCEPT
        },
        order: [
            ['createdAt', 'DESC']
        ],
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};


let acceptPost = (id) => {
    return Post.update({status: POST_STATUS_ACCEPT}, {
        where: {
            id: id
        }
    })
};

let refusePost = (id) => {
    return Post.update({status: POST_STATUS_NOT_ACCEPT}, {
        where: {
            id: id
        }
    })
};

let findAllByCategoryAndSubcategory = (categoryId, subcategoryId) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            category: categoryId,
            subcategory: subcategoryId
        }
    });
};

let getLastInfoByCategories = () => {
    return Post.findAll({
        attributes: [[sequelize.fn('count', sequelize.col('posts.id')), 'countOfPublications']],
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            }
        ],
        where: {
            createdAt: {
                [Op.lt]: new Date(),
                [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
            },
            status: POST_STATUS_ACCEPT
        },
        group: ['post_category.id', 'post_category.name']
    })
};

let getNotAcceptedPosts = (page, perPage) => {
    return Post.findAndCountAll({
        include: [
            {
                model: Category,
                as: 'post_category',
                attributes: ['name']
            },
            {
                model: Subcategory,
                as: 'post_subcategory',
                attributes: ['name']
            }
        ],
        where: {
            status: POST_STATUS_NOT_ACCEPT
        },
        offset: parseInt(page * perPage),
        limit: parseInt(perPage)
    });
};

let incrementPostViews = (postId) => {
    Post.increment('countOfViews', {
        where: {
            id : postId
        },
        silent: true
    });
};

module.exports = {
    addPost: addPost,
    findOneById: findOneById,
    countOfPublicationsByUserId: countOfPublicationsByUserId,
    findAllByCategory: findAllByCategory,
    update: updatePost,
    findAll: findAll,
    deleteById: deletePost,
    findContributionsByUserId: findContributionsByUserId,
    findAllByUserId: findAllByUserId,
    findAllLast: findAllLast,
    getLastInfoByCategories: getLastInfoByCategories,
    findAllByCategoryAndPage: findAllByCategoryAndPage,
    findAllByCategoryAndPageDesc: findAllByCategoryAndPageDesc,
    findAllLastByPage: findAllLastByPage,
    findAllLastByPageDesc: findAllLastByPageDesc,
    findAllByCategoryAndSubcategory: findAllByCategoryAndSubcategory,
    findAllByCategoryAndSubcategoryPage: findAllByCategoryAndSubcategoryPage,
    findAcceptedPosts: findAcceptedPosts,
    getNotAcceptedPosts: getNotAcceptedPosts,
    acceptPost: acceptPost,
    refusePost: refusePost
};