import React, {useState} from "react";
import { Table, TableBody, TableRow, TableContainer, Box, ToggleButtonGroup, ToggleButton} from "@mui/material";
import ExchangeOthers from "./ExchangesOthers/ExchangesOthers";
import { TbArrowsLeftRight } from 'react-icons/tb';
import TableOwnPending from "./TableOwnPending/TableOwnPending";
import ButtonAlternate from "./ButtonAlternate";

import './styles.css';

const RequestsOthers = ({intercambios,intercambiosPropios, solicitudes, userInfo}) => {
    const [alignment, setAlignment] = useState(true);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
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
                        <TableOwnPending intercambiosPropios={intercambiosPropios} solicitudesPropias={solicitudes}/>
            }
        </div>
        </Box>
    );
  }
  
  export default RequestsOthers;