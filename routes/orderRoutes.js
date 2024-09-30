const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Rotte per gestire gli ordini

// Otengo tutti gli ordini
// Accetto filtri nella query per dataCreazione, userID, productID, status
router.get('/', orderController.getAllOrders);
// Creo un nuovo ordine
router.post('/', orderController.createOrder);
// Aggiorno un ordine
router.put('/:id', orderController.updateOrder);
// Completo un ordine modificandone lo stato
router.put('/:id/complete', orderController.completeOrder);
// Elimino un ordine

module.exports = router;
