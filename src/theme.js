import { alpha, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#038387',
      light: '#67ced0',
      dark: '#02595d',
      contrastText: '#f5fbfb',
    },
    secondary: {
      main: '#80d5d7',
      contrastText: '#041011',
    },
    background: {
      default: '#041011',
      paper: '#0c1819',
    },
    text: {
      primary: '#f5fbfb',
      secondary: alpha('#f5fbfb', 0.72),
    },
    divider: alpha('#f5fbfb', 0.08),
  },
  typography: {
    fontFamily:
      '"Space Grotesk", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
    h1: {
      fontFamily:
        '"Space Grotesk", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily:
        '"Space Grotesk", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily:
        '"Space Grotesk", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: alpha('#071314', 0.82),
          backdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${alpha('#f5fbfb', 0.08)}`,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 22,
          paddingInline: 24,
          minHeight: 52,
        },
        contained: {
          background: 'linear-gradient(135deg, #038387 0%, #0aa3a8 100%)',
          boxShadow: `0 18px 36px ${alpha('#038387', 0.24)}`,
          '&:hover': {
            background: 'linear-gradient(135deg, #059297 0%, #0bb9bf 100%)',
            boxShadow: `0 22px 44px ${alpha('#038387', 0.3)}`,
          },
        },
        outlined: {
          borderColor: alpha('#f5fbfb', 0.16),
          '&:hover': {
            borderColor: alpha('#f5fbfb', 0.28),
            backgroundColor: alpha('#f5fbfb', 0.03),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: alpha('#111b1d', 0.82),
          backdropFilter: 'blur(20px)',
          border: `1px solid ${alpha('#f5fbfb', 0.08)}`,
          boxShadow: `0 32px 80px ${alpha('#000000', 0.32)}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          backgroundColor: alpha('#071314', 0.94),
          backdropFilter: 'blur(28px)',
          borderLeft: `1px solid ${alpha('#f5fbfb', 0.08)}`,
          boxShadow: `0 24px 56px ${alpha('#000000', 0.34)}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          backgroundColor: alpha('#f5fbfb', 0.06),
          border: `1px solid ${alpha('#f5fbfb', 0.08)}`,
        },
      },
    },
  },
});
