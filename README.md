# @pleware/ui

Shared front-end chrome for **pware** products: Tailwind CSS 4 plus the
[shadcn/ui](https://ui.shadcn.com/) catalogue (`base-nova`, Base UI).

This is not Tailwind Plus and not Catalyst. Paid Plus blocks (product
lists, checkout, full site templates) stay a copy-paste into the product
that needs them. MassTrade apps are not consumers.

## What is in here

- Primitives: `Button`, `Select`, `Dialog`
- `SimpleSelect` — one-line picker over Select
- `ThemeSwitcher` / `LanguageSwitcher` — chrome only; the app owns the
  option list and cookie name
- `cookieAssignment` / `readCookieValue` / `applyDocumentTheme`
- `tokens.css` — default shadcn colour names; override per brand

Add more primitives with `npx shadcn@latest add` from this repo.

## Install

```sh
npm install github:pleware/pware-ui
```

Peer: React 19. The app already has Tailwind 4 (`@tailwindcss/vite`).

```css
@import 'tailwindcss';
@import '@pleware/ui/tokens.css';
@source '../node_modules/@pleware/ui/src/**/*.{ts,tsx}';
```

If you install from git, point `@source` at the resolved package path.

```tsx
import { ThemeSwitcher, applyDocumentTheme } from '@pleware/ui'

<ThemeSwitcher
  items={[
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ]}
  value={mode}
  onValueChange={(next) => {
    setMode(next)
    applyDocumentTheme(next === 'dark' ? 'dark' : 'light')
  }}
/>
```

initagent still ships `initagent/web/` for the hub and marketing site.
Cut over to this package when that product is ready; do not copy files
the other way.

## Licence

MIT. shadcn primitives stay MIT. Do not vendor Catalyst or other
Tailwind Plus source here.
