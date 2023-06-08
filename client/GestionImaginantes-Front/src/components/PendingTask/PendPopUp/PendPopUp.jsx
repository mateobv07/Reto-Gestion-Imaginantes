import React from "react";
import { Box, TextField, Button} from "@mui/material";
import { BsXLg } from "react-icons/bs";
import { styled } from "@mui/system";
import "./styles.css";


const PendPopUp = ({popCambio, popCancel, popDone, task}) => {
  
  const StyledTextField = styled(TextField)({
    width: "100%",
    height: "100%",
  });
  
  return (
    <div>
      <Box className='popup-container'> 
        <div className='popup-cancel-container'>
          <Box className='popup-cancel-icon' onClick={popCancel}>
            <BsXLg size={18} color="#8C8B8B" />
          </Box>
        </div>

        <div className='popup-text-container'>
          <p className='popup-task-title'>{task.name}</p>
          <p className='popup-task-date'>Fecha Límite: {task.date}</p>
          <Box className='popup-description-container'></Box>
        </div>

        <div className='popup-button-container'>
          <Box className='popup-button-done' onClick={popDone}>Realizado</Box>
          <Box className='popup-button-change' onClick={popCambio}>Cambio</Box>
          <Button className=''>hola</Button> //rtgr___________________________________tnjh 
        </div>

        <div className='popup-comment-container'>
          <StyledTextField
            id="outlined-multiline-static"
            label="Comentario: "
            multiline
            rows={4}
          />
        </div>
      </Box>
    </div>
  );
};

export default PendPopUp;