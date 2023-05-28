import React from "react";
import { Grid } from "@mui/material";
import UpcomingTask from "../components/UpcomingTask/UpcomingTask";
import Announcements from "../components/Announcements/Announcements";
import MyRequests from "../components/MyRequests/MyRequests";


const Inicio = () => {
    const task = {name: "Taller de juegos", date: "20 de Mayo", description: "En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)"}

    return (
        <Grid container spacing={4} sx={{mt:0}}>
            <Grid item md={7} xs={12}>
                <UpcomingTask task={task}/>
            </Grid>
            <Grid item md={5} xs={12}>
                <MyRequests/>
            </Grid>
            <Grid item md={12} xs={12}>
                <Announcements/>
            </Grid>
        </Grid>
    );
}

export default Inicio;