import React from "react";
import { Typography, List, ListItem, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { AiFillHome, AiFillAppstore } from 'react-icons/ai';
import { GrCycle } from 'react-icons/gr';
import { RiDashboard3Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import './styles.css'


const SideBar = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
         navigate('/auth');
    }

    return (
        <Box className="box" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
             <List sx={{ mt: 22 }}>
                <ListItem component="div" disablePadding>
                    <ListItemButton onClick={() => navigate('/')} justifycontent="center" sx={{ padding: '25px' }}>
                        <ListItemIcon sx={{ mr: -3 }}>
                            <AiFillHome size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Inicio</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem component="div" disablePadding>
                    <ListItemButton onClick={() => navigate('/tablero')} sx={{ padding: '25px' }}>
                        <ListItemIcon sx={{ mr: -3 }}>
                            <AiFillAppstore size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Tablero</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem component="div" disablePadding>
                    <ListItemButton onClick={() => navigate('/solicitudes')} sx={{ padding: '25px' }}>
                        <ListItemIcon sx={{ mr: -3 }}>
                            <GrCycle className="icon" size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Solicitudes</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem component="div" disablePadding>
                    <ListItemButton onClick={() => navigate('/progreso')} sx={{ padding: '25px' }}>
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