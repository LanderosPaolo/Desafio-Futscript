const router = require('express').Router();
const user = require('../controllers/userController');
const team = require('../controllers/teamsController');
const player = require('../controllers/playersController');
const middleware = require('../middleware/middleware');

//userController
router.post('/registrar', user.postUser);
router.post('/login', middleware.vcLogin, user.loginUser);
router.delete('/eliminar/:id', user.deleteUser);

//teamController
router.get('/equipos', team.getTeams);
router.post('/equipos', team.postTeams);
router.delete('/equipos/:id', team.deleteTeams);

//playerController
router.get('/equipos/:teamID/jugadores', player.getPlayers);
router.post('/equipos/:teamID/jugadores', player.addPlayers);

module.exports = router;