const jwt = require('jsonwebtoken');
require('dotenv').config();

const vcLogin = (req, res, next) => {
    if(!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }
    next();
}

module.exports = {
    vcLogin
}