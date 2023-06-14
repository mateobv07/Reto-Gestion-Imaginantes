import React from "react";
import { TableRow, TableCell, Dialog, IconButton, Button, Box} from "@mui/material";
import { MdDelete, MdOutlinePendingActions } from "react-icons/md";
import { BsXLg } from "react-icons/bs";
import './styles.css';


const ExchangeOwnRow = ({solicitud, handleExit, handleClickOpen, handleClickDeleteRequest, dialog}) => {
  const date1 = new Date(solicitud.dueDate);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const [estatus,setEstatus] = React.useState("");
  const estatuses = ["Buscando con quien intercambiar...", "En espera de confirmación...", "Intercambio completado"]

  React.useEffect(() => {
    setEstatus(estatuses[solicitud.status]);
  },[]);

  return (
    <TableRow >
      <TableCell component="th" scope="row" sx={{width:"28vh"}}>
          <p className="row-things-assignment"> {solicitud.name} </p>
      </TableCell>
      <TableCell align="left">
        <p className="row-date-assignment"> Entrega: {date1.toLocaleDateString('es-MX', options)} </p>
      </TableCell>
      <TableCell align="right">
        <p className="exchange-status-text center-icon-text"> <MdOutlinePendingActions size={18} color="#5EB2C2"/> Estado: {estatus} </p>
      </TableCell>
      <TableCell align="right">
        <div>
          <IconButton aria-label="delete" onClick={handleClickOpen}>
            <MdDelete/>
          </IconButton>
          <Dialog open={dialog} onClose={handleExit}>
            <Box className='popup-container-delete-request'> 
              <div className='popup-cancel-container-delete'>
                <IconButton className='popup-cancel-icon-delete' aria-label="exit" onClick={handleExit}>
                  <BsXLg size={18} color="#8C8B8B"/>
                </IconButton>
              </div>

              <div className='popup-text-container-delete'>
                <p className='popup-task-title-delete'>¿Estas seguro de que quieres borrar esta solicitud de intercambio?</p>
                <p className="alert-text"> Esta acción no se puede deshacer. </p>
              </div>

              <div className='popup-button-container-delete'>
                <Button className='popup-button-delete' onClick={() => handleClickDeleteRequest(solicitud.id)} variant="contained"> Borrar </Button>
              </div>
            </Box>
          </Dialog>
        </div>
      </TableCell>
    </TableRow>
    );
  }
  
  export default ExchangeOwnRow;