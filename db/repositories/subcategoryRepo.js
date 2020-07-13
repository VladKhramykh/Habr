let {Category, User, Subcategory, Post, sequelize} = require("../models.js");
let {QueryTypes, Op} = require('sequelize');

let updateSubcategory = (subcategory) => {
    return Subcategory.update({
        name: subcategory.name,
    }, {
        where: {
            id: subcategory.id
        }
    });
};

let addSubcategory = (subcategory) => {
    return Subcategory.create(subcategory);
};

let deleteSubcategory = (id) => {
    return Subcategory.destroy({
        where: {
            id: id
        }
    });
};

let findAll = () => {
    return Subcategory.findAll();
};

let findAllByCategoryId = (categoryId) => {
    return Subcategory.findAndCountAll({
        where: {
            category: categoryId
        }
    });
};

let findOneById = (id) => {
    return Subcategory.findByPk(id);
};

let getCountPostsBySubcategory = (subcategoryId) => {
    return Subcategory.count({
        where: {
            id: subcategoryId
        }
    });
};


module.exports = {
    add: addSubcategory,
    findOneById: findOneById,
    update: updateSubcategory,
    findAll: findAll,
    deleteById: deleteSubcategory,
    getCountPostsBySubcategory: getCountPostsBySubcategory,
    findAllByCategoryId: findAllByCategoryId
};