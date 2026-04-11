# Devkitlab Next.js Template

A clean starter for building modern web apps with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- `next-themes` for light/dark mode
- ESLint + Prettier
- Husky + lint-staged

## Requirements

- Node.js `>= 18.17.0`
- Yarn `>= 1.22.0`

This template is Yarn-first. `npm`/`pnpm` are intentionally blocked by `preinstall`.

## Quick Start

```bash
yarn
yarn dev
```

Open `http://localhost:3000`.

## First 10 Minutes

1. Run the app locally:

```bash
yarn
yarn dev
```

2. Update page content in `app/(home)/page.tsx`.
3. Customize hero and sections in `app/(home)/sub-components/`.
4. Update app metadata in `app/layout.tsx`.
5. Run `yarn lint` before your first commit.

## Project Structure

```plaintext
app/
  layout.tsx                # Root layout
  provider.tsx              # Global providers (theme, smooth scroll)
  not-found.tsx             # 404 page
  global-error.tsx          # App-wide error boundary
  (home)/
    page.tsx                # Home route
    error.tsx               # Route-level error boundary
    sub-components/         # Home sections
  _layout/
    header.tsx
    footer.tsx

src/
  components/               # Reusable UI primitives
  utils/                    # helper functions
```

## Conventions

- Keep route UI in `app/`; keep reusable primitives in `src/components/`.
- Use `@/` alias imports from `tsconfig.json`.
- Prefer utility-first styling with Tailwind.
- Keep components small and composable.
- Maintain accessibility basics (`alt`, labels, semantic buttons).

## Add a New Home Section

1. Create a component in `app/(home)/sub-components/feature-section.tsx`.
2. Import it into `app/(home)/page.tsx`.
3. Render it where needed.

Example:

```tsx
import FeatureSection from './sub-components/feature-section';

const HomePage = () => (
  <>
    <HeroSection />
    <FeatureSection />
    <AnotherSection />
  </>
);
```

## Error Handling Rules

For App Router error boundaries:

- `app/(segment)/error.tsx` and `app/global-error.tsx` must be Client Components.
- `global-error.tsx` must include `<html>` and `<body>`.
- Use `reset()` to retry rendering.

## Scripts

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run ESLint
yarn format   # Run Prettier
```

## Common Mistakes

- Error boundary button does nothing.
  Use `reset()` instead of deprecated patterns.
- Lint fails after edits.
  Run `yarn lint` and fix warnings/errors before push.
- Styling conflicts in class names.
  Use `cn()` helper for safe Tailwind class merging.

## Recommended Before Push

```bash
yarn lint
yarn build
```
