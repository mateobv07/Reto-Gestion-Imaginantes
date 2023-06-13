import React from "react";
import {Stack } from "@mui/material";
import "./styles.css";
import ChipsEquipos from "./ChipsEquipos";
import ExchangeButton from "../../ExchangeButton/ExchangeButton";
import axios from 'axios';

const ExchangesOthers = ({request,userInfo}) => {

  const [requestInfo, setRequestInfo] = React.useState(null);
  const [activitiesExchange, setActivitiesExchange] = React.useState([])
  const [open, setOpen] = React.useState(false);

  const date1 = new Date(request.dueDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };


  const handleClickGetRequest = () => {
    setOpen(true);
    axios.get(('http://localhost:3000/request/' + request.id), {
      headers: {'Authorization': localStorage.getItem('Auth')}})
    .then(res => {
    setRequestInfo(res.data);})
    
    axios.get(('http://localhost:3000/request/' + request.id), {
      headers: {'Authorization': localStorage.getItem('Auth')}})
    .then(res => {
    setRequestInfo(res.data);})
  }

  const handleExit = () => {

    setOpen(false);
  };

  const handleAccept = () => {
      setOpen(false);
  };

  return (
    <div className="row-format">
        <Stack spacing={0} sx={{marginRight:"4.5vh"}}>
          <p className="row-things">{request ? request.name : <p>Loading</p>}</p>
          <p className="row-name">
            De: {userInfo ? request.userName : "Loading"}
          </p>
        </Stack>
        <ExchangeButton fecha={date1.toLocaleDateString('es-MX', options)}id={request.id}request={requestInfo} handleClickGetRequest={handleClickGetRequest} open={open} handleExit={handleExit}/>
      {(request && userInfo) ?
      <ChipsEquipos
        equipo2={request.team}
        equipo1={userInfo.team}/> : "Loading"}
      <p className="row-date"> Fecha de Actividad: {date1.toLocaleDateString('es-MX', options)}</p>
    </div>
  );
};

export default ExchangesOthers;
