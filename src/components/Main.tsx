import React, { useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import '../index.css';
import router from '../router';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../theme';
import { ColorModeContext } from '../contexts/ColorModeContext';

const Main = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () => mode === 'light' ? lightTheme : darkTheme,
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default Main;
