import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#795548', // light brown color
            secondary: '#8B4513', // medium dark brown color
            light: '#D2B48C', // light brown color
        },
        secondary: {
            main: '#FFD700', // gold color
        },
        text: {
            primary: '#ffffff', // white color
            secondary: '#ffffff', // black color
        },
        info: {
            main: '#A0522D', // orangey brown color
        },
        white: {
            main: '#ffffff', // white color
        },
    },  
    props:{

    }
});

export default theme;