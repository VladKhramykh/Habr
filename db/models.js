const {Sequelize} = require("sequelize");
const config = require("./config.js");
const keys = require("../config/keys.js").mssql;

const {UserModel} = require("../models/User.js");
const {PostModel} = require("../models/Post.js");
const {CategoryModel} = require("../models/Category.js");
const {SubcategoryModel} = require("../models/Subcategory.js");

let sequelize = new Sequelize(keys.database, keys.userId, keys.password, {
    dialect: keys.dialect,
    host: keys.host
});

const User = sequelize.define(config.USERS_TABLE, UserModel, {freezeTableName: true});
const Post = sequelize.define(config.POSTS_TABLE, PostModel, {freezeTableName: true});
const Category = sequelize.define(config.CATEGORIES_TABLE, CategoryModel, {freezeTableName: true});
const Subcategory = sequelize.define(config.SUBCATEGORIES_TABLE, SubcategoryModel, {freezeTableName: true});

User.hasMany(Post, {
    foreignKey: "author",
    as: "posts"
});

Post.belongsTo(Category, {
    foreignKey: 'category',
    as: 'post_category',
    onDelete: 'cascade'
});

Post.belongsTo(Subcategory, {
    foreignKey: 'subcategory',
    as: 'post_subcategory',
    onDelete: 'cascade'
});

Category.hasMany(Subcategory, {
    foreignKey: 'category',
    as: 'subcategories',
    onDelete: 'cascade'
});

// sequelize.sync({force: true})
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// Category.create({name: 'IT'});
// Category.create({name: 'Design'});
// Category.create({name: 'Management'});
// Category.create({name: 'Marketing'});
//
// Subcategory.create({name: 'Java', category: 1});
// Subcategory.create({name: 'C#', category: 1});
// Subcategory.create({name: 'Scrum', category: 2});
// Subcategory.create({name: 'Dollar', category: 3});
// Subcategory.create({name: 'Reklama tam 4t-to', category: 4});

// Post.create({
//     title: 'All about SCRUM',
//     text: 'Some text about creating Scrum',
//     category: 3,
//     subcategory: 1,
//     author: 1,
//     countOfViews: 0
// });
//
// Post.create({
//     title: 'All about java classes',
//     text: 'Some text about Java classes',
//     category: 1,
//     subcategory: 1,
//     author: 1,
//     countOfViews: 0
// });
//
// Post.create({
//     title: 'Blockchain',
//     text: 'Some text about Blockchain',
//     category: 3,
//     subcategory: 1,
//     author: 1,
//     countOfViews: 14
// });

// User.update({
//     role: 'admin'
// }, {
//     where: {
//         firstName: 'K0baN'
//     }
// });

exports.User = User;
exports.Post = Post;
exports.Category = Category;
exports.Subcategory = Subcategory;
exports.sequelize = sequelize;
