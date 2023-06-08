import React from "react";
import { useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./styles.css";

const CompletionBar = ({ tasks, totalTasks }) => {
  const theme = useTheme();
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );
  const completedPercentage = useMemo(
    () => (completedTasks / totalTasks) * 100,
    [completedTasks, totalTasks]
  );

  const sizeLarge = useMediaQuery(theme.breakpoints.up("lg")) ? 200 : 200;
  const sizeMedium = useMediaQuery(theme.breakpoints.down("md")) ? 150 : 200;
  const sizeSmall = useMediaQuery(theme.breakpoints.down("sm")) ? 100 : 200;

  return (
    <Box
      className="completion-bar-card-container"
      sx={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
    >
      <Box
        position="relative"
        display="inline-flex"
        height={200}
        width={200}
        marginBottom={4}
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={sizeLarge || sizeMedium || sizeSmall}
          thickness={3.5}
          style={{ color: grey[300] }}
        />
        <CircularProgress
          variant="determinate"
          value={completedPercentage}
          size={sizeLarge || sizeMedium || sizeSmall}
          thickness={3.5}
          style={{ color: green["A400"], position: "absolute" }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4" component="div" color="text.primary">
            {`${Math.round(completedPercentage)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" component="div" color="#text.primary">
        COMPLETADO
      </Typography>
      <Typography variant="subtitle1" component="div" color="text.secondary">
        Actividades: {completedTasks}/{totalTasks}
      </Typography>
    </Box>
  );
};

export default CompletionBar;
