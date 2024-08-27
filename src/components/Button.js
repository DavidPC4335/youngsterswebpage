import React from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LightBrownButton = styled(MUIButton)(({ customProp }) => ({
    backgroundColor: '#D2B48C',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#B8860B',
    },
    // Use the customProp to modify the styles
    // based on the value passed to the component
    ...customProp,
}));

function Button({children, ...props }) {
    return (
        <LightBrownButton  {...props}>
            {children}
        </LightBrownButton>
    );
}

export default Button;