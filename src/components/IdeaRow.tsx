import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

type Status = 'seed' | 'growing' | 'live';

interface Idea {
  id: number;
  title: string;
  description: string;
  status: Status;
}

function StatusIndicator({ status }: { status: Status }) {
  const { theme } = useTheme();
  
  const statusColors: Record<Status, string> = {
    seed: theme.statusSeed,
    growing: theme.statusGrowing,
    live: theme.statusLive,
  };

  return (
    <span 
      className="text-xs uppercase tracking-[0.2em] font-medium"
      style={{ color: statusColors[status] }}
    >
      {status}
    </span>
  );
}

export function IdeaRow({ idea, index }: { idea: Idea; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const number = String(index + 1).padStart(2, '0');

  const glowStyle = theme.effects.glow && isHovered
    ? { boxShadow: `0 0 12px 2px ${theme.accentGlow}` }
    : {};

  return (
    <div
      className="group relative py-6 pl-6 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left border with glow effect */}
      <div
        className="absolute left-0 top-0 h-full w-[2px] transition-all duration-300"
        style={{
          backgroundColor: isHovered ? theme.borderHover : theme.borderDefault,
          ...glowStyle,
        }}
      />

      <div className="flex items-baseline justify-between gap-8">
        <div className="flex items-baseline gap-6">
          {/* Number */}
          <span
            className="font-mono text-sm transition-colors duration-300"
            style={{
              color: isHovered ? theme.accent : theme.textMuted,
            }}
          >
            {number}
          </span>

          {/* Content */}
          <div className="space-y-1">
            <h2
              className="font-mono text-lg tracking-tight transition-colors duration-300"
              style={{
                color: isHovered ? theme.textPrimary : theme.textSecondary,
              }}
            >\
              {idea.title}
            </h2>
            <p 
              className="font-mono text-sm"
              style={{ color: theme.textMuted }}
            >
              {idea.description}
            </p>
          </div>
        </div>

        {/* Status */}
        <StatusIndicator status={idea.status} />
      </div>
    </div>
  );
}
