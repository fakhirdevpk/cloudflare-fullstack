# fullstack-cloudflare-astro

A frontend style-as-you-want template built with Astro and Svelte, set up for Cloudflare.

> [!WARNING]
> ## 🚧 Backend not finished
>
> **The backend still has to be added. This project is unfinished.**
>
> Right now only the frontend exists. Anything that needs a server will not work yet:
>
> - Form submissions have no endpoint to send to
> - There is no database or storage
> - There is no authentication
> - The API routes (Hono) are not wired up
> - Undocumented
> - Codebase has yet to be refactored
> - 
> Do not use this in production until the backend is done.

## Stack

| Tool | Used for |
|---|---|
| [Astro](https://astro.build) | Pages and static components |
| [Svelte 5](https://svelte.dev) | Interactive components (forms, counter) |
| [Sass](https://sass-lang.com) | Styling (indented `.sass` syntax) |
| [Zod](https://zod.dev) | Form validation |
| [TypeScript](https://www.typescriptlang.org) | Types, kept in `src/ts/types` |
| [Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) | Deployment target |
| [Hono](https://hono.dev) | Planned API layer |

## Requirements

- **Node.js**: the version listed under `engines` in `package.json`
- **Bun** (optional): works as a drop-in replacement for npm

## Getting started

Clone the repo, then install the dependencies. `node_modules` is not included in the repo, so this step is required after every clone.

### With Bun

```bash
bun install
bun run dev
```

### With npm

```bash
npm install
npm run dev
```

The dev server starts at **http://localhost:4321**.

## Scripts

| Purpose | Bun | npm |
|---|---|---|
| Install dependencies | `bun install` | `npm install` |
| Start dev server | `bun run dev` | `npm run dev` |
| Build for production | `bun run build` | `npm run build` |
| Preview the build | `bun run preview` | `npm run preview` |
| Run the Astro CLI | `bunx astro ...` | `npx astro ...` |
| Expose dev server with ngrok | `bun run tunnel` | `npm run tunnel` |

Examples with the Astro CLI:

```bash
bunx astro check    # or: npx astro check
bunx astro add svelte    # or: npx astro add svelte
```

`tunnel` needs [ngrok](https://ngrok.com) installed and signed in on your machine, and the URL in the script is tied to one account. Change it in `package.json` to use your own.

## Project structure

```
src/
  components/    Astro and Svelte components
  pages/         Routes
  styles/        Sass files (partials hold shared mixins)
  ts/
    types/       Shared TypeScript types, one file per area
```

Folders may change while the project is unfinished.

## Troubleshooting

**`command not found: astro`**
Dependencies are not installed. Run `bun install` or `npm install` in the project folder.

**Sass: "Declarations may only be used within style rules"**
In the indented `.sass` syntax, indentation defines nesting. A mixin or property at column 1 sits outside any selector, so indent it under one.

**Svelte: `Cannot use namespace 'Astro' as a value`**
`Astro.props` only exists in `.astro` files. In a `.svelte` file, use `$props()`.

## Status

- [x] Frontend components
- [x] Form validation with Zod
- [ ] **Backend (not started)**
- [ ] Deployment guide

## License

[MIT](LICENSE) © 2026 Fakhir Ali