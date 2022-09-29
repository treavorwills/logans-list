const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Favorite extends Model {}

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id',
            }
        },
        listing_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'listing',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite',
    }  
);


module.exports = Favorite;