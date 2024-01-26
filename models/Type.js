const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const Device = require("./Device");

const Type = sequelize.define("Type", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false}
}, {tableName: "type", underscored: true});


module.exports = Type;