import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useStateContext } from "@/context/StateContext";

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "@/components/Footer";

import { runConfetti } from '@/lib/utils';
import { Typography, Button } from "@mui/material";

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

function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setorder] = useState(null);
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runConfetti();
    }, []);

  return(
    <ThemeProvider theme={theme}>
      <Navbar/>
      <div className="success-container">
          <div className="success-card">
            <LocalMallOutlinedIcon sx={{color:"green", fontSize: "100px"}}/>
            <Typography variant="h3">Thank you for your oder!</Typography>
            <Typography variant="h6" sx={{fontWeight: "300"}}> Order confirmation has been sent to your e-mail. </Typography>
            <Typography variant="h6" sx={{fontWeight: "300", mt: 4}}> For any questions please contact us at <Link href="/contacts" style={{color: "#ef3682"}}>info@louflowers.at</Link> </Typography>
            <Button href="/" variant="contained" color="secondary" sx={{mt: 4, fontSize: "18px", fontWeight: "400"}}> Continue shopping </Button>
          </div>
      </div>
      <Footer/>
    </ThemeProvider>
  )
}

export default Success;
