import React, { useState } from 'react';
import { Box, Button, Popover, Typography, List, ListItem, ListItemText, IconButton, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ArrowDownward } from '@mui/icons-material';

// Define dummy data for type options with image URLs
const typeOptions = [
  { title: 'فندق 5 نجوم', imgSrc: '/images/home/categories-1.jpeg' },
  { title: 'منتجع سياحي', imgSrc: '/images/home/categories-2.jpeg' },
  { title: 'شقة فندقية', imgSrc: '/images/home/categories-3.jpeg' },
  { title: 'فيلا', imgSrc: '/images/home/categories-4.jpeg' },
  { title: 'غرفة عادية', imgSrc: '/images/home/categories-5.jpeg' },
];

const TypeSearch = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedType, setSelectedType] = useState<string>('');

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box dir="rtl" sx={{ width: { xs: '100%', lg: '23%' },mt:"20px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h5" color="primary.main" mb="15px">النوع</Typography>
      <Button onClick={handleClick} sx={{ bgcolor: 'white', justifyContent: 'space-between', width: '100%',  }}>
        <Typography variant='h6'>{selectedType || 'اختر نوع'}</Typography>
        <ArrowDownward sx={{ color: '#ddd' }} />
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: '100%', mx: 'auto', p: 2 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">النوع</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Options List */}
          <List sx={{ width: {xs:'350px',md:"850px" , lg:'320px', xl: '350px'}, mt: 1 }}>
            {typeOptions.map((option, index) => (
              <ListItem
                key={index}
                component="li"
                onClick={() => {
                  setSelectedType(option.title);
                  handleClose(); // Close popover after selecting
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  "&:hover": {
                    bgcolor: '#ddd',
                    borderRadius: '10px',
                    transitionDuration: '.3s',
                  },
                  flexDirection: 'row-reverse !important',
                  justifyContent: 'flex-end !important'
                  
                }}
              >
                <Avatar
                  src={option.imgSrc}
                  sx={{ borderRadius: '10px', mr: 2, width: 80, height: 80 }}
                />
                <ListItemText primary={option.title} sx={{fontSize: '32px !important'}} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Box>
  );
};

export default TypeSearch;
