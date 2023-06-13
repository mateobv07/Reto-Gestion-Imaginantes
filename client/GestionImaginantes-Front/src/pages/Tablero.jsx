import React, {useState, useEffect, useCallback} from "react";
import { Grid } from "@mui/material";
import PendingTask from "../components/PendingTask/PendingTask";
import Calendar from "../components/Calendar/Calendar";
import Overview from "../components/Overview/Overview";
import axios from 'axios';



const Tablero = () => {
  const [tasks, setTasks] = useState(null);
    // { id: 1, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar) Se debe de hacer brainstorming y crear una lista de 3 posibles dinamicas con una planeacion completa Se debe de hacer brainstorming y crear una lista de 3 posibles dinamicas con una planeacion completa Se debe de hacer brainstorming y crear una lista de 3 posibles dinamicas con una planeacion completaSe debe de hacer brainstorming y crear una lista de 3 posibles dinamicas con una planeacion completa", date: "20 de Mayo", completed: false },
    // { id: 2, name: "Taller de Lectura", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 2, name: "Taller de Lectura", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "14 de Mayo", completed: false },
    // { id: 3, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 4, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 5, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 6, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 7, name: "Taller de Lectura", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "14 de Mayo", completed: false },
    // { id: 8, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 9, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 10, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 11, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 12, name: "Taller de Pinturas", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 13, name: "Taller de Pinturas", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 14, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 15, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 16, name: "Taller de Pinturas", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 17, name: "Taller de Pinturas", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 18, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 19, name: "Taller de Juegos", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },
    // { id: 20, name: "Taller de Pinturas", description:"En este taller de juegos debes de presentarte en (Lugar) y ayudar al evento donde jugaremos con niños de la colonia (Lugar)", date: "20 de Mayo", completed: false },

  useEffect(() => {
    getTasks()
  }, []);

  const getTasks = () => {
      axios.get('http://localhost:3000/assignment/A01635547/', {
      headers: {'Authorization': localStorage.getItem('Auth')}
      })
      .then(function (response) {
          console.log(response.data)
          setTasks(response.data)
      })
      .catch(function (error) {
          console.log(error);
      })
  }

    return (
        <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item md={7} xs={12}>
          <PendingTask tasks={tasks}/>
        </Grid>
        <Grid item md={5} xs={12}>
          <Calendar/>
          <Overview/>
        </Grid>
      </Grid>
    );
}

export default Tablero;