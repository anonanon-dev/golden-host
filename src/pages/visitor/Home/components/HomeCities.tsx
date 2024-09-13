import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

// Define the cities array
const cities = [
  { image: '/images/home/city-1.jpeg', name: 'الرياض' },
  { image: '/images/home/city-2.jpeg', name: 'ابها' },
  { image: '/images/home/city-3.jpeg', name: 'الطائف' },
  { image: '/images/home/city-4.jpeg', name: 'جدة' },
  { image: '/images/home/city-5.jpeg', name: 'الجبيل' },
];

const HomeCities: React.FC = () => {
  return (
    <Box
      width="80%"
      mx="auto"
      mt={10}
      p={2}
      display="flex"
      flexDirection="column"
      mb={6}
    >
      <Stack
        direction="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography color="primary.main" variant="h3" fontWeight="bold">
          المدينة
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="text.secondary">
          عرض الكل
        </Typography>
      </Stack>

      <Box
        width="100%"
        overflow="auto"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around', // Adjust for better alignment
          alignItems: 'center', // Center items vertically
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          overflowY:'visible',

          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          gap: '30px', // Gap between items
        }}
      >
        {cities.map((city, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            bgcolor="#f9f8fa"
            borderRadius="120px"
            p={2}
            flexDirection="row" // Ensure text is on the left, image is on the right
            justifyContent="space-between"
            boxSizing={'border-box'}
            sx={{
              // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              flexShrink: 0,
              width: {
                xs: '200px', // Width for small screens
                sm: '270px', // Width for large screens
              },
              height: {
                xs: '100px', // Height for small screens
                sm: '130px', // Height for large screens
              },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              fontSize="31px"
              fontWeight="bold"
              color="#615E69"
              sx={{
                flexShrink: 0,
                width: 'auto', // Adjust width to fit text
                textAlign: 'left',
              }}
            >
              {city.name}
            </Typography>
            <Box
              sx={{
                flexShrink: 0,
                width: {
                  xs: '90px', // Width of image for small screens
                  sm: '120px', // Width of image for large screens
                },
                height: {
                  xs: '90px', // Height of image for small screens
                  sm: '120px', // Height of image for large screens
                },
                overflow: 'hidden',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={city.image}
                alt={city.name}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeCities;
