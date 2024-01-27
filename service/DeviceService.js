const Device = require("../models/Device");

class DeviceService {
    static async getAll(){
        return await Device.findAll();
    }

    static async add(device){
        await Device.create({device});
    }

    static async getOne(name){
        return await Device.findOne({where:name})
    }
}

module.exports = DeviceService;