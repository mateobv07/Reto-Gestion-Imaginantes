import React from "react";
import { Grid } from "@mui/material";
import RequestsOthers from "../components/RequestsOthers/RequestsOthers";


const Solicitudes = () => {
      const requests =
        [{id: 1, name: "Taller de Juegos", date: "20 de Mayo", equipoInterno: "RED", equipoExterno: "PURPLE"},
        {id: 2, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"},
        {id: 3, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"},
        {id: 4, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "BLUE"},
        {id: 5, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"},
        {id: 6, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"},
        {id: 7, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "BLUE"},
        {id: 8, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"},
        {id: 9, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"},
        {id: 10, name: "Taller de Diseño", date: "21 de Mayo", equipoInterno: "RED", equipoExterno: "GREEN"}]
        const solicitudes =
        [{id: 1, name: "AAAAAAAA", date: "20 de Mayo", estado: "2", tipo: "1"},
        {id: 2, name: "AAAAAAAA de Diseño", date: "21 de Mayo",  estado: "2", tipo: "2"},
        {id: 3, name: "AAAAAAAA de Diseño", date: "21 de Mayo", estado: "1", tipo: "2"},
        {id: 4, name: "AAAAAAAA de Diseño", date: "21 de Mayo", estado: "1", tipo: "1"},
        {id: 5, name: "Taller de Diseño", date: "21 de Mayo",  estado: "2", tipo: "2"},
        {id: 6, name: "AAAAAAAA de Diseño", date: "21 de Mayo",  estado: "1", tipo: "2"},
        {id: 7, name: "Taller de Diseño", date: "21 de Mayo",  estado: "1", tipo: "1"},
        {id: 8, name: "Taller de Diseño", date: "21 de Mayo", estado: "1", tipo: "2"},
        {id: 9, name: "Taller de Diseño", date: "21 de Mayo",  estado: "2", tipo: "1"},
        {id: 10, name: "Taller de Diseño", date: "21 de Mayo",  estado: "1", tipo: "2"}]
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={12} xs={12}>
                <RequestsOthers requests={requests} solicitudes={solicitudes}/>
            </Grid>
        </Grid>
    );
}

export default Solicitudes;