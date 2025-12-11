
const sequelize = require("../util/db")
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid")

const GeneralPlan = sequelize.define("GeneralPlan", {
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
    tableName:"generalPlan",
    timestamps:false
});

module.exports = GeneralPlan;