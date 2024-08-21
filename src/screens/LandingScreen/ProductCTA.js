import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
    component="section"
    sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden',py:5 }}
  >
    <Container component="section" sx={{ mt: 10,mb:25, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'grey.500',
              py: 8,
              px: 3,
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom color='white'>
              Been Issued a Credential? 
              </Typography>
              <Typography variant="h5" color='grey.200'>
              Sign up for the Velocity Career Wallet
              </Typography>
              <Typography variant="body1" mt={4}>
              Simply verify your email and claim!
              </Typography>
              <a href='https://apps.apple.com/us/app/velocity-career-wallet/id1587589679'><img
                alt="Get it on App store"
                src='https://uploads-ssl.webflow.com/618e3970639af961ca1e7325/61928c859b06b4b76acf89e7_App_store_button%201.png'
                sx={{ width: '100%', borderRadius: 0,mb:4   }} // Add borderRadius: 0 to make the button square
              /></a>
              <a href='https://play.google.com/store/apps/details?id=io.velocitycareerlabs.holderapp'><img
                alt="Get it on Google Play"
                src='https://uploads-ssl.webflow.com/618e3970639af961ca1e7325/61928c6b0ab4da99c2ebe9f1_google_play_button%201.png'
                sx={{ width: '100%', borderRadius: 0,mb:4   }} // Add borderRadius: 0 to make the button square
              /></a>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              backgroundColor: 'grey.400',
            }}
          />
          <Box
            component="img"
            src="https://play-lh.googleusercontent.com/sbWBJM8-QrVu8Fw37x2mP-t0tQorcAjY-3ywrreuejWQiZmYvCEUgJjHpdh-AIxtzfc"
            alt="call to action"
            sx={{
              borderRadius: '10%',
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>);
}

export default ProductCTA;
