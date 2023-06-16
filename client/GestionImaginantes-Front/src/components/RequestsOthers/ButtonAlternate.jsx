import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Tooltip, IconButton } from "@mui/material";
import {AiFillQuestionCircle} from 'react-icons/ai'
import React from "react";
import './styles.css'


const ButtonAlternate = ({alignment, handleChange}) => {
      return (
        <ToggleButtonGroup className="toggle-exchange-requests"
            value={alignment}
            exclusive
            onChange={handleChange}>
        <Tooltip title="Tareas de otros estudiantes disponibles para intercambiar. Selecciona la que se acomode más a tu preferencia" placement="top">
                <ToggleButton value={true}>
                        <p className='card-title-request'>INTERCAMBIOS AJENOS <AiFillQuestionCircle size={15} color="grey" className='info-icon-requests'/></p>
                </ToggleButton>
        </Tooltip>
        <Tooltip title="Lista de tus solicitudes de intercambio" placement="top">
                <ToggleButton value={false}>
                        <p className='card-title-request'>INTERCAMBIOS PROPIOS <AiFillQuestionCircle size={15} color="grey" className='info-icon-requests'/></p>
                </ToggleButton>
        </Tooltip>
        </ToggleButtonGroup>
      );
}

export default ButtonAlternate;