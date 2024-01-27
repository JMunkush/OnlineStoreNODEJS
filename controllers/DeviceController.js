const DeviceService = require("../service/DeviceService");
const ApiResponse = require("../dto/ApiResponse");
class DeviceController {
    async add(req, res){
        const {name} = req.body;
        await DeviceService.add(name);
        return res.json(ApiResponse.ok(`device with name: ${name} successfully created`));
    }

    async getAll(req, res){

    }

    async getOne(req, res){
        console.log(req.params); // Используем req.params для параметров из пути
    }
}

module.exports = new DeviceController();