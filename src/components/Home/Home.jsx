import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>¡Bienvenido a la página principal!</h1>
      <Link to="/examenes">
        <button>Ir a Examenes</button>
      </Link>
    </div>
  );
};

export default Home

