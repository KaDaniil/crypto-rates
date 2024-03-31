import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import {Box} from '@mui/material';


const Layout = () => {
    return (
        <Box>
            <Header/>
            <Box sx={{
                px: {xs: 6, sm: 8, md: 10},
                py: {xs: 5, md: 10},
            }}>
                <Outlet/>
            </Box>
        </Box>
    );
};

export default Layout;