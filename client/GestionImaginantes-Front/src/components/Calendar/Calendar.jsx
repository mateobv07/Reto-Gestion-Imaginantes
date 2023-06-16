import React, { useState } from 'react';
import { Box } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useMemo } from "react";
import 'dayjs/locale/es';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import './styles.css'


const Calendar = ({ tasks }) => {
  dayjs.locale('es');

  const getTaskDays = (tasks) => {
    if (!tasks || tasks.length === 0) {
      return [];
    }

    const daysSet = new Set();
    tasks.forEach((task) => {
      const dueDate = new Date(task.dueDate);
      const day = dueDate.getDate();
      const month = dueDate.getMonth();
      daysSet.add(`${month}-${day}`);
    });

    const daysArray = Array.from(daysSet);
    return daysArray;
  };

  const taskDays = useMemo(() => getTaskDays(tasks), [tasks]);

  const ServerDay = (props) => {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  
    const isSelected = highlightedDays.some((highlightedDay) => {
      const [highlightedMonth, highlightedDayOfMonth] = highlightedDay.split('-');
      const dayDate = new Date(day);
      const dayMonth = dayDate.getMonth();
      const dayOfMonth = dayDate.getDate();
      return (
        !outsideCurrentMonth &&
        dayMonth.toString() === highlightedMonth &&
        dayOfMonth.toString() === highlightedDayOfMonth
      );
    });
  
    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={isSelected ? '📘' : undefined}
      >
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    );
  };

  return (
    <Box className="calendar-card-container" sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
      <div className="di">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays: taskDays,
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </Box>
  );
};

export default Calendar;