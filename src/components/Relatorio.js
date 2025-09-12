import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../utils/translations";

const Relatorio = ({ items = [], deleteItem, togglePaidStatus, showTotal }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const total = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("forms.description")}</TableCell>
              <TableCell>{t("forms.amount")} (£)</TableCell>
              <TableCell>{t("forms.paymentDate")}</TableCell>
              <TableCell>{t("forms.effectiveDate")}</TableCell>
              <TableCell>{t("forms.category")}</TableCell>
              <TableCell>{t("forms.subcategory")}</TableCell>
              <TableCell>{t("forms.actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                sx={{ backgroundColor: item.paid ? "lightgray" : "white" }}
              >
                <TableCell>{item.description}</TableCell>
                <TableCell>£ {item.amount.toFixed(2)}</TableCell>
                <TableCell>{item.paymentDate}</TableCell>
                <TableCell>{item.effectiveDate}</TableCell>
                <TableCell>{item.category || "N/A"}</TableCell>
                <TableCell>{item.subcategory || "N/A"}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => deleteItem(index)}
                    aria-label="delete"
                  >
                    <DeleteOutlineIcon style={{ color: "red" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => togglePaidStatus(index)}
                    aria-label="toggle-paid"
                  >
                    {item.paid ? (
                      <CheckCircleOutlineIcon style={{ color: "green" }} />
                    ) : (
                      <CheckCircleOutlineIcon style={{ color: "gray" }} />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {showTotal && (
              <TableRow>
                <TableCell colSpan={6} align="right">
                  <strong>Total:</strong>
                </TableCell>
                <TableCell>
                  <strong>£ {total.toFixed(2)}</strong>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Relatorio;
