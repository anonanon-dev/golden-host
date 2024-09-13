import { QrCode, Telegram } from '@mui/icons-material';
import { Box, Typography, Stack } from '@mui/material';
import { Apple, Google } from '@mui/icons-material';

const HomeDownloadApp = () => {
  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', lg: 'row' }}  // Switch to column on small screens
      justifyContent='space-between'
      sx={{
        background: 'linear-gradient(90deg, #DB186f 0%, #452775 100%)',
        width: '80vw',
        color: 'white',
        borderRadius: '50px',
        paddingX: {
          xs: '20px',
          md: '40px',
          lg: '50px',
          xl: '100px'
        },
        height: '100%',
        py: '50px',
        position: 'relative',
        mt: '100px',
        // overflow: 'hidden'  // Ensure that overflow is handled
      }}
      dir="rtl"
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' },  // Adjust width based on screen size
          padding: { xs: '8px', sm: '16px', md: '24px' },
          order: { xs: 2, lg: 1 }  // Place this box below the image on small screens
        }}
      >
        <Typography
          variant='h4'
          mb="10px"
          fontWeight='bold'
          textAlign='right'
          sx={{
            fontSize: {
              xs: '1.25rem',
              sm: '1.5rem',
              md: '2rem',
              lg: '2.25rem'
            }
          }}
        >
          حمل
        </Typography>
        <Typography
          variant='h4'
          mb="10px"
          fontWeight='bold'
          textAlign='right'
          sx={{
            fontSize: {
              xs: '1.25rem',
              sm: '1.5rem',
              md: '2rem',
              lg: '2.25rem'
            }
          }}
        >
          التطبيق الان
        </Typography>
        <Typography
          variant='h6'
          mb="10px"
          fontWeight='bold'
          textAlign='right'
          sx={{
            fontSize: {
              xs: '0.875rem',
              sm: '1rem',
              md: '1.5rem',
              lg: '1.75rem'
            }
          }}
        >
          واحجز معنا بكل سهولة
        </Typography>

        <Stack spacing={1} direction="row" textAlign={'left'} justifyContent="start" alignItems="center" gap="20px">
          <Stack
            direction="row-reverse"
            spacing={1}
            alignItems="center"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '10px',
              padding: '10px',
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            <Apple sx={{ color: '#000', fontSize: { xs: '20px', sm: '24px' } }} />
            <Box>
              <Typography
                variant="body2"
                fontWeight='bold'
                textAlign='right'
                sx={{
                  fontSize: {
                    xs: '0.625rem',
                    sm: '0.75rem',
                    md: '0.875rem',
                    lg: '1rem'
                  }
                }}
              >
                Get it on
              </Typography>
              <Typography
                variant="body1"
                fontWeight='bold'
                textAlign='right'
                sx={{
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem',
                    md: '1rem',
                    lg: '1.125rem'
                  }
                }}
              >
                App Store
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row-reverse"
            textAlign={'left'}
            spacing={1}
            alignItems="center"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '10px',
              padding: '10px',
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            <Google sx={{ color: '#000', fontSize: { xs: '20px', sm: '24px' } }} />
            <Box>
              <Typography
                variant="body2"
                fontWeight='bold'
                textAlign='right'
                sx={{
                  fontSize: {
                    xs: '0.625rem',
                    sm: '0.75rem',
                    md: '0.875rem',
                    lg: '1rem'
                  }
                }}
              >
                Get it on
              </Typography>
              <Typography
                variant="body1"
                fontWeight='bold'
                textAlign='right'
                sx={{
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem',
                    md: '1rem',
                    lg: '1.125rem'
                  }
                }}
              >
                Google Play
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <QrCode />
          <Typography
            variant='h4'
            mx={'10px'}
            fontWeight='bold'
            sx={{
              fontSize: {
                xs: '1.25rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.25rem'
              }
            }}
          >
            أو امسح الكود
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: { xs: 'relative', lg: 'absolute' },  // Relative positioning on small screens
          left: { xs: 'auto', lg: '10%' },
          bottom: { xs: 'auto', lg: 0 },
          height: { xs: 'auto', lg: 'auto' },  // Adjust height based on screen size
          width: { xs: '100%', lg: '40%' },  // Adjust width based on screen size
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          order: { xs: 1, lg: 2 }  // Place this box above the text on small screens
        }}
      >
        <img src="/images/home/app-download-2.jpeg" style={{ width: '100%', margin: 'auto' }} alt="download app" />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'translate(25%, -25%)',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          zIndex: '100',
          background: 'linear-gradient(90deg, #DB186f 0%, #452775 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transitionDuration: '.3s',
          cursor: 'pointer',
          '&:hover': {
            scale: '1.1'
          }
        }}
      >
        <Telegram sx={{ color: 'white', fontSize: '36px' }} />
      </Box>
    </Box>
  );
};

export default HomeDownloadApp;
