import React, { useState } from 'react';
import { Box, Button, Typography, Popover, Autocomplete, TextField, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Map';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import  { Dayjs } from 'dayjs';

// Define dummy data for options
const cityOptions = [
  { title: 'مدينة القاهرة' },
  { title: 'مدينة الإسكندرية' },
  { title: 'مدينة الجيزة' },
  { title: 'مدينة شرم الشيخ' },
  { title: 'مدينة الغردقة' },
];

const typeOptions = [
  { title: 'فندق 5 نجوم' },
  { title: 'منتجع سياحي' },
  { title: 'شقة فندقية' },
  { title: 'فيلا' },
  { title: 'غرفة عادية' },
];

// Styled Button for the linear gradient background
const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(90deg, #452775 50%, #db186f 100%)',
  color: '#fff',
  borderRadius: '51px',
  padding: '11px',
  width: '125px',
  height: '54px',
  textTransform: 'none',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

// Styled Button for the clear action
const ClearButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
  textTransform: 'none',
  fontWeight: 'bold',
}));

// Styled Tab Button
const TabButton = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
  width: '154px',
  height: '56px',
  padding: '11px 30px',
  fontSize: '22px',
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? '#fff' : theme.palette.text.primary,
  borderRadius: '25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  transition: 'background-color 0.3s, color 0.3s',
}));

// Styled Box for the date selection
const DateSelectorBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#9e9e9e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 12px',
  borderRadius: '8px',
  cursor: 'pointer',
  transitionDuration: '.3s',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));

const HomeSearch = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', p: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column' }} dir="rtl">
      <Box sx={{
        width: '380px',
        height: '110px',
        bgcolor: '#f9f8fa',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '26px',
        gap: '20px',
      }}>
        <TabButton
          onClick={() => handleTabChange(0)}
          active={activeTab === 0}
          startIcon={<SearchIcon />}
        >
          البحث
        </TabButton>
        <TabButton
          onClick={() => handleTabChange(1)}
          active={activeTab === 1}
          startIcon={<MapIcon />}
        >
          الخريطه
        </TabButton>
      </Box>

      {activeTab === 0 && (
        <Box p={3} sx={{ backgroundColor: "#f9f8fa", minHeight: "150px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={3}>
              <Typography variant="h5" sx={{ color: "#452775", mb: '10px' }}>المدينة</Typography>
              <Autocomplete
                disablePortal
                options={cityOptions}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="بحث" fullWidth />}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="h5" sx={{ color: "#452775", mb: '10px' }}>النوع</Typography>
              <Autocomplete
                disablePortal
                options={typeOptions}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="بحث" fullWidth />}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="h5" sx={{ color: "#452775", mb: '10px' }}>التاريخ</Typography>
              <DateSelectorBox onClick={handleClick}>
                <CalendarTodayIcon />
                <Typography variant="body1">
                  {startDate ? startDate.format('YYYY-MM-DD') : 'اختر التاريخ'}
                </Typography>
              </DateSelectorBox>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="end" justifyContent="end" height="100%">
                <GradientButton endIcon={<ArrowBackIcon />} fullWidth>
                  اكتشف
                </GradientButton>
              </Box>
            </Grid>
          </Grid>

          <Popover
            id={id}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box p={2}>
              <Typography variant="body1" mb={1}>
                اختر فترة
              </Typography>
              <Box display="flex" flexDirection="row" gap={1} mb={2}>
                <Button variant="contained" fullWidth>يومي</Button>
                <Button variant="contained" fullWidth>اسبوعي</Button>
                <Button variant="contained" fullWidth>شهري</Button>
              </Box>
              <Box display="flex" flexDirection="row" gap={2}>
                <Box flex={1}>
                  <Typography variant="body1" mb={1}>تاريخ البدء</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={startDate}
                      onChange={(newDate) => setStartDate(newDate)}
                    />
                  </LocalizationProvider>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={1}>تاريخ النهاية</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={endDate}
                      onChange={(newDate) => setEndDate(newDate)}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <ClearButton onClick={handleClearDates}>مسح</ClearButton>
            </Box>
          </Popover>
        </Box>
      )}

      {activeTab === 1 && (
        <Box p={3}>
          <Typography variant="h6">الخريطه</Typography>
          <Box mt={2}>
            <Typography variant="body1">Map Placeholder</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};



export default HomeSearch;
