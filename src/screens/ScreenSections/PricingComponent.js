import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Stack } from '@mui/material';
import junkRemoval from '../../images/junk.png';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 30,
  fontFamily: 'default',
  color: 'secondary',
  fontWeight: 'medium',
};

const image = {
  height: '100px',
  my: 2,
};


export const PricingCard=({title,price,description,checklist})=>{
    const navigate = useNavigate();
    return(
        <Box  component={Paper} color={'grey.300'} sx={{transition: '0.3s',
            ":hover": {
                cursor: 'pointer',
                bgcolor: 'rgba(255,255,255,0.9)',
                color: 'black',
                boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
                scale: 1.1,
              },
        }}
        p={2}
        onClick={()=>navigate('/contact')}
        >
            <Typography variant='h5' p={1} color='grey.700'>{title}</Typography>
            <Typography variant="h5" align="center" fontSize={30 }color='text.black' p={4}>
                {price}
                <Typography variant="body1" align="center" color='grey.600' fontSize={13}>
                    +Milage and Dumping Fees
                </Typography>
            </Typography>
            <Typography variant="body1" align="center" color='black'>
                {description}
            </Typography>
            <Typography variant="body2" align="center" color='black' p={1} sx={{textDecoration:'underline'}}>
                Includes:
            </Typography>
            <Stack spacing={1}>
            {checklist?.map((item,index)=>(
                <Stack key={index} direction='row'  alignItems='center' spacing={1}>
                    <CheckCircleIcon color='success'/>
                <Typography key={index} variant="body1" align="center" color='black'>
                    {item}
                </Typography>
                </Stack>
            )
            )}</Stack>
        </Box>
    )
}



function PricingComponent() {
  return (
    <Box
      component="section"
      pt={10}
      sx={{ display: 'flex', 
        backgroundImage:`url(${junkRemoval})`,
        backgroundSize:'cover',
         overflow: 'hidden' }}
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
        <Typography variant="h2" marked="center" component="h2" sx={{ mb: 10,
            borderBottom:'4px solid #888'
            ,fontSize:'2.5rem',
            bgcolor:'rgba(255,255,255,0.9)',
            p:2,
            borderRadius:'15px', 
            // textDecoration: 'underline',
            }}>
          Pricing Models
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <PricingCard title='Single Load' 
                price='~$200'
                description='Single Load Pricing applies to any load size 
                that is capable of fitting into a standard 8ft truck bed. 
                Our team will confirm what items qualify.'
                checklist={['1 Standard 8ft Truck bed',
                    'Loading From Home',
                    'Small Appliances',
                    'Small Furniture',
                    'Yard waste',

                ]}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
              <PricingCard title='Trailer Load' 
                price='~$450'
                description='Trailer Load Pricing applies to any truck load 
                as well as our 5x10 trailer. Our team will confirm what items 
                qualify during an inspection.'
                checklist={['1 Standard 8ft Truck bed',
                    '1 5x10 Trailer load',
                    'Loading From Home',
                    'Small Appliances',
                    'Furniture',
                    'Yard waste',
                    'Scrap metal',
                ]}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
              <PricingCard title='Custom Load' 
                price='Prices Vary'
                description='Custom Load Pricing applies to any load size/quantity. We are happy to provide a free estimate that fits your needs and situation the best.'
                checklist={['Standard 8ft Truck bed',
                    '5x10 Trailer load(s)',
                    'Loading From Home',
                    'Appliances',
                    'Furniture',
                    'Yard waste',
                    'Scrap metal',
                    'Construction debris',
                    'Commercial cleanouts',
                    'Estate cleanouts',
                ]}
                />
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

export default PricingComponent;
