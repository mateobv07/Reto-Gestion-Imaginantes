import React, {useState, useEffect, useCallback} from "react";
import { Grid } from "@mui/material";
import PendingTask from "../components/PendingTask/PendingTask";
import Calendar from "../components/Calendar/Calendar";
import Overview from "../components/Overview/Overview";
import axios from 'axios';



const Tablero = () => {
  const [tasks, setTasks] = useState(null);
  
  useEffect(() => {
    getTasks()
  }, []);

  const getTasks = () => {
      axios.get('http://localhost:3000/assignment/', {
      headers: {'Authorization': localStorage.getItem('Auth')}
      })
      .then(function (response) {
          console.log(response.data)
          if (response.data.length){
            setTasks(response.data)
          }
      })
      .catch(function (error) {
          console.log(error);
      })
  }

    return (
        <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item md={7} xs={12}>
          <PendingTask tasks={tasks} resetTask={getTasks} getTasks={getTasks}/>
        </Grid>
        <Grid item md={5} xs={12}>
          <Calendar/>
          <Overview/>
        </Grid>
      </Grid>
    );
}

export default Tablero;