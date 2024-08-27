import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
// import ToggleColorMode from './ToggleColorMode';
import AccountBoxIcon from '@mui/icons-material/ManageAccountsSharp';
import VerifiedIcon from '@mui/icons-material/Verified';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../../images/logo.png';
import NotificationsIcon from '@mui/icons-material/NotificationImportant';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { Menu, Stack } from '@mui/material';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HoverDropDown from './HoverDropDown';

const logoStyle = {
  transition: '0.5s',
  cursor: 'pointer',
};
const icons = {
  Home: <HomeIcon/>,
  Issue: <VerifiedIcon/>,
  Account: <AccountBoxIcon/>,
  'Log In' : <LoginIcon/>,
  Register: <HowToRegIcon/>
}


const serviceOptions = ['What do we take?','Residential','Commercial']


function AppAppBar({ mode, toggleColorMode ,options,client,...props}) {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(100);
  const location = useLocation().pathname;
  // console.log(location);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  React.useEffect(() => {
    window.onscroll = () =>
      window.scrollY === 0 ? setHeight(100) : setHeight(50);

    return () => (window.onscroll = null);
  });
  
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        
        sx={{
          top: 0,
          left: '5%',
          width: '90%',
          // border:'1px solid black',
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
          zIndex: open ? 0 : 99
        }}
      >
        <Container maxWidth="xlg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'rgb(160, 82, 45,0.5)',
              backdropFilter: 'blur(24px)',
              transition: '0.5s',
              maxHeight: height,
              border: '1px solid black',
              // borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
                justifyContent: (options?.[0] ==='Home' ? 'flex-start':'space-between'),
              }}
            >
              <img
                src={
                  logo
                }
                style={logoStyle}
                alt="logo"
                width={height === 50 ? '100px' : '150px'}
              />
              <Stack sx={{ display: { xs: 'none', md: 'flex' } ,
            
            }} direction='row' spacing={2}>
             

                <HoverDropDown options={serviceOptions} title='Our Services' path='services'>

                </HoverDropDown>
                <Button
                  onClick={() => navigate('/pricing')}
                  sx={{ py: '6px', px: '24px' ,borderRadius: '999px', height:height-height/5,transition: '0.5s'}}
                  // variant='contained'
                  fontSize={`${height/10}rem`}
                  color='primary' 
                  width={height*2}
                >
                  <Stack  direction="row"spacing={1} alignItems='center'  color='text.primary'>
                  <Typography variant="body2" color="text.primary" alignSelf='center'>
                   Pricing
                  </Typography>
                    <AttachMoneyIcon/>
                  </Stack>
                </Button>

                 



              </Stack>
              <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/* <ToggleColorMode mode={mode} /> */}
              <Button
                  onClick={() => navigate('/contact')}
                  sx={{ py: '6px', px: '24px' ,borderRadius: '999px', height:height-height/5,transition: '0.5s'}}
                  // variant='contained'
                  color='primary' 
                >
                  <Stack  direction="row"spacing={1} alignItems='center'  color='text.primary'>
                    <PermContactCalendarIcon/>
                  <Typography variant="body2" color="text.primary" alignSelf='center'>
                   Contact Us
                  </Typography>
                  </Stack>
                </Button>
            </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/* MOBILE section /> */}
            
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="white"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon sx={{transform:`scale(${height/40})`,transition:'0.5s',pr:height/100}} />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'primary.main',
                    flexGrow: 1,
                  }}
                >

                
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      // alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                 <img src={logo} alt="logo" width='100px' />
                 <Typography variant='h7' sx={{textDecoration:'underline'}}>Youngsters Junk Services</Typography>
                 </Stack>
                  </Box>
                  <Typography sx={{textDecoration:'underline'}} variant='h6'>
                    Our services
                  </Typography>
                {serviceOptions.map((option) => (
                  <MenuItem onClick={() => navigate('services/'+option)} sx={{
                    bgcolor:'rgb(160, 82, 45,0.5)',
                    borderRadius: '999px',
                    mt:1,
                    '&:hover':{
                        bgcolor:'rgb(160, 82, 45,0.9)'
                    }
                  }}>
                    {option}
                  </MenuItem>))}
                  <Typography sx={{textDecoration:'underline'}} variant='h6'>
                    Pricing
                  </Typography>
                  <MenuItem onClick={() => navigate('pricing')} sx={{
                    bgcolor:'rgb(160, 82, 45,0.5)',
                    borderRadius: '999px',
                    mt:1,
                    '&:hover':{
                        bgcolor:'rgb(160, 82, 45,0.9)'
                    }
                  }}>
                    Pricing
                  </MenuItem>
                  <MenuItem onClick={() => navigate('book')} sx={{
                    bgcolor:'rgb(160, 82, 45,0.5)',
                    borderRadius: '999px',
                    mt:1,
                    '&:hover':{
                        bgcolor:'rgb(160, 82, 45,0.9)'
                    }
                  }}>
                    Book a Quote
                  </MenuItem>
                  <Typography sx={{textDecoration:'underline'}} variant='h6'>
                    Contact
                  </Typography>
                  <MenuItem onClick={() => navigate('contact')} sx={{
                    bgcolor:'rgb(160, 82, 45,0.5)',
                    borderRadius: '999px',
                    mt:1,
                    '&:hover':{
                        bgcolor:'rgb(160, 82, 45,0.9)'
                    }
                  }}>
                    Contact Us
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func,
};

export default AppAppBar;