import * as React from 'react';
import { Paper, Button } from "@mui/material";
import { TfiAnnouncement } from 'react-icons/tfi'
import './styles.css'


const Announcements = () => {
  return (
      <Paper elevation={3} className="announcement-card-container">
        <div className='title-row'>
            <p className='card-title'>AVISOS</p>
            <Paper className='round-paper'>
                <TfiAnnouncement size={24} color='#FFFFFF' />
            </Paper>
        </div>
      </Paper>
  );
}

export default Announcements;