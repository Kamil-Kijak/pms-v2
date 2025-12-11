

const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');

const Purchase = sequelize.define("Purchase", {
    id:{
        type:DataTypes.CHAR(21),
        allowNull:false,
        primaryKey:true,
        references:{
            model:"lands",
            key:"id"
        },
        onDelete:"CASCADE"
    },
    date:{
        type:DataTypes.DATE(),
    },
    actNumber:{
        type:DataTypes.STRING(21),
    },
    seller:{
        type:DataTypes.STRING(50),
    },
    price:{
        type:DataTypes.INTEGER()
    }
}, {
    tableName:"purchaces",
    timestamps:false
});

module.exports = Purchase;