import * as React from 'react';
import { Paper, Button } from "@mui/material";
import { BiTask } from 'react-icons/bi'

import './styles.css'

const ProximaTarea = ({progress, name, level}) => {
  return (
      <Paper elevation={3} className="card-container">
        <div className='title-row'>
            <p className='card-title'>PROXIMA TAREA</p>
            <Paper className='round-paper'>
                <BiTask size={32} height={10} color='#FFFFFF' />
            </Paper>
        </div>
      </Paper>
  );
}

export default ProximaTarea;