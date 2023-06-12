import React from "react";
import {Dialog, IconButton} from "@mui/material";
import { MdDelete } from "react-icons/md";
import './styles.css';
import DeleteRequestDialog from "../DeleteRequestDialog/DeleteRequestDialog";


const DeleteRequestButton = ({id, tipo}) => {
  const [open, setOpen] = React.useState(false);

  
  const handleExit = () => {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickDeleteRequest = () => {
    setOpen(false);  
  };

  const handleClickDeleteAssignment = () => {
    setOpen(false);  
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <MdDelete/>
      </IconButton>
      <Dialog open={open} onClose={handleExit}>
        { tipo ? 
            <DeleteRequestDialog handleExit={handleExit} handleDelete={handleClickDeleteRequest} tipo={tipo}/> :
            <DeleteRequestDialog handleExit={handleExit} handleDelete={handleClickDeleteAssignment} tipo={tipo}/>
          } 
      </Dialog>
    </div>
    );
  }
  
  export default DeleteRequestButton;