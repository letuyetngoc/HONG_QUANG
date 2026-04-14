'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Năm Kinh Nghiệm' },
  { value: '500+', label: 'Dự Án Hoàn Thành' },
  { value: '100+', label: 'Kỹ Sư & Công Nhân' },
  { value: '100%', label: 'Cam Kết Tiến Độ' },
];

const Statistics = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: 'center', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="h2" sx={{ fontWeight: 800 }} gutterBottom color="secondary.main">
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, opacity: 0.9 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics;
