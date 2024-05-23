const express = require('express');
const router = express.Router();
const axios = require('axios'); // Importa Axios para hacer solicitudes HTTP
const { Videogame, sequelize } = require('../db');


const searchVideoGames = async (req, res) =>{
    try {
        const { name } = req.query
        if(!name) {
            return res.status(400).json({ error: 'Se requiere un parámetro de consulta "name"'})
        }
    const searchName = '%${name}%';


 // Busca videojuegos en la base de datos
 const dbVideoGames = await Videogame.findAll({
    where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), 'LIKE', searchName.toLowerCase()),
    limit: 15
});
   // Realiza una solicitud a la API para buscar videojuegos
    const apiUrl = `API_URL/videogames?name=${name}&apiKey=${process.env.API_KEY}`;
    const apiResponse = await axios.get(apiUrl);
    const apiVideoGames = apiResponse.data;

    const convinedVideoGames = [...dbVideoGames, ...apiVideoGames]
if(convinedVideoGames.length === 0) {
    return res.status(404).json({ message:'No se encontraron videojuegos con el nombre proporcionado' });
}
res.json (convinedVideoGames);
    } catch (error) {
        next(error);
    }
}

module.exports = searchVideoGames;