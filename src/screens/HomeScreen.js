import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const HomeScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                Welcome to the Home Screen!
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                Get Started
            </Button>
        </div>
    );
};

export default HomeScreen;