const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");
const GroundClass = require("./GroundClass");

const Converter = sequelize.define("Converter", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    idGroundClass:{
        type:DataTypes.CHAR(21),
        allowNull:false
    },
    converter:{
        type:DataTypes.DECIMAL(3, 2),
        allowNull:false
    },
    taxDistrict:{
        type:DataTypes.INTEGER(),
        allowNull:false
    },
}, {
    tableName:"converters",
    timestamps:false
});

Converter.belongsTo(GroundClass, {
    foreignKey:"idGroundClass",
    as:"groundClass",
    onDelete:"CASCADE"
});

GroundClass.hasMany(Converter, {
    foreignKey:"idGroundClass",
    as:"converters",
    onDelete:"CASCADE"
});

module.exports = Converter;