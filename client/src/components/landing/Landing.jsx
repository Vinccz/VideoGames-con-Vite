import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'; // Crea un archivo CSS para estilos

const Landing = () => {
  return (
    <div className="landing-page">
      <h1>Bienvenido a la Aplicación de Videojuegos</h1>
      <Link to="/home">
        <button>Ingresar a Home</button>
      </Link>
    </div>
  );
};

export default Landing;
