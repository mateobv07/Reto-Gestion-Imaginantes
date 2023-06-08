import React,  {useEffect} from "react";
import './styles.css';
import Chip from '@mui/material/Chip';


const ChipsEquipos = ({equipo1,equipo2}) => {

    const [propiedadesInterno, setPropiedadesInterno] = React.useState([]);
    const [propiedadesExterno, setPropiedadesExterno] = React.useState([]);
    
    const colorTeam = ["red", "blue", "green"];
    const typeTeam = ["Primer Equipo", "Segundo Equipo", "Tercer Equipo"]

    useEffect(() => {
        setPropiedadesInterno([typeTeam[equipo1],colorTeam[equipo1]]);
        setPropiedadesExterno([typeTeam[equipo2],colorTeam[equipo2]]);
      },[equipo1,equipo2]);
    
    return (
    <div className="chip-equipos-container">
        <Chip className="chip-interno" label={propiedadesInterno[0]} variant="outlined" sx={{color:propiedadesInterno[1], borderColor:propiedadesInterno[1], paddingRight:"10px", paddingLeft:"10px", paddingBottom:"auto"}}/>
        <Chip className="chip-externo" label={propiedadesExterno[0]} variant="outlined" sx={{color:propiedadesExterno[1], borderColor:propiedadesExterno[1], paddingRight:"10px", paddingLeft:"10px", paddingBottom:"auto"}}/>
    </div>
    );
  }

  export default ChipsEquipos;