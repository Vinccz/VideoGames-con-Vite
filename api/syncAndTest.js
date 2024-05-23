(async () => {
    const { conn, Videogame, Genre } = require('./src/db'); // Asegúrate de que la ruta sea correcta
  
    try {
      // Autenticar la conexión
      await conn.authenticate();
      console.log('La conexión se ha establecido exitosamente.');
  
      // Sincronizar todos los modelos
      await conn.sync({ force: true }); // Usa { force: true } solo en desarrollo
      console.log('Todos los modelos se sincronizaron exitosamente.');
  
      // Crear instancias de los modelos
      const genre = await Genre.create({ name: 'Fantasía' });
      const videogame = await Videogame.create({ title: 'Juego Fantástico' });
  
      // Asociar instancias
      await videogame.addGenre(genre);
      console.log('Asociación creada:', videogame.title, '->', genre.name);
  
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
    } finally {
      await conn.close();
    }
  })();
  