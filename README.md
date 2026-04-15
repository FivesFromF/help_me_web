# HelpMe Web

This repo is the Next.js web project for HelpMe.

Right now it is only initialized as a clean starter app.
Later, this repo can hold both:

- the public landing page
- the admin dashboard

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## What Was Initialized

This project was created with:

```bash
npx.cmd create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

That means:

- App Router is enabled
- source files live under `src/`
- npm is the package manager for this repo
- path alias `@/*` points into `src/*`

## Setup

Make sure Node.js is installed first.

Recommended:

- Node.js 22+
- npm 10+

Then follow these steps exactly:

1. Clone the repo to your machine.
2. Open a terminal in the project folder.
3. Install dependencies.
4. Start the local development server.
5. Open the app in your browser.

```bash
git clone <repo-url>
cd help_me_web
npm install
npm run dev
```

After that, open:

```text
http://localhost:3000
```

If you are using PowerShell on Windows and `npm` is blocked, use `npm.cmd` instead:

```bash
npm.cmd install
npm.cmd run dev
```

## Setup For A Teammate

If your friend just cloned the repo and wants to run it as fast as possible:

1. Install Node.js.
2. Clone the repo.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

Quick version:

```bash
git clone <repo-url>
cd help_me_web
npm install
npm run dev
```

PowerShell version:

```bash
git clone <repo-url>
cd help_me_web
npm.cmd install
npm.cmd run dev
```

## What To Expect

- The app starts on port `3000` by default.
- The starter home page is in `src/app/page.tsx`.
- Changes save automatically and the browser refreshes during development.

## If Something Fails

- If `npm` does not work in PowerShell, use `npm.cmd`.
- If dependencies look broken, delete `node_modules` and run install again.
- If port `3000` is busy, Next.js may offer another port automatically.
- If the app does not open by itself, copy `http://localhost:3000` into your browser manually.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

Windows fallback:

```bash
npm.cmd run lint
npm.cmd run build
```

## Main Files

- `src/app/page.tsx`: home page
- `src/app/layout.tsx`: root layout
- `src/app/globals.css`: global styles
- `package.json`: scripts and dependencies

## Notes For Teammates

- This repo is only bootstrapped for now; the landing page and admin UI are not implemented yet.
- Keep landing and admin in the same Next.js repo unless the team later decides they need separate deployments.
- A small local adjustment was made so the starter does not depend on fetching Google fonts during build in this environment.

## Git Ignore

The generated `.gitignore` is good for this project.
It already ignores the important Next.js and local-only files, including:

- `node_modules`
- `.next`
- `out`
- `.env*`
- logs
- build artifacts

## Next Step

When the team is ready, the usual first product structure would be:

- `/` for the landing page
- `/admin` for the admin dashboard
