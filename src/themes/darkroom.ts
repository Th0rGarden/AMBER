import { Theme } from './types';

// Photography darkroom - deep red safelight, intimate, secretive
export const darkroom: Theme = {
  id: 'darkroom',
  name: 'Darkroom',
  
  bg: '#0c0506',
  bgAlt: '#140809',
  
  textPrimary: '#ffcaca',
  textSecondary: 'rgba(255, 202, 202, 0.85)',
  textMuted: 'rgba(255, 180, 180, 0.6)',
  
  accent: '#ef4444',
  accentMuted: 'rgba(239, 68, 68, 0.45)',
  accentGlow: 'rgba(248, 113, 113, 0.5)',
  
  borderDefault: 'rgba(239, 68, 68, 0.4)',
  borderHover: '#f87171',
  
  statusSeed: '#dc2626',
  statusGrowing: '#ef4444',
  statusLive: '#fca5a5',
  
  selectionBg: 'rgba(220, 38, 38, 0.3)',
  selectionText: '#fecaca',
  
  effects: {
    scanlines: false,
    vignette: true,
    glow: true,
  },
};
