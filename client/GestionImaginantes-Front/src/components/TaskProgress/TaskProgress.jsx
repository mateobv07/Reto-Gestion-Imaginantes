import * as React from 'react';
import { Box } from "@mui/material";
import { BiChalkboard } from 'react-icons/bi'
import { styled } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';

import './styles.css'

const TaskProgress = ({tasks, onTaskCompletion}) => {
    const CustomCheckbox = styled(Checkbox)({
        color: 'black',
        '&.Mui-checked': {
            color: '#8ACBD6',
        },
    });

    return (
        <Box className="taskprogress-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
          <div className='title-row'>
              <p className='card-title'>PROGRESO DE TAREAS</p>
              <Box className='round-paper'>
                  <BiChalkboard size={24} color='#FFFFFF' />
              </Box>
          </div>
  
          {tasks.length > 0 ? tasks.map((task, index) => (
            <div key={index} className={`taskprogress-container ${index === tasks.length - 1 ? 'last-task' : ''}`}>
              <CustomCheckbox 
                checked={task.completed} 
                onChange={() => onTaskCompletion(index)} 
              />
              <p className={`taskprogress-title ${task.completed ? 'completed-task' : ''}`}>{task.name}</p>
              <p className={`taskprogress-date-text ${task.completed ? 'completed-task' : ''}`}>Fecha Límite: {task.date}</p>
            </div>
          )) :
            <p> Sin tareas activas </p>
          }
        </Box>
    );
  }
  
  export default TaskProgress;
