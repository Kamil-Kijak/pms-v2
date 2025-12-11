
const sequelize = require("../util/db")
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid")

const Renter = sequelize.define("Renter", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    phone:{
        type:DataTypes.CHAR(9),
        allowNull:false
    }
}, {
    tableName:"renters",
    timestamps:false,
});

module.exports = Renter;

