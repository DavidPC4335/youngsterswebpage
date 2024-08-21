import React from 'react';
import ProductHero from './ProductHero';
import ProductHowItWorks from './ProductHowItWorks';
import Header from '../../Components/Header/Header';
import ProductCTA from './ProductCTA';
import { Box, CircularProgress, Fade, Slide, useScrollTrigger } from '@mui/material';
import ProductCategories from './ProductCategories';
import Register from '../../Components/Login/Register';
import AppFooter from './AppFooter';



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
            <Slide direction="up" in={trigger||threshold===0} timeout={1000} {...props}>
            {children}
            </Slide>
            </div>
        </Fade>
    )
};

const LandingScreen = ({loading,parentError}) => {
    return (parentError ? <Register loading={loading} parentError={parentError}/> :
        loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={200} color='inherit' disableShrink/> 
        </div>
        : <>
            <Header options={['Log In','Register']}/>
  
            <FadeOnScroll threshold={0}><div><ProductHero /></div></FadeOnScroll>

            <FadeOnScroll threshold={150}><div><ProductHowItWorks /></div></FadeOnScroll>
            <FadeOnScroll threshold={800}><div><ProductCategories /></div></FadeOnScroll>
            <FadeOnScroll threshold={1200} direction='left'><div><ProductCTA /></div></FadeOnScroll>
            <AppFooter />
        </>
    );
};

export default LandingScreen;