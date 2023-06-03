import React, {useState} from "react";
import { Table, TableBody, TableContainer} from "@mui/material";
import RequestOther from "./RequestOther/RequestOther";
import RequestsHeader from "./RequestsHeader/RequestsHeader";
import SolicitudesRow from "./SolicitudesRow/SolicitudesRow";
import './styles.css';

const RequestsOthers = ({requests,solicitudes}) => {
    const [alignment, setAlignment] = useState(true);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

    return (
      <TableContainer className="solicitudes-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
        <RequestsHeader alignment={alignment} handleChange={handleChange}/>
        <hr className="linea-gris"/>
        <div className="solicitudes-intercambios-container ">
            <Table padding="normal">
                <TableBody>
                    {alignment ? requests.map((row) => 
                        (<RequestOther key={row.id} request={row}/>)):
                        solicitudes.map((row) => 
                        (<SolicitudesRow key={row.id} solicitud={row}/>))
                    }
                </TableBody>
            </Table>
        </div>
        </TableContainer>
    );
  }
  
  export default RequestsOthers;