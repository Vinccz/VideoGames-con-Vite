const { DataTypes, Sequelize } = require('sequelize');

// Exportamos una función que define el modelo y le inyecta la conexión a Sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo
  const Videogame = sequelize.define('Videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.STRING, // Puedes ajustar el tipo de datos según la estructura de tus plataformas
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT, // O ajusta el tipo de datos según tu sistema de calificación
      allowNull: false,
    },
  });

  // Retornamos el modelo para poder utilizarlo en otras partes de la aplicación
  return Videogame;
};
