import React, { useState } from "react";
import { Box, Typography, Checkbox} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "./styles.css";


const PendTask = ({ task, onClick, isChecked}) => {
  const navigate = useNavigate();                    // Para Navegar

  const CustomCheckbox = styled(Checkbox)({  // Style sirve para personalizar los componentes
    color: "#8C8B8B",                        // Color de la cajita vacía
    "&.Mui-checked": { color: "#36b4c5" }    // Color de la cajita llena
  });

  const handleCheckboxClick = () => { // Función del CheckBox que activa el Pop-up
    onClick();
  };

  // Sintaxis de condicional --- condicion ? valor_si_verdadero : valor_si_falso;
  return (
    <Box className="pending-task-container" display="flex" alignItems="center">
      <CustomCheckbox
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}  // Cambiar el tamaño del CheckBox y funciones del CheckBox
        checked={isChecked} onClick={handleCheckboxClick}/>

      <Typography className={`pending-task-title ${isChecked ? 'check-cross' : ''}`} // Para tachar el nombre y alinear el nombre en automático
      style={{ marginRight: "auto" }}>
        {task.name}
      </Typography>

      <Typography className={`pending-task-date ${isChecked ? 'check-cross' : ''}`} // Para tachar la fecha y alinear la fecha un poco más a la izquierda
      style={{ paddingRight: "25px" }}>
        Fecha Límite: {new Date(task.dueDate).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
      </Typography>
    </Box>
  );
}

export default PendTask;