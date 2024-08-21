import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ProductHero from './LandingScreen/ProductHero';
import AppFooter from './LandingScreen/AppFooter';
import { Fade, Slide, useScrollTrigger } from '@mui/material';


export const FadeOnScroll = (props) => {
    const {children,threshold=100} = props;
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold,
        
      });
      console.log("TWindow:",threshold);
    return (
        <Fade
        in = {trigger || threshold===0}
        timeout={1400}
        {...props}
        >
            <div>
            <Slide direction="down" in={trigger||threshold===0} timeout={1000} {...props}>
            {children}
            </Slide>
            </div>
        </Fade>
    )
};

const HomeScreen = () => {

    return (
        <div >
            <FadeOnScroll threshold={0}  ><div><ProductHero /></div></FadeOnScroll>
            <AppFooter />
        </div>
    );
};

export default HomeScreen;