// this import is now pulling from the node_modules instead of the Node stdlib
const express = require('express');
const db = require('./database');

// create an express server instance
const server = express();

// this allows us to parse request JSON bodies
server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'Hello, World' });
});

server.get('/users', (req, res) => {
    // simulate a real call to a database to fetch data
    const users = db.getUsers();
    // return this "fake" data to the client (browser, insomnia, etc.)
    res.json(users);
});

server.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = db.getUserById(id);
    if (user) {
        res.json(user);
    } else {
        // user doesn't exist
        res.status(404).json({
            message: 'User not found',
        });
    };
});

server.post('/users', (req, res) => {
    const newUser = db.createUser({
        name: req.body.name,
    });

    res.status(201).json(newUser);
});

server.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = db.getUserById(id);
    if (user) {
        const updatedUser = db.updateUser(id, {
            name: req.body.name,
        })
        res.json(updatedUser)
    } else {
        res.status(404).json({
            message: 'User not found',
        });
    };
});

server.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = db.getUserById(id)
    if (user) {
        db.deleteUser(id)
        res.status(204).json({
            message: 'User was deleted',
        })
    } else {
        res.status(404).json({
            message: 'User not found',
        });
    };
});

// web servers need to be continuously listening
server.listen(8080, () => {
    console.log('server started');
});
