'use client';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Menu as MenuIcon } from 'lucide-react';
import React from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Về chúng tôi', id: 'about' },
    { label: 'Dịch vụ', id: 'services' },
    { label: 'Dự án', id: 'projects' },
    { label: 'Nhà xưởng', id: 'gallery' }
  ];
  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 250);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: 'primary.main', fontFamily: 'monospace', letterSpacing: '.2rem' }}>
        HỒNG QUANG
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={(e) => handleScroll(e, item.id)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center', color: 'primary.main' }}
            onClick={(e) => handleScroll(e, 'contact')}
          >
            <ListItemText primary="Liên hệ ngay" sx={{ '& span': { fontWeight: 700 } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        sx={{
          top: 0,
          zIndex: 1100,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)'
        }}
      >
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
              HỒNG {" "}<span style={{ color: '#F4A261' }}>QUANG</span>
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
              HỒNG<span style={{ color: '#F4A261' }}>QUANG</span>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  sx={{ color: 'text.primary', fontWeight: 500 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Liên hệ ngay
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Cải thiện hiệu suất mở trên thiết bị di động
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
