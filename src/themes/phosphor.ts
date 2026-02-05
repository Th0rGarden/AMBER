import { Theme } from './types';

// Green CRT phosphor glow - refined, not hacky
export const phosphor: Theme = {
  id: 'phosphor',
  name: 'Phosphor',
  
  bg: '#050a05',
  bgAlt: '#0a140a',
  
  textPrimary: '#c8ffc8',
  textSecondary: 'rgba(200, 255, 200, 0.85)',
  textMuted: 'rgba(180, 255, 180, 0.55)',
  
  accent: '#22c55e',
  accentMuted: 'rgba(34, 197, 94, 0.4)',
  accentGlow: 'rgba(74, 222, 128, 0.6)',
  
  borderDefault: 'rgba(34, 197, 94, 0.35)',
  borderHover: '#4ade80',
  
  statusSeed: '#16a34a',
  statusGrowing: '#22c55e',
  statusLive: '#86efac',
  
  selectionBg: 'rgba(34, 197, 94, 0.3)',
  selectionText: '#bbf7d0',
  
  effects: {
    scanlines: true,
    vignette: true,
    glow: true,
  },
};
