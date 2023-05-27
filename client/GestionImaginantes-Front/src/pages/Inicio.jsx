import React from "react";
import { Grid } from "@mui/material";
import ProximaTarea from "../components/ProximaTarea/ProximaTarea";
const Inicio = () => {
    return (
        <Grid container spacing={4} sx={{mt:0}}>
            <Grid item md={7} xs={12}>
                <ProximaTarea/>
            </Grid>
            <Grid item md={5} xs={12}>
                <ProximaTarea/>
            </Grid>
            <Grid item md={12} xs={12}>
                <ProximaTarea/>
            </Grid>
        </Grid>
    );
}

export default Inicio;