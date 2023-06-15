import React from "react";
import { Typography, List, ListItem, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { AiFillHome, AiFillAppstore } from 'react-icons/ai';
import { GrCycle } from 'react-icons/gr';
import { RiDashboard3Line } from 'react-icons/ri'
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css'

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Box className="box" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <img className="imagen" src="../../assets/estacion-meiquer-logo-spaced.png" alt="Logo EstacionMeiquer" height="70px"/>
      <List sx={{ mt: 10 }}>
        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/')}
            justifycontent="center"
            sx={{padding: '25px', backgroundColor: location.pathname === '/' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <AiFillHome size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Inicio</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/tablero')}
            sx={{padding: '25px', backgroundColor: location.pathname === '/tablero' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <AiFillAppstore size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Tablero</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/solicitudes')}
            sx={{padding: '25px', backgroundColor: location.pathname === '/solicitudes' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <GrCycle className="icon" size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Intercambios</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/progreso')}
            sx={{padding: '25px', backgroundColor: location.pathname === '/progreso' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <RiDashboard3Line size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Progreso</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideBar;