import React from 'react';
import './Card.css'; // Asume que tienes un archivo CSS para los estilos de la tarjeta

const Card = ({ game }) => {
  return (
    <div className="card">
      <img src={game.background_image} alt={game.name} className="card-image" />
      <div className="card-content">
        <h3>{game.name}</h3>
        <p>Rating: {game.rating}</p>
        <p>Released: {game.released}</p>
      </div>
    </div>
  );
};

export default Card;
