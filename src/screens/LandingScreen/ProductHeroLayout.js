import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import banner from '../../images/logo.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Grid } from '@mui/material';
import ContactFormComponent from '../../components/ContactFormComponent';
const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '92vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function ProductHeroLayout({multi=true,...props}) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Grid container px={1}>
        <Grid item xs={12} md={6}>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={banner}
          alt="Logo"
          width="200"
          // height="80"
        />
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <Box
          alt="arrow down"
          sx={{ height: '16', width: '12', position: 'absolute', bottom: 32 }}
        >
        <ArrowDownwardIcon/>
        </Box>
      </Container>
          </Grid>
  {multi&& 
  <Grid item xs={12} md={6}>
        <ContactFormComponent />
        </Grid>}
      </Grid>
    </ProductHeroLayoutRoot>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default ProductHeroLayout;
