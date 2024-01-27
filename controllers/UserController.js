const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../service/UserService");
const Basket = require("../models/Basket");
const JwtUtil = require("../util/JwtUtil");
class UserController {


    async registration(req, res, next){
        const {email, password, role} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest("error"));
        }
        const candidate = await UserService.findByEmail(email);
        if(candidate){
            return next(ApiError.badRequest("error"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await UserService.create(email, hashPassword, role);
        await Basket.create({UserId: user.id});
        const token = JwtUtil.generateJwt(user.id, email, user.role);

        token.then(t => {
            return res.json({token: t});
        });

    }
    async login(req, res, next){
        const {email, password} = req.body;
        const user = await UserService.findByEmail(email);
        if(!user){
            return next(ApiError.badRequest("error"));
        }
        let comparePassword = bcrypt.compare(password, user.password);
        if(!comparePassword){
            return next(ApiError.badRequest("error"));
        }
        const token = JwtUtil.generateJwt(user.id, email, user.role);

        token.then(t => {
            return res.json({token:t});
        })
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