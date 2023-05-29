import React from "react";
import { Box } from "@mui/material";
import { TbBellRinging } from 'react-icons/tb';

const MyRequests = () => {
  return (
    <Box className="task-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row'>
        <p className='card-title'>SOLICITUDES</p>
        <Box className='round-paper' component="div">
          <TbBellRinging size={24} color='#FFFFFF' />
        </Box>
      </div>
    </Box>
  );
}

export default MyRequests;