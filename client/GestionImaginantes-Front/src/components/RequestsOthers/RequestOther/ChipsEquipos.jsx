import { TableCell } from "@mui/material";
import React from "react";
import './styles.css';
import Chip from '@mui/material/Chip';


const ChipsEquipos = ({equipo1,equipo2}) => {

    return (
    <TableCell align="right">
        <Chip className="chip-interno" label={equipo1} variant="outlined" sx={{color:equipo1, borderColor:equipo1}}/>
        <Chip className="chip-externo" label={equipo2} variant="outlined" sx={{color:equipo2, borderColor:equipo2}}/>
    </TableCell>
    );
  }
  
  export default ChipsEquipos;