'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const images = [
  '/images/workshop_facility_1776152769575.png',
  '/images/cnc_machine_1776152636189.png',
  '/images/hero_section_bg_1776152550177.png',
];

const Gallery = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'white' }} id="gallery">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
            THƯ VIỆN HÌNH ẢNH
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700 }} color="text.primary">
            Cơ Sở Vật Chất Hiện Đại
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {images.map((img, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                sx={{
                  height: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
