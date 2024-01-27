const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");

const Basket = sequelize.define("Basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
},{tableName:"baskets"});


module.exports = Basket;
