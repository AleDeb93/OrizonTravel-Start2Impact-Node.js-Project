const Product = require('../models/product');

const productController = {
    // GET /api/v1/products
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Errore nel recupero dei prodotti' });
        }
    },

    // GET /api/v1/products/:id
    getProductById: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Prodotto non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Errore nel recupero del prodotto' });
        }
    },

    // POST /api/v1/products
    createProduct: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Errore nella creazione del prodotto' });
        }
    },

    // PUT /api/v1/products/:id
    updateProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (product) {
                await product.update(req.body);
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Prodotto non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore nell'aggiornamento del prodotto` });
        }
    },

    // DELETE /api/v1/products/:id
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Product.destroy({ where: { id } });
            if (deleted) {
                res.status(200).json({ message: 'Prodotto eliminato' });
            } else {
                res.status(404).json({ error: 'Prodotto non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore durante l'eliminazione del prodotto` });
        }
    }
};

module.exports = productController;
