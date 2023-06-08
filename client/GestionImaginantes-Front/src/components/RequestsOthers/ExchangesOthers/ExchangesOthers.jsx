import React from "react";
import {Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./styles.css";
import ChipsEquipos from "./ChipsEquipos";

const ExchangesOthers = ({request,userInfo}) => {

  const date1 = new Date(request.dueDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className="row-format">
        <Stack spacing={0} sx={{marginRight:"4.5vh"}}>
          <p className="row-things">{request ? request.name : <p>Loading</p>}</p>
          <p className="row-name">
            De: {userInfo ? request.userName : "Loading"}

          </p>
        </Stack>
        <Chip
          label="Clickable"
          variant="outlined"
          className="chip-popup"
          onClick={handleClick}
        />
      {request ?
      <ChipsEquipos
        equipo2={request.team}
        equipo1={userInfo.team}/> : "Loading"}

      <p className="row-date"> Fecha de Actividad: {date1.toLocaleDateString('es-MX', options)}</p>

    </div>
  );
};

export default ExchangesOthers;
