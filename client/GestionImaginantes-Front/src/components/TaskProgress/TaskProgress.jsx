import * as React from "react";
import { Box } from "@mui/material";
import { BiChalkboard } from "react-icons/bi";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";


import "./styles.css";

const TaskProgress = ({ tasks, getTaskInfo }) => {
  const CustomCheckbox = styled(Checkbox)({
    color: "black",
    "&.Mui-checked": {
      color: "#36b4c5",
    },
  });

  return (
    <Box
      className="taskprogress-card-container"
      sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="title-row">
        <p className="card-title">PROGRESO DE TAREAS</p>
        <Box className="round-paper">
          <BiChalkboard size={24} color="#FFFFFF" />
        </Box>
      </div>

      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={task._id ? task._id : index}
            className={`pointer taskprogress-container ${
              index === tasks.length - 1 ? "last-task" : ""
            }`}
            onClick={() => getTaskInfo(task._id)}
          >
            <CustomCheckbox
              checked={true}
              disabled
            />
            <p
              className={`taskprogress-title ${
                task.completed ? "completed-task" : ""
              }`}
            >
              {task.name}
            </p>
            <p
              className={`taskprogress-date-text ${
                task.completed ? "completed-task" : ""
              }`}
            >
              Fecha Límite: {task.date}
            </p>
          </div>
        ))
      ) : (
        <center >
          <p className="upcoming-task-title"> No hay tareas completadas </p>
        </center>

      )}
    </Box>
  );
};

export default TaskProgress;
