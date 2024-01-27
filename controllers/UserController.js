const ApiError = require("../error/ApiError");
const {query} = require("express");
class UserController {
    async registration(req, res){

    }
    async login(req, res){

    }

    async auth(req, res, next){
        const {id} = req.query; // {path}?id=1 parameter
        if(!id){
            return next(ApiError.badRequest("Не задан ID"));
        }
        res.json(id);
    }
}

module.exports = new UserController();