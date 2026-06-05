import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { t } from "../i18n";

const NotFoundPage = ({ language = "en" }) => (
  <Container maxWidth="sm" sx={{ mt: 8 }}>
    <Box sx={{ textAlign: "center", p: 4, backgroundColor: "#f7f7f7", borderRadius: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {t(language, "common.notFoundPage")}
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">{t(language, "common.backToHome")}</Button>
      </Link>
    </Box>
  </Container>
);

export default NotFoundPage;
