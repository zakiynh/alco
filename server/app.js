require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;