import React from "react";
import { IconButton, Button, Box} from "@mui/material";
import { BsXLg } from "react-icons/bs";
import './styles.css';


const DeleteRequestDialog = ({handleExit, handleDelete, tipo}) => {
  return (
      <Box className='popup-container-delete-request'> 
        <div className='popup-cancel-container-delete'>
          <IconButton className='popup-cancel-icon-delete' aria-label="exit" onClick={handleExit}>
            <BsXLg size={18} color="#8C8B8B"/>
          </IconButton>
        </div>

        <div className='popup-text-container-delete'>
          { tipo ? 
            <p className='popup-task-title-delete'>¿Estas seguro de que quieres borrar esta solicitud de intercambio?</p> :
            <p className='popup-task-title-delete'>¿Estas seguro de que quieres borrar esta solicitud de tarea aceptada?</p>          
          }
          <p className="alert-text"> Esta acción no se puede deshacer. </p>
        </div>
        <div className='popup-button-container-delete'>
          <Button className='popup-button-delete' onClick={handleDelete} variant="contained"> Borrar </Button>
        </div>
      </Box>
    );
  }
  
  export default DeleteRequestDialog;