import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { client } from '@/lib/client'

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import FeaturedProducts from '@/components/FeaturedProducts';
import IconsSection from '@/components/IconsSection';
import GiftsSection from '@/components/GiftsSection';
import Footer from '@/components/Footer';
import SeasonalProducts from '@/components/SeasonalProducts';

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

const Home = ({products, featuredProducts, seasonalProducts}) => {
  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Banner/>
    <FeaturedProducts featuredProducts={featuredProducts}/>
    <SeasonalProducts seasonalProducts={seasonalProducts}/>
    <IconsSection/>
    <GiftsSection/>
    <Footer/>
    </ThemeProvider>
  )
}

export const getServerSideProps = async () => {
  const featuredQuery = '*[_type == "product" && category == "featured"]';
  const featuredProducts = await client.fetch(featuredQuery);
  const seasonalQuery = '*[_type == "product" && category == "seasonal"]';
  const seasonalProducts = await client.fetch(seasonalQuery);
  return {
    props: { featuredProducts, seasonalProducts }
  }
}

export default Home;