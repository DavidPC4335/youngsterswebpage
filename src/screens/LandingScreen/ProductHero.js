import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../../images/junk.png';
import { Divider } from '@mui/material';
import { Phone } from '@mui/icons-material';

export default function ProductHero({title='Cheapest Junk Removal in Town',description='Give us a call or book a quote online and see how much you can save!'}) {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1" marked="center"sx={{
        textDecoration: 'none',
        borderBottom: '5px solid #ccc', // Modified border width
        pt:5,
        textShadow: '2px 2px 2px #888',
        fontSize: '3rem',
      }}>
        {title}
      </Typography>
      <Divider />
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        {description}
      </Typography>
      <Typography variant='caption'>Support Guelph Locals</Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        href="tel:2267670630"
        sx={{ minWidth: 300,borderRadius: '0px',border: '1px solid #ccc', }}
        endIcon={<Phone />}
      >
        Give us a Call
      </Button>
  
    </ProductHeroLayout>
  );
}
