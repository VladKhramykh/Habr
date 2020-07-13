const { Sequelize } = require("sequelize");

exports.PostModel = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'refuse'
    },
    countOfViews: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
};