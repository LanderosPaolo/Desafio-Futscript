const query = require('../models/teamsModels');
require('dotenv').config();
const jwt = require('jsonwebtoken')

const getTeams = async (req, res) => {
    try {
        const teams = await query.getTeams()
        res.status(200).json(teams)
    } catch (error) {
        res.status(error.code || 500).send('Error: ' + error.message)
    }
}

const postTeams = async (req, res) => {
    try {
        const { name } = req.body;
        const Authorization = req.header("Authorization");
        if(!Authorization) {
            return res.status(403).send('No tienes autorizacion')
        }
        const token = Authorization.split("Bearer ")[1]
        jwt.verify(token, process.env.JWT_SECRET)
        const { username } = jwt.decode(token)
        await query.addTeam(name)
        res.status(200).send(`${username} ha agregado a ${name} a la lista de equipos`)
    } catch (error) {
        res.status(error.code || 404).send('Error: ' + error.message)
    }
}

const deleteTeams = async (req, res) => {
    try {
        const { id } = req.params
        const Authorization = req.header("Authorization");
        if(!Authorization) {
            return res.status(403).send('No tienes autorizacion')
        }
        const token = Authorization.split("Bearer ")[1]
        jwt.verify(token, process.env.JWT_SECRET)
        await query.deleteTeams(id)
        res.status(200).send('Equipo eliminado')
    } catch (error) {
        res.status(error.code || 404).send('Error: ' + error.message)
    }
}

module.exports = {
    getTeams,
    postTeams,
    deleteTeams
}