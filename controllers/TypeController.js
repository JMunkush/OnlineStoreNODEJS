const TypeService = require("../service/TypeService");
const ApiResponse = require("../dto/ApiResponse");
class TypeController {

    async add(req, res){
        const {name} = req.body;
        await TypeService.create(name);

        return res.json(ApiResponse.ok(`type with name ${name} successfully created`));
    }

    async getAll(req, res){
       TypeService.getAll().then(data => {
            return res.json(data);
        });
    }
}

module.exports = new TypeController();