const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("gender",{
        id: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        genero:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}