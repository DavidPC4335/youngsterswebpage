import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import VelocityLogo from '../../assets/images/velocity.png';
const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  // {
  //   url: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400',
  //   title: 'Snorkeling',
  //   width: '40%',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400',
  //   title: 'Massage',
  //   width: '20%',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400',
  //   title: 'Hiking',
  //   width: '40%',
  // },
  {
    url: 'https://media.licdn.com/dms/image/C560BAQHiDkIMcrAQMQ/company-logo_200_200/0/1630585855192/credential_engine_logo?e=2147483647&v=beta&t=Qyyc4JBKENKPTH8Q3pFrbBEekhzaRvr5l4y9TU21hik',
    title: 'Credential Engine',
    width: '38%',
    to: 'https://credentialengine.org/'
  },
  {
    url: VelocityLogo,
    title: 'Velocity Network Foundation',
    width: '38%',
    to: 'https://www.velocitynetwork.foundation/'
  },
  {
    url: 'https://yt3.googleusercontent.com/n_54D-bnSnHoABCNm3thnLofYfj_58UnFH40YsqxcqurAEhTgYBcJCxJmVz4kGN9RWYrnBItrAg=s900-c-k-c0x00ffffff-no-rj',
    title: '1EdTech',
    width: '24%',
    to: 'https://www.1edtech.org/'
  }
];

export default function ProductCategories() {
  return (
    <Box
    component="section"
    sx={{ display: 'flex', bgcolor: 'secondary', overflow: 'hidden' ,mb:5}}
  >
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h2" marked="center" align="center" component="h1" sx={{
        color: 'text.primary',
        fontWeight: 'bold',
        fontSize: '2rem',
        borderBottom: '2px solid #888',
      }}>
        Integrations With Global Credentialing Inititives
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={()=>window.open(image.to, '_blank')}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  </Box>);
}
