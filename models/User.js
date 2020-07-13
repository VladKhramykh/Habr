const { Sequelize } = require("sequelize");

exports.UserModel = {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    secondName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    activationCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'user'
    }
};