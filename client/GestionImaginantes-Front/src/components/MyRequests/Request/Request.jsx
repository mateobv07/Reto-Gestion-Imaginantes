import React from "react";
import { Paper, Typography, Stack } from "@mui/material";
import { MdOutlinePendingActions } from 'react-icons/md';
import './styles.css'
const Request = ({request}) => {
  return (
    <Paper className="request-container">
        <Typography noWrap className="request-title">{request.title}</Typography>
        <Stack direction="row"  alignItems="center" sx={{ml:2}}>
          <MdOutlinePendingActions size={18} color="#18A900"/>
          <Typography className="request-status">{request.status}</Typography>
        </Stack>
    </Paper>
  );
}

export default Request;