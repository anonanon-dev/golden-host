import { Box, Stack, Typography } from '@mui/material';

const HomeBenefits = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        background: 'linear-gradient(90deg, #452775 0%, #DB186F 100%)',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '150px',
        color: '#FFFFFF',
        paddingY: '20px',

      }}

    >
      <Stack spacing={2} textAlign={'right'} alignItems="center" direction="row-reverse">
        <Box>
          <img src="/images/home/true.jpeg" alt="true" style={{ width: '35px' }} />
        </Box>
        <Stack>
          <Typography variant='h5' color='#FFF' fontWeight='bold'>جولدن هوست</Typography>
          <Typography variant='h6' color='#FFF'>منصة سعودية مرخصة رسميا من وزارة السياحة</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="center" textAlign={'right'} direction="row-reverse" >
        <Box>
          <img src="/images/home/map.jpeg" alt="map icon" style={{ width: '35px' }} />
        </Box>
        <Stack>
          <Typography variant='h5' color='#FFF' fontWeight='bold'>الخرائط التفاعلية</Typography>
          <Typography variant='h6' color='#FFF'>اكتشف سحر و جمال السعودية بتجربة سكن أصليه</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HomeBenefits;
