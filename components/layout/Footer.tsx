'use client';
import { Box, Container, Typography, Grid, Link, IconButton, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', pt: 10, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
              HỒNG<span style={{ color: theme.palette.secondary.main }}>&nbsp;QUANG</span>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 3, lineHeight: 1.8 }}>
              Giải pháp toàn diện về gia công cơ khí, cắt CNC, và chế tạo máy công nghiệp với chất lượng hàng đầu và dịch vụ uy tín.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}><Facebook fontSize="small" /></IconButton>
              <IconButton color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}><Twitter fontSize="small" /></IconButton>
              <IconButton color="inherit" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}><LinkedIn fontSize="small" /></IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
              Thông Tin Liên Hệ
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <MapPin size={20} color={theme.palette.secondary.main} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Khu Công Nghiệp VSIP, Thành phố ABC, Việt Nam</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Phone size={20} color={theme.palette.secondary.main} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>+84 (0) 123 456 789</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Mail size={20} color={theme.palette.secondary.main} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>contact@mechvina.com.vn</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
              Liên kết nhanh
            </Typography>
            <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
              <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>Về Chúng Tôi</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>Dịch Vụ Gia Công</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>Dự Án</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>Liên Hệ</Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © 2026 MechVina Industrial. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2" sx={{ opacity: 0.6 }}>Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" variant="body2" sx={{ opacity: 0.6 }}>Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
