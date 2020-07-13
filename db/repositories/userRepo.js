let {User, Post, Category} = require("../models.js");


let updateUser = (user) => {
    let old = User.findByPk(user.id)
        .then(data => {
            let oldUser = data.data;
            if (bcrypt.compareSync(user.password, old.password)) {
                let newPass = bcrypt.hashSync(user.password, 8);
                return User.update({
                    firstName: user.firstName,
                    secondName: user.secondName,
                    email: user.email,
                    password: newPass
                }, {
                    where: {
                        id: user.id
                    }
                });
            }
        });
};

let addUser = (user) => {
    return User.create(user);
};

let deleteUser = (id) => {
    return User.destroy({
        where: {
            id: id
        }
    });
};

let findAll = () => {
    return User.findAll();
};

let findOneById = (id) => {
    return User.findByPk(id);
};

let findOneByEmail = (email) => {
    return User.findOne({where: {email: email}});
};

let updateByActivationCode = (activationCode) => {
    return User.update({
        activationCode: ''
    }, {
        where: {
            activationCode: activationCode
        }
    });
};

module.exports = {
    add: addUser,
    findOneById: findOneById,
    findOneByEmail: findOneByEmail,
    update: updateUser,
    findAll: findAll,
    deleteById: deleteUser,
    updateByActivationCode: updateByActivationCode
};