import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MailIcon from '@mui/icons-material/Mail';
import { Facebook, Instagram } from '@mui/icons-material';
function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://davidpc.ca" target='_blank'>
        David Pavlove Cunsolo
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey.500',
  mr: 1,
  '&:hover': {
    bgcolor: 'grey.600',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'grey.500'}}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{ justifyContent: 'flex-end', height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="mailto:sales@youngstersjunkremoval.com" sx={iconStyle}>
                  <MailIcon color='disabled'/>
                </Box>
                <Box component="a" href="https://www.facebook.com/profile.php?id=61564420419526" sx={iconStyle}>
                  <Facebook color='disabled'/>
                </Box>
                <Box component="a" href="https://www.facebook.com/profile.php?id=61564420419526" sx={iconStyle}>
                  <Instagram color='disabled'/>
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              {/* <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/info/terms">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/info/privacypolicy">Privacy</Link>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
          
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
