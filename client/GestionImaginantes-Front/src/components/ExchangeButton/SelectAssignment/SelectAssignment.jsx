import React from "react";
import {Chip, Dialog, IconButton, Button, Box, InputLabel, MenuItem, FormHelperText, FormControl, Select} from "@mui/material";
import { BsXLg } from "react-icons/bs";
import "./styles.css";

const ExchangeButton = ({activitiesExchange, id, request, handleClickGetRequest, open, handleExit, fecha}) => {

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
    <MenuItem value={10}>Ten</MenuItem>
  );
};

export default ExchangeButton;