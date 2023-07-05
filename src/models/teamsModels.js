const pool = require('../config/db');

const addTeam = async (name) => {
    const response = await pool.query('INSERT INTO equipos VALUES (DEFAULT, $1)', [name])
    return response
}

const getTeams = async () => {
    const response = await pool.query('SELECT * FROM equipos')
    return response.rows
}

const deleteTeams = async (id) => {
    const response = await pool.query('DELETE FROM equipos WHERE id = $1', [id])
    return response
}

module.exports = {
    addTeam,
    getTeams,
    deleteTeams
}