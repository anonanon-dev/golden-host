import React from 'react';
import { Box, Typography } from '@mui/material';
import { Home, Payment, ThumbUp, PhotoCamera, Phone, Search } from '@mui/icons-material';

const benefits = [
  {
    icon: <Home />,
    title: "حجز فوري ومضمون لبيتك",
    content: 'حجزك مضمون 100%',
    top: '30%',
    left: '-20%'
  },
  {
    icon: <Payment />,
    title: "طرق دفع أمنه",
    content: 'وسائل دفع متعددة وامنه',
    top: '50%',
    left: '-30%'
  },
  {
    icon: <ThumbUp />,
    title: "تقييمات موثوقة",
    content: "تقييمات وتعليقات مصدقة",
    top: '80%',
    left: '-20%'
  },
  {
    icon: <PhotoCamera />,
    title: "صور وفيديهات",
    content: 'شاهد من مكانك',
    top: '30%',
    left: '120%'
  },
  {
    icon: <Phone />,
    title: "خدمة العملاء",
    content: 'ندعمك علي مدار الاسبوع',
    top: '50%',
    left: '130%'
  },
  {
    icon: <Search />,
    title: "بحث متقدم وذكي",
    content: 'كل انواع البحث بين يديك',
    top: '80%',
    left: '120%'
  },
];

const HomeAdvantages: React.FC = () => {
  return (
    <Box
      dir="rtl"
      width="100%"
      bgcolor="#f9f8fa"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {/* Center Image */}
      <Box position="relative" width="100%" maxWidth="600px">
        <img
          src="/images/home/connections.jpeg"
          style={{
            width: '100%',
            maxWidth: '600px',
            display: 'block',
            margin: 'auto',
          }}
          alt="Advantages"
        />

        {/* Container for the boxes on large screens */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ '@media (max-width: 600px)': { display: 'none' } }} // Hide on mobile screens
          style={{ transform: 'translate(-50%, -50%)' }} // Centering the container
        >
          {benefits.map((item, index) => (
            <Box
              key={index}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px={"20px"}
              flexDirection="row-reverse" // Row-reverse for RTL layout
              sx={{
                width: '300px',
                height: '70px',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: { xs: 'none', lg: 'flex' } // Show only on large screens and above
              }}
              style={{
                top: item.top,
                left: item.left,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="50px"
                height="50px"
                bgcolor="purple" // Purple background for icons
                borderRadius="50%" // Circular icon background
                color="white"
                mr={2}
              >
                {item.icon}
              </Box>
              <Box
                textAlign="left"
              >
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.content}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Responsive layout for mobile screens */}
      <Box
        display={{ xs: 'flex', lg: 'none' }} // Show only on small screens
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        p={2}
      >
        {/* First row with one item */}
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          // maxWidth="600px"
          mb={2}
          p={2}
          bgcolor="white"
          borderRadius="20px"
          gap="20px"

          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent="center"
            width="50px"
            height="50px"
            bgcolor="purple"
            borderRadius="50%"
            color="white"
            mb={2}
          >
            {benefits[0].icon}
          </Box>
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight="bold">
              {benefits[0].title}
            </Typography>
            <Typography variant="h6">
              {benefits[0].content}
            </Typography>
          </Box>
        </Box>

        <Box display={'flex'} justifyContent={'between'} gap="10px" width="100%" >
          {/* Second and Third Rows */}
          <Box display="flex" flexWrap="wrap" flexDirection={'column'} gap="5px" justifyContent="space-between" width="55%" >
            {[1, 2, 3].map((index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="row"
                // width="48%"
                // maxWidth="300px"
                p={2}
                bgcolor="white"
                borderRadius="20px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                gap='20px'
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="50px"
                  height="50px"
                  bgcolor="purple"
                  borderRadius="50%"
                  color="white"
                  mb={2}
                >
                  {benefits[index].icon}
                </Box>
                <Box>
                  <Typography variant="h6" color='primary.main' fontWeight="bold">
                    {benefits[index].title}
                  </Typography>
                  <Typography variant="body1" fontWeight={"bold"}>
                    {benefits[index].content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Fourth and Fifth Rows */}
          <Box display="flex" flexWrap="wrap" flexDirection={'column'} justifyContent="space-between" width="45%">
            {[4, 5].map((index) => (
              <Box
                key={index}
                
                display="flex"
                sx={{ flexDirection: 'column' }}
                // width="48%"
                // maxWidth="300px"
                height="49%"
                p={2}
                bgcolor="white"
                borderRadius="20px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="50px"
                  height="50px"
                  bgcolor="purple"
                  borderRadius="50%"
                  color="white"
                  mb={2}
                  mx="auto"
                >
                  {benefits[index].icon}
                </Box>
                <Typography variant="h6" textAlign={'center'} fontWeight="bold">
                  {benefits[index].title}
                </Typography>
                <Typography variant="body2" textAlign={'center'}  fontWeight="bold">
                  {benefits[index].content}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeAdvantages;
