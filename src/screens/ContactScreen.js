import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ProductHero from './LandingScreen/ProductHero';
import AppFooter from './LandingScreen/AppFooter';
import { Fade, Slide, Stack, useScrollTrigger } from '@mui/material';
import ProductCTA from './LandingScreen/ProductCTA';
import ProductHowItWorks from './LandingScreen/ProductHowItWorks';
import AppAppBar from '../components/nav/AppAppBar';
import PricingComponent from './ScreenSections/PricingComponent';
import { Facebook, Instagram, Mail } from '@mui/icons-material';


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

const ContactScreen = () => {

    return (
        <div >
            <AppAppBar />
            <FadeOnScroll threshold={0}  ><div><ProductHero title='Contact Us' description='Give us a Call or request a quote today!'>
                    <Button variant='contained' color='primary' sx={{border:'1px solid white'}} endIcon={<Mail/>} fullwidth href='mailto:sales@youngstersjunkremoval.com'>Email Us</Button>
                    <Stack spacing={2} justifyContent='center' direction={'row'}>
                    <Button variant='contained' color='primary' sx={{border:'1px solid white'}} startIcon={<Facebook/>} href='https://www.facebook.com/profile.php?id=61564420419526'>Facebook</Button>
                    <Button variant='contained' color='primary' sx={{border:'1px solid white'}} startIcon={<Instagram/>} href='https://www.instagram.com/youngsters_junkremoval/'>Instagram</Button>
                    </Stack>
                </ProductHero></div></FadeOnScroll>
            <AppFooter />
        </div>
    );
};

export default ContactScreen;