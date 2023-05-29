import React from "react";
import { Grid } from "@mui/material";
import UpcomingTask from "../components/UpcomingTask/UpcomingTask";
import Announcements from "../components/Announcements/Announcements";
import MyRequests from "../components/MyRequests/MyRequests";


const Inicio = () => {
    const task = {name: "Taller de juegos", date: "20 de Mayo", description: "En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)"}
    const requests = [{id:1, title:"Taller Juegos Taller Juegos Taller Juegos Taller Juegos Taller Juegos Taller Juegos", status:"En espera de confirmación"}, {id:2, title:"Taller Juegos", status:"En espera de confirmación"}, {id:3, title:"Taller Juegos", status:"En espera de confirmación"}, {id:4, title:"Taller Juegos", status:"En espera de confirmación"}]
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={7} xs={12}>
                <UpcomingTask task={task}/>
            </Grid>
            <Grid item md={5} xs={12}>
                <MyRequests requests={requests}/>
            </Grid>
            <Grid item md={12} xs={12}>
                <Announcements/>
            </Grid>
        </Grid>
    );
}

export default Inicio;