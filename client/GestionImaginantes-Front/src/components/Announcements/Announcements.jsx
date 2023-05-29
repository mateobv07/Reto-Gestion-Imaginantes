import * as React from 'react';
import { Box, Button } from "@mui/material";
import { TbSpeakerphone } from 'react-icons/tb'
import './styles.css'

const Announcements = () => {
  return (
    <Box className="announcement-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row'>
        <p className='card-title'>AVISOS</p>
        <Box className='round-paper' component="div">
          <TbSpeakerphone size={24} color='#FFFFFF' />
        </Box>
      </div>
    </Box>
  );
}

export default Announcements;