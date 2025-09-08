# Tokyo Curated — Next.js + Vercel + GitHub Previews

Dark, minimal landing page with an intake modal. Built with Next.js (App Router), Tailwind, and framer-motion.

## Local dev
```bash
npm i
npm run dev
```

## Deploy on Vercel (with GitHub previews)
1. Create a new GitHub repo and push this project.
2. In Vercel, **Import Project** → choose the repo (install the Vercel GitHub App if asked).
3. Framework: Next.js. Build command: `next build`. Output: `.vercel/output` (automatic).
4. Enable **Preview Deployments for Git** so every PR gets its own URL + GitHub PR comment.
5. (Optional) Add environment variables in Vercel (Preview vs Production scopes).

## CI
A lightweight GitHub Actions workflow runs typecheck, lint, and build.
