import React, {useState, useCallback} from "react";
import { Grid } from "@mui/material";
import PendingTask from "../components/PendingTask/PendingTask";
import Calendar from "../components/Calendar/Calendar";
import Overview from "../components/Overview/Overview";


const Tablero = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 2, name: "Taller de Lectura", date: "14 de Mayo", completed: false },
    { id: 3, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 4, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 5, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 6, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 7, name: "Taller de Lectura", date: "14 de Mayo", completed: false },
    { id: 8, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 9, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 10, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 11, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 12, name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { id: 13, name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { id: 14, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 15, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 16, name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { id: 17, name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { id: 18, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 19, name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { id: 20, name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
  ]);

  const handleTaskCompletion = useCallback(
    (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    },
    [tasks]
  );

    return (
        <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item md={7} xs={12}>
          <PendingTask tasks={tasks} onTaskCompletion={handleTaskCompletion}/>
        </Grid>
        <Grid item md={5} xs={12}>
          <Calendar/>
          <Overview/>
        </Grid>
      </Grid>
    );
}

export default Tablero;