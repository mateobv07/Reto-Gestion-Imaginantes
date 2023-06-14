import React from "react";
import { Box, Stack } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./styles.css";

const RequestPopUp = ({popCancel, popConfirm, task}) => {  
    
    return (
        <div>
            <Box className='popup-change-container'> 
                <div className='popup-text-change-container'>
                    <p className='popup-task-title'>{task.name}</p>
                    <p className='popup-task-date'>Fecha Límite: {new Date(task.dueDate).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className='popup-confirm'>¿Desea solicitar un cambio?</p>
                    <p className='popup-pending'>Selecciona las fechas en las que estas disponible para cambio</p>
                </div>
                <div className='popup-rangeDate-container'>
                    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={1}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']} >
                                <DatePicker label='Fecha Inicial'/>
                            </DemoContainer>
                            <DemoContainer components={['DatePicker']} >
                                <DatePicker label='Fecha Final'/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Stack>
                </div>
                <div className='popup-confirm-button-container'>
                    <button className='popup-button-cancel' onClick={popCancel}>Cancelar</button>
                    <button className='popup-button-confirm' onClick={popConfirm}>Confirmar</button>
                </div>
            </Box>
        </div>
      );
    };
export default RequestPopUp;