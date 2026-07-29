'use client';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Hệ Thống Trục Băng Chuyền KCN VSIP',
    category: 'Gia Công Phay/Tiện CNC',
    image: '/images/cnc_machine_1776152636189.png'
  },
  {
    title: 'Khung Giàn Ngầm Chịu Lực Giàn Khoan',
    category: 'Kết cấu thép/Hàn công nghiệp',
    image: '/images/workshop_facility_1776152769575.png'
  },
  {
    title: 'Khuôn Mẫu Nhựa Kỹ Thuật Đúc Áp Lực',
    category: 'Thiết kế R&D, Cơ Khí Chính Xác',
    image: '/images/hero_section_bg_1776152550177.png'
  },
];

const Projects = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} id="projects">
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6 }}>
          <Box>
            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
              DỰ ÁN TIÊU BIỂU
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }} color="text.primary">
              Cống Hiến Vượt Trội
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowUpRight size={20} />}
            sx={{ display: { xs: 'none', sm: 'flex' }, fontWeight: 600 }}
          >
            Tất Cả Dự Án
          </Button>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    '&:hover img': { transform: 'scale(1.05)' },
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ overflow: 'hidden', height: 260 }}>
                    <CardMedia
                      component="img"
                      height="260"
                      image={project.image}
                      alt={project.title}
                      sx={{ transition: 'transform 0.5s ease' }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="caption" color="secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                      {project.category}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }} color="text.primary">
                      {project.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 4 }}>
          <Button endIcon={<ArrowUpRight size={20} />}>Tất Cả Dự Án</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
