import React from "react";
import { Grid } from "@mui/material";


const Solicitudes = () => {
    const solicitudes = [{name: "Taller de juegos", date: "20 de Mayo", equipoInterno: "RED", equipoExterno: "PURPLE"},{name: "Taller de juegos", date: "20 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"}]
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={12} xs={12}>
                <h1> KILL MEEE</h1>
            </Grid>
        </Grid>
    );
}

export default Solicitudes;