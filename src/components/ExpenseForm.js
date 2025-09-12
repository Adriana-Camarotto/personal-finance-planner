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
  Menu,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../utils/translations";

const ExpenseForm = ({ addExpense }) => {
  console.log(addExpense);

  const { language } = useLanguage();
  const { t } = useTranslation(language);

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
        label={t("forms.description")}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
      />
      <TextField
        label={t("forms.amount")}
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
        label={t("forms.paymentDate")}
        type="date"
        value={paymentDate}
        onChange={handlePaymentDateChange}
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label={t("forms.effectiveDate")}
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
        <InputLabel id="category-label">{t("forms.category")}</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Fixa">{t("categories.fixed")}</MenuItem>
          <MenuItem value="Variável">{t("categories.variable")}</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        required
        sx={{ mb: 0.1, backgroundColor: "white" }}
      >
        <InputLabel id="subcategory-label">{t("forms.subcategory")}</InputLabel>
        <Select
          labelId="subcategory-label"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <MenuItem value="Supermercado">Supermercado</MenuItem>
          <MenuItem value="Aluguel">Aluguel</MenuItem>
          <MenuItem value="Mortgage">Mortgage</MenuItem>
          <MenuItem value="Brasil">Brasil</MenuItem>
          <MenuItem value="Seguro">Seguro</MenuItem>
          <MenuItem value="Wells">Wells costs</MenuItem>
          <MenuItem value="Bills">
            Bills (agua, luz, celular, internet)
          </MenuItem>
          <MenuItem value="Carro">Carro</MenuItem>
          <MenuItem value="Academia">Academia</MenuItem>
          <MenuItem value="Restaurante">Restaurante</MenuItem>
          <MenuItem value="Transporte Público">Transporte Público</MenuItem>
          <MenuItem value="Impostos e Taxas">Impostos e Taxas</MenuItem>
          <MenuItem value="Estudos">Estudos</MenuItem>
          <MenuItem value="Viagem">Viagem</MenuItem>
          <MenuItem value="Presentes">Presentes</MenuItem>
          <MenuItem value="Roupas">Roupas e calcados</MenuItem>
          <MenuItem value="Saúde">Saúde</MenuItem>
          <MenuItem value="Casa">Casa</MenuItem>
          <MenuItem value="Lazer">Lazer</MenuItem>
          <MenuItem value="Higiene e Beleza">Higiene e Beleza</MenuItem>
          <MenuItem value="Poupanca Geo">Poupanca Geo</MenuItem>
          <MenuItem value="Savings">Savings</MenuItem>
          <MenuItem value="Aposentadoria">Aposentadoria</MenuItem>
          <MenuItem value="Outros">Outros</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" type="submit" fullWidth>
        {t("forms.add")} {t("newReport.expenses")}
      </Button>
    </Box>
  );
};

export default ExpenseForm;
