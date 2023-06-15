import React from 'react';
import { Box } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import './styles.css'


const Calendar = ({tasks}) => {



    return (
        <Box className="calendar-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
            <div className="di">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                    views={['day']}/>           
                </LocalizationProvider>
            </div>
        </Box>
    );
}

export default Calendar;