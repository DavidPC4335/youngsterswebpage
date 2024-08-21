import React from 'react';
import { Stack, Typography } from '@mui/material';

const NotFoundComponent = () => {
    return (
        <Stack width='100%' Height='100%'>
            {/* Your component content goes here */}
            <Typography variant="h1">404 - Page Not Found</Typography>
            <Typography variant="body1">The page you are looking for does not exist.</Typography>
        </Stack>
    );
};

export default NotFoundComponent;