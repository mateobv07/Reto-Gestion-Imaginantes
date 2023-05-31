import React from "react";
import { Box, Divider } from "@mui/material";
import RequestOther from "./RequestOther/RequestOther";
import { TbArrowsLeftRight } from 'react-icons/tb';
import './styles.css'


const RequestsOthers = ({requests}) => {
  
    return (
      <Box className="task-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
        <div className='title-row'>
            <div className='title-row-inside'>
            <p className='card-title-request' >SOLICITUDES DE IMAGINANTES</p>
            <p className='card-title-request' >SOLICITUDES DE IMAGINANTES</p>
            </div>
          <Box className='round-paper'>
            <TbArrowsLeftRight size={24} color='#FFFFFF' />
          </Box>
        </div>
        <div className="request-others-container">
          {requests.map((request) => (
            <RequestOther key={request.id} request={request}/>
          ))}
        </div>
      </Box>
    );
  }
  
  export default RequestsOthers;