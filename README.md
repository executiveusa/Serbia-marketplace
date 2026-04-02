# Serbia Marketplace

**Open Market Serbia** — a modern, full-stack marketplace connecting buyers and sellers across Serbia.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: Node.js 20+

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm 10 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start (production)

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
└── app/              # Next.js App Router pages and layouts
    ├── layout.tsx    # Root layout (metadata, fonts)
    ├── page.tsx      # Home page
    └── globals.css   # Global styles
public/               # Static assets
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

## Contributing

See [AGENTS.md](./AGENTS.md) for coding conventions and guidance for AI agents working in this repo.
