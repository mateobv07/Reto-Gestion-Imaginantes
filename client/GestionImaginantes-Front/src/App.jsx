import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import Inicio from './pages/Inicio';
import Progreso from './pages/Progreso';
import Solicitudes from './pages/Solicitudes';
import Tablero from './pages/Tablero';

import './App.css'

function App() {
  return (
    <div className='mainContainer'>
     <SideBar />
     <TopBar progress={50} name={'Rodrigo Chavez'} level={'Nivel 50'}/>
     <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/progreso" element={<Progreso />} />
        <Route path="/Solicitudes" element={<Solicitudes />} />
        <Route path="/tablero" element={<Tablero />} />
     </Routes>
    </div>
  )
}

export default App;
