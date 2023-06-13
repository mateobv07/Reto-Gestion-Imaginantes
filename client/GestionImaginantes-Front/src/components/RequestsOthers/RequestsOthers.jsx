import React, {useState} from "react";
import { Table, TableBody, Box} from "@mui/material";
import ExchangeOthers from "./ExchangesOthers/ExchangesOthers";
import { TbArrowsLeftRight } from 'react-icons/tb';
import ButtonAlternate from "./ButtonAlternate";
import ExchangeOwnRow from "../ExchangeOwnRow/ExchangeOwnRow";
import axios from 'axios';

import './styles.css';

const RequestsOthers = ({intercambios, userInfo}) => {
  const [alignment, setAlignment] = useState(true);

  const [dialog, setDialog] = useState(false);
  
  const [myRequest, setmyRequests] = useState([]);

  const handleExit = () => {
    setDialog(false);
  };
  const handleClickOpen = () => {
    setDialog(true);
  };
  
  const getInfoSolicitudes =() => {
    axios.get('http://localhost:3000/request/my', {
      headers: {'Authorization': localStorage.getItem('Auth')}})
    .then(res => {
    setmyRequests(res.data);})}

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment){
      return;
    }
    else {
      getInfoSolicitudes();}}

  const handleClickDeleteRequest = (idRequest) => {
    setDialog(false);
    console.log("borrando intercambio");
    axios.delete(('http://localhost:3000/request/' + idRequest), {
    headers: {'Authorization': localStorage.getItem('Auth')}})
    .then(res => {
    console.log(res);})
    const requiredIndex = myRequest.findIndex(el => {
      return el.id === String(idRequest);
    });
    myRequest.splice(requiredIndex, 1);
  };
  

  return (
    <Box className="requests-exchange-container" sx={{overflow:"hidden" ,boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row-requests'>
        <ButtonAlternate alignment={alignment} handleChange={handleChange}/>
          <Box className='round-paper' sx={{mt:"10px"}}>
            <TbArrowsLeftRight size={24} color='#FFFFFF' />
          </Box>
      </div>
      <hr className="gray-divider"/>
      <div className="table-requests-container">
        {alignment ? 
          intercambios.length > 0 ?  
            intercambios.map((row) => (<ExchangeOthers key={row.id} request={row} userInfo={userInfo}/>)) :
             <p className="empty-request"> No se han encontrado intercambios</p> :
          <Box className="tables-in-tables">
            {myRequest.length > 0 ? 
              <Table padding="normal" sx={{marginBottom:"6.5vh"}}>
                <TableBody>
                  {myRequest.map((row) => (<ExchangeOwnRow key={row.id} solicitud={row} dialog={dialog} handleExit={handleExit} handleClickOpen={handleClickOpen} handleClickDeleteRequest={handleClickDeleteRequest}/>))}
                </TableBody>
              </Table> :
              <p className="empty-request"> No se han encontrado intercambios propios</p>
            }
          </Box>
        }
      </div>
    </Box>
  );
}

export default RequestsOthers;