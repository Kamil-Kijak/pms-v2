
const sequelize = require("../util/db")
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid")

const Mpzp = sequelize.define("Mpzp", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    code:{
        type:DataTypes.STRING(5),
        allowNull:false
    },
    description:{
        type:DataTypes.STRING(70),
        allowNull:false
    }
}, {
    tableName:"mpzp",
    timestamps:false
});

module.exports = Mpzp;
