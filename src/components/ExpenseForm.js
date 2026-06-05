import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { t, CATEGORY_OPTIONS, SUBCATEGORY_OPTIONS } from "../i18n";

const ExpenseForm = ({ addExpense, language = "en" }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      description,
      amount: parseFloat(amount),
      paymentDate,
      effectiveDate,
      category,
      subcategory,
    });
    setDescription("");
    setAmount("");
    setPaymentDate("");
    setEffectiveDate("");
    setCategory("");
    setSubcategory("");
  };

  const handlePaymentDateChange = (e) => {
    const date = e.target.value;
    setPaymentDate(date);
    setEffectiveDate(date); // Automatically set the effective date to the payment date
  };

  const handleEffectiveDateChange = (e) => {
    const date = e.target.value;
    setEffectiveDate(date);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label={t(language, "common.description")}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
      />
      <TextField
        label={t(language, "common.amount")}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">£</InputAdornment>,
        }}
      />
      <TextField
        label={t(language, "common.paymentDate")}
        type="date"
        value={paymentDate}
        onChange={handlePaymentDateChange}
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label={t(language, "common.effectiveDate")}
        type="date"
        value={effectiveDate}
        onChange={handleEffectiveDateChange}
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
        InputLabelProps={{ shrink: true }}
      />

      <FormControl
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
      >
        <InputLabel id="category-label">
          {t(language, "common.category")}
        </InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORY_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {language === "pt-BR" ? option.labelPt : option.labelEn}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
      >
        <InputLabel id="subcategory-label">
          {t(language, "common.subcategory")}
        </InputLabel>
        <Select
          labelId="subcategory-label"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          {SUBCATEGORY_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {language === "pt-BR" ? option.labelPt : option.labelEn}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" type="submit" fullWidth>
        {t(language, "common.addExpense")}
      </Button>
    </Box>
  );
};

export default ExpenseForm;
