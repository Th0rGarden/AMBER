import { Theme } from './types';

// Architectural blueprint - technical precision, chalk on blue
export const blueprint: Theme = {
  id: 'blueprint',
  name: 'Blueprint',
  
  bg: '#0a1628',
  bgAlt: '#0f2340',
  
  textPrimary: '#e0eaff',
  textSecondary: 'rgba(224, 234, 255, 0.85)',
  textMuted: 'rgba(200, 220, 255, 0.6)',
  
  accent: '#60a5fa',
  accentMuted: 'rgba(96, 165, 250, 0.4)',
  accentGlow: 'rgba(96, 165, 250, 0.5)',
  
  borderDefault: 'rgba(96, 165, 250, 0.4)',
  borderHover: '#93c5fd',
  
  statusSeed: '#3b82f6',
  statusGrowing: '#60a5fa',
  statusLive: '#bfdbfe',
  
  selectionBg: 'rgba(96, 165, 250, 0.3)',
  selectionText: '#dbeafe',
  
  effects: {
    scanlines: false,
    vignette: false,
    noise: true,
    glow: false,
    texture: 'grid',
  },
};
