require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/routes');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

app.use(express.json());

app.use(cors());

app.use('/', routes);

module.exports = app;