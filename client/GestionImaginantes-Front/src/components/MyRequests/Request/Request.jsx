import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { MdOutlinePendingActions } from 'react-icons/md';
import './styles.css'
const Request = ({request}) => {
  return (
    <Box className="request-container">
        <Typography noWrap className="request-title">{request.title}</Typography>
        <Stack direction="row" alignItems="center" sx={{ml:2}}>
          <MdOutlinePendingActions size={15} color="#5EB2C2"/>
          <Typography className="request-status">{request.status}</Typography>
        </Stack>
    </Box>
  );
}

export default Request;