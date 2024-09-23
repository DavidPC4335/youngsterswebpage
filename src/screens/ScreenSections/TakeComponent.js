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
import whatdowetakebg from '../../images/whatdowetakebg.avif';
import { CancelOutlined } from '@mui/icons-material';
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


const PricingCard=({title,price,description,checklist})=>{
    const navigate = useNavigate();
    return(
        <Box  component={Paper} color={'grey.300'} sx={{transition: '0.3s', width:'100%',
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
                {/* <Typography variant="body1" align="center" color='grey.600' fontSize={13}>
                    +Milage and Dumping Fees
                </Typography> */}
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



function TakeComponent() {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      pt={10}
      sx={{ display: 'flex', 
        backgroundImage:`url(${whatdowetakebg})`,
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
          Removal Checklist
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <Box sx={item}>
                <PricingCard title='Always Accepted' 
                price=''
                description='These items are always accepted and considered in our pricing model. These items are included in all of our services and pricing models.
                 Generic items are subject to sizing constraints based off of services selected.'
                checklist={[
                  'Small Furniture',
                  'Applicances',
                  'Electronics',
                  'Yard Waste',
                  'Scrap Metal',
                  'Renovation Debris',
                  'General Junk',
                ]}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={item}>
                <PricingCard title='Sometimes Accepted' 
                price=''
                description='These items are usually accepted and considered in our higher tier pricing model. These items are subject to refusal by our team.
                 Generic items are subject to sizing constraints based off of services selected.'
                checklist={[
                  'Mattresses',
                  'Box Springs',
                  'Tires',
                  'Paint',
                  'Chemicals',
                  'Concrete',
                ]}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={item}>
              <Box  component={Paper} color={'grey.300'} sx={{transition: '0.3s', width:'100%',
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
            <Typography variant='h5' p={1} color='grey.700'>{'Never Accepted'}</Typography>
            <Typography variant="h5" align="center" fontSize={30 }color='text.black' p={4}>
                
            </Typography>
            <Typography variant="body1" align="center" color='black'>
                {"These items are never accepted and are subject to refusal by our team. These items are not included in any of our services and pricing models."}
            </Typography>
            <Typography variant="body2" align="center" color='black' p={1} sx={{textDecoration:'underline'}}>
                Includes:
            </Typography>
            <Stack spacing={1}>
            {[
              'Hazardous Waste',
              'Medical Waste',
              'Human Waste',
              'Asbestos',
              'Biohazardous Waste',
              'Carcases',
            ].map((item,index)=>(
                <Stack key={index} direction='row'  alignItems='center' spacing={1}>
                    <CancelOutlined color='error'/>
                <Typography key={index} variant="body1" align="center" color='black'>
                    {item}
                </Typography>
                </Stack>
            )
            )}</Stack>
        </Box>
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

export default TakeComponent;
