import React from "react";
import {Chip, Dialog, IconButton, Button, Box, InputLabel, MenuItem, FormHelperText, FormControl, Select} from "@mui/material";
import { BsXLg } from "react-icons/bs";
import "./styles.css";

const ExchangeButton = ({tarea, setTarea, handleAccept, activitiesExchange, id, request, handleClickGetRequest, open, handleExit, fecha}) => {

    const [button,setButton] = React.useState(true);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const handleChange = (event) => {
        setTarea(event.target.value);
        console.log(event.target.value);
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
            label="Intercambiar"
            variant="outlined"
            className="chip-popup"
            onClick={() => handleClickGetRequest(id)}
            sx={{color:"#4bb4c5", borderColor:"#4bb4c5", background:"#4bb4c5"}}
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
                        <p className='popup-task-title-exchange'>Intercambiar tarea: {request.name}</p>
                        <p className="fecha-texto"> Dia de la actividad: {fecha} </p>
                        <p className="alert-text"> Descripción: </p>
                        <Box className='popup-description-container-exchange'>
                            <p className="exchange-text"> {request.description} </p>
                        </Box>
                        <p className='popup-rango-exchange'>Tu compañero esta buscando intercambiar una tarea dentro de estas fechas:</p>
                        <p className="fecha-texto"> {new Date(request.initialAvailableDate).toLocaleDateString('es-MX', options)} - {new Date(request.endAvailableDate).toLocaleDateString('es-MX', options)} </p>
                    </div>
                    <div className='popup-button-container-exchange'>
                    {
                        activitiesExchange.length > 0 ? 
                        <FormControl required sx={{ m: 1, minWidth: 150, maxWidth: 150}}>
                            <InputLabel id="seleccionador-de-tarea">Tarea</InputLabel>
                            <Select
                            labelId="tarea-label"
                            id="tarea-requerida"
                            value={tarea}
                            label="Tarea *"
                            onChange={handleChange}
                            >
                            <MenuItem value = "">
                                <em>Ninguna</em>
                            </MenuItem>
                            {
                                activitiesExchange.map((menu_item) => <MenuItem key={menu_item.id} value={menu_item.id}>{menu_item.name}</MenuItem>)
                            }
                            </Select>
                            <FormHelperText>Elegir tarea para intercambiar.</FormHelperText>
                        </FormControl>:
                        <FormControl disabled sx={{ m: 1, minWidth: 150, maxWidth: 150}}>
                            <InputLabel id="seleccionador-de-tarea-deshabilitado">Tarea</InputLabel>
                            <Select
                            labelId="tarea-label"
                            id="tarea-requerida"
                            value={tarea}
                            label="Tarea *"
                            onChange={handleChange}
                            ></Select>
                            <FormHelperText>No tienes ninguna tarea intercambiable.</FormHelperText>
                        </FormControl>
                    }
                        <Button disabled={button} className='popup-button-exchange' onClick={() => handleAccept(request, tarea)} variant="contained"> Aceptar Intercambio </Button>
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