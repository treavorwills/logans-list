const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Listing extends Model {}

Listing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
            validate: {
                isDecimal: true,
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id',
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'category',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'listing',
    }  
);

module.exports = Listing;
