# Personal website

Personal site for **Muraleekrishna Gopinathan, PhD** — Senior AI/ML Scientist & Data Engineer.

Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Editing content

**Almost everything lives in one file: [`src/data/profile.ts`](src/data/profile.ts).**

You do not need to touch any component to change the site content:

| What                | What to edit                                        |
| ------------------- | --------------------------------------------------- |
| Name, role, summary | `profile`                                            |
| Email, GitHub, LinkedIn, CV | `profile.links`                             |
| Work history        | `experience`                                         |
| Publications        | `publications`                                       |
| Degrees             | `education`                                          |
| Skill tags          | `skillGroups`, `achievements`                         |
| Project cards       | `featuredProjects` (hand-written), `fallbackProjects` |

Colours, spacing and typography are CSS custom properties in
[`src/app/globals.css`](src/app/globals.css) under the `:root` and `.dark`
blocks — change `--accent` there to rebrand the whole site.

## GitHub projects

`src/components/projects.tsx` renders two groups:

1. **Selected projects** — the hand-written, curated list in
   `featuredProjects`. These appear first and are never overwritten.
2. **More from GitHub** — fetched live at build time by
   [`src/lib/github.ts`](src/lib/github.ts), which pulls your public,
   non-forked, non-archived repositories and caches them for 24 hours.

If the GitHub API is unreachable or rate-limited at build time, the fetch
fails silently and the static `fallbackProjects` list is shown instead — the
build never breaks because of a remote outage.

To show different repositories, change `LIMIT` in `src/lib/github.ts`, or
exclude names by adding them to the `featuredNames` filter in
`src/components/projects.tsx`.

## Contact channels

The cards in the Contact section come from the `channels` array at the top of
`src/components/contact.tsx` — add or remove entries there. Each needs a
`label`, a display `value`, an `href`, and an icon from
`src/components/icons.tsx`. Links starting with `http` automatically open in a
new tab; `mailto:` and `tel:` links stay in place.

## Theming

Light and dark themes are both supported. The visitor's choice is stored in
`localStorage` under the `theme` key and applied before first paint by
`src/components/theme-script.tsx`, so there is no flash of the wrong theme.
The initial default follows the operating system preference.

## Deploying

**Vercel** — import the repository; the defaults work with no configuration.

**GitHub Pages** — this is a fully static site. For a `user.github.io`
repository:

```bash
npm i -D @vercel/ncc
```

or, more simply, set `output: "export"` in `next.config.ts`, then:

```bash
npm run build
```

The static site is generated into `out/`. Note that `output: "export"`
disables the 24-hour GitHub cache, so repos are fetched on every build instead.

Before deploying, update `metadataBase` and the `openGraph.url` value in
`src/app/layout.tsx` to your real domain.
