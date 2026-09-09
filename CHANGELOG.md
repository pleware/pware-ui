# Changelog

## Unreleased

- Add shadcn `base-nova` primitives: Badge, Card, Table. Card ships without a
  drop shadow so hairline surfaces stay the house default.
- ThemeSwitcher and LanguageSwitcher accept `aria-label`. Bare navbar chrome
  previously fell back to the English names "Theme" and "Language" with no way
  to translate them short of rendering a visible label.
- Add Tabs (`base-nova` / Base UI) for in-page switching — used by comparison
  matrices that collapse to one column on small screens.

## 0.1.0 — 2026-09-07

- First public cut: shadcn `base-nova` primitives (Button, Select, Dialog),
  SimpleSelect, parameterized ThemeSwitcher and LanguageSwitcher, cookie
  helpers, default semantic tokens.
