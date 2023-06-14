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
          <p className='popup-task-date'>Fecha Límite: {new Date(task.dueDate).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <Box className='popup-description-container'>
          <div className="desc-container">{task.description}</div>
          </Box>
        </div>

        <div className='popup-button-container'>
          <button className='popup-button-change' onClick={popCambio}>Cambio</button>
          <button className='popup-button-done' onClick={popDone}>Realizado</button>
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