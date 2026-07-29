'use client';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Settings, PenTool, Scissors, Wrench, Layers, Combine } from 'lucide-react';

const services = [
  { icon: <Settings size={32} />, title: 'Gia Công Phay CNC', desc: 'Gia công phay các chi tiết phức tạp với độ chính xác và dung sai siêu nhỏ.' },
  { icon: <Combine size={32} />, title: 'Gia Công Tiện CNC', desc: 'Tiện CNC chi tiết trục, ren, khối lăng trụ với tốc độ và sản lượng lớn.' },
  { icon: <Scissors size={32} />, title: 'Cắt Laser & Chấn Góc', desc: 'Cắt Laser CNC trên thép, inox, nhôm và chấn gấp kim loại tấm theo biên dạng.' },
  { icon: <Layers size={32} />, title: 'Xử lý & Phủ Bề Mặt', desc: 'Nhúng nóng, mạ kẽm điện phân, sơn tĩnh điện, anodizing giúp tăng độ bền bỉ.' },
  { icon: <Wrench size={32} />, title: 'Chế Tạo Kết Cấu Thép', desc: 'Hàn, lắp ráp tổ hợp kết cấu thép công nghiệp phức tạp theo bản vẽ chuyên dụng.' },
  { icon: <PenTool size={32} />, title: 'Thiết Kế R&D', desc: 'Tư vấn thiết kế ngược, lập trình CAD/CAM/CAE và phát triển khuôn mẫu.' },
];

const Services = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }} id="services">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle1" color="primary" gutterBottom>
            NĂNG LỰC GIA CÔNG
          </Typography>
          <Typography sx={{ fontWeight: 700 }} variant="h3" color="text.primary">
            Dịch Vụ Chế Tạo Chuyên Nghiệp
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: 2,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: (theme) => `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent>
                    <IconButton
                      disableRipple
                      sx={{
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main',
                        mb: 3,
                        pointerEvents: 'none'
                      }}
                    >
                      {service.icon}
                    </IconButton>
                    <Typography sx={{ fontWeight: 700 }} variant="h6" gutterBottom color="text.primary">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
