const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database.js');


// Definisco il modello di Product
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Product;