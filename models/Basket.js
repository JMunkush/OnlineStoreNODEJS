const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");

const Basket = sequelize.define("Basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, { tableName: "basket", underscored: true});


module.exports = Basket;
