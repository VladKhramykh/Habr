const {Sequelize} = require("sequelize");

exports.SubcategoryModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
};