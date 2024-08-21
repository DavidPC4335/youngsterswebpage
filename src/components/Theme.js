import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#795548', // light brown color
        },
        secondary: {
            main: '#FFD700', // gold color
        },
        text: {
            primary: '#ffffff', // white color
            secondary: '#ffffff', // black color
        },
    },  
});

export default theme;