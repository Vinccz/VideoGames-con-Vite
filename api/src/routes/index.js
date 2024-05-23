const express = require('express');
const router = express.Router();
const allVideoGamesController = require('../controllers/allVideoGames');
const idVideoGamesController = require('../controllers/idVideoGames');
const searchVideogames = require('../controllers/searchVideoGames')
const createVideoGame = require('../controllers/createVideoGame');
const getGenres = require('../controllers/getGenres');

// Configurar los controladores para las rutas


router.get('/videoGames', allVideoGamesController);
router.get('/:idVideoGames', idVideoGamesController);
router.get('/videoGames/name', searchVideogames);
router.post('/videoGames', createVideoGame)
router.get('/genres', getGenres);



module.exports = router;
