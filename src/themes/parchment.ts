import { Theme } from './types';

// Aged manuscript - literary, sepia, ink-like text
export const parchment: Theme = {
  id: 'parchment',
  name: 'Parchment',
  
  bg: '#f5f0e6',
  bgAlt: '#e8e2d6',
  
  textPrimary: '#1a1410',
  textSecondary: 'rgba(26, 20, 16, 0.8)',
  textMuted: 'rgba(60, 45, 30, 0.7)',
  
  accent: '#7c3415',
  accentMuted: 'rgba(124, 52, 21, 0.35)',
  accentGlow: 'rgba(124, 52, 21, 0.2)',
  
  borderDefault: 'rgba(124, 52, 21, 0.4)',
  borderHover: '#9a4a23',
  
  statusSeed: '#92400e',
  statusGrowing: '#a3520f',
  statusLive: '#7c2d12',
  
  selectionBg: 'rgba(139, 69, 19, 0.2)',
  selectionText: '#1a1410',
  
  effects: {
    scanlines: false,
    vignette: true,
    noise: true,
    glow: false,
    texture: 'paper',
  },
};
