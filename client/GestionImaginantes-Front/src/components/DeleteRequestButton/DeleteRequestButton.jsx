import React from "react";
import { DialogActions, Dialog, IconButton, DialogContent, DialogContentText, DialogTitle, Button} from "@mui/material";
import { MdDelete } from "react-icons/md";
import './styles.css';
import axios from 'axios';


const DeleteRequestButton = ({id, tipo}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickRequest = ({id}) => {
    handleClose;
  };

  const handleClickAssignment = () => {
    handleClose;
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <MdDelete/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className="alert-title">
          {"¿Seguro que quieres borrar esta solicitud?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="alert-text">
            {"Esta acción no se puede deshacer, tendrás que volver a hacer tu solicitud."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            {tipo ? <Button className="dialog-button" variant="outlined" color="error" onClick={handleClose}> Borrar TEST1 </Button> : <Button className="dialog-button" variant="outlined" color="error" onClick={handleClose}> Borrar TEST2</Button>}
            <Button className="dialog-button" onClick={handleClose} sx={{color:"#4b5055"}}> Salir</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
  }
  
  export default DeleteRequestButton;