import React , {useEffect}  from "react";
import { Grid } from "@mui/material";
import RequestsOthers from "../components/RequestsOthers/RequestsOthers";
import axios from 'axios';


const Solicitudes = ({user}) => {
    const [otherRequest, setOtherRequest] = React.useState([]);

    const getInfoIntercambios = () => {
        axios.get('http://localhost:3000/request', {
            headers: {'Authorization': localStorage.getItem('Auth')}
        })
        .then(res => {
        setOtherRequest(res.data);})
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getInfoIntercambios();
      },[]);
      
    return (
        <Grid container spacing={3} sx={{mt:0}}>
            <Grid item md={12} xs={12}>
                <RequestsOthers updateIntercambios={getInfoIntercambios} userInfo={user} intercambios={otherRequest}/>
            </Grid>
        </Grid>
    );
}

export default Solicitudes;