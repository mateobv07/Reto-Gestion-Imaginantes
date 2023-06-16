import React from "react";
import { Box} from "@mui/material";
import { useMemo } from "react";
import './styles.css'


const Overview = ({tasks, compTasks}) => {
    const pendTasks = useMemo(() => {
        if (tasks === null) {
          return 0;
        }
        return tasks.filter((task) => task.status === 0).length;
      }, [tasks]);

    const completeTasks = useMemo(() => {
        if (compTasks === null) {
          return 0;
        }
        return compTasks.filter((task) => task.status === 2).length;
      }, [compTasks]);

    return (
        <Box className="overview-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
            <div className='title-row'>
                <p className='card-title'>OVERVIEW</p>
            </div>
            <div className='overview-content'>
                <div className='overview-pending-task'>
                    <p className='number-pending'>{`${pendTasks}`}</p>
                    <p>TAREAS PENDIENTES</p>
                </div>
                <div className='overview-complete-task'>
                    <p className='number-complete'>{`${completeTasks}`}</p>
                    <p>TAREAS COMPLETADAS</p>
                </div>
            </div>
        </Box>
    );
}

export default Overview;