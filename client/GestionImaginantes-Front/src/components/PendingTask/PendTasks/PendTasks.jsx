import React, { useState } from "react";
import { Box, Typography, Checkbox, Dialog} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import PendPopUp from "../PendPopUp/PendPopUp";
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp";
import RequestPopUp from "../RequestPopUp/RequestPopUp";
import axios from "axios";


const PendTask = ({ task }) => {
  const navigate = useNavigate();                            // Para Navegar
  const [isChecked, setIsChecked] = useState(false);         // Hook para CheckBox
  const [isPopupOpen, setIsPopupOpen] = useState(false);     // Hook para Pop-up
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); // hook para confirm pop-up
  const [isRequestOpen, setIsRequest] = useState(false);

  const CustomCheckbox = styled(Checkbox)({  // Style sirve para personalizar los componentes
    color: "#8C8B8B",                        // Color de la cajita vacía 
    "&.Mui-checked": { color: "#5EB2C2" }    // Color de la cajita llena
  });

  // const updateTask = () => {
  //   axios.patch(('http://localhost:3000/assignment/' + task.id), 
  //     {headers: {'Authorization': localStorage.getItem('Auth')}},
  //     {status: {value: 1}}
  //   );
  // };

  const handleCheckboxClick = () => { // Función del CheckBox que activa el Pop-up
    setIsPopupOpen(true);
    setIsChecked(true);
  };
  
  const handleConfirm = () => {   // Función del Pop-up que si se confirma, alterna el valor de la CheckBox 
    // setIsConfirmOpen(false);
    // setIsRequest(false);
    if (isConfirmOpen) {
      setIsConfirmOpen(false);
      console.log("terminaste");
      // updateTask();
    } 
    else {
      setIsRequest(false);
      console.log("solicitaste")
    }       
  };

  const handleDone = () => {
    setIsPopupOpen(false); 
    setIsConfirmOpen(true);
  }

  const handleCancel = () => {   // Función del Pop-up que si se cancela, no cambia el estado de la CheckBox
    setIsPopupOpen(false);
    setIsConfirmOpen(false);       // El Pop-up se desactiva
    setIsChecked(false);
    setIsRequest(false);
  };

  const handleCambio = () => {   // Función del Pop-up que si se cancela, no cambia el estado de la CheckBox
    setIsPopupOpen(false);       // El Pop-up se desactiva
    setIsRequest(true);
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

      <Dialog open={isPopupOpen} //El primer pop-up que marca como realizado o pide cambio
      disableBackdropClick> 
        <PendPopUp task={task} popOpen = {isPopupOpen} popCambio={handleCambio} popCancel={handleCancel} popDone={handleDone}/>
      </Dialog>

      <Dialog open={isConfirmOpen} //El segundo pop-up que verifica si se quiere hacer un cambio
      disableBackdropClick>
        <ConfirmPopUp task={task} popConfirm={handleConfirm} popCancel={handleCancel}/>
      </Dialog>

      <Dialog open={isRequestOpen} //El segundo pop-up que verifica si se quiere hacer un cambio
      disableBackdropClick>
        <RequestPopUp task={task} popConfirm={handleConfirm} popCancel={handleCancel}/>
      </Dialog>

    </Box>
  );
}

export default PendTask;