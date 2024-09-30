const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotte per gestire le operazioni sui prodotti

// Ottengo tutti i prodotti
router.get('/', productController.getAllProducts);   
// Ottengo un prodotto per ID     
router.get('/:id', productController.getProductById);
// Creo un nuovo prodotto
router.post('/', productController.createProduct);
// Aggiorno un prodotto esistente
router.put('/:id', productController.updateProduct);
// Elimino un prodotto
router.delete('/:id', productController.deleteProduct);   

module.exports = router;
