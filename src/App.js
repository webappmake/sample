import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Header from "./components/Header";
import Container from "./components/Container";

const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  palette: {
    primary: { // = _var.scss/$primary
      main: '#5D5FEF',
      contrastText: '#ffffff',
    },
    secondary: { // = _var.scss/$secondary
      main: '#7879F1',
      contrastText: '#ffffff', 
    },
    secondaryLight: { // = _var.scss/$secondary-light
      main: '#8486ff',
      contrastText: '#ffffff', 
    },
    secondaryDark: { // = _var.scss/$secondary-dark
      main: '#4A45BD',
      contrastText: '#ffffff',
    },
    gray: {
      main: '#E5E6E7',
    },
    error: {
      main: '#ea1917',
    }
  },  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='pat-wrapper'>
        <Header/>
        <Container />
      </Box>
    </ThemeProvider>
  );
}

export default App;