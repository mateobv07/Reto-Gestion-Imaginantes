import React from "react";
import { TableRow, TableCell } from "@mui/material";
import './styles.css';


const AssignmentRow = ({solicitud}) => {
    return (
      <TableRow >
        <TableCell component="th" scope="row">
            <p className="row-things"> {solicitud.name} </p>
        </TableCell>
        <TableCell align="center" >
            <p className="row-date"> {solicitud.date}</p>
        </TableCell>
        <TableCell align="right">
          {solicitud.hasOwnProperty("task_id") ? <p> BOTTTONNNN SOLICITUD PROPIA </p> : <p> BOTTTONNNN INTERCAMBIO PROPIA </p>}
        </TableCell>
      </TableRow>
    );
  }
  
  export default AssignmentRow;