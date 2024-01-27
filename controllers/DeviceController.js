const DeviceService = require("../service/DeviceService");
const ApiResponse = require("../dto/ApiResponse");
const UUID = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class DeviceController {
    async add(req, res, next) {
        const {name, price, typeId} = req.body;
        if (req.files && req.files.img) {
            const { img } = req.files;
            let fileName = UUID.v4() + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            await DeviceService.add(name, price, typeId, fileName);
        }

        return res.json(ApiResponse.ok(`device with name: ${name} successfully created`));
    }

    async getAll(req, res){
        const {typeId} = req.body;
        DeviceService.getAll(typeId).then(data => {
           return res.json(data);
        });
    }

    async getOne(req, res){
        const {id} = req.query;
        DeviceService.getOne(id).then(data => {
            return res.json(data);
        })
    }
}

module.exports = new DeviceController();