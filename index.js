const express = require('express');
const server = express();
const path = require('path');

const mainRoute = require('./routes/main.js'); 

server.use('/', mainRoute);

server.use(express.static(path.join(__dirname, 'public')));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.listen(8000);