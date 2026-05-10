# Serbia Marketplace - Frontend Structure

## Overview

The Serbia Marketplace has two separate frontends that can be built and run independently:

### 1. **Next.js App** (`/src`)
- **Location**: `/src` directory
- **Purpose**: Main React/Next.js application serving the public-facing marketplace
- **Entry Point**: `src/app/page.tsx` (home page)
- **Components**: Located in `src/components/`
- **Styling**: Tailwind CSS v4 with design tokens in `src/app/globals.css`
- **Build Command**: `npm run build`
- **Dev Command**: `npm run dev`
- **Zero Dependencies**: The frontend only requires the packages listed in `package.json` (Next.js, React, Tailwind CSS, TypeScript)

#### Key Components:
- **Hero.tsx** - Hero section with background image and call-to-actions
- **Features.tsx** - How it works section with feature cards

### 2. **Static Web Pages** (`/web`)
- **Location**: `/web` directory  
- **Purpose**: Legacy static HTML pages with vanilla JS (for reference or alternative deployment)
- **Structure**:
  - `/web/sr/` - Serbian home page
  - `/web/en/` - English home page
  - `/web/login/` - Login page
  - `/web/signup/` - Sign-up page
  - `/web/onboarding/` - Onboarding flows
  - `/web/dashboard/` - Dashboard pages
  - `/web/admin/` - Admin pages
  - `/web/static/` - Shared CSS and JS

**Note**: The static pages are not required for the Next.js build.

## Architecture

### Next.js Frontend
- **Component-based**: Each feature is a separate reusable component
- **No external dependencies**: Uses only the core libraries (React, Next.js, Tailwind CSS, TypeScript)
- **Design System**: Color variables defined in CSS custom properties (`:root`)
- **Responsive Design**: Mobile-first approach using Tailwind responsive prefixes

### Design Tokens
Colors are defined in `/src/app/globals.css`:
- `--bg`: Main background (#f6f1e8)
- `--surface`: Surface/card background (#fffaf2)
- `--text`: Primary text color (#22201c)
- `--muted`: Secondary text color (#5f5a52)
- `--soil`: Dark brown (#3b2c21)
- `--forest`: Dark green (#2f4a34)
- `--olive`: Olive green (#6f7757)
- `--gold`: Gold accent (#b58f52)
- `--line`: Border color (#d8cdb9)

## Building & Running

### Development
```bash
npm run dev
# Runs Next.js dev server at http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Creates optimized build and serves production version
```

### Testing Build without Starting Server
```bash
npm run build
# Only builds, doesn't start the dev/prod server
```

## Key Separation Benefits

1. **Independent Builds**: Each frontend can be built separately without dependencies on the other
2. **No Build Conflicts**: Changes to static pages don't trigger Next.js rebuilds
3. **Clear Ownership**: Each component is self-contained in the Next.js app
4. **Minimal Dependencies**: Frontend only needs React, Next.js, Tailwind CSS, and TypeScript
5. **Easy to Scale**: Add new pages/components without cluttering the structure

## Adding New Pages

1. Create a new file in `/src/app/` using the App Router pattern
2. Import and use components from `/src/components/`
3. Run `npm run build` to verify it builds correctly
4. Run `npm run dev` to test locally

## Adding New Components

1. Create a new file in `/src/components/`
2. Export a default React component
3. Import and use in your pages
4. All styling should use Tailwind classes and CSS custom properties from globals.css
