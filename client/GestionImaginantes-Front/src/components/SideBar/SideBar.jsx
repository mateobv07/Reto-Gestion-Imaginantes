import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { AiFillHome, AiFillAppstore } from 'react-icons/ai';
import { GrCycle } from 'react-icons/gr';
import { RiDashboard3Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import './styles.css'

const SideBar = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const logOut = () => {
    localStorage.clear();
    navigate('/auth');
  };

  useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option);
    navigate(option);
  };

  return (
    <Box className="box" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <img className="imagen" src="../../assets/estacion-meiquer-logo-spaced.png" alt="Logo EstacionMeiquer" height="70px"/>
      <List sx={{ mt: 10 }}>
        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => handleOptionClick('/')}
            justifycontent="center"
            sx={{padding: '25px', backgroundColor: selectedOption === '/' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <AiFillHome size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Inicio</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => handleOptionClick('/tablero')}
            sx={{padding: '25px', backgroundColor: selectedOption === '/tablero' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <AiFillAppstore size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Tablero</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => handleOptionClick('/solicitudes')}
            sx={{padding: '25px', backgroundColor: selectedOption === '/solicitudes' ? '#3691a4' : 'transparent'}}>
            <ListItemIcon sx={{ mr: -3 }}>
              <GrCycle className="icon" size={22} color='#FFFFFF'/>
            </ListItemIcon>
            <Typography className="texto-nav" color='#FFFFFF'>Intercambios</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => handleOptionClick('/progreso')}
            sx={{padding: '25px', backgroundColor: selectedOption === '/progreso' ? '#3691a4' : 'transparent'}}>
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