import React from "react";
import { Box } from "@mui/material";
import { TbBellRinging } from 'react-icons/tb';
import Request from "./Request/Request";
import './styles.css'

const MyRequests = ({requests}) => {
  return (
    <Box className="task-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row'>
        <p className='card-title'>SOLICITUDES</p>
        <Box className='round-paper' component="div">
          <TbBellRinging size={24} color='#FFFFFF' />
        </Box>
      </div>
      <div class="request-list-container">
        {requests.map((request) => (
          <Request key={request.id} request={request}/>
        ))}
      </div>
    </Box>
  );
}

export default MyRequests;