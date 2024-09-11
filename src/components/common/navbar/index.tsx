import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import routes from '../../../data/routes';
import LinksInterface from "../../../types/links";
import CurrencyButtonWithMenu from "./components/CurrencyButtonWithMenu";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
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
        boxShadow: " 0px 6px 15px 0px #0000001F",
        zIndex: 1200,
        height: '154px',
        backgroundColor: 'background.default',

      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
          margin: 'auto',
        }}
      >
        {/* burger icon */}
        <Button sx={{ display: { lg: 'none' } }}>
          <MenuIcon />
        </Button>

        {/* logo */}
        <Box>
          <img src="/logo.jpeg" alt="logo" style={{ height: 70 }} />
        </Box>


        {/* desktop links */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: 'none', lg: 'flex' },width: '756px' ,gap:'16px' ,  flexGrow: 1, justifyContent: 'center' }}
        >
          {routes.map((route: LinksInterface) => (
            <Link to={route.path} key={route.path} style={{ textDecoration: 'none', color: 'inherit',  fontWeight: 'bold' }} >
              <Typography variant="body1" sx={{ padding: '16px 30px',backgroundColor: '#f8f9fa' ,borderRadius: "40px",  fontWeight: 'bold', fontSize:"18px",transitionDuration: '.300s', '&:hover': { color: 'secondary.main', backgroundColor: 'primary.main'  } }} >
                {route.name}
              </Typography>
            </Link>
          ))}
        </Stack>


        {/* currency and langauge */}
        <Stack direction="row" gap={'10px'} alignItems="center">
          <CurrencyButtonWithMenu />
          <Button variant="contained" sx={{backgroundColor: 'main.main', color: 'secondary.main', borderRadius: "21px", padding: '20px 15px 20px 15px',width: '135px', height: '51px', gap: '6px', }} >تسجيل الدخول</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
