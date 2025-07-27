import React from 'react';
import { Box, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();





    return (
        <Box

            sx={{
             
                position: 'relative',
                overflow: 'hidden',
                zIndex: 9
            }}
        >
                     <Box
                sx={{
                    height: '100%',
                    width: '100%',
                                    margin: 'auto',
                                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    backgroundColor: theme => theme.palette.primary.main,
                }}
            >

                <Box>
                    <a
                        href='https://www.linkedin.com/'
                        target='_blank'
                    >
                        <IconButton sx={{ color: '#fff' }}>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a
                        href='https://www.youtube.com/'
                        target='_blank'
                    >
                        <IconButton sx={{ color: '#fff' }}>
                            <YouTubeIcon />
                        </IconButton>
                    </a>
                </Box>
                <Typography variant='p' component='p' sx={{ mt: '1rem' }}>
                    <b>Adriana Camarotto</b>,
                </Typography>
                <Link
                    href='tel:+44 7738771515'
                    sx={{
                        textDecoration: 'none',
                        color: '#fff',
                        mt: '0.5rem'
                    }}
                >
                    Tel: +44 07738 771515
                </Link>


                <Typography variant='p' component='p'>
                    {'Copyright © ' + new Date().getFullYear() + '  Adriana Camarotto | '}
                    <Link
                        component={RouterLink}
                        to='/privacy-policy/'
                        sx={{
                            color: '#fff',
                            textDecoration: 'none'
                        }}
                    >
                        Privacy Policy
                    </Link> |
                </Typography>

            </Box>
        </Box>
    );
};

export default Footer;
