'use client';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  CalendarDays,
  ClipboardCheck,
  Cpu,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Settings,
  UserRound,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import type { ElementType } from 'react';

type TimelineEntry = {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
};

const education: TimelineEntry[] = [
  {
    period: '2013 - 2018',
    title: 'Kỹ sư Cơ điện tử',
    subtitle: 'Trường Đại học Sư phạm Kỹ thuật TP.HCM',
  },
  {
    period: '2024 - 2026',
    title: 'Thạc sĩ Cơ điện tử (đang theo học)',
    subtitle: 'Trường Đại học Bách Khoa TP.HCM',
  },
];

type ExperienceEntry = {
  period: string;
  duration: string;
  title: string;
  company: string;
  location?: string;
  bullets: string[];
  products?: string[];
};

const experience: ExperienceEntry[] = [
  {
    period: '03/2022 - 08/2023',
    duration: '1 năm 6 tháng',
    title: 'Automation Engineer (Mechatronic Engineer)',
    company: 'Nhà Bè Tech JSC',
    location: 'TP. Hồ Chí Minh, Việt Nam · Tại văn phòng',
    bullets: [
      'Generate new ideas, new solution to improve production, reduce cycle time and cost in garment factory.',
      'Design electric systems for automatic and semi-automatic machine in garment.',
      'Working directly with foreign customer and supplier to make a machine.',
      'Setup and commissioning machine at factory, diagnostic and fix problem ensure the machine and system working properly.',
      'Making PC software for using and configuration machine easily (C#.net and Modbus).',
      'Design new MCU hardware replace PLC system for low cost.',
      'Lead electric team to implementation automation projects.',
    ],
    products: [
      'Button indexer automatic sewing machine.',
      'Heavy duty pattern decoration machine.',
      'Control box for sewing machine.',
      'Air plus controller Systems.',
      'Wireless data communication (Lora, Temp and Humi in factory).',
    ],
  },
  {
    period: '03/2020 - 03/2022',
    duration: '2 năm 1 tháng',
    title: 'Electrical and PLC Programming',
    company: 'TCI Automation HCM',
    bullets: [
      'Receiving information from customer, generate quantity bill of electric and pneumatic components, support Mechanic Team to estimate cost before PO.',
      'Design electric and pneumatic Circuit, support Assembly team.',
      'Programming PLC, HMI, commissioning the machine, checking functions work in the right way.',
      'Setup and commissioning machine at factory, diagnostic and fix problem follow customer requirement.',
      'Generate report and technical document.',
    ],
  },
];

const publications = [
  {
    title:
      'Robust Hybrid LQR - Integral Control for 2-DOF Robotic Arms: Performance Evaluation under Simulated Agricultural Vibration Conditions',
    journal: 'EAI Endorsed Transactions on Sustainable Manufacturing and Renewable Energy',
    year: '2026',
    volume: 'Vol. 2, No. 4',
    url: 'https://doi.org/10.4108/eetsmre.11257',
    summary:
      'Đề xuất bộ điều khiển kết hợp LQR - Tích phân cho cánh tay robot khớp mềm 2 bậc tự do, ứng dụng trong nông nghiệp tự động hoá, cải thiện độ ổn định và độ chính xác định vị, đồng thời tiết kiệm khoảng 9.36% năng lượng so với hệ thống liên kết cứng.',
  },
];

// TODO: đặt ảnh chân dung thật vào public/images/ với đúng tên file này
const PORTRAIT_IMAGE = '/images/le-quang-ngoc-portrait.jpg';

const skills = [
  { icon: Cpu, title: 'Thiết Kế CAD/CAM/CAE', desc: 'Thiết kế kỹ thuật, mô phỏng và tối ưu hoá sản phẩm cơ khí trước khi đưa vào sản xuất.' },
  { icon: Settings, title: 'Lập Trình Gia Công CNC', desc: 'Lập trình, vận hành và giám sát hệ thống máy phay/tiện CNC độ chính xác cao.' },
  { icon: ClipboardCheck, title: 'Quản Lý Chất Lượng', desc: 'Xây dựng và giám sát quy trình sản xuất theo tiêu chuẩn ISO 9001:2015.' },
  { icon: Users, title: 'Quản Lý Dự Án & Đội Ngũ', desc: 'Điều phối tiến độ, quản lý đội ngũ kỹ thuật từ khâu thiết kế đến sản xuất, bàn giao.' },
];

// TODO: cập nhật chứng chỉ / giải thưởng thực tế
const certifications = [
  { title: '(Tên chứng chỉ / giải thưởng)', org: '(Đơn vị cấp)', year: '20XX' },
];

// TODO: cập nhật thông tin liên hệ cá nhân
const contactInfo = [
  { icon: Mail, label: '(Email cá nhân)' },
  { icon: Phone, label: '(Số điện thoại)' },
  { icon: MapPin, label: '(Địa chỉ liên hệ)' },
];

const Timeline = ({ items, accentColor }: { items: TimelineEntry[]; accentColor: 'primary' | 'secondary' }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    {items.map((item, index) => {
      const isLast = index === items.length - 1;
      return (
        <Box key={index} sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 16 }}>
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                bgcolor: `${accentColor}.main`,
                flexShrink: 0,
                mt: 0.6,
              }}
            />
            {!isLast && <Box sx={{ flex: 1, width: '2px', bgcolor: 'grey.200', mt: 0.5 }} />}
          </Box>
          <Box sx={{ pb: isLast ? 0 : 4, flex: 1 }}>
            <Chip
              label={item.period}
              size="small"
              sx={{
                mb: 1.5,
                fontWeight: 700,
                bgcolor: (t) => alpha(t.palette[accentColor].main, accentColor === 'primary' ? 0.1 : 0.15),
                color: `${accentColor}.dark`,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700 }} color="text.primary">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom={Boolean(item.description)}>
              {item.subtitle}
            </Typography>
            {item.description && (
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {item.description}
              </Typography>
            )}
          </Box>
        </Box>
      );
    })}
  </Box>
);

const ExperienceCard = ({ item, index }: { item: ExperienceEntry; index: number }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    sx={{
      p: { xs: 3, md: 4 },
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'grey.200',
      bgcolor: 'background.paper',
    }}
  >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, mb: 2 }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }} color="text.primary">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.company}
          {item.location ? ` · ${item.location}` : ''}
        </Typography>
      </Box>
      <Chip
        label={`${item.period} · ${item.duration}`}
        size="small"
        sx={{
          fontWeight: 700,
          bgcolor: (t) => alpha(t.palette.secondary.main, 0.15),
          color: 'secondary.dark',
        }}
      />
    </Box>

    <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      {item.bullets.map((bullet, i) => (
        <Typography key={i} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {bullet}
        </Typography>
      ))}
    </Box>

    {item.products && (
      <Box sx={{ mt: 2.5 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="text.primary" gutterBottom>
          Sản phẩm tiêu biểu
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {item.products.map((product, i) => (
            <Chip
              key={i}
              label={product}
              size="small"
              variant="outlined"
              sx={{ borderColor: 'grey.300', color: 'text.secondary' }}
            />
          ))}
        </Box>
      </Box>
    )}
  </Box>
);

const SectionHeading = ({
  icon: Icon,
  title,
  color,
}: {
  icon: ElementType;
  title: string;
  color: string;
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
    <Icon color={color} size={28} />
    <Typography variant="h4" sx={{ fontWeight: 700 }} color="text.primary">
      {title}
    </Typography>
  </Box>
);

const OwnerProfile = () => {
  const theme = useTheme();
  const [portraitError, setPortraitError] = useState(false);

  return (
    <Box component="main">
      {/* Banner */}
      <Box
        sx={{
          background: `linear-gradient(to right, ${alpha(theme.palette.primary.dark, 0.92)}, ${alpha(theme.palette.primary.main, 0.8)}), url("/images/workshop_facility_1776152769575.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 10 },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.25,
              mb: 5,
              py: 0.75,
              pl: 0.75,
              pr: 2.5,
              borderRadius: 10,
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'inherit',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.18)',
              }}
            >
              <ArrowLeft size={16} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Về Trang Chủ
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 700 }} gutterBottom>
                  NGƯỜI SÁNG LẬP & GIÁM ĐỐC
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
                  Lê Quang Ngọc
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 1,
                      px: 2,
                      borderRadius: 10,
                      bgcolor: 'rgba(255,255,255,0.12)',
                    }}
                  >
                    <CalendarDays size={18} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>07/04/1995</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 1,
                      px: 2,
                      borderRadius: 10,
                      bgcolor: 'rgba(255,255,255,0.12)',
                    }}
                  >
                    <GraduationCap size={18} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Thạc sĩ Cơ điện tử</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                sx={{
                  position: 'relative',
                  width: { xs: 220, sm: 260, md: '100%' },
                  maxWidth: 320,
                  aspectRatio: '4 / 5',
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    transform: 'translate(16px, 16px)',
                    borderRadius: 4,
                    border: '3px solid',
                    borderColor: 'secondary.main',
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '4px solid white',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.3)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      textAlign: 'center',
                      px: 2,
                      bgcolor: (t) => alpha(t.palette.secondary.main, 0.18),
                    }}
                  >
                    <UserRound size={64} color={theme.palette.primary.dark} />
                    <Typography variant="caption" sx={{ color: 'primary.dark', fontWeight: 700 }}>
                      Chưa có ảnh chân dung
                    </Typography>
                  </Box>
                  {!portraitError && (
                    <Box
                      component="img"
                      src={PORTRAIT_IMAGE}
                      alt="Lê Quang Ngọc"
                      onError={() => setPortraitError(true)}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Giới thiệu */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
              bgcolor: (t) => alpha(t.palette.primary.main, 0.04),
            }}
          >
            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
              GIỚI THIỆU
            </Typography>
            {/* TODO: thay bằng nội dung giới thiệu bản thân thực tế */}
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontStyle: 'italic' }}>
              Với nền tảng kỹ thuật Cơ điện tử và kinh nghiệm thực tế trong ngành gia công cơ khí, tôi thành lập
              công ty với mục tiêu mang đến các giải pháp chế tạo chính xác, đáng tin cậy cho khách hàng trong và
              ngoài nước. (Nội dung giới thiệu chi tiết sẽ được cập nhật)
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Chuyên môn */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading icon={Settings} title="Chuyên Môn" color={theme.palette.primary.main} />
            <Grid container spacing={3}>
              {skills.map((skill, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box
                    sx={{
                      height: '100%',
                      p: { xs: 3, md: 4 },
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      bgcolor: 'background.paper',
                      display: 'flex',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                        color: 'primary.main',
                      }}
                    >
                      <skill.icon size={22} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }} color="text.primary" gutterBottom>
                        {skill.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {skill.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Học vấn */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading icon={GraduationCap} title="Học Vấn" color={theme.palette.primary.main} />
            <Timeline items={education} accentColor="primary" />
          </Box>
        </Container>
      </Box>

      {/* Kinh nghiệm làm việc */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading icon={Briefcase} title="Kinh Nghiệm Làm Việc" color={theme.palette.secondary.main} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {experience.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Chứng chỉ & Giải thưởng */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading icon={Award} title="Chứng Chỉ & Giải Thưởng" color={theme.palette.primary.main} />
            <Grid container spacing={3}>
              {certifications.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Box
                    sx={{
                      height: '100%',
                      p: { xs: 3, md: 4 },
                      borderRadius: 2,
                      border: '1px dashed',
                      borderColor: 'grey.300',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (t) => alpha(t.palette.secondary.main, 0.12),
                        color: 'secondary.dark',
                        mb: 2,
                      }}
                    >
                      <Award size={22} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }} color="text.primary">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.org} · {item.year}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Nghiên cứu & Xuất bản khoa học */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading icon={BookOpen} title="Nghiên Cứu & Xuất Bản Khoa Học" color={theme.palette.primary.main} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {publications.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Chip
                    label={`${item.journal} · ${item.volume} · ${item.year}`}
                    size="small"
                    sx={{
                      mb: 1.5,
                      fontWeight: 700,
                      bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                      color: 'primary.main',
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }} color="text.primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                    {item.summary}
                  </Typography>
                  <Box
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Xem bài báo đầy đủ
                    <ExternalLink size={14} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Liên hệ */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 700 }} gutterBottom>
              THÔNG TIN LIÊN HỆ
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
              Kết Nối Với Tôi
            </Typography>
            <Grid container spacing={3}>
              {contactInfo.map((item, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <item.icon size={20} color={theme.palette.secondary.main} />
                    <Typography variant="body1">{item.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default OwnerProfile;
