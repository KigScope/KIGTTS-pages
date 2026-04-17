import { alpha, createTheme } from '@mui/material/styles';

const uiFontStack = [
  '"Google Sans"',
  '"Noto Sans SC"',
  '"Source Han Sans SC"',
  '"Microsoft YaHei"',
  '"PingFang SC"',
  '"Hiragino Sans GB"',
  'sans-serif',
].join(', ');

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
    fontFamily: uiFontStack,
    h1: {
      fontFamily: uiFontStack,
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: uiFontStack,
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: uiFontStack,
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
    borderRadius: 4,
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
          borderRadius: 4,
          paddingInline: 24,
          minHeight: 44,
        },
        contained: {
          backgroundColor: '#038387',
          boxShadow: '0 2px 4px rgba(0,0,0,0.28), 0 3px 10px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: '#04959a',
            boxShadow: '0 4px 8px rgba(0,0,0,0.28), 0 6px 14px rgba(0,0,0,0.24)',
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
          boxShadow: '0 2px 4px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.18)',
          borderRadius: 4,
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
