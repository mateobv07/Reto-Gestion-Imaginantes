import React, {useState} from "react";
import { Table, TableBody, TableRow, TableContainer, Box, ToggleButtonGroup, ToggleButton} from "@mui/material";
import ExchangeOthers from "./ExchangesOthers/ExchangesOthers";
import { TbArrowsLeftRight } from 'react-icons/tb';
import TableOwnPending from "./TableOwnPending/TableOwnPending";
import ButtonAlternate from "./ButtonAlternate";
import axios from 'axios';

import './styles.css';

const RequestsOthers = ({intercambios, userInfo}) => {
  const userID = "a01635675";
  const [alignment, setAlignment] = useState(true);

  const [myRequest, setmyRequests] = React.useState([]);
  const [requestAssignments, setmyRequestsAssignments] = React.useState([]);
    
  const getInfoSolicitudes =() => {
    axios.get(('http://localhost:3000/request/' + userID + '/my'))
    .then(res => {
    setmyRequests(res.data);})

    axios.get(('http://localhost:3000/assignment/' + userID + '?status=1'))
    .then(res => {
    setmyRequestsAssignments(res.data);})}

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment){
      return;
    }
    else {
      getInfoSolicitudes();
      }
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
        {alignment ? intercambios.map((row) => 
          (<ExchangeOthers key={row.id} request={row} userInfo={userInfo}/>)) :
          <TableOwnPending intercambiosPropios={myRequest} solicitudesPropias={requestAssignments}/>
        }
      </div>
    </Box>
  );
  }
  
  export default RequestsOthers;