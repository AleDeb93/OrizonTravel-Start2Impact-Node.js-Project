const { DataTypes } = requre('sequelize');
const sequelize = requre('../config/database.js');

// Definisco il modello di Product
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

mosule.export = Product;