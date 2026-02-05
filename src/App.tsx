import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Effects } from '@/components/Effects';
import { IdeaRow } from '@/components/IdeaRow';
import ideasData from './data/ideas.json';

type Status = 'seed' | 'growing' | 'live';

interface Idea {
  id: number;
  title: string;
  description: string;
  status: Status;
}

function AppContent() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    setIdeas(ideasData.ideas as Idea[]);
  }, []);

  return (
    <div 
      className="relative min-h-screen font-mono transition-colors duration-500"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Effects layer */}
      <Effects />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-8 py-16">
        {/* Header */}
        <header className="mb-16 flex items-start justify-between">
          <div>
            <h1 
              className="font-mono text-2xl font-normal tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              SPARQ
            </h1>
            <p 
              className="mt-2 font-mono text-xs tracking-[0.15em]"
              style={{ color: theme.textMuted }}
            >
              IDEA TRACKER
            </p>
          </div>
          
          <ThemeSwitcher />
        </header>

        {/* Ideas list */}
        <main className="space-y-0">
          {ideas.map((idea, index) => (
            <IdeaRow key={idea.id} idea={idea} index={index} />
          ))}
        </main>

        {/* Footer */}
        <footer 
          className="mt-20 pt-8"
          style={{ borderTop: `1px solid ${theme.borderDefault}` }}
        >
          <div 
            className="flex items-center justify-between font-mono text-xs"
            style={{ color: theme.textMuted }}
          >
            <span>{ideas.length} ideas tracked</span>
            <span className="tracking-[0.1em]">v1.0</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
