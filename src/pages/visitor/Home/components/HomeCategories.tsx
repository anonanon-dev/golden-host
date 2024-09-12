import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

// Define TypeScript interface for category
interface Category {
  id: number;
  title: string;
  image: string;
}

// Define the categories array
const categories: Category[] = [
  {
    id: 1,
    title: 'قاعات',
    image: '/images/home/categories-1.jpeg',
  },
  {
    id: 2,
    title: 'قاعات',
    image: '/images/home/categories-2.jpeg',
  },
  {
    id: 3,
    title: 'قاعات',
    image: '/images/home/categories-3.jpeg',
  },
  {
    id: 4,
    title: 'قاعات',
    image: '/images/home/categories-4.jpeg',
  },
  {
    id: 5,
    title: 'قاعات',
    image: '/images/home/categories-5.jpeg',
  },
  {
    id: 6,
    title: 'قاعات',
    image: '/images/home/categories-6.jpeg',
  },
  {
    id: 7,
    title: 'قاعات',
    image: '/images/home/categories-7.jpeg',
  },
];

const HomeCategories: React.FC = () => {
  return (
    <Stack
      marginTop="50px"
      backgroundColor="#f9f8fa"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="55px"
      padding="108px 64px"
      width="100%"
      overflow="auto" // Added to handle overflow if needed
    >
      {categories.map((category) => (
        <Box
          key={category.id}
          backgroundColor="#fff"
          padding="8px"
          width="200px"
          height="200px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          sx={{
            '& img': {
              width: '142px',
              height: '142px',
              borderRadius: '10px',
              objectFit: 'cover', // Ensures the image covers the area nicely
            },
          }}
        >
          <img
            src={category.image}
            alt={category.title}
            style={{ borderRadius: '10px' }}
          />
          <Typography textAlign="center" paddingTop="5px">
            {category.title}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default HomeCategories;
