import React from "react";
import { TableRow, TableCell } from "@mui/material";
import './styles.css';


const SolicitudesRow = ({solicitud}) => {
    return (
      <TableRow key={solicitud.id} >
        <TableCell component="th" scope="row">
            <p> TEST </p>
        </TableCell>
        <TableCell align="center" >
            <p> TEST</p>
        </TableCell>
        <TableCell align="right">
            <p> TEST </p>
        </TableCell>
      </TableRow>
    );
  }
  
  export default SolicitudesRow;