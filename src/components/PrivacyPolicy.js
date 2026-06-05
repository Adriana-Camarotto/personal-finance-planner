import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { t } from "../i18n";

const PrivacyPolicy = ({ language = "en" }) => {
  const currentDate = new Date().toLocaleDateString(
    language === "pt-BR" ? "pt-BR" : "en-GB",
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Box sx={{ p: 3, backgroundColor: "#f7f7f7", borderRadius: "8px" }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          {t(language, "common.privacyTitle")}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {`${t(language, "common.privacyLastUpdated")}: ${currentDate}`}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {t(language, "common.privacyIntro")}
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          {t(language, "common.privacyStoredData")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {t(language, "common.privacyStoredDataText")}
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          {t(language, "common.privacySharing")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {t(language, "common.privacySharingText")}
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          {t(language, "common.privacyResponsibility")}
        </Typography>
        <Typography variant="body1">
          {t(language, "common.privacyResponsibilityText")}
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
