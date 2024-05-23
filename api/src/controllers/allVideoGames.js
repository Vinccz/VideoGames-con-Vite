const express = require('express');
const router = express.Router();
const axios = require('axios'); // Importa Axios para hacer solicitudes HTTP
const { Videogame, Genre } = require('../db');


const allVideoGames = async (req, res) => {
    try {
        
    const response = await axios.get(`https://api.rawg.io/api/games?key=648a9ba7af8f4352b2cebd718d0fe7e6&dates=2019-09-01,2019-09-30&platforms=18,1,7`);
    const games = response.data.results.map(game => {
        return {
            id: game.id,
            name: game.name,
            rating: game.rating,
            slug: game.slug,
            image: game.image
            
        }
    });
    res.json(games);

    } catch (error) {
        console.error('Error al obtener los videojuegos', error);
        res.status(500).json({message: 'Error al obtener los videojuegos'})
    }
};
module.exports = allVideoGames;
