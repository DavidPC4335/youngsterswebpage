import React from 'react';
import MUITypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(MUITypography)(({ customProp }) => ({
    // backgroundColor: '#D2B48C',
    color: '#FFFFFF',
    fontFamily:'Times New Roman',
    // '&:hover': {
    //     backgroundColor: '#B8860B',
    // },
    // Use the customProp to modify the styles
    // based on the value passed to the component
    ...(customProp === 'special' && {
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
    }),
}));

function Typography({children, ...props }) {
    return (
        <CustomTypography  {...props}>
            {children}
        </CustomTypography>
    );
}

export default Typography;