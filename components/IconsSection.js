import React from 'react';
import { Paper, Typography } from '@mui/material';
import Link from 'next/link';

function IconsSection() {
  return (

      <div className="section-container">
        <div className="section-sub">
          <div className="section-text">
            <Typography className='section-text-title' variant='h3' component='h1'>
              Special holiday offers
            </Typography>
            <Typography className='section-text-subtitle' variant='subtitle1' component='p'>
              
              Indulge in a delightful surprise with our special offer! <span style={{fontWeight: '500'}}> When you spend over 110 euros </span> on our enchanting floral bouquets, you&apos;ll receive a complimentary mystery chocolate box to sweeten your experience.
              <br></br> <span style={{marginTop: '7px'}}></span> 
              Immerse yourself in the joy of gifting or treating yourself to our exquisite blooms, and let us add an extra touch of decadence with our carefully curated selection of premium chocolates. Handpicked for their exceptional quality and irresistible flavors, our mystery chocolate boxes are a tantalizing addition to any order.
              <br></br> <span style={{marginTop: '7px'}}></span> 
              <span id='section-extra-text'>Whether you&apos;re celebrating a milestone, expressing love and appreciation, or simply craving a moment of indulgence, our free chocolate box is the perfect complement to your bouquet purchase. It&apos;s our way of saying thank you for choosing our boutique for your floral needs.</span>
              
            </Typography>
            <Link href='/store/all' className='section-button'><Typography variant='h6'> Shop Now </Typography></Link>
          </div>
          <div className="section-image"></div>
        </div>
      </div>

  )
}

export default IconsSection;