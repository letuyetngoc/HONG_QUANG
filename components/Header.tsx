'use client';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { Menu as MenuIcon } from 'lucide-react';
import React from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Về chúng tôi', 'Dịch vụ', 'Dự án', 'Nhà xưởng'];

  return (
    <AppBar position="sticky" color="default" sx={{ bgcolor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            HỒNG QUANG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            MECH<span style={{ color: '#F4A261' }}>VINA</span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 3 }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'text.primary', fontWeight: 500 }}>
                {item}
              </Button>
            ))}
          </Box>

          <Button variant="contained" color="primary" sx={{ display: { xs: 'none', md: 'block' } }}>
            Liên hệ ngay
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
