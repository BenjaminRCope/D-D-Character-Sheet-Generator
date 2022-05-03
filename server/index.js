/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

// routes
app.get('/test', routes.test);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

module.exports = app;
