// this import is now pulling from the node_modules instead of the Node stdlib
const express = require('express');

// create an express server instance
const server = express();

server.get('/', (req, res) => {
    res.json({ message: 'Hello, World' });
});

// web servers need to be continuously listening
server.listen(8080, () => {
    console.log('server started');
});
