import React from 'react';
import { Box, Dialog } from "@mui/material";
import CommentsContainer from './CommentsContainer/CommentsContainer'
import { BsXLg } from "react-icons/bs";

import { MdOutlinePendingActions } from 'react-icons/md';
import { TbCalendarDue } from 'react-icons/tb';
import './styles.css'

const AnnouncementPopUp = ({show, setShow, task}) => {

  return (
    <Dialog
        open={show}
        onClose={() => setShow(false)}
      >

      <Box className='assignment-popup-container'>
        <div className='popup-cancel-container pointer'>
          <Box className='popup-cancel-icon' onClick={() => setShow(false)}>
            <BsXLg size={18} color="#8C8B8B" />
          </Box>
        </div>

        <div className='popup-text-container'>
          <p className='popup-task-title title-margin' >{task.name}</p>
          <p className='task-status-text center-icon-text'> <MdOutlinePendingActions size={18} color="#36b4c5"/>
            En espera de confirmación de admin
          </p>
          <p className='popup-task-date'>Fecha Límite: {new Date(task.dueDate).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <Box className='asignment-popup-description-container'>
              <p className="desc-container-text">{task.description}</p>
          </Box>
        </div>

        <CommentsContainer comments={task.comments}/>
      </Box>

      </Dialog>
  );
}

export default AnnouncementPopUp;