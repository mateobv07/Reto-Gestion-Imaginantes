import React from "react";
import { TableRow, TableCell } from "@mui/material";
import Chip from '@mui/material/Chip';
import './styles.css';
import ChipsEquipos from "./ChipsEquipos";
const RequestOther = ({request}) => {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <TableRow key={request.id} sx={{zIndex:"1"}} >
      <TableCell component="th" scope="row">
        <p className='row-things'> {request.name}</p>
      </TableCell>
      <TableCell align="center" >
        <Chip label="Clickable" variant="outlined" sx={{fontFamily: "Futura", background: "#e6e8eb" }} onClick={handleClick} />
      </TableCell>
      <ChipsEquipos equipo1={request.equipoInterno} equipo2={request.equipoExterno}/>
      <TableCell align="right">
        <p className='row-date'> Fecha de Actividad: {request.date}</p>
      </TableCell>
    </TableRow>
  );
}

export default RequestOther;