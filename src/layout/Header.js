import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Link to="/" style={{ flexGrow: 1, textDecoration: 'none' }}>
                <Button variant="contained" sx={{
                    backgroundColor: 'transparent', color: 'white', boxShadow: 'none', '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }} startIcon={<HomeIcon />}>

                    <Typography variant="h6" component="div"> Meu Planejamento Financeiro</Typography>
                </Button>
            </Link>

            <Box sx={{ padding: 2, backgroundColor: 'primary', color: 'white' }}>

                <Link to="/saved-reports" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black' }}>

                        Ver Relatórios Salvos
                    </Button>
                </Link>
            </Box>
        </Toolbar>


    </AppBar>
);

export default Header;
