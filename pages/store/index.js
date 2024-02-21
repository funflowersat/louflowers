import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Typography } from '@mui/material';
import Link from 'next/link';

const theme = createTheme({
  palette: {
     primary: {
        main: '#FFFFFF',
        light: '#FFFCF2',
        dark: '#FFF8DD',
        contrastText: '#000000',
     },
     secondary: {
      main: '#333333',
      contrastText: '#FFFFFF',
   },
  },
  typography: {
    "fontFamily": `"League Spartan", sans-serif`,
    "fontWeightRegular": 300,
  }
});

function store() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <div className='store-select-container'>
            
              <h1> Page not found </h1>

        </div>
        <Footer/>
    </ThemeProvider>
  )
}

export default store;