import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { alpha, keyframes, useTheme } from '@mui/material/styles';
import { startTransition, useEffect, useState } from 'react';
import logoWhite from '../ART/LOGOWhite.svg';
import lhtstudioLogo from '../ART/lhtstudio.svg';
import { BackgroundEffects } from './components/BackgroundEffects';
import {
  AboutSection,
  DownloadSection,
  HomeSection,
  LabSection,
  navItems,
} from './components/sections';

const pageReveal = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 18px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function getInitialSection() {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const hash = window.location.hash.replace('#', '');
  return navItems.some((item) => item.id === hash) ? hash : 'home';
}

function SectionContent({ activeId, onSelect }) {
  switch (activeId) {
    case 'about':
      return <AboutSection />;
    case 'download':
      return <DownloadSection onSelect={onSelect} />;
    case 'lab':
      return <LabSection />;
    case 'home':
    default:
      return <HomeSection onSelect={onSelect} />;
  }
}

function SideRail({ activeId, onSelect }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 18,
        alignSelf: 'flex-start',
        width: 108,
        minWidth: 108,
        height: 'calc(100svh - 36px)',
        ml: 2.2,
        my: 2.2,
        px: 1.3,
        py: 2.2,
        borderRadius: 5,
        backgroundColor: alpha('#0a1618', 0.76),
        backdropFilter: 'blur(18px)',
        border: `1px solid ${alpha('#f5fbfb', 0.08)}`,
        boxShadow: `0 22px 48px ${alpha('#000000', 0.28)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={lhtstudioLogo}
        alt="LHT Studio"
        sx={{ width: 52, opacity: 0.9, mt: 1.5, mb: 4 }}
      />
      <Stack spacing={1.4} sx={{ width: '100%' }}>
        {navItems.map((item) => {
          const selected = item.id === activeId;
          const Icon = item.icon;

          return (
            <Button
              key={item.id}
              onClick={() => onSelect(item.id)}
              variant="text"
              sx={{
                position: 'relative',
                minWidth: 0,
                minHeight: 68,
                borderRadius: 3.4,
                color: selected ? '#f5fbfb' : alpha('#f5fbfb', 0.6),
                backgroundColor: selected ? alpha('#ffffff', 0.05) : 'transparent',
                '&::before': selected
                  ? {
                      content: '""',
                      position: 'absolute',
                      left: -10,
                      top: 12,
                      bottom: 12,
                      width: 4,
                      borderRadius: 999,
                      backgroundColor: 'primary.main',
                      boxShadow: `0 0 24px ${alpha('#038387', 0.48)}`,
                    }
                  : {},
                '&:hover': {
                  backgroundColor: alpha('#ffffff', 0.06),
                },
              }}
            >
              <Icon sx={{ fontSize: 29 }} />
            </Button>
          );
        })}
      </Stack>
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          width: 182,
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          mb: 10,
          opacity: 0.88,
        }}
      >
        <Box component="img" src={logoWhite} alt="KIGTTS" sx={{ width: '100%' }} />
      </Box>
    </Box>
  );
}

function MobileNavigation({ activeId, onSelect }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentItem = navItems.find((item) => item.id === activeId) ?? navItems[0];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ minHeight: 74, gap: 1.5 }}>
          <Box component="img" src={lhtstudioLogo} alt="LHT Studio" sx={{ width: 38 }} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              KIGTTS Studio
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {currentItem.label} / {currentItem.caption}
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="打开菜单">
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 296, px: 1.4 } }}
      >
        <Stack spacing={1.2} sx={{ p: 2.2, pb: 0 }}>
          <Box component="img" src={logoWhite} alt="KIGTTS" sx={{ width: 156 }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            切换页面内容，布局会根据屏宽自动调整。
          </Typography>
        </Stack>
        <List sx={{ px: 1.2, py: 2 }}>
          {navItems.map((item) => {
            const selected = item.id === activeId;
            const Icon = item.icon;

            return (
              <ListItemButton
                key={item.id}
                selected={selected}
                onClick={() => {
                  onSelect(item.id);
                  setDrawerOpen(false);
                }}
                sx={{
                  borderRadius: 3,
                  mb: 0.8,
                  '&.Mui-selected': {
                    backgroundColor: alpha('#038387', 0.16),
                    '&:hover': {
                      backgroundColor: alpha('#038387', 0.22),
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 42, color: selected ? 'primary.light' : 'inherit' }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  secondary={item.caption}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default function App() {
  const theme = useTheme();
  const narrowViewport = useMediaQuery(theme.breakpoints.down('lg'));
  const touchNavigation = useMediaQuery('(hover: none) and (pointer: coarse)');
  const compactNavigation = narrowViewport || touchNavigation;
  const [activeId, setActiveId] = useState(getInitialSection);

  useEffect(() => {
    const handleHashChange = () => {
      const next = getInitialSection();
      setActiveId((prev) => (prev === next ? prev : next));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelect = (nextId) => {
    if (nextId === activeId) {
      return;
    }

    window.history.replaceState(null, '', `#${nextId}`);
    startTransition(() => {
      setActiveId(nextId);
    });
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', isolation: 'isolate' }}>
      <BackgroundEffects />
      {compactNavigation ? <MobileNavigation activeId={activeId} onSelect={handleSelect} /> : null}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: { lg: 2.4 },
          pb: { xs: 5, md: 6 },
        }}
      >
        {!compactNavigation ? <SideRail activeId={activeId} onSelect={handleSelect} /> : null}
        <Box
          component="main"
          sx={{
            flex: 1,
            minWidth: 0,
            px: { xs: 2, sm: 3, md: 4, lg: 0 },
            pt: { xs: 2.2, md: compactNavigation ? 3 : 2.2 },
            pr: { lg: 2.4 },
          }}
        >
          <Box
            sx={{
              minHeight: compactNavigation ? 'auto' : 'calc(100svh - 36px)',
              borderRadius: { xs: 5, md: 7 },
              border: `1px solid ${alpha('#f5fbfb', 0.08)}`,
              backgroundColor: alpha(theme.palette.background.paper, 0.42),
              backdropFilter: 'blur(12px)',
              boxShadow: `0 28px 72px ${alpha('#000000', 0.24)}`,
              p: { xs: 2.4, sm: 3.2, md: 4.2, xl: 5 },
              overflow: 'hidden',
            }}
          >
            <Box
              key={activeId}
              sx={{
                animation: `${pageReveal} 520ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
              }}
            >
              <SectionContent activeId={activeId} onSelect={handleSelect} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
