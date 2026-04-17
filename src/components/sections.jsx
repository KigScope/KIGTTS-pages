import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
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
    caption: 'Overview',
    icon: HomeRoundedIcon,
  },
  {
    id: 'about',
    label: '介绍',
    caption: 'MD2',
    icon: GraphicEqRoundedIcon,
  },
  {
    id: 'download',
    label: '下载',
    caption: 'Assets',
    icon: DownloadRoundedIcon,
  },
  {
    id: 'lab',
    label: '实验',
    caption: 'Beta',
    icon: SettingsSuggestRoundedIcon,
  },
];

const featureChips = ['实时字幕', '双端适配', '低干扰视觉', '静态部署'];

const installSteps = [
  '将 APK 下载链接替换为正式地址后即可直接上线到 GitHub Pages 导航页。',
  '训练器入口保留大尺寸按钮区，适合挂载到独立下载页或网盘地址。',
  '整站不依赖服务端，构建后的 dist 目录可以直接作为静态资源发布。',
];

const betaNotes = [
  'Flutter Beta 界面延续当前深色流光主题，方便两端品牌统一。',
  '移动端导航自动折叠为顶栏与抽屉，避免左侧 rail 挤压主内容。',
  '下载区和实验区可以后续接入真实链接，不影响现阶段静态展示。',
];

function SectionFrame({ eyebrow, title, description, children }) {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="overline"
          sx={{
            color: 'primary.light',
            letterSpacing: '0.22em',
          }}
        >
          {eyebrow}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mt: 1.2,
            maxWidth: 820,
            fontSize: { xs: '2.35rem', md: '3.25rem' },
            lineHeight: 0.96,
          }}
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              maxWidth: 720,
              color: 'text.secondary',
              fontSize: { xs: '0.98rem', md: '1.06rem' },
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
      {children}
    </Stack>
  );
}

export function HomeSection({ onSelect }) {
  return (
    <SectionFrame
      eyebrow="KIGTTS STUDIO"
      title="让 KIGTTS 在桌面与移动端都保持同一种冷静、明亮、可触达的节奏。"
      description="主界面延续你给的版式方向：左侧是主视觉和设备截图，右侧聚焦品牌、下载入口与实验版 CTA。整个首屏保持低照度黑绿基底，再用缓慢流光把注意力推向产品。"
    >
      <Grid container spacing={{ xs: 3, lg: 4 }} alignItems="stretch">
        <Grid size={{ xs: 12, lg: 7 }}>
          <Card
            sx={{
              minHeight: { xs: 380, md: 540 },
              overflow: 'hidden',
              position: 'relative',
              borderRadius: { xs: 5, md: 7 },
            }}
          >
            <Box
              component="img"
              src={heroShot}
              alt="KIGTTS 产品主视觉"
              sx={{
                width: '100%',
                height: '100%',
                minHeight: { xs: 380, md: 540 },
                objectFit: 'cover',
                objectPosition: { xs: '42% center', md: 'center center' },
                filter: 'saturate(1.05) contrast(1.02)',
              }}
            />
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{
                position: 'absolute',
                top: { xs: 18, md: 24 },
                left: { xs: 18, md: 24 },
                right: { xs: 18, md: 24 },
              }}
            >
              {featureChips.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    color: '#f5fbfb',
                    backgroundColor: alpha('#071314', 0.72),
                    backdropFilter: 'blur(18px)',
                  }}
                />
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Stack spacing={3.2} sx={{ height: '100%' }}>
            <Card
              sx={{
                borderRadius: { xs: 5, md: 7 },
                backgroundColor: alpha('#8de8ea', 0.84),
                color: '#082527',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 3.4 } }}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 600, maxWidth: 280 }}>
                    尝试由 Flutter 构建的 Beta 版本
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon />}
                    onClick={() => onSelect('lab')}
                    sx={{
                      alignSelf: 'flex-start',
                      background: 'linear-gradient(135deg, #03777b 0%, #0a9498 100%)',
                    }}
                  >
                    前往 Beta 页面
                  </Button>
                </Stack>
              </CardContent>
            </Card>
            <Card
              sx={{
                flex: 1,
                borderRadius: { xs: 5, md: 7 },
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Stack spacing={2.2}>
                  <Box
                    component="img"
                    src={lhtstudioLogo}
                    alt="LHT Studio"
                    sx={{
                      width: { xs: 160, md: 190 },
                      opacity: 0.92,
                    }}
                  />
                  <Box
                    component="img"
                    src={logoWhite}
                    alt="KIGTTS"
                    sx={{
                      width: { xs: '70%', sm: '58%', xl: '76%' },
                      maxWidth: 420,
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 500,
                      color: alpha('#f5fbfb', 0.94),
                      fontSize: { xs: '1.4rem', md: '2rem' },
                    }}
                  >
                    变娃交流无阻碍
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      maxWidth: 520,
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    展示页采用相对路径打包，适合直接发布为 GitHub Pages。当前 CTA
                    已留出 APK、训练器和实验版入口位，后续只需要替换链接常量即可。
                  </Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<AndroidRoundedIcon />}
                      onClick={() => onSelect('download')}
                    >
                      下载 APK
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<LaptopMacRoundedIcon />}
                      onClick={() => onSelect('download')}
                    >
                      下载训练器
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </SectionFrame>
  );
}

export function AboutSection() {
  return (
    <SectionFrame
      eyebrow="MD2 STYLE"
      title="这是 MD2 风格的介绍页，保留大留白和高对比信息块，让内容自己发声。"
      description="这一页刻意比首页更克制：把视觉能量收回到中央信息面板，只留下少量说明、特性与设计原则，适合放产品概念、使用流程或者版本说明。"
    >
      <Card
        sx={{
          minHeight: { xs: 460, md: 600 },
          borderRadius: { xs: 5, md: 7 },
          overflow: 'hidden',
        }}
      >
        <CardContent
          sx={{
            p: { xs: 3, md: 5 },
            height: '100%',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
            gap: { xs: 4, lg: 5 },
            alignItems: 'stretch',
          }}
        >
          <Stack justifyContent="space-between" spacing={3}>
            <Stack spacing={2.5}>
              <Typography
                variant="h3"
                sx={{
                  maxWidth: 720,
                  lineHeight: 1.08,
                  fontSize: { xs: '1.9rem', md: '2.8rem' },
                }}
              >
                把复杂交互收进同一块沉稳平面里，让品牌、功能和入口保持同一套视觉语言。
              </Typography>
              <Typography
                variant="body1"
                sx={{ maxWidth: 640, color: 'text.secondary', lineHeight: 1.9 }}
              >
                MD2 页面不再重复首页的大图，而是把视觉重心落在内容容器本身。适合补充说明：
                功能定位、设备形态、字幕流与训练器关系，或者未来 Beta 规划。
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
              {['单一主面板', '高留白', '统一色温', '弱装饰强层级'].map((item) => (
                <Chip key={item} label={item} />
              ))}
            </Stack>
          </Stack>
          <Card
            sx={{
              borderRadius: 5,
              backgroundColor: alpha('#071314', 0.7),
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 3.5 }, height: '100%' }}>
              <Stack divider={<Divider flexItem />} spacing={3} sx={{ height: '100%' }}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.light' }}>
                    页面原则
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1.2, color: 'text.secondary' }}>
                    大面积深色承载信息，亮色只出现在关键动作、品牌线索和状态提示。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.light' }}>
                    交互动效
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1.2, color: 'text.secondary' }}>
                    流光缓慢漂移，鼠标光晕落在指针下沿，移动端则保留整体氛围但不依赖悬停。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.light' }}>
                    适配方式
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1.2, color: 'text.secondary' }}>
                    宽屏使用左侧 rail；当宽度不足或进入触控场景时，切到顶部栏和抽屉。
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </SectionFrame>
  );
}

export function DownloadSection({ onSelect }) {
  return (
    <SectionFrame
      eyebrow="DOWNLOAD HUB"
      title="下载区保留大按钮、明确步骤和静态托管说明，方便你后续直接接真实地址。"
      description="现在这页的按钮是静态入口位。你后续只要把按钮常量替换成正式 APK、训练器和 Beta 链接，不需要改布局。"
    >
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Card sx={{ borderRadius: { xs: 5, md: 7 } }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={3}>
                <Typography variant="h4" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                  静态部署准备已经就位
                </Typography>
                <Stack spacing={2.2}>
                  {installSteps.map((item, index) => (
                    <Box key={item} sx={{ display: 'flex', gap: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          width: 34,
                          flexShrink: 0,
                          color: 'primary.light',
                          fontFamily: '"Space Grotesk", "Noto Sans SC", sans-serif',
                        }}
                      >
                        0{index + 1}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={() => onSelect('lab')}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  查看实验版入口
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Stack spacing={2.5}>
            <Card sx={{ borderRadius: 5 }}>
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2.2}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <QrCode2RoundedIcon color="primary" />
                    <Typography variant="h6">扫码位 / 下载二维码</Typography>
                  </Stack>
                  <Box
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      minHeight: 210,
                      borderRadius: 4,
                      background: `
                        linear-gradient(135deg, ${alpha('#ffffff', 0.04)} 0%, ${alpha(
                          '#038387',
                          0.22,
                        )} 100%)
                      `,
                      border: `1px solid ${alpha('#f5fbfb', 0.08)}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={logoWhite}
                      alt="KIGTTS Logo"
                      sx={{ width: '74%', maxWidth: 210, opacity: 0.96 }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    当前仓库没有二维码素材，所以先用品牌标记占位；后续替换为正式二维码即可。
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Button fullWidth variant="contained" startIcon={<AndroidRoundedIcon />}>
                  APK 下载位
                </Button>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button fullWidth variant="outlined" startIcon={<LaptopMacRoundedIcon />}>
                  训练器下载位
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </SectionFrame>
  );
}

export function LabSection() {
  return (
    <SectionFrame
      eyebrow="BETA FLOW"
      title="实验页专门留给 Flutter Beta 或后续功能试验，页面更偏状态提示与路线图。"
      description="这一屏把 Beta、设计动机和接下来可扩展的位置集中到一起，适合承接外链、版本说明或单独的实验下载入口。"
    >
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Card
            sx={{
              minHeight: { xs: 380, md: 460 },
              borderRadius: { xs: 5, md: 7 },
              overflow: 'hidden',
              position: 'relative',
              background: `
                linear-gradient(160deg, ${alpha('#071314', 0.84)} 0%, ${alpha(
                  '#038387',
                  0.22,
                )} 100%)
              `,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Stack spacing={3.5} sx={{ height: '100%', justifyContent: 'space-between' }}>
                <Box>
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <RocketLaunchRoundedIcon color="primary" />
                    <Typography variant="overline" sx={{ color: 'primary.light' }}>
                      Flutter Beta
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h3"
                    sx={{
                      mt: 2,
                      maxWidth: 680,
                      fontSize: { xs: '1.9rem', md: '2.8rem' },
                      lineHeight: 1.04,
                    }}
                  >
                    保持品牌一致，但允许 Beta 页面更强调状态、实验与功能探索。
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {betaNotes.map((item) => (
                    <Grid key={item} size={{ xs: 12, md: 4 }}>
                      <Card
                        sx={{
                          height: '100%',
                          borderRadius: 4,
                          backgroundColor: alpha('#091617', 0.72),
                        }}
                      >
                        <CardContent sx={{ p: 2.5 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            {item}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Card sx={{ borderRadius: { xs: 5, md: 7 }, height: '100%' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Stack spacing={3.2} sx={{ height: '100%' }}>
                <Typography variant="h5">下一步可继续接入</Typography>
                <Stack spacing={2.2} divider={<Divider flexItem />}>
                  <Box>
                    <Typography variant="subtitle1">真实下载链接</Typography>
                    <Typography variant="body2" sx={{ mt: 0.8, color: 'text.secondary' }}>
                      用正式 URL 替换常量后，按钮即可变成可发布入口。
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">更多素材位</Typography>
                    <Typography variant="body2" sx={{ mt: 0.8, color: 'text.secondary' }}>
                      现在只使用了主视觉 PNG 和两个 Logo，新增立绘或二维码后可以继续往这套布局里扩。
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Hash 导航</Typography>
                    <Typography variant="body2" sx={{ mt: 0.8, color: 'text.secondary' }}>
                      当前 tab 会同步到 URL hash，静态站部署后也能直接分享具体页面视图。
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SectionFrame>
  );
}
