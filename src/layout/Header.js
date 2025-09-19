import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../utils/translations";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const languages = [
    { code: "pt", label: "🇧🇷 Português", flag: "🇧🇷" },
    { code: "en", label: "🇺🇸 English (US)", flag: "🇺🇸" },
    { code: "en-GB", label: "🇬🇧 English (UK)", flag: "🇬🇧" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    handleClose();
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
              {t("header.title")}
            </Typography>
          </Button>
        </Link>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={handleClick}
            startIcon={<LanguageIcon />}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            {currentLanguage?.flag} {currentLanguage?.label.split(" ")[1]}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "language-button",
            }}
          >
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                selected={lang.code === language}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(25, 118, 210, 0.12)",
                  },
                }}
              >
                {lang.label}
              </MenuItem>
            ))}
          </Menu>

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
