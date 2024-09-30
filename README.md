
# Progetto API RESTful per Start2Impact University - ITA

## Descrizione

Questo progetto fornisce un'API RESTful per gestire prodotti, utenti e ordini in un sistema di vendita basato sull'ipotetica agenzia di viaggi Orizon che fornisce viaggi sostenibili. Il progetto utilizza Node.js con Express per il backend e MySQL come database, gestito attraverso Sequelize.

## Tecnologie Utilizzate

- **Node.js**: Ambiente di runtime JavaScript.
- **Express**: Framework web per Node.js.
- **Sequelize**: ORM per Node.js per interagire con il database MySQL.
- **MySQL**: Database relazionale per memorizzare i dati.

## Struttura del Progetto

```
project/
├── config/
│   └── database.js          # Configurazione per MySQL
├── controllers/
│   ├── productController.js  # Controller per i prodotti
│   ├── userController.js     # Controller per gli utenti
│   └── orderController.js    # Controller per gli ordini
├── models/
│   ├── product.js            # Modello per i prodotti
│   ├── user.js               # Modello per gli utenti
│   └── order.js              # Modello per gli ordini
├── routes/
│   ├── productRoutes.js      # Rotte per i prodotti
│   ├── userRoutes.js         # Rotte per gli utenti
│   └── orderRoutes.js        # Rotte per gli ordini
├── migrations/
│   └── migrations.sql        # File SQL per la creazione del DB
├── app.js                    # File principale per Express
└── package.json              # File di configurazione del progetto
```

## Istruzioni per l'Installazione

1. Clona il repository:
   ```bash
   git clone <URL del repository>
   cd <nome della cartella del progetto>
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Configura il database secondo le tue esigenze in `config/database.js`.

4. Definisci le tue variabili d'ambiente nel file .env

5. Esegui le migrazioni per creare le tabelle nel database:
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Avvia il server:
   ```bash
   npm start
   ```

## Uso delle API

### Endpoints Disponibili

#### Prodotti

- **GET** `/api/v1/products` - Ottieni tutti i prodotti
- **GET** `/api/v1/products/:id` - Ottieni un prodotto per ID
- **POST** `/api/v1/products` - Crea un nuovo prodotto
- **PUT** `/api/v1/products/:id` - Aggiorna un prodotto esistente
- **DELETE** `/api/v1/products/:id` - Elimina un prodotto

#### Utenti

- **GET** `/api/v1/users` - Ottieni tutti gli utenti
- **GET** `/api/v1/users/:id` - Ottieni un utente per ID
- **POST** `/api/v1/users` - Crea un nuovo utente
- **PUT** `/api/v1/users/:id` - Aggiorna un utente esistente
- **DELETE** `/api/v1/users/:id` - Elimina un utente

#### Ordini

- **GET** `/api/v1/orders` - Ottieni tutti gli ordini
  - Filtri disponibili:
    - `?userId=<id>` - Filtra per ID utente
    - `?productId=<id>` - Filtra per ID prodotto
    - `?status=<status>` - Filtra per stato (in progress, completed)
    - `?startDate=<data>` - Filtra per data di inizio (YYYY-MM-DD)
    - `?endDate=<data>` - Filtra per data di fine (YYYY-MM-DD)
- **POST** `/api/v1/orders` - Crea un nuovo ordine
- **PUT** `/api/v1/orders/:id` - Aggiorna un ordine esistente
- **PUT** `/api/v1/orders/:id/complete` - Completa un ordine
- **DELETE** `/api/v1/orders/:id` - Elimina un ordine

# RESTful API Project for Start2Impact University - ENG

## Description

This project provides a RESTful API to manage products, users, and orders in a sales system based on the hypothetical travel agency Orizon, which provides sustainable travel. The project uses Node.js with Express for the backend and MySQL as the database, managed through Sequelize.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for Node.js to interact with the MySQL database.
- **MySQL**: Relational database to store data.

## Project Structure

```
project/
├── config/
│   └── database.js          # MySQL configuration
├── controllers/
│   ├── productController.js  # Controller for products
│   ├── userController.js     # Controller for users
│   └── orderController.js    # Controller for orders
├── models/
│   ├── product.js            # Model for products
│   ├── user.js               # Model for users
│   └── order.js              # Model for orders
├── routes/
│   ├── productRoutes.js      # Routes for products
│   ├── userRoutes.js         # Routes for users
│   └── orderRoutes.js        # Routes for orders
├── migrations/
│   └── migrations.sql        # SQL file for database creation
├── app.js                    # Main file for Express
└── package.json              # Project configuration file
```

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone <repository URL>
   cd <project folder name>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Configure the database according to your needs in `config/database.js`.

4. Define your environment variables in the `.env` file.

5. Run the migrations to create the tables in the database:
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Start the server:
   ```bash
   npm start
   ```

## API Usage

### Available Endpoints

#### Products

- **GET** `/api/v1/products` - Get all products
- **GET** `/api/v1/products/:id` - Get a product by ID
- **POST** `/api/v1/products` - Create a new product
- **PUT** `/api/v1/products/:id` - Update an existing product
- **DELETE** `/api/v1/products/:id` - Delete a product

#### Users

- **GET** `/api/v1/users` - Get all users
- **GET** `/api/v1/users/:id` - Get a user by ID
- **POST** `/api/v1/users` - Create a new user
- **PUT** `/api/v1/users/:id` - Update an existing user
- **DELETE** `/api/v1/users/:id` - Delete a user

#### Orders

- **GET** `/api/v1/orders` - Get all orders
  - Available filters:
    - `?userId=<id>` - Filter by user ID
    - `?productId=<id>` - Filter by product ID
    - `?status=<status>` - Filter by status (in progress, completed)
    - `?startDate=<date>` - Filter by start date (YYYY-MM-DD)
    - `?endDate=<date>` - Filter by end date (YYYY-MM-DD)
- **POST** `/api/v1/orders` - Create a new order
- **PUT** `/api/v1/orders/:id` - Update an existing order
- **PUT** `/api/v1/orders/:id/complete` - Complete an order
- **DELETE** `/api/v1/orders/:id` - Delete an order
