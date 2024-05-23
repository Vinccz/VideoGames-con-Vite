const axios = require('axios');
const { Videogame, Genre } = require('../db');

const IdVideoGames = async (req, res, next) => {
    try {
        const { idVideogame } = req.params;

        // Verifica si el ID es un número entero
        if (!Number.isInteger(parseInt(idVideogame))) {
            return res.status(400).json({ error: 'El ID del videojuego debe ser un número entero' });
        }

        let videogameDetail;

        // Busca el videojuego en la base de datos por su ID
        videogameDetail = await Videogame.findByPk(idVideogame, {
            include: Genre,
        });

        // Si no se encuentra en la base de datos, realiza una solicitud a la API externa
        if (!videogameDetail) {
            const response = await axios.get(`API_URL/videogames/${idVideogame}`);
            videogameDetail = response.data;
        }

        // Si el videojuego existe, devuelve el detalle con los datos del género asociado
        if (videogameDetail) {
            res.json(videogameDetail);
        } else {
            // Si no se encuentra el videojuego, devuelve un mensaje de error
            res.status(404).json({ error: 'Videojuego no encontrado' });
        }
    } catch (error) {
        // Manejo de errores
        next(error);
    }
};

module.exports = IdVideoGames;
