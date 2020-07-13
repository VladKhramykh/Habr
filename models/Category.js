const {Sequelize} = require("sequelize");

exports.CategoryModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
};