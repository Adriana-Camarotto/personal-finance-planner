import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { t } from "../i18n";

const Footer = ({ language = "en" }) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        backgroundColor: (theme) => theme.palette.primary.main,
        color: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography variant="body2">
          {`Copyright © ${new Date().getFullYear()} Personal Finance Planner`}
        </Typography>

        <Link
          component={RouterLink}
          to="/privacy-policy"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: (theme) => theme.typography.body2.fontSize,
          }}
        >
          {t(language, "header.privacyPolicy")}
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
