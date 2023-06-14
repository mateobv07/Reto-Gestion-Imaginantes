import React, {useState} from 'react';
import { Route, Routes, Navigate, useLocation  } from 'react-router-dom';
import axios from "axios";
import axiosInterceptor from './utils/axiosInterceptor.js'
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Progreso from './pages/Progreso';
import Solicitudes from './pages/Solicitudes';
import Tablero from './pages/Tablero';

import './App.css'

function App() {
  const [user, setUser] = useState(localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : null);
  const atLogin = useLocation().pathname === '/login';

  return (
    <div className={!atLogin && 'main-container'}>
      {(user && !atLogin) &&
        <>
          <SideBar />
          <TopBar progress={Math.round(user.completedTasks / user.totalTasks * 100)} name={user.name} level={'Nivel 50'}/>
        </>
      }
      <Routes>
          <Route path="/login" exact element={<Login setUser={setUser}/>} />
          <Route path="/" exact element={user ? <Inicio user={user}/> : <Navigate to="/login"/>} />
          <Route path="/progreso" exact element={user ? <Progreso completedTasks={user.completedTasks} totalTasks={user.totalTasks}/> : <Navigate to="/login"/>} />
          <Route path="/Solicitudes" exact element={user ? <Solicitudes user={user}/> : <Navigate to="/login"/>} />
          <Route path="/tablero" exact element={user ? <Tablero /> : <Navigate to="/login"/>} />
      </Routes>
    </div>
  )
}

export default App;