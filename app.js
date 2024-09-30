const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Importo i router
const userRoter = require('./routes/users');
const productRouter = require('./routes/products');
const orderRouter = require('./routes/orders'); 

app.use(bodyParser.json());

// Definizione delle rotte base per utenti, prodotti e ordini
app.use('/api/v1/users', userRoter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
