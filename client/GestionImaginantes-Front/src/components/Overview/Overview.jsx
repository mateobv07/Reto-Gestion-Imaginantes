import React from "react";
import { Box, Button } from "@mui/material";
import './styles.css'


const Overview = () => {
    return (
        <Box className="small-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
            <div className='title-row'>
            <p className='card-title'>OVERVIEW</p>
            </div>
        </Box>
    );
}

export default Overview;