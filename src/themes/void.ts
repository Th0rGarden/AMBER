import { Theme } from './types';

// Cosmic void - ultra minimal, deep purples, infinite space
export const void_: Theme = {
  id: 'void',
  name: 'Void',
  
  bg: '#0a0910',
  bgAlt: '#100e1a',
  
  textPrimary: '#e8e4f5',
  textSecondary: 'rgba(232, 228, 245, 0.85)',
  textMuted: 'rgba(210, 200, 240, 0.6)',
  
  accent: '#a855f7',
  accentMuted: 'rgba(168, 85, 247, 0.4)',
  accentGlow: 'rgba(192, 132, 252, 0.5)',
  
  borderDefault: 'rgba(168, 85, 247, 0.4)',
  borderHover: '#c084fc',
  
  statusSeed: '#9333ea',
  statusGrowing: '#a855f7',
  statusLive: '#d8b4fe',
  
  selectionBg: 'rgba(168, 85, 247, 0.3)',
  selectionText: '#e9d5ff',
  
  effects: {
    scanlines: false,
    vignette: true,
    noise: false,
    glow: true,
  },
};
