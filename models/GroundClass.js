
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
    tax:{
        type:DataTypes.ENUM("rolny", "lesny", "brak"),
        defaultValue:"brak"
    },
    released:{
        type:DataTypes.BOOLEAN(),
        allowNull:false,
        defaultValue:false,
    }
}, {
    tableName:"groundClasses",
    timestamps:false
});

module.exports = GroundClass;