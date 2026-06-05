import React from "react";
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
import { t } from "../i18n";

const Relatorio = ({
  items = [],
  deleteItem,
  togglePaidStatus,
  showTotal,
  language = "en",
}) => {
  const total = items.reduce((acc, item) => acc + Number(item.amount || 0), 0);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t(language, "common.description")}</TableCell>
              <TableCell>{`${t(language, "common.amount")} (£)`}</TableCell>
              <TableCell>{t(language, "common.paymentDate")}</TableCell>
              <TableCell>{t(language, "common.effectiveDate")}</TableCell>
              <TableCell>{t(language, "common.category")}</TableCell>
              <TableCell>{t(language, "common.subcategory")}</TableCell>
              <TableCell>{t(language, "common.actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} sx={{ backgroundColor: item.paid ? "lightgray" : "white" }}>
                <TableCell>{item.description}</TableCell>
                <TableCell>£ {Number(item.amount || 0).toFixed(2)}</TableCell>
                <TableCell>{item.paymentDate}</TableCell>
                <TableCell>{item.effectiveDate}</TableCell>
                <TableCell>{item.category || t(language, "common.notAvailable")}</TableCell>
                <TableCell>{item.subcategory || t(language, "common.notAvailable")}</TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteItem(index)} aria-label="delete">
                    <DeleteOutlineIcon style={{ color: "red" }} />
                  </IconButton>
                  <IconButton onClick={() => togglePaidStatus(index)} aria-label="toggle-paid">
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
                  <strong>{`${t(language, "common.total")}:`}</strong>
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
