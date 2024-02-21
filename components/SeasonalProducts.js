import React from 'react'

import { Grid, Paper, Typography } from '@mui/material';

import Product from './Product';
import Link from 'next/link';

const SeasonalProducts = ({seasonalProducts}) => {
  return (
    <Paper className='featured-container' elevation={0}>
        <div className='featured-icon-container'>
          <Typography variant='h3' component='h1' className='featured-heading'> This season&apos;s finest</Typography>
          <img src="https://i.ibb.co/1fCHLBR/sakura.png" alt="flower-icon" />
        </div>
        <Typography variant='h6' component='h2' className='featured-sub-heading'> Hand picked seasonal selections </Typography>
        <div className='product-container'>
            {seasonalProducts?.map((fproduct) => <Product key={fproduct._id} product={fproduct}/>)}
        </div>
        <Link href='/store/all' className='featured-button'><Typography variant='h6'> See More </Typography></Link>
    </Paper>
  )
}

export default SeasonalProducts;