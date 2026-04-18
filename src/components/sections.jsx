import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import heroShot from '../../ART/KIGTTS1.png';
import logoWhite from '../../ART/LOGOWhite.svg';
import lhtstudioLogo from '../../ART/lhtstudio.svg';

export const navItems = [
  {
    id: 'home',
    label: '首页',
    caption: 'Home',
    icon: 'home',
  },
  {
    id: 'about',
    label: '介绍',
    caption: 'About',
    icon: 'graphic_eq',
  },
  {
    id: 'download',
    label: '下载',
    caption: 'Download',
    icon: 'download',
  },
  {
    id: 'lab',
    label: '实验',
    caption: 'Lab',
    icon: 'tune',
  },
];

const betaLines = ['尝试由Flutter构建', '的Beta版本'];

const downloadNotes = [
  '手机扫描二维码进行下载',
  '训练器与 APK 可分别接真实链接',
  '整个站点已经适配 GitHub Pages 静态部署',
];

const labItems = [
  '保留深色流光气质，但减少与主页面抢视觉。',
  '方便挂 Beta 下载、更新日志和实验说明。',
  '移动端沿用抽屉导航，不挤压主内容宽度。',
];

const md2SurfaceShadow = '0 1px 2px rgba(0,0,0,0.28), 0 6px 18px rgba(0,0,0,0.16)';
const md2RaisedShadow = '0 2px 4px rgba(0,0,0,0.28), 0 10px 24px rgba(0,0,0,0.2)';
const md2Surface = {
  backgroundColor: '#2f3132',
  border: `1px solid ${alpha('#ffffff', 0.04)}`,
  borderRadius: 1,
  boxShadow: md2SurfaceShadow,
};
const md2Button = {
  minHeight: 72,
  justifyContent: 'flex-start',
  px: 2.8,
  borderRadius: 1,
  fontSize: { xs: '1.18rem', md: '1.28rem' },
  fontWeight: 500,
  color: '#f5fbfb',
  backgroundColor: '#038387',
  boxShadow: '0 2px 4px rgba(0,0,0,0.28), 0 6px 14px rgba(0,0,0,0.18)',
  '&:hover': {
    backgroundColor: '#04959a',
    boxShadow: '0 4px 8px rgba(0,0,0,0.28), 0 8px 18px rgba(0,0,0,0.22)',
  },
};

export function SymbolIcon({ name, size = 24, sx }) {
  return (
    <Icon
      baseClassName="material-symbols-sharp"
      sx={{
        fontSize: size,
        lineHeight: 1,
        fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
        ...sx,
      }}
    >
      {name}
    </Icon>
  );
}

function PseudoQr() {
  return (
    <Box
      sx={{
        width: 168,
        height: 168,
        p: 1.25,
        backgroundColor: '#fbfbfb',
        borderRadius: 0.5,
        boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          backgroundImage: `
            linear-gradient(90deg, #111 0 14%, transparent 14% 21%, #111 21% 35%, transparent 35% 43%, #111 43% 49%, transparent 49% 57%, #111 57% 74%, transparent 74% 80%, #111 80% 100%),
            linear-gradient(#111 0 12%, transparent 12% 18%, #111 18% 31%, transparent 31% 40%, #111 40% 48%, transparent 48% 61%, #111 61% 73%, transparent 73% 84%, #111 84% 100%)
          `,
          backgroundSize: '100% 100%',
          position: 'relative',
          overflow: 'hidden',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: 38,
            height: 38,
            border: '8px solid #111',
            backgroundColor: '#fff',
          },
          '&::before': {
            top: 10,
            left: 10,
          },
          '&::after': {
            top: 10,
            right: 10,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 10,
            bottom: 10,
            width: 38,
            height: 38,
            border: '8px solid #111',
            backgroundColor: '#fff',
          }}
        />
      </Box>
    </Box>
  );
}

function BetaBubble({ onSelect, compact = false }) {
  return (
    <Box
      sx={{
        position: compact ? 'relative' : 'absolute',
        right: compact ? 'auto' : { lg: 42, xl: 56 },
        top: compact ? 'auto' : { lg: 34, xl: 46 },
        width: compact ? '100%' : { lg: 320, xl: 354 },
        minHeight: compact ? 'auto' : 190,
        px: { xs: 3, md: 3.2 },
        py: { xs: 2.6, md: 3 },
        borderRadius: '28px',
        color: '#0b1819',
        background: 'linear-gradient(180deg, #92dde0 0%, #82d4d8 100%)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.18)',
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          borderRadius: '48%',
          backgroundColor: alpha('#d6f5f6', 0.56),
        },
        '&::before': {
          width: 92,
          height: 92,
          top: -20,
          right: -12,
        },
        '&::after': {
          width: 76,
          height: 76,
          bottom: -14,
          left: -12,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 18,
          top: '50%',
          borderRadius: '18px',
          background: `
            radial-gradient(circle at 16% 22%, ${alpha('#117d80', 0.24)} 0 22%, transparent 22%),
            radial-gradient(circle at 100% 10%, ${alpha('#d5f3f4', 0.55)} 0 20%, transparent 20%),
            radial-gradient(circle at 84% 100%, ${alpha('#149ea2', 0.18)} 0 26%, transparent 26%)
          `,
        }}
      />
      <Stack
        spacing={2.2}
        sx={{
          position: 'relative',
          zIndex: 1,
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.05rem', md: '1.1rem' },
            lineHeight: 1.45,
            fontWeight: 500,
          }}
        >
          {betaLines.map((line) => (
            <Box key={line} component="span" sx={{ display: 'block' }}>
              {line}
            </Box>
          ))}
        </Typography>
        <Button
          onClick={() => onSelect('lab')}
          sx={{
            minWidth: 188,
            minHeight: 52,
            px: 4,
            borderRadius: 999,
            color: '#f5fbfb',
            backgroundColor: '#0e7f83',
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#0f8d92',
            },
          }}
        >
          前往Beta页面
        </Button>
      </Stack>
    </Box>
  );
}

function DownloadPanel() {
  return (
    <Box
      sx={{
        flex: 1,
        minHeight: 244,
        px: { xs: 2.2, md: 2.5 },
        py: { xs: 2.2, md: 2.5 },
        ...md2Surface,
      }}
    >
      <Stack spacing={1.8} sx={{ height: '100%' }}>
        <Button
          fullWidth
          startIcon={<SymbolIcon name="android" size={28} />}
          sx={{
            ...md2Button,
          }}
        >
          下载APK
        </Button>
        <Button
          fullWidth
          startIcon={<SymbolIcon name="laptop_mac" size={28} />}
          sx={{
            ...md2Button,
          }}
        >
          下载训练器
        </Button>
      </Stack>
    </Box>
  );
}

function QrPanel() {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 230 },
        minWidth: { sm: 230 },
        minHeight: 244,
        px: { xs: 2.2, md: 2.5 },
        py: { xs: 2.2, md: 2.5 },
        ...md2Surface,
      }}
    >
      <Stack spacing={1.8} alignItems="center">
        <PseudoQr />
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: alpha('#f5fbfb', 0.64),
            fontSize: '0.92rem',
            lineHeight: 1.55,
          }}
        >
          {downloadNotes[0]}
        </Typography>
      </Stack>
    </Box>
  );
}

function HomeRightBlock({ onSelect }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { lg: 502, xl: 536 },
        mt: { xs: 2, lg: 0 },
        ml: { lg: 'auto' },
      }}
    >
      <Box
        component="img"
        src={logoWhite}
        alt="KIGTTS"
        sx={{
          width: '100%',
          maxWidth: 474,
        }}
      />
      <Typography
        sx={{
          mt: 2,
          fontSize: { xs: '2rem', md: '2.6rem', xl: '2.9rem' },
          lineHeight: 1.18,
          letterSpacing: '0.03em',
          color: '#f1f4f4',
          fontWeight: 300,
        }}
      >
        变娃交流无阻碍
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          mt: { xs: 4, md: 5.2 },
          alignItems: 'stretch',
        }}
      >
        <QrPanel />
        <DownloadPanel />
      </Stack>
    </Box>
  );
}

export function HomeSection({ onSelect }) {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', lg: '100svh' },
          px: { xs: 2.5, sm: 3.4, lg: 5.4, xl: 6.4 },
          pt: { xs: 3, lg: 3.8 },
          pb: { xs: 4.2, lg: 5.2 },
          scrollSnapAlign: 'start',
        }}
      >
        <Box
          component="img"
          src={lhtstudioLogo}
          alt="LHT Studio"
          sx={{
            width: { xs: 170, md: 200 },
            mb: { xs: 2.8, lg: 0 },
          }}
        />
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <BetaBubble onSelect={onSelect} />
        </Box>
        <Box
          sx={{
            mt: { xs: 0, lg: 3.2 },
            display: { xs: 'block', lg: 'grid' },
            gridTemplateColumns: {
              lg: 'minmax(0, 1.1fr) minmax(380px, 0.82fr)',
              xl: 'minmax(0, 1.14fr) minmax(420px, 0.86fr)',
            },
            alignItems: 'center',
            gap: { lg: 4.5, xl: 6.2 },
            minHeight: { lg: 'calc(100svh - 158px)' },
          }}
        >
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <BetaBubble onSelect={onSelect} compact />
          </Box>
          <Box
            sx={{
              minWidth: 0,
              width: '100%',
              mt: { xs: 3.2, lg: 0 },
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: { lg: 'flex-start' },
            }}
          >
            <Box
              component="img"
              src={heroShot}
              alt="KIGTTS 视觉主体"
              sx={{
                width: '100%',
                maxWidth: { lg: 'min(58vw, 980px)', xl: 'min(56vw, 1080px)' },
                display: 'block',
                filter: 'drop-shadow(0 18px 34px rgba(0,0,0,0.26))',
              }}
            />
          </Box>
          <Box sx={{ minWidth: 0, display: 'flex', justifyContent: { lg: 'flex-end' } }}>
            <HomeRightBlock onSelect={onSelect} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: 2.5, sm: 3.4, lg: 5.4, xl: 6.4 },
          pb: { xs: 3.2, lg: 5.4 },
          scrollSnapAlign: 'start',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '72%', xl: '68%' },
            minHeight: { xs: 360, lg: 440 },
            px: { xs: 3, md: 4.8 },
            py: { xs: 4.2, md: 5.2 },
            ...md2Surface,
            boxShadow: md2RaisedShadow,
          }}
        >
          <Typography
            sx={{
              color: '#f5f7f7',
              fontSize: { xs: '1.55rem', md: '2rem' },
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          >
            这是 MD2 风格的介绍页，后续可以接功能说明、更新日志和安装引导。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export function AboutSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: 560, lg: 'calc(100svh - 90px)' },
        px: { xs: 2.5, sm: 3.6, lg: 6.4 },
        py: { xs: 3.2, lg: 5.4 },
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', lg: '74%', xl: '68%' },
          minHeight: { xs: 420, md: 520, lg: 560 },
          ...md2Surface,
          boxShadow: md2RaisedShadow,
          px: { xs: 3.2, md: 5.6 },
          pt: { xs: 7, md: 8.5 },
        }}
      >
        <Typography
          sx={{
            color: alpha('#ffffff', 0.82),
            fontSize: '0.9rem',
            letterSpacing: '0.18em',
            textAlign: 'center',
          }}
        >
          ABOUT
        </Typography>
        <Typography
          sx={{
            mt: { xs: 3.6, md: 5.8 },
            textAlign: 'center',
            color: '#f5f7f7',
            fontSize: { xs: '1.55rem', md: '2.05rem' },
            fontWeight: 400,
            letterSpacing: '0.01em',
          }}
        >
          这是MD2风格的介绍页面，随便加些什么
        </Typography>
      </Box>
    </Box>
  );
}

export function DownloadSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: 560, lg: 'calc(100svh - 90px)' },
        px: { xs: 2.5, sm: 3.6, lg: 5.8 },
        py: { xs: 3.2, lg: 4.4 },
      }}
    >
      <Typography sx={{ color: alpha('#ffffff', 0.82), fontSize: '0.9rem', letterSpacing: '0.18em' }}>
        DOWNLOAD
      </Typography>
      <Typography
        sx={{
          mt: 1.8,
          maxWidth: 680,
          fontSize: { xs: '2rem', md: '2.7rem' },
          lineHeight: 1.1,
          color: '#f5f7f7',
        }}
      >
        下载区保持跟首页同一套块面逻辑，只把重点压到二维码和按钮入口。
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3.2 }}>
        <Grid size={{ xs: 12, lg: 7.2 }}>
          <Box
            sx={{
              minHeight: 360,
              p: { xs: 2.8, md: 3.6 },
              ...md2Surface,
            }}
          >
            <Stack spacing={2.4}>
              {downloadNotes.map((item, index) => (
                <Box key={item} sx={{ display: 'flex', gap: 2 }}>
                  <Typography sx={{ minWidth: 34, color: '#79d6d9', fontSize: '1.2rem' }}>
                    0{index + 1}
                  </Typography>
                  <Typography sx={{ color: alpha('#ffffff', 0.76), lineHeight: 1.8 }}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 4.8 }}>
          <Stack direction={{ xs: 'column', sm: 'row', lg: 'column' }} spacing={2.2}>
            <QrPanel />
            <DownloadPanel />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export function LabSection({ onSelect }) {
  return (
    <Box
      sx={{
        minHeight: { xs: 560, lg: 'calc(100svh - 90px)' },
        px: { xs: 2.5, sm: 3.6, lg: 5.8 },
        py: { xs: 3.2, lg: 4.4 },
      }}
    >
      <Typography sx={{ color: alpha('#ffffff', 0.82), fontSize: '0.9rem', letterSpacing: '0.18em' }}>
        BETA / LAB
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1.6 }}>
        <Grid size={{ xs: 12, lg: 7.2 }}>
          <Box
            sx={{
              minHeight: 430,
              p: { xs: 2.8, md: 3.6 },
              background: `linear-gradient(155deg, ${alpha('#152425', 0.98)} 0%, ${alpha(
                '#0f6f73',
                0.28,
              )} 100%)`,
              border: `1px solid ${alpha('#ffffff', 0.04)}`,
              borderRadius: 1,
              boxShadow: md2RaisedShadow,
            }}
          >
            <Typography
              sx={{
                maxWidth: 720,
                fontSize: { xs: '2rem', md: '2.8rem' },
                lineHeight: 1.08,
                color: '#f5f7f7',
              }}
            >
              这里留给 Flutter Beta、实验功能和未来路线图，不跟首页抢同一个视觉中心。
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3.4 }}>
              {labItems.map((item) => (
                <Grid key={item} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      height: '100%',
                      p: 2.2,
                      backgroundColor: alpha('#0a1415', 0.54),
                      border: `1px solid ${alpha('#ffffff', 0.06)}`,
                      borderRadius: 1,
                    }}
                  >
                    <Typography sx={{ color: alpha('#ffffff', 0.72), lineHeight: 1.8 }}>{item}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 4.8 }}>
          <Stack spacing={2.2}>
            <BetaBubble onSelect={() => onSelect?.('home')} compact />
            <Box
              sx={{
                p: { xs: 2.8, md: 3.2 },
                ...md2Surface,
              }}
            >
              <Stack spacing={2}>
                <Typography sx={{ fontSize: '1.4rem', color: '#f5f7f7' }}>可继续接入</Typography>
                <Divider sx={{ borderColor: alpha('#ffffff', 0.08) }} />
                <Typography sx={{ color: alpha('#ffffff', 0.72), lineHeight: 1.8 }}>
                  后续把 Beta 的真实入口、更新日志和测试说明接进来就可以，不需要再改整套布局。
                </Typography>
                <Button
                  startIcon={<SymbolIcon name="deployed_code" size={22} />}
                  sx={{
                    alignSelf: 'flex-start',
                    px: 3.4,
                    ...md2Button,
                    minHeight: 44,
                    justifyContent: 'center',
                  }}
                >
                  保留实验入口
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
