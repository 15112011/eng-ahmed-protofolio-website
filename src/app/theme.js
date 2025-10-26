'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#594534',
      light: '#6d5442',
      dark: '#3D3530',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#A4978D',
      light: '#D7CCC4',
      dark: '#C8BDB3',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#F3EEE9',
    },
    text: {
      primary: '#594534',
      secondary: 'rgba(89, 69, 52, 0.8)',
    },
    warning: {
      main: '#F5A606',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), var(--font-cairo), Arial, sans-serif',
    h1: {
      fontFamily: 'var(--font-cairo), Arial, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-cairo), Arial, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-cairo), Arial, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'var(--font-cairo), Arial, sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'var(--font-cairo), Arial, sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'var(--font-cairo), Arial, sans-serif',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
