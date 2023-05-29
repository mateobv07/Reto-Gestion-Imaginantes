import React from "react";
import { Grid } from "@mui/material";
import PendingTask from "../components/PendingTask/PendingTask";

const Tablero = () => {
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={7} xs={12}>
                <PendingTask/>
            </Grid>
        </Grid>
    );
}

export default Tablero;