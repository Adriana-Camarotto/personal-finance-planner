import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';

const IncomeForm = ({ addIncome }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ description, amount: parseFloat(amount), paymentDate, effectiveDate,   category, subcategory});
    setDescription('');
    setAmount('');
    setPaymentDate('');
    setEffectiveDate('');
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
    
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <TextField
        label="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        sx={{ mb: 1, backgroundColor: 'white' }}
      />
      <TextField
        label="Valor"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        required
        sx={{ mb: 1, backgroundColor: 'white' }}
        InputProps={{
          startAdornment: <InputAdornment position="start">£</InputAdornment>,
        }}
      />
      <TextField
        label="Data de Pagamento"
        type="date"
        value={paymentDate}
        onChange={handlePaymentDateChange}
        fullWidth
        required
        sx={{ mb: 1, backgroundColor: 'white' }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Data Efetiva"
        type="date"
        value={effectiveDate}
        onChange={handleEffectiveDateChange}
        fullWidth
        required
        sx={{ mb: 1, backgroundColor: 'white' }}
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" type="submit" fullWidth>
        Adicionar Entrada
      </Button>
    
    </Box>
  
  );
};

export default IncomeForm;