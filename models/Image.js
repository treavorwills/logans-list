const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        url: {
            type:DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
    }  
);

module.exports = Image;
