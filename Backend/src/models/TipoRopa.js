const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("clothing",{
        id: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        tipo:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}