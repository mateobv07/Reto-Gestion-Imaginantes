import React from 'react';
import { Box, DialogContent, Dialog, DialogContentText, DialogTitle } from "@mui/material";
import { BsXLg } from "react-icons/bs";
import './styles.css'

const AnnouncementPopUp = ({show, setShow, announcement}) => {
  return (
    <Dialog
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='title-container'>
        {new Date(announcement.createdAt).toLocaleDateString('es-MX', {hour: "2-digit", minute: "2-digit", year: 'numeric', month: 'long', day: 'numeric' })}
          <Box sx={{mt:-1}} className='popup-cancel-icon pointer' onClick={() => setShow(false)}>
            <BsXLg size={18} color="#8C8B8B" />
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {announcement.content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
}

export default AnnouncementPopUp;