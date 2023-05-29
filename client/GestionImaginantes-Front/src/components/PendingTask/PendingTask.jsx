import React from "react";
import { Box, Button } from "@mui/material";
import { BiTask } from 'react-icons/bi'

import './styles.css'

const PendingTask = () => {
  return (
    <Box className="task-pending-card-container"  sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row'>
        <p className='card-title'>TAREAS PENDIENTES</p>
        <Box className='round-paper'>
          <BiTask size={24} color='#FFFFFF' />
        </Box>
      </div>
      <div className='task-pending-container'></div>
    </Box>
  );
}

export default PendingTask;