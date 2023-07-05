const pool = require('../config/db');

const addPlayer = async (id_equipo, jugador) => {
    const { name, position } = jugador
    const response = await pool.query('INSERT INTO jugadores VALUES (DEFAULT, $1, $2, $3)', [id_equipo, name, position])
    return response
}

const getPlayers = async (id_equipo) => {
    const response = await pool.query('SELECT equipos.name AS nombre_equipo, jugadores.name AS NAME, posiciones.name AS posicion FROM equipos INNER JOIN jugadores ON equipos.id = jugadores.id_equipo INNER JOIN posiciones ON jugadores.position = posiciones.id WHERE equipos.id = $1', [id_equipo])
    return response.rows
}

module.exports = {
    addPlayer,
    getPlayers
}