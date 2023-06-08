import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useCallback } from "react";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import CompletionBar from "../components/CompletionBar/CompletionBar";
import LevelBadge from "../components/LevelBadge/LevelBadge";

const Progreso = ({ completedTasks, totalTasks }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getSolicitudes();
  }, []);

  const getSolicitudes = () => {
    axios
      .get("http://localhost:3000/assignment/A01635675/?status=2")
      .then(function (response) {
        setTasks(
          response.data.map((task) => {
            const dueDate = new Date(task.dueDate);
            const formattedDate = dueDate.toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return {
              name: task.name,
              date: `${formattedDate}`,
              completed: true,
            };
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleTaskCompletion = useCallback(
    (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    },
    [tasks]
  );


  const level = Math.min(completedTasks / 4, 5);

  return (
    <Grid container spacing={4} sx={{ mt: 0 }}>
      <Grid item md={7} xs={12}>
        <TaskProgress tasks={tasks} />
      </Grid>
      <Grid item md={5} xs={12}>
        <CompletionBar tasks={tasks} totalTasks={totalTasks} />
        <LevelBadge
          name="Rodrigo Chávez"
          level={level}
          tasksCompleted={completedTasks}
          totalTasks={totalTasks}
        />
      </Grid>
    </Grid>
  );
};

export default Progreso;
