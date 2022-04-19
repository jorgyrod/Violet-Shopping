const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("color",{
        id: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}