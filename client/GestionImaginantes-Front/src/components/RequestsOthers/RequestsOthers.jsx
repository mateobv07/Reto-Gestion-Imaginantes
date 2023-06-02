import React, {useState} from "react";
import { Box, Table, TableBody, TableContainer} from "@mui/material";
import RequestOther from "./RequestOther/RequestOther";
import './styles.css';
import RequestsHeader from "./RequestsHeader/RequestsHeader";
import ButtonRandom from "./RequestsHeader/ButtonRandom";
import { TbArrowsLeftRight } from 'react-icons/tb';



const RequestsOthers = ({requests}) => {
    const [alignment, setAlignment] = useState(true);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

    return (
      <TableContainer className="solicitudes-container " sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"}}>
        <RequestsHeader alignment={alignment} handleChange={handleChange}/>
        <hr className="linea-gris"/>
            <Table stickyHeader padding="normal">
                <TableBody>
                    {alignment ? requests.map((row) => 
                        (<RequestOther key={row.id} request={row}/>)) : (<p>HAHHAHAHAH</p>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
  }
  
  export default RequestsOthers;