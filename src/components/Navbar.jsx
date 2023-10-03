import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

import imgDetail from '../assets/LogoChurchFinal4.png';


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "Igreja",
      to: "/about"
    },
    {
        text: "Departamentos",
        to: "/about"
    },
    {
        text: "Contribuir",
        to: "/contact"
    },
    {
        text: "Fale conosco",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'white', 
        }}
        elevation={0}
        >
            <StyledToolbar>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'gray',
              textDecoration: 'none',
              alignItems:'center'
            }}>
            <img src={imgDetail} alt="" 
                style={{ 
                    width: "7%",
                }}
                />
            Igreja da Libertação
          </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}
                                sx={{
                                    width:'auto'
                                }}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: 'gray',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    },
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
