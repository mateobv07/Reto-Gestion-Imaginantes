import React from "react";
import { AppBar, Toolbar, Typography, Box, LinearProgress } from "@mui/material";
import './styles.css'


const TopBar = ({progress, name, level}) => {
  return (
      <AppBar position="static" sx={{ bgcolor: "#FFFFFF" }} className='rounding'>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <div className='progress-container'>
            <Typography className='progreso-text'>
              PROGRESO
            </Typography>
            <LinearProgress className='progress-bar' variant='determinate' value={progress}/>
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