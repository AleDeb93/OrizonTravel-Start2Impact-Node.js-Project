const User = require('../models/user');

const userController = {
    // GET /api/v1/users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Errore nel recupero degli utenti' });
        }
    },

    // GET /api/v1/users/:id
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'Utente non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore nel recupero dell'utente` });
        }
    },

    // POST /api/v1/users
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: `Errore nella creazione dell'utente` });
        }
    },

    // PUT /api/v1/users/:id
    updateUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.update(req.body);
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'Utente non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore nell'aggiornamento dell'utente` });
        }
    },

    // DELETE /api/v1/users/:id
    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await User.destroy({ where: { id } });
            if (deleted) {
                res.status(200).json({ message: 'Utente eliminato' });
            } else {
                res.status(404).json({ error: 'Utente non trovato' });
            }
        } catch (error) {
            res.status(500).json({ error: `Errore durante l'eliminazione dell'utente` });
        }
    }
};

module.exports = userController;
