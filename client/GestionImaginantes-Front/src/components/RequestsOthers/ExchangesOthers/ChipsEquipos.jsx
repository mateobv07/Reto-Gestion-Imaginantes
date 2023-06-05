import { TableCell } from "@mui/material";
import React,  {useEffect} from "react";
import './styles.css';
import Chip from '@mui/material/Chip';


const ChipsEquipos = ({equipo1,equipo2}) => {

    const [colorInterno, setColorInterno] = React.useState("red");
    const [colorExterno, setColorExterno] = React.useState("red");
    
    const changeColorsInterno = () =>{
        if (equipo1=="0") {
            return;
        }
        else if (equipo1=="1") {
            setColorInterno("blue");
        }
        else {
            setColorInterno("green");
        }
    }
    const changeColorsExterno = () =>{
        if (equipo2=="0") {
            return;
        }
        else if (equipo2=="1") {
            setColorExterno("blue");
        }
        else {
            setColorExterno("green");
        }
    }

    useEffect(() => {
        changeColorsInterno();
        changeColorsExterno();
      },[]);
    
    return (
    <TableCell align="right" sx={{width:"300px"}}>
        <Chip className="chip-interno" label={equipo1} variant="outlined" sx={{color:colorInterno, borderColor:colorInterno}}/>
        <Chip className="chip-externo" label={equipo2} variant="outlined" sx={{color:colorExterno, borderColor:colorExterno}}/>
    </TableCell>
    );
  }
  
  export default ChipsEquipos;