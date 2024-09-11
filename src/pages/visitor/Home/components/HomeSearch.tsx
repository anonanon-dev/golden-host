import React, { useState } from 'react';
import { Tabs, Tab, Box, Button, Typography, Popover, Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Map';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import { Dayjs } from 'dayjs';

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
  background: 'linear-gradient(45deg, #6a1b9a 30%, #ab47bc 90%)',
  color: '#fff',
  borderRadius: '21px',
  padding: '6px 16px',
  textTransform: 'none',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    background: 'linear-gradient(45deg, #6a1b9a 50%, #ab47bc 70%)',
  },
}));

// Styled Button for the clear action
const ClearButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
  textTransform: 'none',
  fontWeight: 'bold',
}));

const HomeSearch = () => {
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
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
    <div style={{ width: '100%', padding: '100px' }} dir='rtl'>
      <Tabs value={tabValue} onChange={(_, newValue) => handleTabChange(newValue)} aria-label="tabs">
        <Tab label="البحث" icon={<SearchIcon />} />
        <Tab label="الخريطه" icon={<MapIcon />} />
      </Tabs>

      {tabValue === 0 && (
        <Box p={3}>
          <Box display="flex" flexDirection="row" gap={2}>
            <Box flex={1}>
              <Typography variant="h6">المدينة</Typography>
              <Autocomplete
                disablePortal
                options={cityOptions} // Use dummy data
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="بحث" />}
              />
            </Box>

            <Box flex={1}>
              <Typography variant="h6">النوع</Typography>
              <Autocomplete
                disablePortal
                options={typeOptions} // Use dummy data
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="بحث" />}
              />
            </Box>

            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="h6">تاريخ الحجز</Typography>
                <Button onClick={handleClick} endIcon={<CalendarTodayIcon />}>
                  اختر موعد
                </Button>
                <GradientButton startIcon={<ArrowBackIcon />}>
                  اكتشف
                </GradientButton>
              </Box>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box p={2}>
                  <Typography variant="body1" mb={1}>
                    اختر فترة
                  </Typography>
                  <Box display="flex" flexDirection="row" gap={1} mb={2}>
                    <Button variant="contained">يومي</Button>
                    <Button variant="contained">اسبوعي</Button>
                    <Button variant="contained">شهري</Button>
                  </Box>
                  <Box display="flex" flexDirection="row" gap={2}>
                    <Box flex={1}>
                      <Typography variant="body1" mb={1}>تاريخ البدء</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={startDate}
                          onChange={(newDate) => setStartDate(newDate)}
                          // renderInput={(params: DatePickerProps<Dayjs, false>['renderInput']) => <TextField {...params} fullWidth />}
                        />
                      </LocalizationProvider>
                    </Box>
                    <Box flex={1}>
                      <Typography variant="body1" mb={1}>تاريخ النهاية</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={endDate}
                          onChange={(newDate) => setEndDate(newDate)}
                          // renderInput={(params: DatePickerProps<Dayjs, false>['renderInput']) => <TextField {...params} fullWidth />}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Box>
                  <ClearButton onClick={handleClearDates}>مسح</ClearButton>
                </Box>
              </Popover>
            </Box>
          </Box>
        </Box>
      )}

      {tabValue === 1 && (
        <Box p={3}>
          <Typography variant="h6">الخريطه</Typography>
          {/* Placeholder for map */}
          <Box mt={2}>
            <Typography variant="body1">Map Placeholder</Typography>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default HomeSearch;
