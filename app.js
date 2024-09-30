const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');  // Assicurati di avere il file di configurazione
const userRoter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes'); 

const app = express();

app.use(bodyParser.json());

// Definizione delle rotte base per utenti, prodotti e ordini
app.use('/api/v1/users', userRoter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter); 

// Funzione per creare le tabelle
const createTables = async () => {
    try {
        await sequelize.sync({ force: false });  // Usa `force: true` solo se vuoi ricreare le tabelle ogni volta
        console.log('Tabelle create o già esistenti.');
    } catch (error) {
        console.error('Errore nella creazione delle tabelle:', error);
    }
};

// Chiama la funzione per creare le tabelle
createTables();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
