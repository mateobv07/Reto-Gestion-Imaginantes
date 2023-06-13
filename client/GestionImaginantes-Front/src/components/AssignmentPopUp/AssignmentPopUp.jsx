import React from 'react';
import { Box, DialogContent, Dialog, DialogContentText, DialogTitle } from "@mui/material";
import CommentsContainer from './CommentsContainer/CommentsContainer'
import { BsXLg } from "react-icons/bs";
import { MdOutlinePendingActions } from 'react-icons/md';
import { TbCalendarDue } from 'react-icons/tb';
import './styles.css'

const AnnouncementPopUp = ({show, setShow, task}) => {
  return (
    <Dialog
        fullWidth
        maxWidth='md'
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='title-container'>
            {task.name}
          <Box sx={{mt:-1}} className='popup-cancel-icon pointer' onClick={() => setShow(false)}>
            <BsXLg size={18} color="#8C8B8B" />
          </Box>
        </DialogTitle>
        <DialogContent>
            <p className='task-date-text center-icon-text' ><TbCalendarDue size={18} color="#32c064"/>
                Fecha Límite: {new Date(task.dueDate).toLocaleDateString('es-MX', {year: 'numeric', month: 'long', day: 'numeric' })} </p>
            <p className='task-status-text center-icon-text'> <MdOutlinePendingActions size={18} color="#5EB2C2"/>
             En espera de confirmación de admin</p>
            <div className='description-container'>
                {task.description}
            </div>
            <CommentsContainer comments={task.comments}/>
        </DialogContent>
      </Dialog>
  );
}

export default AnnouncementPopUp;