const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const addUser = async (username, password) => {
    const user = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username])
    if(user.rowCount > 0) {
        throw { code: 401, message: 'Usuario ya registrado'}
    }
    const hashPass = bcrypt.hashSync(password);
    const response = await pool.query('INSERT INTO usuarios VALUES (DEFAULT, $1, $2)', [username, hashPass])
    return response
}

const verifyUser = async (username, password) => {
    const response = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);
    const user = response.rows[0];
    const hashedPass = user.password;
    const isPasswordCorrect = bcrypt.compareSync(password, hashedPass);
    if(!isPasswordCorrect) {
        throw { code: 401, message: 'Usuario o contraseña incorrectos'}
    }
    return response.rows
}

const deleteUser = async (id) => {
    const response = await pool.query('DELETE FROM usuarios WHERE id = $1', [id])
    return response
}

module.exports = {
    addUser,
    verifyUser,
    deleteUser
}