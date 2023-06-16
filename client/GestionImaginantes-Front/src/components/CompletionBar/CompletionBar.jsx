import React from "react";
import { useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

const CompletionBar = ({ tasks }) => {
  const theme = useTheme();
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  console.log(tasks);

  const sizeLarge = useMediaQuery(theme.breakpoints.up("lg")) ? 200 : 200;
  const sizeMedium = useMediaQuery(theme.breakpoints.down("md")) ? 150 : 200;
  const sizeSmall = useMediaQuery(theme.breakpoints.down("sm")) ? 100 : 200;

  return (
    <Box className="completion-bar-card-container">
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
          thickness={5}
          style={{ color: "#36b4c5" }}
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
          <Typography
            variant="h2"
            component="div"
            color="text.primary"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial' }}
          >
            {`${completedTasks}`}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h4"
        component="div"
        style={{
          color: "#FFFFFF",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial',
          borderRadius: "5px",
          padding: "5px",
        }}
        className="completed-tasks-text"
      >
        TAREAS COMPLETADAS
      </Typography>
    </Box>
  );
};

export default CompletionBar;
