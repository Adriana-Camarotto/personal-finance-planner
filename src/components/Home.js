import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ParticlesComponent from '../reusabel/Particles';



const Home = () => {


    return (
        <div>
            <Box sx={{ m: '25vh 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ m: '2rem 0', color: 'white', fontWeight: 800 }}>Bem vindo!</Typography>
                <Typography variant="h1" sx={{ mb: '2rem', color: 'white'  }}>Planejamento Financeiro 2025</Typography>
                <Box sx={{ padding: 2, backgroundColor: 'primary', color: 'white' }}>

                    <Link to="/new-relatorio" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black' }}>

                            Crie seu Planejamento Financeiro
                        </Button>
                    </Link>
                </Box>
            </Box>
            <ParticlesComponent />
        </div>
    );
};

export default Home;


// color: (theme) => theme.palette.primary.main
