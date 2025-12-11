
const sequelize = require("../util/db")
const { DataTypes} = require('sequelize');
const Renter = require("./Renter");

const Rent = sequelize.define("Rent", {
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
    idRenter:{
        type:DataTypes.CHAR(21),
        allowNull:false
    },
    startDate:{
        type:DataTypes.DATE(),
        allowNull:false
    },
    endDate:{
        type:DataTypes.DATE(),
        allowNull:false
    },
    rental:{
        type:DataTypes.MEDIUMINT,
        allowNull:false
    },
    issueRentalFactureDate: {
        type:DataTypes.DATE(),
        allowNull:false
    }
}, {
    tableName:"rents",
    timestamps:false,
    indexes:[
        {
            name:"idx_renter",
            fields:["idRenter"]
        }
    ]
});

Renter.hasMany(Rent, {
    foreignKey:"idRenter",
    as:"rents",
    onDelete:"CASCADE"
});

Rent.belongsTo(Renter, {
    foreignKey:"idRenter",
    as:"renter",
    onDelete:"CASCADE"
});

module.exports = Rent;