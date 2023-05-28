import React from "react";
import { Paper, Button } from "@mui/material";
import { BiTask } from 'react-icons/bi'

import './styles.css'

const UpcomingTask = ({task}) => {
  return (
      <Paper elevation={3} className="task-card-container">
        <div className='title-row'>
            <p className='card-title'>PROXIMA TAREA</p>
            <Paper className='round-paper'>
                <BiTask size={28} color='#FFFFFF' />
            </Paper>
        </div>

        { task ?
          <div className='task-container'>
            <p>{task.name}</p>
            <p>Fecha Límite: {task.date}</p>
            <div className='task-description-container'>
              {task.description}
            </div>
          </div>
          :
          <p> Sin tareas activas </p>
        }
      </Paper>
  );
}

export default UpcomingTask;