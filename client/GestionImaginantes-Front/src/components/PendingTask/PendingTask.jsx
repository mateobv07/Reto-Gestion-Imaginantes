import React, { useState } from "react";
import { Box, Dialog} from "@mui/material";
import { HiOutlineClipboardList } from "react-icons/hi";
import PendTask from "./PendTasks/PendTasks";
import axios from "axios";
import PendPopUp from "./PendPopUp/PendPopUp";
import ConfirmPopUp from "./ConfirmPopUp/ConfirmPopUp";
import RequestPopUp from "./RequestPopUp/RequestPopUp";
import './styles.css'


const PendingTask = ({tasks, resetTask, getTasks}) => {
    const [curTask, setCurTask] = useState ({name: '', id: '', dueDate: ''}); 
    const [isPopupOpen, setIsPopupOpen] = useState(false);     
    const [isConfirmOpen, setIsConfirmOpen] = useState(false); 
    const [isRequestOpen, setIsRequest] = useState(false);  
    const [comment, setComment] = useState('');
    
    const handleDone = () => {
        setIsPopupOpen(false); 
        setIsConfirmOpen(true);
        if (!comment) {
            console.log("El comentario está vacío. No se creará el comentario.");
            updateTask();
            return;
        }
        else{
            createComment();
        }
    }

    const handleCancel = () => {   // Función del Pop-up que si se cancela, no cambia el estado de la CheckBox
        setIsPopupOpen(false);
        setIsConfirmOpen(false);       // El Pop-up se desactiva
        setIsRequest(false);
    };

    const handleCambio = () => {   // Función del Pop-up que si se cancela, no cambia el estado de la CheckBox
        setIsPopupOpen(false);       // El Pop-up se desactiva
        setIsRequest(true);

    };
    const updateTask = () => {
        axios({
          method: 'patch',
          url: 'http://localhost:3000/assignment/' + curTask.id,
          headers: {'Authorization': localStorage.getItem('Auth')},
          data: {
            status: 1,
          }
        })
        .then(() => {
            resetTask();   
            getTasks();
        });
      };

      const createComment = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/comment/',
            headers: {'Authorization': localStorage.getItem('Auth')},
            data: {
                assignmentID: curTask.id,
                content: comment, 
            }
        })
        .then(function (response) {
            console.log(response.data)
            updateTask();
        })
        .catch(function (error) {
            console.log(error);
        })
      }

    return (
        <>
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
                            (<PendTask 
                                key={task.id} 
                                task={task} 
                                updateTask={updateTask} 
                                onClick={ () => (setCurTask(task), setIsPopupOpen(true))}
                                
                                isChecked={curTask.id === task.id && isPopupOpen ? true : false}/>
                        ))}
                    </div>
                    :
                    <center>
                        <p className="upcoming-task-title">Sin tareas pendientes</p>
                    </center>      
                }
            </Box>
            <Dialog open={isPopupOpen}>
                <PendPopUp 
                task={curTask} 
                popOpen = {isPopupOpen} 
                popCambio={handleCambio} 
                popCancel={handleCancel} 
                popDone={handleDone}
                comment={comment}
                setComment={setComment}
                />
            </Dialog>

            <Dialog open={isConfirmOpen}> 
                <ConfirmPopUp task={curTask} popConfirm={() => (setIsConfirmOpen(false), updateTask())} popCancel={handleCancel}/>
            </Dialog>

            <Dialog open={isRequestOpen}> 
                <RequestPopUp task={curTask} popConfirm={() => setIsRequest(false)} popCancel={handleCancel}/>
            </Dialog>
        
        </>

    );
}

export default PendingTask;