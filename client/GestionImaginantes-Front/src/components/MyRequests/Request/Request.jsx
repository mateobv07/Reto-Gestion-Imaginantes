import React from "react";
import { Paper, Typography } from "@mui/material";
import { TbBellRinging } from 'react-icons/tb';
import './styles.css'
const Request = ({request}) => {
  return (
    <Paper className="request-container">
        <Typography noWrap className="request-title">{request.title}</Typography>
        <Typography>{request.status}</Typography>
    </Paper>
  );
}

export default Request;