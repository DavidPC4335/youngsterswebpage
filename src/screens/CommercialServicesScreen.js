import React, { cloneElement } from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ProductHero from './LandingScreen/ProductHero';
import AppFooter from './LandingScreen/AppFooter';
import { Box, Fade, Grid, Paper, Slide, Stack, useScrollTrigger } from '@mui/material';
import ProductCTA from './LandingScreen/ProductCTA';
import ProductHowItWorks from './LandingScreen/ProductHowItWorks';
import AppAppBar from '../components/nav/AppAppBar';
import TakeComponent from './ScreenSections/TakeComponent';
import ProductHeroLayout from './LandingScreen/ProductHeroLayout';
import backgroundImage from '../images/commercialbg.jpg';
import secondbg from '../images/whatdowetakebg.avif';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HandshakeIcon from '@mui/icons-material/Handshake';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export const FadeOnScroll = (props) => {
    const {children,threshold=100} = props;
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold,
        
      });
    //   console.log("TWindow:",threshold);
    return (
        <Fade
        in = {trigger || threshold===0}
        timeout={1400}
        {...props}
        >
            <div>
            <Slide direction="up" in={trigger||threshold===0} timeout={1000} {...props}>
            {children}
            </Slide>
            </div>
        </Fade>
    )
};

const PricingCard=({title,price,description,checklist,icon})=>{
    const navigate = useNavigate();
    return(
        <Box  component={Paper} color={'grey.300'} sx={{transition: '0.3s',
            ":hover": {
                cursor: 'pointer',
                bgcolor: 'rgba(255,255,255,0.9)',
                color: 'black',
                boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
                scale: 1.05,
              },
        }}
        p={2}
        onClick={()=>navigate('/contact')}
        >
            <Typography variant='h5' p={1} color='grey.700'>{title}</Typography>
            <Typography variant="h5" align="center" fontSize={30 }color='text.black' p={4}>
                {price}
                <Typography variant="body1" align="center" color='grey.600' fontSize={13}>
                    {cloneElement(icon,{sx:{scale:4}})}
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
const ResidentialServicesScreen = () => {

    return (
        <div >
            <AppAppBar />
            <FadeOnScroll threshold={0}  ><div>
                <ProductHeroLayout 
                // multi={false}
                sxBackground={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundColor: '#7fc7d9', // Average color of the background image.
                    backgroundPosition: 'center',
                  }}
                >
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    Our Residential Services
                </Typography>
                <Typography color="inherit" align="center" variant="h5" marked="center" py={3}>
                    We offer a variety of services to our residential customers.
                </Typography>
                <Typography color="inherit" align="center" variant="h5" marked="center">
                    A list of services we offer are shown below:
                </Typography>

                </ProductHeroLayout>
                
                
                
                
                </div></FadeOnScroll>
            <FadeOnScroll threshold={0}  ><div>
                <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ backgroundImage: `url(${secondbg})`,}} p={1}>
                    <Grid item xs={12} sm={6} md={4}>
                        <PricingCard 
                        icon={<LocalShippingIcon />}
                        title={"On Site Pickup"}
                        description={"We offer on site pickup for all your junk removal needs. Our team will come to your location and remove all your unwanted items. We will take care of everything, so you don't have to worry about a thing."}
                        checklist={[
                            "On Site Pickup",
                            "No heavy lifting",
                            "No Curbside Required",
                        ]}
                        />      
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <PricingCard 
                    icon={<RequestQuoteIcon />}
                        title={"Pay By the Load"}
                        description={"Unlike other companies, we charge by the load. This means you only pay for the space your items take up in our truck. Not by the hour or by the weight. Use Our On-site Quote service to get an estimate."}
                        checklist={[
                            "Save on Costs for heavy items",
                            "Don't pay for time, only space",
                            "No hidden fees or charges",
                        ]}
                        />  
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <PricingCard 
                    icon={<HandshakeIcon />}
                        title={"Get a quote, fast!"}
                        description={"We offer fast quotes for our services. Give us a call or book a quote online and we will get back to you as soon as possible. You can also request to have the job done right away."}
                        checklist={[
                            "Save on Costs for heavy items",
                            "Don't pay for time, only space",
                            "No hidden fees or charges",
                        ]}
                        />  
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <PricingCard 
                    icon={<Diversity3Icon />}
                        title={"Friendly, Local Service"}
                        description={"As a local business, we strive to provide the best service to our customers. We are friendly, professional and always on time. We are here to help you with all your junk removal needs."}
                        checklist={[
                            'Local Business',
                            'Professional Service',
                            'Friendly Staff',
                        ]}
                        />  
                    </Grid>
                </Grid>
                
                
                
                </div></FadeOnScroll>
            {/* <FadeOnScroll threshold={500}  ><div><ProductCTA /></div></FadeOnScroll> */}
            <AppFooter />
        </div>
    );
};

export default ResidentialServicesScreen;