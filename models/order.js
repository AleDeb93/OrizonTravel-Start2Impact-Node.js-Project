const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product')
const OrderProduct = require('./orderProduct');

// Definisco il modello di Order 
const Order = sequelize.define('Order', {
    // Status permette il filtro degli ordini basato sullo stato "completato o da completare"
    // Ad esempio i prodotti dentro un carrello o ancora da pagare sono in status da completare 
    status: {
        type: DataTypes.ENUM('in progress', 'completed'),
        defaultValue: 'in progress'
    }
}, {
    timestamps: true
});
// Definisco le relazioni 1-N con User N-N con Product
Order.belongsTo(User, { foreignKey: 'user_id' });
Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });


module.exports = Order;
