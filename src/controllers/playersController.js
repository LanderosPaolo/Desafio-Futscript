const query = require('../models/playersModels');
require('dotenv').config();
const jwt = require('jsonwebtoken')

const addPlayers = async (req, res) => {
    try {
        const { teamID } = req.params
        const jugador = req.body
        const Authorization = req.header("Authorization");
        if (!Authorization) {
            return res.status(403).send('No tienes autorizacion')
        }
        const token = Authorization.split("Bearer ")[1]
        jwt.verify(token, process.env.JWT_SECRET)
        await query.addPlayer(teamID, jugador)
        res.status(201).send('jugador agregado')
    } catch (error) {
        res.status(500).send('Error: ' + error.message)
    }
}

const getPlayers = async (req, res) => {
    try {
        const { teamID } = req.params
        const Authorization = req.header("Authorization");
        if (!Authorization) {
            return res.status(403).send('No tienes autorizacion')
        }
        const token = Authorization.split("Bearer ")[1]
        jwt.verify(token, process.env.JWT_SECRET)
        const players = await query.getPlayers(teamID)
        res.status(200).json(players)
    } catch (error) {
        res.status(500).send('Error: ' + error.message)
    }
}

module.exports = {
    addPlayers,
    getPlayers
}