import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Relatorio = ({ items = [], deleteItem, togglePaidStatus, showTotal }) => {
  const total = items.reduce((acc, item) => acc + item.amount, 0);


  return (
  <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Valor (£)</TableCell>
            <TableCell>Data de Pagamento</TableCell>
            <TableCell>Data Efetiva</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Subcategoria</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} sx={{ backgroundColor: item.paid ? 'lightgray' : 'white' }}>

              <TableCell>{item.description}</TableCell>
              <TableCell>£ {item.amount.toFixed(2)}</TableCell>
              <TableCell>{item.paymentDate}</TableCell>
              <TableCell>{item.effectiveDate}</TableCell>
              <TableCell>{item.category || 'N/A'}</TableCell>
              <TableCell>{item.subcategory || 'N/A'}</TableCell>
              <TableCell>
                <IconButton onClick={() => deleteItem(index)} aria-label="delete">
                  <DeleteOutlineIcon style={{ color: 'red' }} />
                </IconButton>
                <IconButton onClick={() => togglePaidStatus(index)} aria-label="toggle-paid">
                  {item.paid ? (
                    <CheckCircleOutlineIcon style={{ color: 'green' }} />
                  ) : (
                    <CheckCircleOutlineIcon style={{ color: 'gray' }} />
                  )}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {showTotal && (
            <TableRow>
              <TableCell colSpan={6} align="right"><strong>Total:</strong></TableCell>
              <TableCell><strong>£ {total.toFixed(2)}</strong></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>   
    </TableContainer>   
  </>

  );
};

export default Relatorio;