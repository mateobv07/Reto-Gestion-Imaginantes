import React from "react";
import { Grid } from "@mui/material";
import RequestsOthers from "../components/RequestsOthers/RequestsOthers";


const Solicitudes = () => {
    const solicitudes = [{id: 1, name: "Taller de juegos", date: "20 de Mayo", equipoInterno: "RED", equipoExterno: "PURPLE"},{id: 2, name: "Taller de juegos", date: "20 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"}]
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={12} xs={12}>
                <RequestsOthers requests={solicitudes}/>
            </Grid>
        </Grid>
    );
}

export default Solicitudes;