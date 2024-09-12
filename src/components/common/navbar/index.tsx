import React, { useState } from 'react';
import { Box, Button, Stack, Typography, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../../../data/routes';
import LinksInterface from "../../../types/links";
import CurrencyButtonWithMenu from "./components/CurrencyButtonWithMenu";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('xl')); // Large screens
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      dir="rtl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'sticky',
        top: 0,
        padding: 2,
        boxShadow: '0px 6px 15px 0px #0000001F',
        zIndex: 1200,
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          margin: 'auto',
          flexDirection: { xs: 'column', md: 'row' }, // Stack items on small screens, row on md and up
          justifyContent: 'space-between',
        }}
      >
        {/* Mobile and Tablet View: Burger Icon and Icons */}
        {!isLarge ? (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
            <Box>
              <img src="/logo.jpeg" alt="logo" style={{ height: 60 }} />
            </Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton sx={{ color: 'text.primary' }}>
                <NotificationsIcon />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <DarkModeIcon />
              </IconButton>
            </Stack>
          </Stack>
        ) : (
          // Desktop View: Logo, Links, Currency, and Language
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box>
                <img src="/logo.jpeg" alt="logo" style={{ height: 70 }} />
              </Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{ 
                  flexGrow: 1,
                  justifyContent: 'center',
                  display: { xs: 'none', md: 'flex' },
                  gap: '16px',
                }}
              >
                {routes.map((route: LinksInterface) => (
                  <Link to={route.path} key={route.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        padding: '12px 24px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '40px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        transitionDuration: '.300s',
                        '&:hover': {
                          color: 'secondary.main',
                          backgroundColor: 'primary.main',
                        },
                      }}
                    >
                      {route.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>
            {isLarge && ( // Show only on large screens
              <Stack direction="row" spacing={2} alignItems="center">
                <CurrencyButtonWithMenu />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'main.main',
                    color: 'secondary.main',
                    borderRadius: '21px',
                    padding: '16px 12px',
                    width: '135px',
                    height: '51px',
                    gap: '6px',
                  }}
                >
                  تسجيل الدخول
                </Button>
              </Stack>
            )}
          </Box>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          width: '80vw',
          '& .MuiDrawer-paper': {
            width: '80vw',
            boxSizing: 'border-box',
          },

        }}
      >
        <Box sx={{ p: 2 , bgcolor:'primary.main',color:'#fff', height: '100vh'}}  >
          <IconButton onClick={toggleDrawer(false)} sx={{ float: 'right', color: '#fff' }}>
            <CloseIcon />
          </IconButton>
          <Stack direction="column" spacing={2} mt={2}>
            {routes.map((route: LinksInterface) => (
              <Link to={route.path} key={route.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  variant="body1"
                  sx={{
                    padding: '16px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    transitionDuration: '.300s',
                    '&:hover': {
                      color: 'secondary.main',
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  {route.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
