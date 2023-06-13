import React from "react";
import { AppBar, Toolbar, Typography, Box, LinearProgress, Tooltip } from "@mui/material";
import './styles.css'


const TopBar = ({progress, name, level}) => {
  return (
      <AppBar position="static" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", bgcolor: "#FFFFFF" }} className='rounding'>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <div className='progress-container'>
            <Typography className='progreso-text'>
              PROGRESO
            </Typography>
            <Tooltip title="El progeso es calculado en base a tus actividades actuales, si se te asignan actividades nuevas se actualizara" placement="top">
            <LinearProgress className='progress-bar' variant='determinate' value={progress}/>
          </Tooltip>
          </div>
          <Typography className='fecha-text'>
            Viernes, 28 de abril 2023
          </Typography>
          <Box className="profile-container">
          <Typography noWrap={true} className=''>{name}</Typography>
          <Typography noWrap={true} className=''>{level}</Typography>
        </Box>
        </Toolbar>
      </AppBar>
  );
}

export default TopBar;