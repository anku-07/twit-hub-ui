'use client';
import assest from '@/json/assest';
import { HeaderWrap } from '@/styles/StyledComponents/HeaderWrapper';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import SearchIcon from '@/ui/Icons/SearchIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const drawerWidth = 240;

export default function Header() {
  const navItems = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'How it works',
      route: '/',
    },
    {
      name: (
        <>
          View my offers <span className='cus-badge'>20% off</span>
        </>
      ),
      route: '/',
    },
    {
      name: 'Get help',
      route: '/',
    },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <Link href={item.route}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HeaderWrap>
      <AppBar component='nav' position='static' elevation={0} className='headerContainer'>
        <Container fixed>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href='/' className='headerLogo'>
              <Image src={assest.logo_img} width={209} height={36} alt='Logo' />
            </Link>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='navbar'>
              {navItems.map((item, index) => (
                <Link href={item?.route} key={`_link_${item?.route}_${index}`}>
                  {item?.name}
                </Link>
              ))}
              ````
            </Box>
            <Stack direction='row' alignItems='center' flexWrap='wrap' className='hdr_rgt'>
              <Box className='header-srch'>
                <InputFieldCommon endAdornment={<SearchIcon />} placeholder='Search here...' />
              </Box>
              <CustomButtonPrimary type='button' variant='contained' color='primary'>
                Login
              </CustomButtonPrimary>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
