

const User = require("../models/User");
const {where} = require("sequelize");

class UserService {

    static async create(email, pass, role){
        return await User.create({email, role, password: pass});
    }
    static async findByEmail(email){
        return User.findOne({where: {email:email}});
    }
}

module.exports = UserService;