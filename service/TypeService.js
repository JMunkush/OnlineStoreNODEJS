const Type = require("../models/Type");

class TypeService {

    static async create(name){
        await Type.create({name});
    }

    static async getAll(){
        return Type.findAll();
    }

}

module.exports = TypeService;
