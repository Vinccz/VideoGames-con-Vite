const axios = require('axios');
const { Genre } = require('../db');

const getGenres = async (req, res) => {
  try {
    let genres = [];

    // Verificar si hay géneros en la base de datos
    const genresFromDB = await Genre.findAll();

    // Si no hay géneros en la base de datos, obtenerlos de la API y guardarlos en la base de datos
    if (!genresFromDB.length) {
      const response = await axios.get(`${process.env.API_URL}/genres`);
      genres = response.data;

      // Guardar los géneros en la base de datos
      await Genre.bulkCreate(genres);
    } else {
      // Si hay géneros en la base de datos, devolverlos
      genres = genresFromDB;
    }

    res.json(genres); // Devolver los géneros
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los géneros' });
  }
};

module.exports = getGenres;
