import React from "react";
import { Box, Button } from "@mui/material";
import './styles.css'


const PendingTask = () => {
    return (
        <Box className="task-pending-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
            <div className='title-row'>
            <p className='card-title'>TAREAS PENDIENTES</p>
            </div>
        </Box>
    );
}

export default PendingTask;