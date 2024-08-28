import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const HoverDropDown = ({title,options,path,children}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = (e) => {

          const menu = document.getElementById("simple-menu").children[2];
          const menuBoundary = {
            left: menu.offsetLeft,
            // top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
            top: 30,
            right: menu.offsetLeft + menu.offsetHeight,
            bottom: menu.offsetTop + menu.offsetHeight
          };
          
          if (
            e.clientX >= menuBoundary.left &&
            e.clientX <= menuBoundary.right &&
            e.clientY <= menuBoundary.bottom &&
            e.clientY >= menuBoundary.top
          ) {
            return;
          }else{
            console.log(menuBoundary,e.clientX,e.clientY);
          }
    
        setOpen(false);
      };


    return (
        <div className={classes.root}>
          <Button
          id="menubutton1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
          sx={{transition: '0.5s'}}
        //   variant='outlined'
            color='white'
        >
          {title}
          <ExpandMore />
        </Button>
        <Menu
        onMouseOut={handleClose}
        onMouseLeave={handleClose}
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          sx={{"& .MuiPaper-root": {
      backgroundColor: "rgb(160, 82, 45,1)"
    }}}
        >
            {options.map((option, index) => (
                <MenuItem
                sx={{bgcolor:'rgb(160, 82, 45,0.5)',
                '&:hover':{
                    bgcolor:'rgb(160, 82, 45,0.9)'
                }


                }}
                key={index}
                onClick={() => {
                    navigate('../../'+(path? path+'/' : '')+option.toLowerCase());
                }}
                >
                <Typography variant="body1" color="grey.200">
                    {option}
                </Typography>
                </MenuItem>
            ))}
        </Menu>
        </div>
    );
};

export default HoverDropDown;