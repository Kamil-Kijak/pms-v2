
const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");

const Location = sequelize.define("Location", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    province:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    district:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    commune:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    agriculturalTax:{
        type:DataTypes.DECIMAL(8, 4),
        allowNull:true,
        defaultValue:null
    },
    forestTax:{
        type:DataTypes.DECIMAL(8, 4),
        allowNull:true,
        defaultValue:null
    },
    taxDistrict:{
        type:DataTypes.INTEGER(),
        allowNull:true,
        defaultValue:null
    }
}, {
    tableName:"locations",
    timestamps:false
});

module.exports = Location;