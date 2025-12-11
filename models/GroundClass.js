
const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");

const GroundClass = sequelize.define("GroundClass", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    class:{
        type:DataTypes.STRING(10),
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
    tax:{
        type:DataTypes.ENUM("rolny", "lesny", "brak"),
        defaultValue:"brak"
    }
}, {
    tableName:"groundClasses",
    timestamps:false
});

module.exports = GroundClass;