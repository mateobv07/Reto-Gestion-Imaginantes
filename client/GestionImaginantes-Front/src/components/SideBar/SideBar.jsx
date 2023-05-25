import React from "react";
import { Typography, List, ListItem, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { AiFillHome, AiFillAppstore } from 'react-icons/ai';
import { GrCycle } from 'react-icons/gr';
import { RxTimer } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
import './styles.css'


const SideBar = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
         navigate('/auth');
    }

    return (
        <Box className="box" sx={{ boxShadow: 14 }}>
             <List sx={{ mt: 20 }}>
                <ListItem sx={{ my: 3 }}>
                    <ListItemButton onClick={() => navigate('/')} justifycontent="center">
                        <ListItemIcon sx={{ mr: -3 }}>
                            <AiFillHome size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Inicio</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ my: 3 }}>
                    <ListItemButton onClick={() => navigate('/tablero')}>
                        <ListItemIcon sx={{ mr: -3 }}>
                            <AiFillAppstore size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Tablero</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ my: 3 }}>
                    <ListItemButton onClick={() => navigate('/solicitudes')}>
                        <ListItemIcon sx={{ mr: -3 }}>
                            <GrCycle className="icon" size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Solicitudes</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ my: 3 }}>
                    <ListItemButton onClick={() => navigate('/progreso')}>
                        <ListItemIcon sx={{ mr: -3 }}>
                            <RxTimer size={22} color='#FFFFFF'/>
                        </ListItemIcon>
                        <Typography className="texto-nav" color='#FFFFFF'>Progreso</Typography>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );
}

export default SideBar;