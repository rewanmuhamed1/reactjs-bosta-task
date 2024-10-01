import * as React from 'react';
import Home from './pages/Home';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'; 
import { useTranslation } from 'react-i18next';  
import './App.css';


const theme = createTheme({
  typography: {
    fontFamily: 'Cairo, sans-serif', 
  },
});

function App() {
  const { i18n } = useTranslation(); 

  React.useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [i18n.language]);
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
