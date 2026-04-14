'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Đội ngũ kỹ sư >15 năm kinh nghiệm',
  'Hệ thống máy CNC & Laser nhập khẩu',
  'Hệ thống quản lý chất lượng ISO 9001:2015',
  'Tối ưu hóa chi phí & Giao hàng đúng hẹn',
];

const About = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} id="about">
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                VỀ CHÚNG TÔI
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom color="text.primary">
                Đối Tác Đáng Tin Cậy Tiên Phong Công Nghệ Nhất
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                MechVina được thành lập với mục tiêu trở thành một trong những nhà máy chế tạo cơ khí hàng đầu khu vực.
                Chúng tôi chuyên cung cấp dịch vụ gia công chính xác, thiết kế và chế tạo máy móc tiêu chuẩn quốc tế cho các khu công nghiệp, doanh nghiệp FDI.
              </Typography>

              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <CheckCircle2 color="#00509E" size={24} style={{ flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, opacity: 0.8 }} color="text.primary">
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{ position: 'relative', height: '400px', width: '100%', borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundImage: 'url("/images/workshop_facility_1776152769575.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
