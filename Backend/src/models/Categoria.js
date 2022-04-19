const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("category",{
        id: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        categoria:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}