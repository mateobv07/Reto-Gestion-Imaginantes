import React from "react";
import { Box } from "@mui/material";
import { BsXLg } from "react-icons/bs";
import "./styles.css";

const ConfirmPopUp = ({popCancel, popConfirm, task}) => {  
    return (
        <div>
            <Box className='popup-confirm-container'> 
                <div className='popup-text-confirm-container'>
                    <p className='popup-task-title'>{task.name}</p>
                    <p className='popup-task-date'>Fecha Límite: {task.date}</p>
                    <p className='popup-confirm'>¿Desea marcarla como realizada?</p>
                    <p className='popup-pending'>El socio formador verificará que la actividad haya sido realizada</p>
                </div>

                <div className='popup-confirm-button-container'>
                    <Box className='popup-button-confirm' onClick={popConfirm}>Confirmar</Box>
                    <Box className='popup-button-cancel' onClick={popCancel}>Cancelar</Box>
                </div>
            </Box>
        </div>
      );
    };
export default ConfirmPopUp;

