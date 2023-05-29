import React, { useState } from "react";
import { Grid } from "@mui/material";
import TaskProgress from "../components/TaskProgress/TaskProgress";

const Progreso = () => {
    const [tasks, setTasks] = useState([
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Lectura", date: "14 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Lectura", date: "14 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Juegos", date: "20 de Mayo", completed: false},
        {name: "Taller de Pinturas", date: "20 de Mayo", completed: false}
    ]);

    const handleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    return (
        <Grid container spacing={4} sx={{mt:0}}>
            <Grid item md={7} xs={12}>
                <TaskProgress tasks={tasks} onTaskCompletion={handleTaskCompletion} />
            </Grid>
        </Grid>
    );
}

export default Progreso;
