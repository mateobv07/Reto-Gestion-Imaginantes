import React, { useMemo } from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaMedal, FaAward, FaTrophy, FaCrown, FaStar } from "react-icons/fa";
import { LinearProgress } from "@mui/material";

import "./styles.css";

const LevelBadge = ({ name, level, tasksCompleted, totalTasks }) => {
  const theme = useTheme();
  const sizeLarge = useMediaQuery(theme.breakpoints.up("lg")) ? 150 : 150;
  const sizeMedium = useMediaQuery(theme.breakpoints.down("md")) ? 120 : 150;
  const sizeSmall = useMediaQuery(theme.breakpoints.down("sm")) ? 100 : 150;

  const icons = [
    <FaMedal size={sizeLarge || sizeMedium || sizeSmall} color="#CD7F32" />,
    <FaAward size={sizeLarge || sizeMedium || sizeSmall} color="#C0C0C0" />,
    <FaTrophy size={sizeLarge || sizeMedium || sizeSmall} color="#FFD700" />,
    <FaCrown size={sizeLarge || sizeMedium || sizeSmall} color="#B9F2FF" />,
    <FaStar size={sizeLarge || sizeMedium || sizeSmall} color="#651fff" />,
  ];
  const tasksPerLevel = useMemo(() => totalTasks / 5, [totalTasks]);
  const tasksCompletedThisLevel = useMemo(
    () => tasksCompleted % tasksPerLevel,
    [tasksCompleted, tasksPerLevel]
  );
  const progress = useMemo(
    () => (level >= 4 ? 100 : (tasksCompletedThisLevel / tasksPerLevel) * 100),
    [level, tasksCompletedThisLevel, tasksPerLevel]
  );

  return (
    <Box
      className="level-badge-card-container"
      sx={{
        position: "relative",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="text.primary"
        sx={{
          position: "absolute",
          top: "10px",
          right: "300px",
          alignSelf: "flex-start",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial',
        }}
      >
        {name}
      </Typography>
      {level == 4 && (
        <Typography
          variant="h6"
          component="div"
          color="text.secondary"
          sx={{
            mt: 5,
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial',
          }}
        >
          ¡Felicidades, has llegado al nivel máximo!
        </Typography>
      )}
      <Box sx={{ mt: 5 }}>{icons[Math.min(Math.floor(level), 4)]}</Box>
      <Typography
        variant="h5"
        component="div"
        color="text.secondary"
        sx={{ fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial' }}
      >
        {level < 4 ? `Nivel ${Math.floor(level) + 1}` : "Nivel 5"}
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        <Grid item xs={2}>
          <Typography
            variant="body1"
            component="div"
            color="text.secondary"
            align="center"
            sx={{ fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial' }}
          >
            Nivel {Math.floor(level) + 1}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              "& .MuiLinearProgress-barColorPrimary": {
                bgcolor: "#36b4c5",
              },
              "& .MuiLinearProgress-colorPrimary": {
                bgcolor: "#dfe8e9",
              },
              mb: 1,
              width: "100%",
              height: "20px",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="body1"
            component="div"
            color="text.secondary"
            align="center"
            sx={{ fontFamily: '"Helvetica Neue", Helvetica, sans-serif, Arial' }}
          >
            {level < 4 ? `Nivel ${Math.floor(level) + 2}` : "MAX"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LevelBadge;
