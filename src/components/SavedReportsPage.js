import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import ParticlesCursor from "../reusabel/ParticlesCursor";
import { Grid } from "@mui/system";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../utils/translations";

const SavedReportsPage = ({
  savedReports = [],
  deleteReport,
  duplicateReport,
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="h1" sx={{ m: "2rem 0 3rem" }}>
          {t("savedReports.title")}
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          {savedReports.length === 0 ? (
            <Typography variant="h6">{t("savedReports.noReports")}</Typography>
          ) : (
            <Grid container justifyContent="center" spacing={1}>
              {savedReports.map((report) => (
                <Box
                  key={report.id}
                  sx={{
                    marginBottom: 2,
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "50%",
                  }}
                >
                  <Link
                    to={`/report/${report.id}`}
                    style={{
                      textDecoration: "none",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    <Typography variant="h6">
                      {report.month && report.year
                        ? `${report.month} ${report.year}`
                        : t("savedReports.reportTitle")}
                    </Typography>
                  </Link>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteReport(report.id)}
                    >
                      {t("savedReports.delete")}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => duplicateReport(report.id)}
                    >
                      {t("savedReports.duplicate")}
                    </Button>
                  </Box>
                </Box>
              ))}
            </Grid>
          )}
        </Box>
      </Box>

      <Link
        to="/new-relatorio"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "white",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
          }}
        >
          {t("savedReports.createNew")}
        </Button>
      </Link>

      <ParticlesCursor />
    </Container>
  );
};

export default SavedReportsPage;
