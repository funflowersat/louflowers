import React from 'react'

import { Grid, Paper, Typography } from '@mui/material';

import Product from './Product';
import Link from 'next/link';

const FeaturedProducts = ({featuredProducts}) => {
  return (
    <Paper className='featured-container' elevation={0}>
        <div className='featured-icon-container'>
        <Typography variant='h3' component='h1' className='featured-heading'> Our best sellers</Typography>
        <img src="https://i.ibb.co/Fm0rgx3/rose.png" alt="rose-png" />
        </div>
        <Typography variant='h6' component='h2' className='featured-sub-heading'> Surprise your special someone </Typography>
        <div className='product-container'>
            {featuredProducts?.map((fproduct) => <Product key={fproduct._id} product={fproduct}/>)}
        </div>
        <Link href='/store/all' className='featured-button'><Typography variant='h6'> See More </Typography></Link>
    </Paper>
  )
}

export default FeaturedProducts;