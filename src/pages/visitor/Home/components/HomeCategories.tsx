import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the categories array
interface Category {
  id: number;
  title: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, title: 'قاعات', image: '/images/home/categories-1.jpeg' },
  { id: 2, title: 'قاعات', image: '/images/home/categories-2.jpeg' },
  { id: 3, title: 'قاعات', image: '/images/home/categories-3.jpeg' },
  { id: 4, title: 'قاعات', image: '/images/home/categories-4.jpeg' },
  { id: 5, title: 'قاعات', image: '/images/home/categories-5.jpeg' },
  { id: 6, title: 'قاعات', image: '/images/home/categories-6.jpeg' },
  { id: 7, title: 'قاعات', image: '/images/home/categories-7.jpeg' },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
  ],
};

const HomeCategories: React.FC = () => {
  return (
    <Box
      mt={5} // marginTop in camelCase
      bgcolor="#f9f8fa" // backgroundColor in camelCase
      p="108px 64px" // padding in shorthand
      width="100%"
    >
      <Slider {...settings}>
        {categories.map((category) => (
          <Box
            key={category.id}
            bgcolor="#fff" // backgroundColor in camelCase
            p={2} // padding in shorthand
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              },
              '& img': {
                width: '142px',
                height: '142px',
                borderRadius: '10px',
                objectFit: 'cover',
              },
            }}
          >
            <img src={category.image} alt={category.title} style={{ margin: 'auto' }} />
            <Typography textAlign="center" pt={1}> {/* paddingTop in camelCase */}
              {category.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HomeCategories;
