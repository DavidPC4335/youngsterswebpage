import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import styled from '@mui/material/styles/styled';
import { Box, createTheme, Stack, useMediaQuery } from '@mui/material';
import Button from './Button';
import Typography from './Typography';
import { Send } from '@mui/icons-material';
import TextField from './TextFeild';
import { DesktopDatePicker as DatePicker, DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider, PickersLayout} from "@mui/x-date-pickers";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { ThemeProvider } from '@emotion/react';
import { useForm, ValidationError } from '@formspree/react';
const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
}));
const StyledPickersLayout = styled(PickersLayout)({
    '.MuiDateCalendar-root': {
      color: '#fffff',
      borderWidth: '0px',
      borderColor: '#e91e63',
      
      border: '0px solid',
      backgroundColor: 'grey',
    }
  })
const ContactFormComponent = ({title='Request an easy Quote'}) => {
    const [state, handleSubmit] = useForm("manwpezr");
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: '#A0522D',
            },  
            text: {
                primary: '#A0522D',
            },
        }
    });
    const [formData, setFormData] = React.useState({});
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // React.useEffect(() => {
    //     console.log("state:",state);
    // }, [state]);

    if (state.succeeded) {
        return <Stack p={5} height={'100%'} 
        spacing={2}
        sx={{
   bgcolor:'rgba(205,205,205,0.3)',
   borderRadius: 5,
   alignItems: 'center',
   justifyContent: 'center',
   }}

   >
    <Typography variant="h3" gutterBottom pb={2}>{'Your Message Has Been Sent!'}</Typography>
    <Typography variant="body1" gutterBottom pb={2}>{'Somone from our team will reach out to you shortly'}</Typography>
   </Stack>;
    }else if(state.errors){
        console.log("Errors:",state.errors)
    }

     
    return (
   
            <Stack p={5} height={'100%'} 
                 spacing={2}
                 sx={{
            bgcolor:'rgba(205,205,205,0.3)',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            }}
            component={'form'
            
            }onSubmit={handleSubmit}
            >
            <Typography variant="h3" gutterBottom pb={2}>{title}</Typography>
            <TextField label="👤 Name" 
            variant="outlined" 
            id='name' 
            type='name' 
            name='name'
            fullWidth onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
            <TextField label="📧 Email"
             variant="outlined" 
             id='email' 
             type='email' 
             fullWidth error={state.errors}onChange={(e)=>setFormData({...formData,email:e.target.value})}
             name='email'
             />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            <TextField 
            label="☎️ Phone Number"
             variant="outlined" 
             fullWidth onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
             id='phoneNumber'
                type='phoneNumber'
                name="phoneNumber"
             />
            <TextField label="💬 Additional Information"
             variant="outlined" 
             multiline id='message'
              type='message' 
              rows={4} 
              fullWidth 
              onChange={(e)=>setFormData({...formData,message:e.target.value})}
              name="message"
              />
            {/* <DatePicker label="📅 Date" variant="outlined" fullWidth/> */}
            
            <Stack direction='row' width='100%' border='1px solid black' borderBottom='1px solid white' borderRadius='5px'>
                <Box alignContent='center' >
                <Typography variant="body1" sx={{width:'130px'}}>{"📅 Perferred Date"}</Typography>
                </Box>
                {/* <ThemeProvider theme={theme}> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
             {isMobile ?<MobileDatePicker
             sx={{width:'100%',color:'black'}}
                        id="pastDate"
                        name="date"
                        selected={formData.preferredDate}
                        // onChange={(date) => setFormData((prevData) => ({ ...prevData, pastDate: date }))}
                        fullWidth
                        slots={{
                            layout:StyledPickersLayout
                        }}
                        /> :
                        <DesktopDatePicker
                        id="pastDate"
                        name="date"
                        selected={formData.preferredDate}
                        slots={{
                            layout:StyledPickersLayout
                        }}
                        // onChange={(date) => setFormData((prevData) => ({ ...prevData, pastDate: date }))}
                        fullWidth
                        />}

                        </LocalizationProvider>
                        {/* </ThemeProvider> */}
                    </Stack>
                    
            <Typography variant="caption" gutterBottom>By submitting this form, you agree to recieve messages from the youngsters team regarding your services.</Typography>
            {state.succeeded ? <Button disabled> Message Sent!</Button>
            :<Button variant="contained" fullWidth endIcon={<Send/>} type='submit'>Send</Button>
            }
            </Stack>
       
    );
};

export default ContactFormComponent;