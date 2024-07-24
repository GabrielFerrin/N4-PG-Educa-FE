import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Examen from './components/Examen/Examen';

const App = () => {
  return (
    <BrowserRouter>
    
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examenes" element={<Examen />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
