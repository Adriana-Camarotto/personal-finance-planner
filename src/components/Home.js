import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ParticlesComponent from "../reusabel/Particles";
import { t } from "../i18n";

const Home = ({ language = "en" }) => {
  const currentYear = new Date().getFullYear();
  const labels = {
    welcome: t(language, "home.welcome"),
    title: `${t(language, "home.titleBase")} ${currentYear}`,
    createPlanning: t(language, "home.createPlanning"),
  };

  return (
    <div>
      <Box
        sx={{
          m: "25vh 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ m: "2rem 0", color: "primary.main", fontWeight: 800 }}>
          {labels.welcome}
        </Typography>
        <Typography variant="h1" sx={{ mb: "2rem", color: "primary.main" }}>
          {labels.title}
        </Typography>
        <Box sx={{ padding: 2, backgroundColor: "primary", color: "white" }}>
          <Link to="/new-relatorio" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ backgroundColor: "white", color: "primary.main" }}>
              {labels.createPlanning}
            </Button>
          </Link>
        </Box>
      </Box>
      <ParticlesComponent />
    </div>
  );
};

export default Home;
