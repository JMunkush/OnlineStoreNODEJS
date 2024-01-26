const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const User = require("./User");

const Rating = sequelize.define("Rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
}, {tableName: "rating", underscored: true});


module.exports = Rating;
