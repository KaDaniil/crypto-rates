import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Switch, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo-dark.svg';
import { ColorModeContext } from '../contexts/ColorModeContext';

const Header = () => {
    const navigate = useNavigate();
    const  theme  = useTheme();
    const themeContext = useContext(ColorModeContext);

    const logo = theme.palette.mode === 'dark' ? logoDark : logoLight;

    return (
        <AppBar position="static" >
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'background.default'
            }}>
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
                    <img src={logo} alt="logo"/>
                </IconButton>
                <Box display="flex" sx={{ alignItems: 'center', gap: 2 }}>
                    <Typography variant="body1">Theme Switcher:</Typography>
                    <Switch onChange={themeContext.toggleColorMode} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
