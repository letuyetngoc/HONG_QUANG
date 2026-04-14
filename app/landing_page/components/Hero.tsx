'use client';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { ArrowRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to right, rgba(0, 80, 158, 0.9), rgba(0, 30, 80, 0.6)), url("/images/hero_section_bg_1776152550177.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ maxWidth: '700px' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Settings size={24} color="#F4A261" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }} color="secondary">
              ĐỈNH CAO CHẤT LƯỢNG GIA CÔNG
            </Typography>
          </Box>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, lineHeight: 1.2 }}>
            Giải Pháp Cơ Khí <br />
            <span style={{ color: '#F4A261' }}>Toàn Diện & Chuẩn Xác</span>
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, lineHeight: 1.6 }}>
            Với hệ thống nhà xưởng hiện đại và đội ngũ kỹ sư &gt;15 năm kinh nghiệm.
            Chúng tôi tự hào cung cấp các giải pháp chế tạo, gia công cắt gọt, phay tiện CNC với độ chính xác cao nhất.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowRight />}
              sx={{ py: 1.5, px: 4, color: '#002855' }}
            >
              Nhận Báo Giá Ngay
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ py: 1.5, px: 4, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              Xem Hồ Sơ Năng Lực
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
