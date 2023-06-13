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
                    <p className='popup-task-date'>Fecha Límite: {new Date(task.dueDate).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className='popup-confirm'>¿Desea marcarla como realizada?</p>
                    <p className='popup-pending'>El socio formador verificará que la actividad haya sido realizada</p>
                </div>

                <div className='popup-confirm-button-container'>
                    <button className='popup-button-confirm' onClick={popConfirm}>Confirmar</button>
                    <button className='popup-button-cancel' onClick={popCancel}>Cancelar</button>
                </div>
            </Box>
        </div>
      );
    };
export default ConfirmPopUp;

