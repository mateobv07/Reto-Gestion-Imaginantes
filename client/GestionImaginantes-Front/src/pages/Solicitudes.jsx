import React , {useEffect}  from "react";
import { Grid } from "@mui/material";
import RequestsOthers from "../components/RequestsOthers/RequestsOthers";
import axios from 'axios';


const Solicitudes = () => {
    const userID = "a01635675";
    const [otherRequest, setOtherRequest] = React.useState([]);
    const [myRequests, setmyRequests] = React.useState([]);
    const [myRequestsAssignments, setmyRequestsAssignments] = React.useState([]);
    const [userInfo, setuserInfo] = React.useState(null);

    const getInfo = () =>{
        axios.get(('http://localhost:3000/request/' + userID))
        .then(res => {
        setOtherRequest(res.data);})

        axios.get(('http://localhost:3000/user/' + userID))
        .then(res => {
        setuserInfo(res.data);})

        axios.get(('http://localhost:3000/request/' + userID + '/my'))
        .then(res => {
        setmyRequests(res.data);})
        axios.get(('http://localhost:3000/assignment/' + userID + '?status=1'))
        .then(res => {
        setmyRequestsAssignments(res.data);})
    } 

    useEffect(() => {
        getInfo();
      },[]);
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={12} xs={12}>
                <RequestsOthers userInfo = {userInfo} intercambios={otherRequest} intercambiosPropios={myRequests} solicitudes={myRequestsAssignments}/>
            </Grid>
        </Grid>
    );
}

export default Solicitudes;