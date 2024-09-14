import { Box, Stack, Typography, Divider } from '@mui/material';
import navLinks from '../../data/routes';
import { Link } from 'react-router-dom';
import {  Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '40px 20px',
        width: '100%',
        marginTop: '100px'
      }}
    >
      <Stack
        spacing={4}
        direction={{ xs: 'column', sm: 'row-reverse' }}
        justifyContent="space-between"
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Logo and Navigation Links */}
        <Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-end' }} textAlign={{ xs: 'center', sm: 'left' }}>
          <Box
            component="img"
            src="/footer-logo.png"
            alt="Company Logo"
            sx={{
              width: '150px',
              mb: 2,
            }}
          />
          <Stack spacing={1} direction={{ xs: 'column', sm: 'row-reverse' }} textAlign="center" gap="20px" alignItems="center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  margin: '0 10px',
                }}
              >
                <Typography variant="body1" fontWeight={'bold'}>{link.name}</Typography>
              </Link>
            ))}
          </Stack>
        </Stack>

        {/* App Download Section */}
        <Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-start' }} textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h6" fontWeight="bold" textAlign={'right'}>
            تنزيل التطبيق
          </Typography>
          <Stack spacing={1} direction="row" justifyContent="center" alignItems="center" gap="20px">
            <img src="/images/home/app-store-button.png" alt="" />
            <img src="/images/home/google-button.png" alt="" />
          </Stack>
        </Stack>
      </Stack>

      <Divider sx={{ my: 4, borderColor: '#ddd', width: '80%', marginX: 'auto' }} />

      <Stack direction={{ xs: 'column-reverse', sm: 'row-reverse' }} spacing={4} alignItems="center" justifyContent="space-between" width="80%" margin="auto">
        <Stack direction="row-reverse" spacing={2}>
          <LinkedIn sx={{ color: 'white' }} />
          <Instagram sx={{ color: 'white' }} />
          <Twitter sx={{ color: 'white' }} />
          <Facebook sx={{ color: 'white' }} />
        </Stack>
        <Stack direction="row-reverse" spacing={4} textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="body2" fontWeight={'bold'}>شروط الاستخدام</Typography>
          <Typography variant="body2" fontWeight={'bold'}>سياسة الخصوصية</Typography>
        </Stack>
      </Stack>

      <Typography variant="body2" color="white" align="center" sx={{ mt: 4 }}>
        © {new Date().getFullYear()} جميع الحقوق محفوظة لدي قولدن هوست
      </Typography>
    </Box>
  );
};

export default Footer;
