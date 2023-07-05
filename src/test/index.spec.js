const request = require('supertest');
const app = require('../../index');

describe('Pruebas de rutas', () => {
    /* Se obtiene un Array y un status code 200 como respuesta de la ruta GET /equipos */
    it('obteniendo un array y un status 200', async () => {
        const response = await request(app).get('/equipos');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    /* Al enviar las credenciales correctas en la ruta POST /login se obtiene un Object */
    it('Obteniendo un objeto con las credenciales correctas', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'admin', password: '1234' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });

    /* Al enviar credenciales incorrectas en la ruta POST /login se obtiene un status code 400 */
    it('Obteniendo un codigo 400 con las credenciales incorrectas', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'usuario', password: 'contraseña_incorrecta' });

        expect(response.statusCode).toBe(400);
    });

    /* Al enviar un nuevo jugador en la ruta POST /equipos/:teamID/jugadores junto a un
    token válido en las cabeceras se obtiene un status code 201. */
    it('Obteniendo un codigo 201 al enviar un nuevo jugador junto con un token valido', async () => {
        const teamID = 'ID'; // Reemplazar por un ID válido
        const token = 'token' // Reemplazar por un token válido
        const jugador = { name: 'Jugador', position: 'id' }; // Reemplazar con los datos de un jugador (position_id)
        const response = await request(app)
            .post(`/equipos/${teamID}/jugadores`)
            .set('Authorization', `Bearer ${token}`)
            .send(jugador);

        expect(response.statusCode).toBe(201);
    });
});