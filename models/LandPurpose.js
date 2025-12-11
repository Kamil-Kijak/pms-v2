
const sequelize = require("../util/db")
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid")

const LandPurpose = sequelize.define("LandPurpose", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    type:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
}, {
    tableName:"landPurposes",
    timestamps:false
});

module.exports = LandPurpose;