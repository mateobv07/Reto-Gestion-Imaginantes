import React from "react";
import { Box} from "@mui/material";
import { HiOutlineClipboardList } from "react-icons/hi";
import PendTask from "./PendTasks/PendTasks";
import './styles.css'


const PendingTask = ({tasks}) => {
    return (
        <Box className="task-pending-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
            <div className='title-row'>
                <p className='card-title'>TAREAS PENDIENTES</p>
                <Box className="round-paper">
                    <HiOutlineClipboardList size={24} color="#FFFFFF" />
                </Box>
            </div>
            <hr className="div-line"/>    
            { tasks ?
                <div className="pending-task-list-container">
                    {tasks.map((task) => 
                        (<PendTask task={task}/>
                    ))}
                </div>
                :
                <center>
                    <p className="upcoming-task-title">Sin tareas pendientes</p>
                </center>      
            }
        </Box>
    );
}

export default PendingTask;