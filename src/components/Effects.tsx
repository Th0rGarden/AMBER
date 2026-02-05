import { useTheme } from '@/context/ThemeContext';

export function Effects() {
  const { theme } = useTheme();
  const { effects } = theme;

  return (
    <>
      {/* Scanlines */}
      {effects.scanlines && (
        <div
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 2px,
              rgba(0, 0, 0, 0.15) 4px
            )`,
          }}
        />
      )}

      {/* Vignette */}
      {effects.vignette && (
        <div
          className="pointer-events-none fixed inset-0 z-40"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      )}

      {/* Noise texture */}
      {effects.noise && (
        <div
          className="pointer-events-none fixed inset-0 z-30 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Grid texture for blueprint */}
      {effects.texture === 'grid' && (
        <div
          className="pointer-events-none fixed inset-0 z-30 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(${theme.accent} 1px, transparent 1px),
              linear-gradient(90deg, ${theme.accent} 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      )}

      {/* Paper texture for parchment */}
      {effects.texture === 'paper' && (
        <div
          className="pointer-events-none fixed inset-0 z-30 opacity-[0.4]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </>
  );
}
