import React from "react";
import { AppBar, Toolbar, Typography, Box, LinearProgress, Tooltip, IconButton } from "@mui/material";
import {AiFillQuestionCircle} from 'react-icons/ai'
import './styles.css'
import 'dayjs/locale/es';
import dayjs from 'dayjs';

const TopBar = ({progress, name, team}) => {
  return (
      <AppBar position="static" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", bgcolor: "#FFFFFF" }} className='rounding'>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <div className='progress-container'>
            <Typography className='progreso-text'>
              PROGRESO
            </Typography>
            <Tooltip title="El progeso es calculado en base a tus actividades actuales, si se te asignan actividades nuevas se actualizara" placement="top">
            <IconButton className="info-icon">
              <AiFillQuestionCircle size={15} color="grey"/>
              </IconButton>
            </Tooltip>
            <Tooltip title="El progeso es calculado en base a tus actividades actuales, si se te asignan actividades nuevas se actualizara" placement="top">
              <LinearProgress className='progress-bar' variant='determinate' value={progress}/>
            </Tooltip>
          </div>
          <Typography className='fecha-text'>
            {dayjs().locale('es').format(`dddd, D MMMM [de] YYYY`)}
          </Typography>
          <Box className="profile-container">
          <Typography noWrap={true} className=''>{name}</Typography>
          <Typography noWrap={true} className=''>{team === 0 ? 'Contenido' : team === 1 ? 'Comunicación' : 'Estación de Juegos'}</Typography>
        </Box>
        </Toolbar>
      </AppBar>
  );
}

export default TopBar;