import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../utils/translations";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ flexGrow: 1, textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            startIcon={<HomeIcon />}
          >
            <Typography variant="h6" component="div">
              {t("header.title")}
            </Typography>
          </Button>
        </Link>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={toggleLanguage}
            startIcon={<LanguageIcon />}
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            {language === "pt"
              ? "🇺🇸 EN"
              : language === "en"
              ? "🇬🇧 EN-GB"
              : "🇧🇷 PT"}
          </Button>

          <Link to="/saved-reports" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              {t("header.savedReports")}
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
