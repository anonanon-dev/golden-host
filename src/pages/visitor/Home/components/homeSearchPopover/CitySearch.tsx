import React, { useState } from 'react';
import { Box, Button, Popover, Typography, TextField, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDownward } from '@mui/icons-material';

// Define dummy data for city options
const cityOptions = [
  { title: 'مدينة القاهرة' },
  { title: 'مدينة الإسكندرية' },
  { title: 'مدينة الجيزة' },
  { title: 'مدينة شرم الشيخ' },
  { title: 'مدينة الغردقة' },
];

const CitySearch = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [filterText, setFilterText] = useState<string>('');

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Filter cities based on the input text
  const filteredCities = cityOptions.filter(city =>
    city.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Box dir="rtl" sx={{ width:{xs: '100%', lg: '23%'}, display: 'flex', flexDirection: 'column', justifyContent: "center", height:'100%', mt:'25px' }}>
      <Typography variant="h5" color="primary.main" mb="15px">المدينة</Typography>
        <Button onClick={handleClick} sx={{ bgcolor: "white", justifyContent: 'space-between', width: "100%",  }}>
        <Typography variant='h6'>{selectedCity || 'اختر مدينة'}</Typography>
        <ArrowDownward sx={{ color: "#ddd" }} />
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: "row-reverse", alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">المدينة</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Search Input */}
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              sx={{ textAlign: 'left' }}
              placeholder="ابحث عن محافظة او منطقة"
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
                ),
              }}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </Box>

          {/* Options List */}
          <List sx={{width: {xs:'450px',md:"850px" , lg:'320px', xl: '350px'}, transform: 'translateY(12px)!important'}}>
            {filteredCities.map((option, index) => (
              <ListItem
                key={index}
                component="li"

                onClick={() => {
                  setSelectedCity(option.title);
                  handleClose(); // Close popover after selecting
                }}
                sx={{display: 'flex',cursor: 'pointer', justifyContent: "space-between", flexDirection: 'row-reverse', 
                "&:hover":{
                  bgcolor: '#ddd',
                  borderRadius: '10px',
                  transitionDuration: '.3s'
                }

                }}
              >
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary={option.title}  />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Box>
  );
};

export default CitySearch;
