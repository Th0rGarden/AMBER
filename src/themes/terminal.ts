import { Theme } from './types';

export const terminal: Theme = {
  id: 'terminal',
  name: 'Terminal',
  
  bg: '#0a0a0b',
  bgAlt: '#111112',
  
  textPrimary: '#fff5e0',
  textSecondary: 'rgba(255, 245, 224, 0.85)',
  textMuted: 'rgba(255, 245, 224, 0.55)',
  
  accent: '#f59e0b',
  accentMuted: 'rgba(245, 158, 11, 0.4)',
  accentGlow: 'rgba(245, 158, 11, 0.5)',
  
  borderDefault: 'rgba(245, 158, 11, 0.35)',
  borderHover: '#f59e0b',
  
  statusSeed: '#b45309',
  statusGrowing: '#d97706',
  statusLive: '#fbbf24',
  
  selectionBg: 'rgba(245, 158, 11, 0.3)',
  selectionText: '#fef3c7',
  
  effects: {
    scanlines: true,
    vignette: true,
    glow: true,
  },
};
