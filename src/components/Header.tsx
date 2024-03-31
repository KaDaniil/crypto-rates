import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'white',
            boxShadow: 'none',
        }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    onClick={() => navigate('/')}
                    disableRipple
                    sx={{
                        mr: 2,
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        },
                        '&:hover': {
                            opacity: 0.8,
                        }
                    }}
                >
                    <img src="logo.svg" alt="logo"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
