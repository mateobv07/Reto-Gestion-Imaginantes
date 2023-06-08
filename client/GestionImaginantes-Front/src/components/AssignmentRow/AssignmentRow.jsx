import React from "react";
import { TableRow, TableCell, IconButton} from "@mui/material";
import { MdDelete } from "react-icons/md";
import DeleteRequestButton from "../DeleteRequestButton/DeleteRequestButton";

import './styles.css';


const AssignmentRow = ({solicitud, tipo}) => {
  const date1 = new Date(solicitud.dueDate);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  return (
    <TableRow >
      <TableCell component="th" scope="row" sx={{width:"28vh"}}>
          <p className="row-things-assignment"> {solicitud.name} </p>
      </TableCell>
      <TableCell align="left">
        <p className="row-date-assignment"> Entrega: {date1.toLocaleDateString('es-MX', options)} </p>
      </TableCell>
      <TableCell align="right">
        <DeleteRequestButton id={solicitud.id} tipo={tipo}/>
      </TableCell>
    </TableRow>
    );
  }
  
  export default AssignmentRow;