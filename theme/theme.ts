import { createTheme } from '@mui/material/styles';

/**
 * Bảng màu trích xuất từ Logo công ty:
 * Blue: #5B9BD5 (Primary)
 * Green: #70AD47 (Success)
 * Orange: #ED7D31 (Secondary/Accent)
 * Red: #C0504D (Highlight/Error)
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#5B9BD5',
      light: '#91C0E9',
      dark: '#3E76A8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#ED7D31',
      light: '#F2A16D',
      dark: '#B95D1F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#70AD47',
    },
    error: {
      main: '#C0504D',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#546E7A',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Inter, Arial, sans-serif',
    h1: { fontWeight: 700, color: '#1A2027' },
    h2: { fontWeight: 700, color: '#1A2027' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 22px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            '&:hover': {
              backgroundColor: '#4A8AC4',
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;