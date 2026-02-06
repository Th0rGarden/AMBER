# SPARQ — Idea Tracker

A minimal, theme-switchable idea tracker built with React, TypeScript, and Tailwind CSS. Features multiple aesthetic themes and smooth transitions.

## Features

- 🎨 **7 Unique Themes**: Blueprint, Darkroom, Parchment, Phosphor, Terminal, Void, and more
- ⚡ **Fast & Lightweight**: Built with Vite for optimal performance
- 🎭 **Visual Effects**: Ambient theme-specific effects and animations
- 📱 **Responsive Design**: Works seamlessly across devices
- 🔄 **Smooth Transitions**: Elegant theme switching with CSS transitions

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **GitHub Pages** - Deployment

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd minimal-amber-idea-tracker

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Effects.tsx   # Theme-specific visual effects
│   ├── IdeaRow.tsx   # Individual idea display
│   └── ThemeSwitcher.tsx
├── context/          # React context providers
│   └── ThemeContext.tsx
├── data/             # Static data
│   └── ideas.json    # Ideas list
├── themes/           # Theme definitions
│   ├── blueprint.ts
│   ├── darkroom.ts
│   ├── parchment.ts
│   ├── phosphor.ts
│   ├── terminal.ts
│   ├── void.ts
│   └── types.ts
└── utils/            # Utility functions
    └── cn.ts         # Class name merger
```

## Deployment

### Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment to GitHub Pages:

1. **Make your changes** to the code
2. **Commit and push** to the `main` branch:
   ```bash
   git add -A
   git commit -m "feat: your change description"
   git push origin main
   ```
3. **GitHub Actions automatically**:
   - Builds the project
   - Deploys to GitHub Pages
   - Site updates at: `https://<username>.github.io/AMBER/`

The workflow runs on every push to `main` or can be triggered manually from the Actions tab.

### Manual Deployment (Alternative)

If you need to deploy manually:

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch.

## Adding Ideas

Edit `src/data/ideas.json`:

```json
{
  "ideas": [
    {
      "id": 1,
      "title": "Your Idea Title",
      "description": "Brief description",
      "status": "seed"
    }
  ]
}
```

**Status options**: `seed`, `growing`, `live`

## Creating Custom Themes

1. Create a new file in `src/themes/` (e.g., `mytheme.ts`)
2. Define your theme following the `Theme` type:

```typescript
import { Theme } from './types';

export const mytheme: Theme = {
  name: 'My Theme',
  bg: '#000000',
  text: '#ffffff',
  textMuted: '#888888',
  accent: '#ff0000',
  borderDefault: '#333333',
  borderMuted: '#222222',
  statusSeed: '#ffaa00',
  statusGrowing: '#00ff00',
  statusLive: '#00aaff',
};
```

3. Export it from `src/themes/index.ts`
4. Add it to the themes array in `ThemeContext.tsx`

## Configuration

### Base Path

The site is configured to deploy to `/AMBER/` subdirectory. To change this, update `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-path/' : '/',
```

### GitHub Pages Setup

Ensure GitHub Pages is enabled in your repository settings:
- Settings → Pages → Source: GitHub Actions

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
