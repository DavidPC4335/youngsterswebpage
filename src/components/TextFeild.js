import React from 'react';
import { Box, TextField as MUITextField} from '@mui/material';
import { styled } from '@mui/styles';

const TextFieldComponent = styled(MUITextField)(({ customProp }) => ({
    // backgroundColor: '#FFFFFF',
color: 'warning',
    // based on the value passed to the component
}));

function TextField({...props}) {

    return (
        <Box width='100%' borderBottom='1px solid' borderRadius={'5px'}>
        <TextFieldComponent
        color='text'
            fullWidth
            {...props}
        />
        </Box>
    );
}

export default TextField;