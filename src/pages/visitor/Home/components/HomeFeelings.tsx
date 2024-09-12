import { ArrowBack } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const HomeFeelings: React.FC = () => {
  return (
    <Stack width="100%" marginTop="50px">
      {/* First part غير احساسك */}
      <Stack
        flexDirection="row-reverse"
        justifyContent="space-between"
        width="1000px"
        margin="auto"
      >
        {/* غير احساسك */}
        <Box textAlign="right" width="100%">
          <Typography variant="h3" color="primary.main" fontWeight="bold">
            غير احساسك
          </Typography>
          <Typography variant="h3" color="primary.main" fontWeight="bold">
            غير مسكنك
          </Typography>
        </Box>
        {/* احجز الان */}
        <Box textAlign="right" width="100%">
          <Box
            sx={{
              backgroundColor: '#f9f8fa',
              paddingRight: '30px',
              height: '80px',
              borderRadius: '76px',
              width: '400px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              احجز الان
            </Typography>
            <Box
              sx={{
                height: '100%', // Full height of the parent box
                width: 'auto', // Auto width to match height
                background: 'linear-gradient(180deg, red 0%, purple 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%', // Optional: Make it a circle
                aspectRatio: '1 / 1', // Maintain aspect ratio 1:1 for square
                minWidth: '50px', // Optional: Minimum width to ensure visibility
              }}
            >
              <ArrowBack />
            </Box>
          </Box>
        </Box>
      </Stack>

      {/* Images and things */}
      <Grid container spacing={2} justifyContent="center" mt={4} width={'1500px'} margin={'auto'}>
        {[1, 2, 3].map((index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              sx={{
                position: 'relative',
                width: '512px',
                height: '683px',
                overflow: 'hidden',
                borderRadius: '8px', // Optional: Rounded corners
                '&:hover img': {
                  transform: 'scale(1.1)', // Scale on hover
                },
                '&:hover .overlay': {
                  opacity: 1, // Show text on hover
                },
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <img
                src={`/images/home/feeling-${index}.jpeg`} // Replace with your image paths
                alt={`Image ${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out',
                }}
              />
              {/* <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '4px',
                  opacity: 0, // Hide text by default
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                رحلة عائلية
              </Box> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HomeFeelings;
