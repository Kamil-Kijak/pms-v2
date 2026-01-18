

const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");
const Land = require("./Land");
const GroundClass = require("./GroundClass");

const LandArea = sequelize.define("LandArea", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    idLand:{
        type:DataTypes.CHAR(21),
        allowNull:false
    },
    idGroundClass:{
        type:DataTypes.CHAR(21),
        allowNull:false
    },
    area:{
        type:DataTypes.DECIMAL(8, 4),
        allowNull:false
    }
}, {
    tableName:"landAreas",
    timestamps:false
});

Land.hasMany(LandArea, {
    foreignKey:"idLand",
    as:"areas",
    onDelete:"CASCADE"
});

LandArea.belongsTo(Land, {
    foreignKey:"idLand",
    as:"land",
    onDelete:"CASCADE"
});

GroundClass.hasMany(LandArea, {
    foreignKey:"idGroundClass",
    as:"groundClasses",
    onDelete:"CASCADE"
});

GroundClass.hasMany(LandArea, {
    foreignKey:"idGroundClass",
    as:"areas",
    onDelete:"CASCADE"
});

LandArea.belongsTo(GroundClass, {
    foreignKey:"idGroundClass",
    as:"groundClass",
    onDelete:"CASCADE"
})

module.exports = LandArea;