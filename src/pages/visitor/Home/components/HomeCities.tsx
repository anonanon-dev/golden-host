import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/slick.css'; // Ensure this path is correct

// Define the cities array
const cities = [
  { image: '/images/home/city-1.jpeg', name: 'الرياض' },
  { image: '/images/home/city-2.jpeg', name: 'ابها' },
  { image: '/images/home/city-3.jpeg', name: 'الطائف' },
  { image: '/images/home/city-4.jpeg', name: 'جدة' },
  { image: '/images/home/city-5.jpeg', name: 'الجبيل' },
];

const settings = {
  className: 'slider variable-width gap-slider',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
};

const HomeCities: React.FC = () => {
  return (
    <Box
      width="80%"
      mx="auto" // marginX in camelCase
      mt={10} // marginTop in camelCase and using the MUI spacing unit
      p={2} // padding in shorthand
      display="flex"
      flexDirection="column"
      mb={6} // marginBottom in camelCase and using the MUI spacing unit
    >
      <Stack
        direction="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        mb={4} // marginBottom in camelCase and using the MUI spacing unit
      >
        <Typography color="primary.main" variant="h3" fontWeight="bold">
          المدينة
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="text.secondary">
          عرض الكل
        </Typography>
      </Stack>

      <Box width="100%">
        <Slider {...settings}>
          {cities.map((city, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              bgcolor="#f9f8fa" // backgroundColor in camelCase
              borderRadius="120px"
              overflow="hidden"
              p={2} // padding in shorthand
              flexDirection="row-reverse"
              justifyContent="space-between"
              height="auto"
              sx={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex !important', // Ensure flex display is applied
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: {
                    xs: '80px', // Smaller width for extra-small devices
                    sm: '100px', // Medium width for small devices
                    md: '120px', // Default width for medium devices
                  },
                  height: {
                    xs: '80px', // Smaller height for extra-small devices
                    sm: '100px', // Medium height for small devices
                    md: '120px', // Default height for medium devices
                  },
                  overflow: 'hidden',
                  borderRadius: '50%',
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
              <Typography variant="h6" fontSize="24px" color="#615E69">
                {city.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HomeCities;
