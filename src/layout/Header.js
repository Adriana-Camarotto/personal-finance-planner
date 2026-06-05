import React, { useMemo, useState } from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import { t } from "../i18n";
import brazilFlag from "../images/flags/br.svg";
import ukFlag from "../images/flags/uk.svg";

const Flag = ({ src, alt }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      mr: 0.75,
      width: 18,
      height: 12,
      objectFit: "cover",
      borderRadius: "2px",
      border: "1px solid rgba(0,0,0,0.2)",
    }}
  />
);

const Header = ({ language = "en", onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const labels = useMemo(
    () => ({
      title: t(language, "header.title"),
      savedReports: t(language, "header.savedReports"),
      language: t(language, "header.language"),
      portugueseBrazil: t(language, "header.portugueseBrazil"),
      english: t(language, "header.english"),
    }),
    [language],
  );
  const languageFlag =
    language === "pt-BR"
      ? { src: brazilFlag, alt: "Brazil flag" }
      : { src: ukFlag, alt: "United Kingdom flag" };
  const currentLanguageLabel =
    language === "pt-BR" ? labels.portugueseBrazil : labels.english;

  const handleOpenLanguageMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (nextLanguage) => {
    if (onLanguageChange) {
      onLanguageChange(nextLanguage);
    }
    handleCloseLanguageMenu();
  };

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
              {" "}
              {labels.title}
            </Typography>
          </Button>
        </Link>

        <Box
          sx={{
            padding: 2,
            backgroundColor: "primary",
            color: "white",
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/saved-reports" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              {labels.savedReports}
            </Button>
          </Link>

          <Button
            variant="contained"
            sx={{ backgroundColor: "white", color: "black" }}
            onClick={handleOpenLanguageMenu}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              <Flag src={languageFlag.src} alt={languageFlag.alt} />
              <span>{currentLanguageLabel}</span>
            </Box>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleCloseLanguageMenu}
          >
            <MenuItem onClick={() => handleLanguageSelect("pt-BR")}>
              <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                <Flag src={brazilFlag} alt="Brazil flag" />
                <span>{labels.portugueseBrazil}</span>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("en")}>
              <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                <Flag src={ukFlag} alt="United Kingdom flag" />
                <span>{labels.english}</span>
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
