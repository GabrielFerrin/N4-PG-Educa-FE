import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className='home-cmp'>
      {/* poner enlace de login */}
      <nav className='nav-home-cmp'>
        {/* falta poner el logo */}
        <h2>LOGO EDUCA</h2>
        <Link to="/examenes">
          <button className='ingresar-boton-cmp'>INGRESAR</button>
        </Link>
      </nav>
      <div className='frases-home-cmp'>
        <h1>La educación es la clave para el desarrollo personal y social.</h1>
        <p>Fomenta el pensamiento crítico, la creatividad y prepara a los individuos para enfrentar los desafios del futuro.</p>
      </div>
      {/* poner enlace de registro */}
      <div className='registrar-cmp'>
      <Link to="/examenes">

        <button className='registrar-boton-cmp'>COMIENZA AHORA!</button>
      </Link>
      </div>
    </div>
  );
};

export default Home

