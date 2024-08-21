import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
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
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
        <Typography variant="h3" marked="center" component="h2" sx={{ mb: 10,borderBottom:'2px solid #888',fontSize:'2rem' }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://www.velocitynetwork.foundation/wp-content/uploads/2022/05/wallet2.svg')"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Sign up and create Offers from your organization using VelocityCreds dynamic forms.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://www.velocitynetwork.foundation/wp-content/uploads/2022/05/blockchain2.svg')"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Offers are made available to claim on the Velocity Blockchain Network
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://www.velocitynetwork.foundation/wp-content/uploads/2022/06/wallet-1.svg')"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Recipients claim the offers and add them to their wallet. All Managed by VelocityCreds.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          href="/register"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
