import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Typography, Breadcrumbs, Link, TextField, FormControlLabel, Checkbox, Button, Snackbar, Alert } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


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

function contacts() {
  return (

    <ThemeProvider theme={theme}>
        <Navbar/>

            <div className='contacts-container'>

              <div className='contacts-banner-section'>
                <div className='contacts-heading-div'>
                  <Typography variant='h2' component='h1' className='contacts-heading'> Contacts </Typography> 
                  <img className='contacts-img' src="https://i.ibb.co/9GbsLQp/flowers.png" alt="flowers" />
                </div>
                <IconBreadcrumbs/>
              </div>

              <ContactsForm/>

            </div>

        <Footer/>
    </ThemeProvider>

  )
};


function IconBreadcrumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href="/contacts"
          >
            <PermContactCalendarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Contacts
          </Link>
        </Breadcrumbs>
    );
};


const ContactsForm = () => {
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleClickError = () => {
        setOpenError(true);
      };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
      };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_89wt498', 'template_d0c3nxf', form.current, 'gW3p9kpSlnCDrn7-I')
        .then((result) => {
            console.log(result.text);
            handleClick();
        }, (error) => {
            console.log(error.text);
            handleClick2();
        });
    };

    return(

        <div className="contacts-form-container">
            <Typography variant='h4'> Leave us your sugestions. </Typography>
            <Typography variant='h5'> We will contacts you as soon as possible. </Typography>
            <Typography variant='subtitle1'> If you are interested in partnership or business oppurtunities, leave us your number.</Typography>
            
            <form ref={form} onSubmit={sendEmail} className='contacts-form'>
                <div className="contacts-form-div">
                    <TextField required className='contacts-form-input' name='name' label="Name" variant="outlined" color='secondary'/>
                    <TextField required className='contacts-form-input' type='email' name='email' label="E-mail" variant="outlined" color='secondary'/>
                </div>
                <TextField required label="Message" type='text' name='message' variant="outlined" color='secondary' multiline rows={6}/>
                <FormControlLabel control={<Checkbox color='secondary' defaultChecked />} label="Receive special offers and news letters on my e-mail" />

                <Button className='contacts-form-submit' type='submit'> Send </Button>
            </form>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize:'16px', fontWeight: '500' }}>
              Your message has been sent! {`\u{1F609}`}
                </Alert>
            </Snackbar>

            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontSize:'16px', fontWeight: '500' }}>
                Something went wrong, please try again later!
                </Alert>
            </Snackbar>

        </div>
        
    )
};



export default contacts;