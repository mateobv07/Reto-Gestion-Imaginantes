import React, {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import axios from 'axios';
import UpcomingTask from "../components/UpcomingTask/UpcomingTask";
import Announcements from "../components/Announcements/Announcements";
import MyRequests from "../components/MyRequests/MyRequests";
import AssignmentPopUp from "../components/AssignmentPopUp/AssignmentPopUp";


const Inicio = ({user}) => {
    const [upcomingTask, setUpcomingTask] = useState(null)
    const [announcements, setAnnouncements] = useState([])
    const [assignmentRequests, setAssignmentRequests] = useState([]);
    const [curRequest, setCurRequest] = useState({name:'', description:'', dueDate:''});
    const [showAssignmentPopUp, setShowAssignmentPopUp] = useState(false);

    useEffect(() => {
        getUpcomingAssignment();
        getAssignmentRequests();
        getAnnouncements();
      }, []);


    const getUpcomingAssignment = () => {
        axios.get('http://localhost:3000/assignment/upcoming', {
        headers: {'Authorization': localStorage.getItem('Auth')}
        })
        .then(function (response) {
            if(response.data.name) setUpcomingTask(response.data)
        })
    }

    const getAnnouncements = () => {
        axios.get('http://localhost:3000/announcement/', {
        headers: {'Authorization': localStorage.getItem('Auth')}
        })
        .then(function (response) {
            if(response.data.length) setAnnouncements(response.data)
        })
    }

    const getAssignmentRequests = () => {
        axios.get('http://localhost:3000/assignment?status=1', {
        headers: {'Authorization': localStorage.getItem('Auth')}
        })
        .then(function (response) {
            if(response.data.length) setAssignmentRequests(response.data)
        })
    }

    const getAssignmentInfo = (id) => {
        axios.get('http://localhost:3000/assignment/'+id, {
        headers: {'Authorization': localStorage.getItem('Auth')}
        })
        .then(function (response) {
            setCurRequest(response.data);
            setShowAssignmentPopUp(true);
        })
    }

    return (
        <>
            <Grid container spacing={3} sx={{mt:0}}>
                <Grid item md={7} xs={12}>
                    <UpcomingTask task={upcomingTask}/>
                </Grid>
                <Grid item md={5} xs={12}>
                    <MyRequests requests={assignmentRequests} getAssignmentInfo={getAssignmentInfo}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Announcements announcements={announcements} />
                </Grid>
            </Grid>
            <AssignmentPopUp show={showAssignmentPopUp} setShow={setShowAssignmentPopUp} task={curRequest}/>
        </>
    );
}

export default Inicio;