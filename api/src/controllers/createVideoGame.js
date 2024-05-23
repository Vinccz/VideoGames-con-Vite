const { Videogame, Genres} = require('../db')
const axios = require('axios');

const createVideoGame = async(req, res) =>{

try {
        // Extraer datos del cuerpo de la solicitud
    const { name, description, platforms, image, relaseDate, rating, genres } = req.body;

  // Crear el videojuego en la base de datos

  const newVideoGames = await Videogame.create({
    name,
    description,
    platforms,
    image,
    relaseDate,
    rating
  });

  // Crear el videojuego en la base de datos


  if( genres && genres.length > 0) {
await newVideoGames.setGenres(genres);
}
res.status(200).json(newVideoGames);//Devolver el nuevo videojuego creado

} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el videojuego' });
}
};

module.exports = createVideoGame;
