import React, {useState} from "react";
import { Box, Table, TableBody, TableContainer, TableHead, TablePagination} from "@mui/material";
import { TbArrowsLeftRight } from 'react-icons/tb';
import './styles.css';
import ButtonRandom from "./ButtonRandom";



const RequestsHeader = ({alignment, handleChange}) => {
    return (
        <TableHead className='title-row-solicitudes'>
            <ButtonRandom alignment={alignment} handleChange={handleChange}/>
            <Box className='round-paper' sx={{mt:"10px"}}>
                <TbArrowsLeftRight size={24} color='#FFFFFF' />
            </Box>
        </TableHead>
    );
  }
  
  export default RequestsHeader;