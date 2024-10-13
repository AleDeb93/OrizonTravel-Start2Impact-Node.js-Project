// models/orderProduct.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderProduct = sequelize.define('OrderProduct', {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders', // Nome della tabella di riferimento
            key: 'id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products', // Nome della tabella di riferimento
            key: 'id'
        }
    }
}, {
    timestamps: true, // Per tenere traccia delle date di creazione e aggiornamento
    tableName: 'order_products' // Specifica il nome della tabella
});

module.exports = OrderProduct;
