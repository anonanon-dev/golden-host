// HomeSearch.tsx
import  { useState } from 'react';
import { Box, Grid, Typography, Button, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Map';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CitySearch from './homeSearchPopover/CitySearch';
import TypeSearch from './homeSearchPopover/TypeSearch';
import DateSearch from './homeSearchPopover/DateSearch';
import { Dayjs } from 'dayjs';
import { Theme } from '@mui/material/styles';

// Styled Button for the linear gradient background
const GradientButton = styled(Button)(({ theme }: { theme: Theme }) => ({
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
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    background: 'linear-gradient(90deg, #452775 30%, #db186f 70%)',
  },
}));

const HomeSearch = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
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
        <GradientButton
          onClick={() => handleTabChange(0)}
          startIcon={<SearchIcon />}
        >
          البحث
        </GradientButton>
        <GradientButton
          onClick={() => handleTabChange(1)}
          startIcon={<MapIcon />}
        >
          الخريطه
        </GradientButton>
      </Box>

      {activeTab === 0 && (
        <Box p={3} sx={{ backgroundColor: "#f9f8fa", minHeight: "150px" }}>
          <Grid container spacing={2} justifyContent="space-between">
            <CitySearch />
            <TypeSearch />
            <DateSearch startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="end" justifyContent="end" height="100%">
                <GradientButton sx={{width: {xs: "100%", lg: '40%'}}} endIcon={<ArrowBackIcon />} fullWidth>
                  اكتشف
                </GradientButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {activeTab === 1 && (
        <Box p={3}>
          <Typography variant="h6">الخريطه</Typography>
          <Box mt={2}>
            <Typography variant="body1">Map </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HomeSearch;
