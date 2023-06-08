import React from "react";
import { Grid,  Table, TableBody, Box } from "@mui/material";
import AssignmentRow from "../../AssignmentRow/AssignmentRow"
import './styles.css';

const TableOwnPending = ({intercambiosPropios, solicitudesPropias}) => {

    return (
        <Grid container spacing={0} justifyContent="center" alignItems="flex-start" sx={{mt:0, height: "65vh"}}>
            <Grid item md={6} xs={12} sx={{borderRightStyle:"solid", borderRightWidth:"1px", borderRightColor:"#bcbec2"}}>
                <Box className="tables-in-tables">
                    <p className="table-titles">Tus Solicitudes de Intercambio</p>
                    <hr className="gray-divider"/>
                    <Table padding="normal" sx={{marginBottom:"6.5vh"}}>
                        <TableBody>
                            {intercambiosPropios.map((row) => 
                                (<AssignmentRow key={row.id} solicitud={row} tipo={true} />))}
                        </TableBody>
                    </Table>
                </Box>
            </Grid>
            <Grid item md={6} xs={12}>
                <Box className="tables-in-tables">
                    <p className="table-titles">Tus Solicitudes de Entrega</p>
                    <hr className="gray-divider"/>
                    <Table padding="normal" sx={{marginBottom:"6.5vh"}}>
                        <TableBody>
                            {solicitudesPropias.map((row) => 
                                (<AssignmentRow key={row.id} solicitud={row} tipo={false} />))}
                        </TableBody>
                    </Table>
                </Box>
            </Grid>
        </Grid>
    );
}

export default TableOwnPending;