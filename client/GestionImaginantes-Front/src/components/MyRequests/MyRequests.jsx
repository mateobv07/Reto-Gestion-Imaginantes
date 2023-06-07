import React from "react";
import { Box } from "@mui/material";
import { TbBellRinging } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";
import Request from "./Request/Request";
import './styles.css'

const MyRequests = ({requests}) => {
  const navigate = useNavigate();

  return (
    <Box className="task-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
      <div className='title-row-r pointer' onClick={() => navigate("/solicitudes")}>
        <p className='card-title' >SOLICITUDES PENDIENTES</p>
        <Box className='round-paper'>
          <TbBellRinging size={24} color='#FFFFFF' />
        </Box>
      </div>
      <hr className="line"/>
      <div className="request-list-container">
        {requests.map((request) => (
          <Request key={request.id} request={request}/>
        ))}
      </div>
    </Box>
  );
}

export default MyRequests;