const Order = require('../models/order');
const User = require('../models/user');
const Product = require('../models/product');
const { Op, Model, where } = require('sequelize');

const orderController = {
    // GET /api/v1/orders
    getAllOrders: async (req, res) => {
        // Estrazione di tutti i parametri della query
        const { status, startDate, endDate, userId, productId } = req.query;
        const filter = {}; // Oggetto di filtro
        const include = []; // Array per associazioni

        // Controllo se esiste il filtro per stato dell'ordine, se esiste lo uso
        if (status) {
            filter.status = status;
        }

        // Controllo se esiste un filtro per data, se esiste lo uso
        if (startDate || endDate) {
            filter.createdAt = {}; // Inizializza il filtro per la data
            if (startDate) {
                filter.createdAt[Op.gte] = new Date(startDate); // Filtro per la data di inizio
            }
            if (endDate) {
                filter.createdAt[Op.lte] = new Date(endDate); // Filtro per la data di fine
            }
        }

        // Controllo se esiste un filtro per User, se esiste lo uso
        if (userId) {
            filter.user_id = userId;
            include.push({ model: User });
        }

        // Controllo se esiste un filtro per Product, se esiste lo uso
        if (productId) {
            include.push({
                model: Product,
                where: { id: productId }, // Filtro per ID del prodotto
                through: {
                    attributes: [] // Escludi i dettagli dalla tabella intermedia
                }
            });
        }

        try {
            const orders = await Order.findAll({
                where: filter, // Applica i filtri
                include: include // Include gli utenti e i prodotti associati
            });
            res.status(200).json(orders); // Restituisci gli ordini
        } catch (error) {
            console.error(error); // Logga l'errore
            res.status(500).json({ error: 'Errore nel recupero degli ordini' });
        }
    },


    // POST /api/v1/orders
    createOrder: async (req, res) => {
        // Estraggo userId e productId dal body
        const { userId, Products, ...orderData } = req.body; 
    try {
        // Trovo l'utente
        const user = await User.findByPk(userId);
        // Se non ho l' utente torno un errore
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        
        // Creo un nuovo ordine associato all'utente
        const newOrder = await Order.create({
            ...orderData,
            user_id: user.id 
        });

        // Se ci sono prodotti da aggiungere, associo i prodotti all'ordine
        if (Products && Products.length > 0) {
            await newOrder.setProducts(Products.map(p => p.id)); 
        }
        // Restituisco l' ordine appena creato
        res.status(201).json(newOrder); 
    } catch (error) {
        res.status(500).json({ error: `Errore durante la creazione dell'ordine: ${error.message}` });
    }
    },

    // PUT /api/v1/orders/:id
    updateOrder: async (req, res) => {
        const { id } = req.params;
        try {
            const order = await Order.findByPk(id);
            if (order) {
                // Aggiorno l'ordine con i nuovi dettagli forniti nel body
                await order.update(req.body);
                res.status(200).json(order);
            } else {
                res.status(404).json({ error: 'Ordine non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore durante l'aggiornamento dell'ordine` });
        }
    },

    // PUT /api/v1/orders/:id/complete
    completeOrder: async (req, res) => {
        const { id } = req.params;
        try {
            const order = await Order.findByPk(id);
            if (order) {
                order.status = 'completed';
                await order.save();
                res.status(200).json({ message: 'Ordine completato' });
            } else {
                res.status(404).json({ error: 'Ordine non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore durante il completamento dell'ordine` });
        }
    },

    // DELETE /api/v1/orders/:id
    deleteOrder: async (req, res) => {
        const { id } = req.params;
        try {
            const order = await Order.findByPk(id);
            if (order) {
                await order.destroy();
                res.status(204).json(); // No content
            } else {
                res.status(404).json({ error: 'Ordine non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore durante l'eliminazione dell'ordine` });
        }
    }
};

module.exports = orderController;
