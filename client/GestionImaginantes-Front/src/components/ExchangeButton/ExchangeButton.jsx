import React from "react";
import {Chip, Dialog, IconButton, Button, Box, InputLabel, MenuItem, FormHelperText, FormControl, Select} from "@mui/material";
import { BsXLg } from "react-icons/bs";
import "./styles.css";

const ExchangeButton = ({id, request, handleClickGetRequest, open, handleExit, fecha}) => {

    const [button,setButton] = React.useState(true);
    const [tarea, setTarea] = React.useState("");


    const handleChange = (event) => {
        setTarea(event.target.value);
        console.log(event.target.value);
        console.log(tarea);
        if (event.target.value === ""){
            setButton(true);
        }
        else {
            setButton(false);
        }
    }

    return (
        <div className="chip-container">
            <Chip
            label="Clickable"
            variant="outlined"
            className="chip-popup"
            onClick={() => handleClickGetRequest(id)}
            />
            <Dialog open={open} onClose={handleExit}>
                {request ? 
                <Box className='popup-container-exchange-request'> 
                    <div className='popup-cancel-container-delete'>
                    <IconButton className='popup-cancel-icon-delete' aria-label="exit" onClick={handleExit}>
                        <BsXLg size={18} color="#8C8B8B"/>
                    </IconButton>
                    </div>

                    <div className='popup-text-container-exchange'>
                        <p className='popup-task-title-exchange'>{request.name}</p>
                        <p className="alert-text"> Descripción: </p>
                        <Box className='popup-description-container-exchange'>
                            <p className="exchange-text"> {request.description} </p>
                        </Box>
                        <p className="fecha-texto"> Dia de la actividad: {fecha} </p>
                    </div>
                    <div className='popup-button-container-exchange'>
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="seleccionador-de-tarea">Tarea</InputLabel>
                        <Select
                        labelId="tarea-label"
                        id="tarea-requerida"
                        value={tarea}
                        label="Tarea *"
                        onChange={handleChange}
                        autoWidth
                        >
                        <MenuItem value = "">
                            <em>Ninguna</em>
                        </MenuItem>

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Requerido</FormHelperText>
                    </FormControl>
                        <Button disabled={button} className='popup-button-exchange' onClick={handleExit} variant="contained"> Borrar </Button>
                    </div>
                </Box>: 
                <Box className="popup-container-exchange-request">
                    <div className='popup-text-container-exchange'>
                        <p className='popup-task-title-exchange'>Cargando...</p>
                    </div>
                </Box>}
            </Dialog>

        </div>
  );
};

export default ExchangeButton;