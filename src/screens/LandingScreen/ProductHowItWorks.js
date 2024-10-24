import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Handshake from '../../images/handshake';
import Trophy from '../../images/trophy';
import Badge from '../../images/badge';
import community from '../../images/community.png';
import { Paper } from '@mui/material';
import house from '../../images/whatdowetakebg.jpg';
const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 30,
  fontFamily: 'default',
  color: 'text.secondary',
  fontWeight: 'medium',
};

const image = {
  height: '100px',
  my: 2,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', 
        width:'100%',
        backgroundImage:`url(${house})`,
      backgroundSize: 'cover'
      , overflow: 'hidden' }}
    >
      <Container
        sx={{
          width:'100%',
          pt: 10,
          pb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.45)',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h3" marked="center" component="h2" sx={{ mb: 10,borderBottom:'2px solid #888',fontSize:'2rem' }} color='#ffffff'>
          Our Values
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number} color='#ffffff'>1.</Box>
                <Handshake width='150px' component={Paper} elevation={10} sx={{borderRadius:'15px',background:'linear-gradient(to right bottom, #8B4513, #D2B48C)'}} m={1}/>
                <Typography variant="h5" align="center" sx={{textDecoration:'underline'}} color='#ffffff'>
                  Fast and Efficent services
                </Typography>
                <Typography variant="body1" align="center" color='#ffffff'>
                  As a new business, we understand the importance of time and efficiency. We strive to provide the best services in the shortest time possible.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Badge width='150px' component={Paper} elevation={10} sx={{borderRadius:'15px',background:'linear-gradient(to right bottom, #8B4513, #D2B48C)'}} m={1}/>
                <Typography variant="h5" align="center" sx={{textDecoration:'underline'}} color='#ffffff'>
                  Exceptional Customer Service
                </Typography>
                <Typography variant="body1" align="center" color='#ffffff'>
                  We believe in providing the best customer service to our clients. We are always available to answer any questions or concerns.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box component={Paper} elevation={10} sx={{borderRadius:'15px',background:'linear-gradient(to right bottom, #8B4513, #D2B48C)'}} m={1}>
                <img src={community} alt="community" width='150px' height='auto' />
                </Box>
                <Typography variant="h5" align="center" sx={{textDecoration:'underline'}} color='#ffffff'>
                  Building Community
                </Typography>
                <Typography variant="body1" align="center" color='#ffffff'>
                  We are a local business and we believe in giving back to the community. We are always looking for ways to help out and support our community.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          href="/contact"
          sx={{ mt: 8 }}
        >
          Contact us
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
