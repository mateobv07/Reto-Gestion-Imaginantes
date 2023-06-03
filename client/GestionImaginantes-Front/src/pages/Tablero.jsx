import React from "react";
import { Grid } from "@mui/material";
import PendingTask from "../components/PendingTask/PendingTask";
import Calendar from "../components/Calendar/Calendar";
import Overview from "../components/Overview/Overview";


const Tablero = () => {
    const requests = [
        {id:1, title:"Taller Lectura", date:"14 de Mayo"},
        {id:2, title:"Taller Juegos", status:"20 de mayo"},
        {id:3, title:"Taller Instrumentos", status:"25 de mayo"},
        {id:4, title:"Taller Juegos", status:"28 de mayo"}
    ];

    return (
        <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item md={7} xs={12}>
          <PendingTask/>
        </Grid>
        <Grid item md={5} xs={12}>
          <Calendar/>
          <Overview/>
        </Grid>
      </Grid>
    );
}

export default Tablero;