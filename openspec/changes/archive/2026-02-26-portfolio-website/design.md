# Design: Portfolio Website

## Technical Approach

Build a static portfolio site using Next.js 15 App Router with React 19 components. Use Tailwind CSS 4 for styling with CSS custom properties for theme switching. Implement a blocking inline script in the `<head>` to prevent theme flash on load. Use Server Components for static content and Client Components only for interactive elements (theme toggle, mobile menu).

## Architecture Decisions

### Decision: Next.js 15 App Router

**Choice**: Next.js 15 with App Router
**Alternatives considered**: Vite + React SPA, Gatsby, Plain HTML/CSS
**Rationale**: App Router provides excellent DX, built-in optimizations, and Server Components reduce client-side JS. Future-proof choice for potential dynamic features.

### Decision: Tailwind CSS 4

**Choice**: Tailwind CSS 4 with CSS custom properties for theming
**Alternatives considered**: CSS Modules, Styled Components, plain CSS
**Rationale**: Tailwind 4's new theming system with CSS variables is perfect for dark/light mode. Utility-first approach speeds up development.

### Decision: Theme Implementation

**Choice**: CSS custom properties + localStorage + blocking script
**Alternatives considered**: next-themes library, CSS class toggle only
**Rationale**: Custom implementation gives full control and avoids flash. Blocking script in `<head>` reads localStorage before paint.

### Decision: Component Structure

**Choice**: Single-page layout with section components
**Alternatives considered**: Multi-page routing
**Rationale**: Portfolio content fits naturally on one page. Smooth scroll navigation provides better UX than page transitions.

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        App Shell                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ ThemeProvider (Client Component)                     │    │
│  │   - Reads localStorage on mount                      │    │
│  │   - Listens to system preference changes             │    │
│  │   - Provides theme state to children                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                           │                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Header (Client Component - sticky)                   │    │
│  │   - Navigation links                                  │    │
│  │   - ThemeToggle button                                │    │
│  │   - Mobile menu                                       │    │
│  └─────────────────────────────────────────────────────┘    │
│                           │                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Main Content (Server Components)                     │    │
│  │   ┌─────────────────────────────────────────────┐    │    │
│  │   │ Hero Section                                 │    │    │
│  │   └─────────────────────────────────────────────┘    │    │
│  │   ┌─────────────────────────────────────────────┐    │    │
│  │   │ About Section                                │    │    │
│  │   └─────────────────────────────────────────────┘    │    │
│  │   ┌─────────────────────────────────────────────┐    │    │
│  │   │ Skills Section                               │    │    │
│  │   └─────────────────────────────────────────────┘    │    │
│  │   ┌─────────────────────────────────────────────┐    │    │
│  │   │ Projects Section                             │    │    │
│  │   └─────────────────────────────────────────────┘    │    │
│  │   ┌─────────────────────────────────────────────┐    │    │
│  │   │ Contact Section                              │    │    │
│  │   └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
│                           │                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Footer (Server Component)                            │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Create | Project dependencies and scripts |
| `next.config.ts` | Create | Next.js configuration |
| `tailwind.config.ts` | Create | Tailwind CSS configuration |
| `postcss.config.mjs` | Create | PostCSS configuration for Tailwind |
| `tsconfig.json` | Create | TypeScript configuration |
| `app/globals.css` | Create | Global styles and CSS variables |
| `app/layout.tsx` | Create | Root layout with theme script |
| `app/page.tsx` | Create | Main page composing all sections |
| `components/Header.tsx` | Create | Navigation header with theme toggle |
| `components/Hero.tsx` | Create | Hero section component |
| `components/About.tsx` | Create | About me section |
| `components/Skills.tsx` | Create | Skills showcase section |
| `components/Projects.tsx` | Create | Projects grid section |
| `components/Contact.tsx` | Create | Contact section |
| `components/Footer.tsx` | Create | Footer component |
| `components/ThemeToggle.tsx` | Create | Theme toggle button |
| `lib/theme-script.ts` | Create | Blocking theme script |
| `public/` | Create | Static assets folder |

## Interfaces / Contracts

### Theme State

```typescript
type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}
```

### Project Data

```typescript
interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
}
```

### Skill Data

```typescript
interface Skill {
  name: string
  level: number
  category: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Theme toggle logic | Jest/Vitest |
| Unit | Component rendering | React Testing Library |
| Integration | Theme persistence | localStorage mock |
| E2E | Full page flow | Playwright (optional) |
| Visual | Responsive layouts | Manual + browser dev tools |

## Migration / Rollout

No migration required. This is a greenfield project.

## Open Questions

- None - requirements are clear and scope is defined
