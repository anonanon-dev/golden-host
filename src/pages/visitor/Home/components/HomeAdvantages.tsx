import { Box } from '@mui/material';

const HomeAdvantages: React.FC = () => {
  return (
    <Box
      width="100%" // Use camelCase for property names
      bgcolor="#f9f8fa" // Use 'bgcolor' instead of 'backgroundColor'
      mt={12} // Use shorthand for marginTop (using spacing units)
    >
      <img
        src="/images/home/advantages.jpeg"
        style={{ width: '100%' }}
        alt="Advantages"
      />
    </Box>
  );
};

export default HomeAdvantages;
