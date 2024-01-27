const Device = require("../models/Device");
const {where} = require("sequelize");

class DeviceService {
    static async getAll(typeId){
        return await Device.findAll({where: {
            type_id:typeId
            }});
    }

    static async add(name, price, typeId, fileName){

        await Device.create({name:name, price:price, img:fileName, TypeId: typeId});
    }

    static async getOne(id){
        return await Device.findOne({where:id})
    }
}

module.exports = DeviceService;