import React , {useEffect}  from "react";
import { Grid } from "@mui/material";
import RequestsOthers from "../components/RequestsOthers/RequestsOthers";
import axios from 'axios';


const Solicitudes = () => {
    const userID = "a01635675";
    const [otherRequest, setOtherRequest] = React.useState([]);
    const [userInfo, setuserInfo] = React.useState(null);

    const getInfoIntercambios = () =>{
        axios.get(('http://localhost:3000/request/' + userID, {
            headers: {'Authorization': localStorage.getItem('Auth')}
        }))
        .then(res => {
        setOtherRequest(res.data);})

        axios.get(('http://localhost:3000/user/' + userID, {
            headers: {'Authorization': localStorage.getItem('Auth')}
        }))
        .then(res => {
        setuserInfo(res.data);})
    }

    useEffect(() => {
        getInfoIntercambios();
      },[]);
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={12} xs={12}>
                <RequestsOthers userInfo = {userInfo} intercambios={otherRequest}/>
            </Grid>
        </Grid>
    );
}

export default Solicitudes;