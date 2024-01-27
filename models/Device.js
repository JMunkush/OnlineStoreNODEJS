const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Device = sequelize.define("Device", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false},
    price: {type:DataTypes.INTEGER, allowNull: false},
    rating: {type:DataTypes.INTEGER, defaultValue: 0},
    img: {type:DataTypes.STRING, allowNull: false}
}, {tableName: "devices"});

module.exports = Device;