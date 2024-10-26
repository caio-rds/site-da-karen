import { createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    
    const theme = useMemo(() => createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#556cd6',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: '#f44336',
            },
        },
        components: {            
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'rgba(150,150,150, 0.5)'
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff',
                        color: '#333',
                        padding: '10px',
                        boxShadow: 'none',
                    },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        columnGap: '10px'
                    },
                },
            },
        },
    }), []);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;