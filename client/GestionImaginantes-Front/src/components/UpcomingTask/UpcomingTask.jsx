import React from "react";
import { Box, Button } from "@mui/material";
import { BiTask } from 'react-icons/bi'

import './styles.css'

const UpcomingTask = ({task}) => {
  return (
    <Box className="task-card-container"  sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row'>
        <p className='card-title'>PROXIMA TAREA</p>
        <Box className='round-paper'>
          <BiTask size={24} color='#FFFFFF' />
        </Box>
      </div>

      { task ?
        <div className='task-container'>
          <div>
            <p className="upcoming-task-title">{task.name}</p>
            <p className="task-date-text">Fecha Límite: {task.date}</p>
          </div>
          <div className='task-description-container'>
            <p className="upcoming-task-description">{task.description}</p>
          </div>
        </div>
        :
        <p> Sin tareas activas </p>
      }
    </Box>
  );
}

export default UpcomingTask;