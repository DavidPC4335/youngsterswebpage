import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Logo from '../../images/logo-with-bg.jpg';
import bg from '../../images/money-bg.png';
import { Button, Link } from '@mui/material';
import { Mail } from '@mui/icons-material';
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
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden', py: 5, backgroundImage: `url(${bg})`, backgroundBlendMode: 'blur(5px)' }}
    >
      <Container component="section" sx={{ mt: 10, mb: 25, display: 'flex' }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'primary.main',

                py: 8,
                px: 3,
              }}
            >
              <Box sx={{ maxWidth: 400 }}>
                <Typography variant="h2" component="h2" gutterBottom color='white' borderBottom='3px solid #A0522D'>
                  Price Match Guarentee!
                </Typography>
                <Typography variant="h5" color='grey.200'>
                  Show us a competing quote and we will match it plus another <u>$50</u> off!
                </Typography>
                <Button variant="contained" href="mailto:sales@youngstersjunkremoval.com" sx={{ mt: 4 }} endIcon={<Mail/>} color='info'>
                  Email Us
                </Button>
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
              src={Logo}
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
    </Box>
  );
}

export default ProductCTA;
