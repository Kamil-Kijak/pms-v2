
const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");

const User = sequelize.define("User", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    surname:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    passwordHash:{
        type:DataTypes.CHAR(60),
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM("ADMIN", "SEKRETARIAT", "KSIEGOWOSC", "TEREN"),
        allowNull:false
    }
}, {
    tableName:"users",
    timestamps:true
});

module.exports = User;