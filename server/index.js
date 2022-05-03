/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

const port = process.env.PORT || 3000;

// routes
app.get('/getAllCharacters', routes.getAllCharacters);
app.get('/getCharByName', routes.getCharByName);
app.post('/createCharacter', routes.createCharacter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

module.exports = app;
