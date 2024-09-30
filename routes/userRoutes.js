const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotte per gestire le operazioni sugli utenti

// Ottengo tutti gli utenti
router.get('/', userController.getAllUsers); 
// Ottengo un utente per ID       
router.get('/:id', userController.getUserById);   
// Creo un nuovo utente  
router.post('/', userController.createUser);   
// Aggiorno un utente esistente     
router.put('/:id', userController.updateUser); 
// Elimino un utente
router.delete('/:id', userController.deleteUser);   

module.exports = router;
