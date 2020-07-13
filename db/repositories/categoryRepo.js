let {Category, User, Subcategory, Post} = require("../models.js");

let updateCategory = (category) => {
    return Category.update({
        name: category.name,
    }, {
        where: {
            id: category.id
        }
    });
};

let addCategory = (category) => {
    return Category.create(category);
};

let findAllAndSub = () => {
    return Category.findAll({
        include: [{
            model: Subcategory,
            as: 'subcategories'
        }]
    })
};

let deleteById = (id) => {
    return Category.destroy({
        where: {
            id: id
        }
    });
};

let findAll = () => {
    return Category.findAll();
};

let findOneById = (id) => {
    return Category.findByPk(id);
};

let getCountPostsByCategory = (categoryId) => {
    return Category.count({
        where: {
            categoryId: categoryId
        }
    });
};




module.exports = {
    addCategory: addCategory,
    findOneById: findOneById,
    update: updateCategory,
    findAll: findAll,
    deleteById: deleteById,
    countByCategory: getCountPostsByCategory,
    findAllAndSub: findAllAndSub
};