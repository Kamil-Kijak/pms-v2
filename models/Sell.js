

const sequelize = require("../util/db");
const { DataTypes} = require('sequelize');

const Sell = sequelize.define("Sell", {
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
    buyer:{
        type:DataTypes.STRING(50),
    },
    price:{
        type:DataTypes.INTEGER()
    }
}, {
    tableName:"sales",
    timestamps:false
});

module.exports = Sell;