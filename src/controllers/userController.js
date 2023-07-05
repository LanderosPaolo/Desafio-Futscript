const query = require('../models/userModels');
require('dotenv').config();
const jwt = require('jsonwebtoken')


const postUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        await query.addUser(username, password);
        res.status(200).send('Usuario registrado')
    } catch (error) {
        res.status(error.code || 500).send('Error: ' + error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        await query.verifyUser(username, password);
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        res.status(200).send(token);
    } catch (error) {
        res.status(error.code || 400).send('Error: ' + error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await query.deleteUser(id);
        res.status(200).send('Usuario eliminado')
    } catch (error) {
        res.status(error.code || 500).send('Error: ' + error.message)
    }
}

module.exports = {
    postUser,
    loginUser,
    deleteUser
}