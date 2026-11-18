# Design system: Holstein

The design is cow-themed: playful, but modern and professional. Black and white carry it like the patches on a Holstein's hide, and blue is the accent. Dark mode flips the hide to a black field with white spots.

All tokens live in [`src/styles/tokens.css`](../src/styles/tokens.css). Components use the semantic tokens (`--color-fg`, `--color-accent`, …) and never raw hex values.

## Color

| Role                   | Token                  | Light             | Dark      |
| ---------------------- | ---------------------- | ----------------- | --------- |
| Background             | `--color-bg`           | Milk `#FAFAF7`    | `#0E0E0F` |
| Surface (cards)        | `--color-surface`      | `#FFFFFF`         | `#1A1A1C` |
| Text                   | `--color-fg`           | Ink `#0E0E0F`     | `#FAFAF7` |
| Muted text             | `--color-fg-muted`     | `#55565B`         | `#A3A4A9` |
| Border                 | `--color-border`       | `#E3E3DE`         | `#2C2C30` |
| Spots (decorative ink) | `--color-spot`         | `#0E0E0F`         | `#FAFAF7` |
| Accent                 | `--color-accent`       | Sky `#2563EB`     | `#6B9BFF` |
| Accent hover           | `--color-accent-hover` | `#1D4ED8`         | `#93B4FF` |
| Text on accent         | `--color-on-accent`    | `#FFFFFF`         | `#0E0E0F` |
| Accent soft            | `--color-accent-soft`  | `#E6EEFF`         | `#16233F` |
| Playful highlight      | `--color-pink`         | Muzzle `#F4A3B5`  | `#E88AA0` |
| Pink soft              | `--color-pink-soft`    | `#FDE8EE`         | `#3A1F27` |
| Success                | `--color-success`      | Pasture `#2F9E44` | `#51CF66` |
| Warning                | `--color-warning`      | Hay `#E8B931`     | `#F5C84C` |
| Danger                 | `--color-danger`       | Barn `#D9480F`    | `#FF7A45` |

### Usage rules

- **Black and white do most of the work.** Most surfaces are milk and ink.
- **Blue means interactive:** links, focus rings, and primary buttons. Don't use blue for decoration.
- **Pink is for delight, and used sparingly:** text selection, tag chips, small hover moments. Never use it for body text.
- Status colors (success, warning, danger) appear only for real status.
- Every text/background pair must meet WCAG AA (4.5:1 for body text, 3:1 for large text and UI). Pink and warning are not text colors on milk; use them as fills behind ink text.

## Typography

| Token            | Family                     | Use                                 |
| ---------------- | -------------------------- | ----------------------------------- |
| `--font-display` | Bricolage Grotesque (var.) | Headings, wordmark, hero            |
| `--font-body`    | Inter (var.)               | Body copy, UI                       |
| `--font-mono`    | JetBrains Mono (var.)      | Code, dates, small uppercase labels |

The type scale is fluid with `clamp()`: `--text-xs`, `--text-sm`, `--text-base`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-4xl`. Headings use `--leading-tight` and slightly negative tracking. Body text uses `--leading-normal`, and the reading width is `--measure: 68ch`.

## Space, shape, depth, motion

- **Spacing:** a 4px scale. `--space-1` is 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-6` 24px, `--space-8` 32px, `--space-12` 48px, `--space-16` 64px, `--space-24` 96px.
- **Radii:** `--radius-sm` (6px), `--radius-md` (12px), `--radius-lg` (20px), `--radius-pill`, and `--radius-blob` (an organic, spot-shaped radius for avatars and accents).
- **Shadow:** `--shadow-sticker` is a crisp offset ink shadow with no blur, used on cards and buttons for a playful "sticker" look. Hover nudges the element up and the shadow grows.
- **Motion:** `--duration-fast` (120ms), `--duration-base` (200ms), and `--ease-out`. When `prefers-reduced-motion` is set, all transitions and animations are disabled.

## Brand motifs

- **Spots** (`<Spots seed={n} />`): organic blob shapes in `--color-spot`, generated from a seed so the same seed always renders the same spots. Uses: the hero backdrop, section dividers, post headers. Keep them at the edges and never behind body text.
- **Logo:** the "cow.dev" wordmark in the display font, with the dot in accent blue and a spot mark beside it. `public/favicon.svg` is the spot mark.
- **Theme:** follows the system setting by default and can be overridden with the header toggle. The choice is stored in `localStorage` and applied before paint as `data-theme` on `<html>`.

## Accessibility baseline

- Visible focus: a 2px accent outline with a 2px offset on every interactive element.
- A skip link to `#main`.
- Decorative SVGs are `aria-hidden="true"`.
- Hit targets are at least 40px.
- Pages work without JavaScript; the only thing lost is the theme toggle.
