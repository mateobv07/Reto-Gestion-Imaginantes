import React from "react";
import { Paper } from "@mui/material";
import { TbBellRinging } from 'react-icons/tb';


const MyRequests = () => {
  return (
      <Paper elevation={3} className="task-card-container">
        <div className='title-row'>
            <p className='card-title'>SOLICITUDES</p>
            <Paper className='round-paper'>
                <TbBellRinging size={28} color='#FFFFFF' />
            </Paper>
        </div>
      </Paper>
  );
}

export default MyRequests;