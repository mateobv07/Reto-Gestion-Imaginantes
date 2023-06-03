import React, { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import { useCallback } from "react";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import CompletionBar from "../components/CompletionBar/CompletionBar";
import LevelBadge from "../components/LevelBadge/LevelBadge";

const Progreso = () => {
  const [tasks, setTasks] = useState([
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Lectura", date: "14 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Lectura", date: "14 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Juegos", date: "20 de Mayo", completed: false },
    { name: "Taller de Pinturas", date: "20 de Mayo", completed: false },
  ]);

  const handleTaskCompletion = useCallback(
    (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    },
    [tasks]
  );

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );
  const level = Math.min(completedTasks / 4, 5);

  return (
    <Grid container spacing={4} sx={{ mt: 0 }}>
      <Grid item md={7} xs={12}>
        <TaskProgress tasks={tasks} onTaskCompletion={handleTaskCompletion} />
      </Grid>
      <Grid item md={5} xs={12}>
        <CompletionBar tasks={tasks} />
        <LevelBadge name="Rodrigo Chávez" level={level} tasksCompleted={completedTasks} totalTasks={tasks.length} />
      </Grid>
    </Grid>
  );
};

export default Progreso;
