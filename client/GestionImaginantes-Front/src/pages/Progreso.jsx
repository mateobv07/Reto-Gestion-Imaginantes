import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import TaskProgress from "../components/TaskProgress/TaskProgress";
import CompletionBar from "../components/CompletionBar/CompletionBar";
import LevelBadge from "../components/LevelBadge/LevelBadge";
import AssignmentPopUp from "../components/AssignmentPopUp/AssignmentPopUp";

const Progreso = ({ completedTasks, totalTasks }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getSolicitudes();
  }, []);

  const getSolicitudes = () => {
    axios
      .get("http://localhost:3000/assignment/?status=2", {
        headers: { Authorization: localStorage.getItem("Auth") },
      })
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
              _id: task.id,
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

  const handleTaskClick = (id) => {
    getTaskInfo(id);
  };

  const getTaskInfo = (id) => {
    axios
      .get("http://localhost:3000/assignment/" + id, {
        headers: { Authorization: localStorage.getItem("Auth") },
      })
      .then(function (response) {
        setCurrentTask(response.data);
        setShowModal(true);
      });
  };

  const level = Math.min(completedTasks / 4, 5);

  return (
    <Grid container spacing={4} sx={{ mt: 0 }}>
      <Grid item md={7} xs={12}>
        <TaskProgress tasks={tasks} getTaskInfo={handleTaskClick} />
      </Grid>
      <Grid item md={5} xs={12}>
        <CompletionBar tasks={tasks} totalTasks={totalTasks} />
        <LevelBadge
          name="Mateo Bernasconi Vargas"
          level={level}
          tasksCompleted={completedTasks}
          totalTasks={totalTasks}
        />
      </Grid>
      {currentTask && (
        <AssignmentPopUp
          show={showModal}
          setShow={setShowModal}
          task={currentTask}
        />
      )}
    </Grid>
  );
};

export default Progreso;
