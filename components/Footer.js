import React from 'react';

import { Typography } from '@mui/material';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from 'next/link';



function Footer() {
  return (
    <div className='footer-container'>
        <Link href='/'>
            <img className='footer-img' src="https://i.ibb.co/F3bLWtF/photo-5942589873020059994-y-removebg-preview.png" alt="footer-logo" />
       </Link>
       <Typography variant='h6' className='footer-legend'>
           - Your premium floristic atelier -
       </Typography>
       <Typography onClick={(e) => {window.location.href ='mailto:info@louflowers.at';}} variant='h6' className='footer-email'>
           info@louflowers.at
       </Typography>

       <div className="footer-links">
            <Link className='footer-link' href='/'> Home </Link>
            <Link className='footer-link' href='/store'> Store </Link>
            <Link className='footer-link' href='/contacts'> Contacts </Link>
       </div>

       <div className="footer-payments">
            <img className='footer-payment' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png" alt="visa" />
            <img className='footer-payment' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="master card" />
            <img className='footer-payment' src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="american express" />
            <img className='footer-payment' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/1200px-Discover_Card_logo.svg.png" alt="discover" />
       </div>
    </div>
  )
}

export default Footer;