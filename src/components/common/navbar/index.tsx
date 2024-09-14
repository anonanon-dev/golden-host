import React, { useState } from 'react';
import { Box, Button, Stack, Typography, Drawer, IconButton, useMediaQuery, useTheme, Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../../../data/routes';
import LinksInterface from "../../../types/links";
import CurrencyButtonWithMenu from "./components/CurrencyButtonWithMenu";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message'; // Added MessageIcon
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery as useBreakpoint } from '@mui/material';

// Styled Box for user info


const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('xl')); // Large screens
  const isMobile = useBreakpoint(theme.breakpoints.down('md')); // Mobile screens
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElNotification, setAnchorElNotification] = useState<null | HTMLElement>(null);
  const [anchorElMessage, setAnchorElMessage] = useState<null | HTMLElement>(null);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorElNotification(null);
  };

  const handleMessageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMessage(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorElMessage(null);
  };

  const openNotification = Boolean(anchorElNotification);
  const notificationId = openNotification ? 'notification-popover' : undefined;

  const openMessage = Boolean(anchorElMessage);
  const messageId = openMessage ? 'message-popover' : undefined;

  

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
        {!isLarge ? (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
            <Box>
              <img src="/logo.png" alt="logo" style={{ height: 60 }} />
            </Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton onClick={handleNotificationClick} sx={{ color: 'text.primary' }}>
                <NotificationsIcon />
              </IconButton>
              <IconButton onClick={handleMessageClick} sx={{ color: 'text.primary' }}>
                <MessageIcon />
              </IconButton>
              <Popover
                id={notificationId}
                open={openNotification}
                anchorEl={anchorElNotification}
                onClose={handleNotificationClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Box p={2}>Notifications Content</Box>
              </Popover>
              <Popover
                id={messageId}
                open={openMessage}
                anchorEl={anchorElMessage}
                onClose={handleMessageClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Box p={2}>Messages Content</Box>
              </Popover>
              <Box
                sx={{
                  display: isMobile ? 'none' : 'flex',
                  alignItems: 'center',
                  height: '50px',
                  gap: '10px',
                  backgroundColor: '#f0f0f0',
                  padding: '0 10px',
                  borderRadius: '8px',
                }}
              >
                <img src="/user-avatar.jpg" alt="User Avatar" style={{ height: '100%' }} />
                <Box>
                  <Typography variant="h6">User Name</Typography>
                  <Typography variant="body2">User Role</Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box>
                <img src="/logo.png" alt="logo" style={{ height: 70 }} />
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
            {isLarge && (
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
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: '#fff', height: '100vh' }}>
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
