
const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");

const Owner = sequelize.define("Owner", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    phone:{
        type:DataTypes.STRING(9),
        allowNull:true,
        defaultValue:null
    }
}, {
    tableName:"owners",
    timestamps:false
});

module.exports = Owner;