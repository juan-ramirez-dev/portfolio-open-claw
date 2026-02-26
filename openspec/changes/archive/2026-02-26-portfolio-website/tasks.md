# Tasks: Portfolio Website

## Phase 1: Infrastructure

- [x] 1.1 Initialize Next.js project with `npx create-next-app@latest` (TypeScript, App Router, Tailwind CSS)
- [x] 1.2 Configure Tailwind CSS 4 with CSS custom properties for theming in `tailwind.config.ts`
- [x] 1.3 Create `app/globals.css` with CSS variables for light/dark themes
- [x] 1.4 Create `lib/theme-script.ts` with blocking theme initialization script
- [x] 1.5 Create `app/layout.tsx` with theme script in `<head>` and proper meta tags

## Phase 2: Core Components

- [x] 2.1 Create `components/ThemeToggle.tsx` client component with sun/moon icons and toggle logic
- [x] 2.2 Create `components/Header.tsx` with navigation links and ThemeToggle integration
- [x] 2.3 Create `components/Hero.tsx` with name, title, subtitle, and CTA buttons
- [x] 2.4 Create `components/About.tsx` with personal introduction content
- [x] 2.5 Create `components/Skills.tsx` with categorized skills and visual indicators
- [x] 2.6 Create `components/Projects.tsx` with project cards grid
- [x] 2.7 Create `components/Contact.tsx` with contact information and social links
- [x] 2.8 Create `components/Footer.tsx` with copyright and links

## Phase 3: Integration

- [x] 3.1 Create `app/page.tsx` composing all section components
- [x] 3.2 Add smooth scroll behavior for navigation links
- [x] 3.3 Verify mobile responsive layout at 320px, 768px, and 1024px breakpoints
- [x] 3.4 Test theme toggle persistence across page reloads

## Phase 4: Polish & SEO

- [x] 4.1 Add Open Graph and Twitter meta tags in layout
- [x] 4.2 Add favicon and app icons to `public/`
- [x] 4.3 Run `npm run build` to verify production build succeeds
- [x] 4.4 Test Lighthouse scores for accessibility and performance

## Phase 5: Verification

- [x] 5.1 Verify Hero section displays correctly (Spec: Hero Section)
- [x] 5.2 Verify About section content renders (Spec: About Section)
- [x] 5.3 Verify Skills are organized by category (Spec: Skills Section)
- [x] 5.4 Verify Project cards show required info (Spec: Projects Section)
- [x] 5.5 Verify Contact section is accessible (Spec: Contact Section)
- [x] 5.6 Verify theme toggle works without flash (Spec: Theme Toggle)
- [x] 5.7 Verify responsive design across breakpoints (Spec: Responsive Design)
