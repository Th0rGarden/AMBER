export interface Theme {
  id: string;
  name: string;
  
  // Core colors
  bg: string;
  bgAlt: string;
  
  // Text
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  
  // Accent
  accent: string;
  accentMuted: string;
  accentGlow: string;
  
  // Borders
  borderDefault: string;
  borderHover: string;
  
  // Status variations (opacity modifiers)
  statusSeed: string;
  statusGrowing: string;
  statusLive: string;
  
  // Selection
  selectionBg: string;
  selectionText: string;
  
  // Effects
  effects: {
    scanlines?: boolean;
    vignette?: boolean;
    noise?: boolean;
    glow?: boolean;
    texture?: string;
  };
}
