const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("item",{
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        descuento:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        disponible:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },{
        timestamps: false
    })
}