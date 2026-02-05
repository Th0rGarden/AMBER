import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-200"
        style={{ 
          color: theme.textMuted,
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = theme.accent}
        onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
      >
        {theme.name}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div 
            className="absolute right-0 top-full mt-3 z-50 min-w-[140px] py-2 border"
            style={{
              backgroundColor: theme.bgAlt,
              borderColor: theme.borderDefault,
            }}
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-200 flex items-center gap-3"
                style={{
                  color: t.id === theme.id ? theme.accent : theme.textSecondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accentMuted;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: t.accent }}
                />
                {t.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
