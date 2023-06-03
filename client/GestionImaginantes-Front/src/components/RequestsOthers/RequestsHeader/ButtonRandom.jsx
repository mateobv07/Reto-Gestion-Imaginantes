import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import './styles.css'


const ButtonRandom = ({alignment, handleChange}) => {
      return (
        <ToggleButtonGroup className="toggle-intercambios-solicitudes"
            value={alignment}
            exclusive
            onChange={handleChange}>
        <ToggleButton value={true}>
                <p className='card-title-request'>INTERCAMBIOS</p>
        </ToggleButton>
        <ToggleButton value={false}>
                <p className='card-title-request'>SOLICITUDES</p>
        </ToggleButton>
        </ToggleButtonGroup>
      );
}

export default ButtonRandom;