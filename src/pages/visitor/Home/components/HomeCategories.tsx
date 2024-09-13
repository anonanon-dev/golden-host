import React from 'react';
import { Box, Typography } from '@mui/material';

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

const HomeCategories: React.FC = () => {
  return (
    <Box
      mt={5}
      bgcolor="#f9f8fa"
      p="108px 64px"
      width="100%"
      overflow="auto"
      margin={'auto'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '&:hover::-webkit-scrollbar': {
          display: 'block',
        },
      }}
    >
      {categories.map((category) => (
        <Box
          key={category.id}
          bgcolor="#fff"
          p={2}
          display="inline-block"
          flexDirection="column"
          alignItems="center"
          justifyContent="between"
          borderRadius="10px"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          marginX={'35px'}
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
          <Typography textAlign="center" pt={1}>
            {category.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default HomeCategories;
