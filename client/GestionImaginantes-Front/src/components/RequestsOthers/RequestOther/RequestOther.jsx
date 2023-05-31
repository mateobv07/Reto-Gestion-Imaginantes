import React from "react";
import { Paper, Typography, Stack } from "@mui/material";
import './styles.css'

const RequestOther = ({request}) => {
  return (
    <h1>
        {request.name}
    </h1>
  );
}

export default RequestOther;