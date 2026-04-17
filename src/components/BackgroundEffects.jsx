import { Box } from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import { useEffect } from 'react';

const driftPrimary = keyframes`
  0% {
    transform: translate3d(-8%, -6%, 0) scale(1);
  }
  50% {
    transform: translate3d(6%, 2%, 0) scale(1.08);
  }
  100% {
    transform: translate3d(12%, 8%, 0) scale(1.02);
  }
`;

const driftSecondary = keyframes`
  0% {
    transform: translate3d(10%, 6%, 0) scale(1.08);
  }
  50% {
    transform: translate3d(-2%, -4%, 0) scale(1);
  }
  100% {
    transform: translate3d(-10%, -10%, 0) scale(1.1);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    transform: translate3d(-4%, 2%, 0) rotate(5deg);
    opacity: 0.55;
  }
`;

export function BackgroundEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const current = {
      x: window.innerWidth * 0.7,
      y: window.innerHeight * 0.82,
    };
    const target = { ...current };
    let rafId = 0;

    const updateGlow = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      root.style.setProperty('--glow-x', `${current.x}px`);
      root.style.setProperty('--glow-y', `${current.y}px`);
      rafId = window.requestAnimationFrame(updateGlow);
    };

    const handlePointerMove = (event) => {
      target.x = event.clientX;
      target.y = Math.min(window.innerHeight - 36, event.clientY + 110);
    };

    const handleResize = () => {
      target.x = Math.min(target.x, window.innerWidth - 24);
      target.y = Math.min(target.y, window.innerHeight - 24);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    updateGlow();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -5,
          background:
            'linear-gradient(135deg, #03090a 0%, #051113 18%, #082426 54%, #061214 100%)',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          inset: '-12%',
          zIndex: -4,
          filter: 'blur(70px)',
          opacity: 0.95,
          background: `
            radial-gradient(circle at 20% 22%, ${alpha('#0fd5db', 0.22)} 0, transparent 24%),
            radial-gradient(circle at 82% 18%, ${alpha('#9cf0f2', 0.14)} 0, transparent 18%),
            radial-gradient(circle at 72% 70%, ${alpha('#038387', 0.22)} 0, transparent 24%),
            radial-gradient(circle at 12% 84%, ${alpha('#35a2a5', 0.14)} 0, transparent 18%)
          `,
          animation: `${driftPrimary} 28s ease-in-out infinite alternate`,
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          inset: '-18%',
          zIndex: -3,
          filter: 'blur(110px)',
          mixBlendMode: 'screen',
          opacity: 0.65,
          background: `
            conic-gradient(from 90deg at 50% 50%, transparent, ${alpha(
              '#6ae3e5',
              0.2,
            )}, transparent 40%, ${alpha('#038387', 0.18)}, transparent 75%)
          `,
          animation: `${driftSecondary} 34s ease-in-out infinite alternate`,
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          inset: '-20%',
          zIndex: -2,
          opacity: 0.38,
          background: `
            repeating-linear-gradient(
              118deg,
              transparent 0 16px,
              ${alpha('#ffffff', 0.018)} 16px 18px
            )
          `,
          animation: `${shimmer} 24s ease-in-out infinite alternate`,
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background: `
            radial-gradient(
              24rem 24rem at var(--glow-x) var(--glow-y),
              ${alpha('#0fd5db', 0.2)} 0,
              ${alpha('#038387', 0.12)} 36%,
              transparent 74%
            )
          `,
          transition: 'opacity 200ms ease',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.08,
          backgroundImage: `
            radial-gradient(circle at 10% 15%, rgba(255,255,255,0.18) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 45%, rgba(255,255,255,0.12) 0 1px, transparent 1px)
          `,
          backgroundSize: '7px 7px, 9px 9px',
        }}
      />
    </>
  );
}
