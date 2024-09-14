import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Popover, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import { Dayjs } from 'dayjs';
import { Theme } from '@mui/material/styles';

// Styled Button with custom 'active' prop
interface StyledButtonProps {
  active?: boolean;
}

const DateSelectorBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#fff',
  color: '#9e9e9e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));

const ClearButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  py: '25px',
  px: '30px',
  mb: '20px',
  float: 'left',
  color: theme.palette.primary.main,
  backgroundColor: '#f9f8fa',
  borderRadius: '10px',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const HeaderBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const ButtonGroup = styled(Box)(({ theme }: { theme: Theme }) => ({
  height: '40px',
  backgroundColor: '#f9f8fa',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '10px',
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledButtonProps>(({ theme, active }) => ({
  flex: 1,
  borderRadius: '10px',
  backgroundColor: active ? 'white' : 'transparent',
  color: active ? theme.palette.primary.main : theme.palette.primary.main,
  py: '20px',
  fontSize: '16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: active ? theme.palette.grey[200] : 'transparent',
  },
}));

interface DateSearchProps {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setStartDate: (date: Dayjs | null) => void;
  setEndDate: (date: Dayjs | null) => void;
}

const DateSearch: React.FC<DateSearchProps> = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeButton, setActiveButton] = useState<string>('');

  useEffect(() => {
    if (startDate && endDate) {
      const diffDays = endDate.diff(startDate, 'day');
      if (diffDays <= 1) {
        setActiveButton('daily');
      } else if (diffDays <= 7) {
        setActiveButton('weekly');
      } else if (diffDays > 30) {
        setActiveButton('monthly');
      } else {
        setActiveButton('monthly');
      }
    }
  }, [startDate, endDate]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Box sx={{ width: { xs: '100%', lg: '23%' }, mt: '23px' }}>
        <Typography variant="h5" color="primary.main" mb="15px">اختر التاريخ</Typography>

        <DateSelectorBox onClick={handleClick}>
          <CalendarTodayIcon />
          <Typography variant="body1">
            {startDate ? startDate.format('YYYY-MM-DD') : 'اختر التاريخ'}
          </Typography>
        </DateSelectorBox>
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
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: { xs: '350px', sm: '450px',  lg: '850px', xl: '350px' },
            padding: '20px',
          },
        }}
      >
        <Box>
          <HeaderBox>
            <Typography variant="body1">اختر تاريخ الحجز</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </HeaderBox>

          <ButtonGroup>
            <StyledButton
              active={activeButton === 'daily'}
              // onClick={() => setActiveButton('daily')}
            >
              يومي
            </StyledButton>
            <StyledButton
              active={activeButton === 'weekly'}
              // onClick={() => setActiveButton('weekly')}
            >
              اسبوعي
            </StyledButton>
            <StyledButton
              active={activeButton === 'monthly'}
              // onClick={() => setActiveButton('monthly')}
            >
              شهري
            </StyledButton>
          </ButtonGroup>

          <Box display="flex" flexDirection="row" gap={2} mb={2}>
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
    </>
  );
};

export default DateSearch;
