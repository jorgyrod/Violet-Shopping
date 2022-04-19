const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("brand",{
        id: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        marca:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}