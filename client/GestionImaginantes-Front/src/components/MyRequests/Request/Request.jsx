import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { MdOutlinePendingActions } from 'react-icons/md';
import './styles.css'
const Request = ({request, onClick}) => {
  return (
    <Box className="request-container pointer" onClick={onClick}>
        <Typography noWrap className="request-title">{request.name}</Typography>
        <Stack direction="row" alignItems="center" sx={{ml:2}}>
          <MdOutlinePendingActions size={15} color="#4bb4c5"/>
          <Typography className="request-status">En espera de confirmación</Typography>
        </Stack>
    </Box>
  );
}

export default Request;