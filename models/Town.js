const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');
const {nanoid} = require("nanoid");

const Location = require("./Location")

const Town = sequelize.define("Town", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        defaultValue:() => nanoid()
    },
    idLocation:{
        type:DataTypes.CHAR(21),
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
}, {
    tableName:"towns",
    timestamps:false,
    indexes:[
        {
            name:"idx_location",
            fields:["idLocation"]
        }
    ]
});

Location.hasMany(Town, {
    foreignKey:"idLocation",
    as:"towns",
    onDelete:"CASCADE"
});

Town.belongsTo(Location, {
    foreignKey:"idLocation",
    as:"location",
    onDelete:"CASCADE"
});

module.exports = Town;