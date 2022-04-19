const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("size",{
        id: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        talla:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}