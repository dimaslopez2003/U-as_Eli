import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Fade } from '@mui/material';

const workingHours = [
  { day: 'Mon – Wed', hours: '10:00 AM - 9:00 PM' },
  { day: 'Thursday', hours: '10:00 AM - 7:30 PM' },
  { day: 'Friday', hours: '10:00 AM - 9:00 PM' },
  { day: 'Sun - Sun', hours: '10:00 AM - 5:00 PM' },
];

const WorkingHours: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentPosition = document.getElementById('working-hours')?.getBoundingClientRect().top || 0;
      const screenPosition = window.innerHeight;

      if (componentPosition < screenPosition - 100) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box id="working-hours" sx={{ padding: '20px', marginTop: '20px' }}>
      <Fade in={visible} timeout={1000}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" display="block" sx={{ color: '#888', textAlign: 'center' }}>
              TIME SCHEDULE
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
              Working Hours
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>
              Gravida porta vitae auctor congue magna impedit ligula and risus mauris donec ligula magnis aliquam.
            </Typography>
            <Box component="table" sx={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <tbody>
                {workingHours.map((hour, index) => (
                  <tr key={index}>
                    <td style={{ padding: '8px 16px', fontWeight: 'bold' }}>{hour.day}</td>
                    <td style={{ padding: '8px 16px', textAlign: 'right' }}>{hour.hours}</td>
                  </tr>
                ))}
              </tbody>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
};

export default WorkingHours;
