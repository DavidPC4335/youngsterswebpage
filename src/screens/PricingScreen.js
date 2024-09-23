import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ProductHero from './LandingScreen/ProductHero';
import AppFooter from './LandingScreen/AppFooter';
import { Fade, Slide, useScrollTrigger } from '@mui/material';
import ProductCTA from './LandingScreen/ProductCTA';
import ProductHowItWorks from './LandingScreen/ProductHowItWorks';
import AppAppBar from '../components/nav/AppAppBar';
import PricingComponent from './ScreenSections/PricingComponent';


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

const PricingScreen = () => {

    return (
        <div >
            <AppAppBar />
            <FadeOnScroll threshold={0}  ><div><PricingComponent /></div></FadeOnScroll>
            <FadeOnScroll threshold={400}  ><div><ProductCTA /></div></FadeOnScroll>
            <AppFooter />
        </div>
    );
};

export default PricingScreen;