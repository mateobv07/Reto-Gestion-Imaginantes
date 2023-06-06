import React, {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import axios from 'axios';
import UpcomingTask from "../components/UpcomingTask/UpcomingTask";
import Announcements from "../components/Announcements/Announcements";
import MyRequests from "../components/MyRequests/MyRequests";


const Inicio = () => {
    const [upcomingTask, setUpcomingTask] = useState({})

    useEffect(() => {
        getRequests()
      }, []);


    const getRequests = () => {
        axios.get('http://localhost:3000/assignment/A01635675/upcoming')
        .then(function (response) {
            console.log(response.data)
            setUpcomingTask(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    

    const requests = [{id:1, title:"Taller Juegos", status:"En espera de confirmación"}, {id:2, title:"Taller Lectura", status:"En espera de confirmación"}, {id:3, title:"Taller Instrumentos", status:"En espera de confirmación"}, {id:4, title:"Taller Juegos", status:"En espera de confirmación"}]
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={7} xs={12}>
                <UpcomingTask task={upcomingTask}/>
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