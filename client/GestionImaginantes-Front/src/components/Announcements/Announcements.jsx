import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { TbSpeakerphone } from 'react-icons/tb'
import AnnouncementPopUp from './AnnouncementPopUp/AnnouncementPopUp';
import './styles.css'

const Announcements = ({announcements}) => {
  const [showPopUp, setShowPopUp ] = useState(false);
  const [curAnnounceent, setCurAnnouncement] = useState({content:"", createdAt: ""});

  return (
    <>
    <Box className="announcement-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row'>
        <p className='card-title'>AVISOS</p>
        <Box className='round-paper' component="div">
          <TbSpeakerphone size={24} color='#FFFFFF' />
        </Box>
      </div>
      <div className="announcements-container">
        {announcements.map((announcement) => (
          <div className='announcement-card pointer' key={announcement.id} onClick={() => (setCurAnnouncement(announcement), setShowPopUp(true))}>
            <Typography sx={{pt:1, px:1, fontWeight:600}} className='announcement-date-text'>
              {new Date(announcement.createdAt).toLocaleDateString('es-MX', {hour: "2-digit", minute: "2-digit", year: 'numeric', month: 'long', day: 'numeric' })}
            </Typography>
            <Typography noWrap sx={{pb:1, px:1}}>{announcement.content}</Typography>
          </div>
        ))}
      </div>
    </Box>
    <AnnouncementPopUp show={showPopUp} setShow={setShowPopUp} announcement={curAnnounceent}/>
    </>
  );
}

export default Announcements;