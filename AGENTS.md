# Agents — Serbia Marketplace

This file provides guidance for AI coding agents (GitHub Copilot, Codex, etc.) working in this repository.

## Project Overview

**Serbia Marketplace** is an open marketplace platform for Serbia built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack & Conventions

| Area | Choice |
|------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Node.js | 20+ |
| Package manager | npm |

## Directory Structure

```
src/app/          — Pages and layouts (App Router)
src/components/   — Reusable React components (create this directory)
src/lib/          — Utility functions and helpers (create this directory)
src/types/        — Shared TypeScript types/interfaces (create this directory)
public/           — Static assets (images, fonts)
```

## Coding Conventions

- Use **TypeScript** with strict mode; avoid `any`.
- Use **functional React components** with explicit return types.
- Name component files using **PascalCase** (e.g., `ProductCard.tsx`).
- Name utility/lib files using **camelCase** (e.g., `formatPrice.ts`).
- Use **Tailwind CSS** utility classes for all styling; avoid custom CSS unless necessary.
- Place page-level components in `src/app/` following the Next.js App Router file conventions.
- Place shared UI components in `src/components/`.
- Place API route handlers in `src/app/api/`.
- Use **`export default`** for page and layout components; use **named exports** for all other modules.
- Prefer **`async` Server Components** for data fetching.
- Use **`"use client"`** directive only when browser APIs or React hooks are needed.

## Build & Test Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
```

## Environment Variables

All secrets and configuration go in `.env.local` (not committed). See `.env.example` for the list of required variables.

## Feature Areas to Build

The marketplace needs the following core features (suggested implementation order):

1. **Product listings** — browse, search, and filter items for sale
2. **Product detail page** — images, description, price, seller info
3. **User authentication** — sign up / sign in (consider NextAuth.js)
4. **Seller dashboard** — create, edit, and manage listings
5. **Shopping cart** — add/remove items, view totals
6. **Checkout flow** — address, payment method (consider Stripe)
7. **Categories** — hierarchical product categories
8. **Localisation** — Serbian (sr) and English (en) language support

When implementing a new feature, create the relevant files under `src/app/`, `src/components/`, `src/lib/`, and `src/types/` as appropriate.
