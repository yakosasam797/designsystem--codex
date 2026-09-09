# ParyatechOS design system

The production React implementation of the supplied `Paryatech Design System.dc.html` specification. It packages the approved tokens, typography, density, components, operational states and table patterns as reusable TypeScript APIs with Storybook documentation.

The colour foundation mirrors the PRD Figma variable system with 89 reference colours, 84 semantic tokens, and Light/Dark modes. Use the paintbrush control in the Storybook toolbar to switch modes.

## Start

```bash
npm install
npm run storybook
```

Storybook runs on port `6006`. The catalogue app runs with `npm run dev`.

## Public API

Import components and metadata from the package entrypoint:

```tsx
import { Button, RateCardTable, StatusBadge } from '@paryatech/design-system'
```

All product UI must consume semantic `--pt-*` tokens. Primitive color values exist only to define semantic aliases.

## Included

- Three-tier Light/Dark colour-token architecture
- Onest, Public Sans and JetBrains Mono font assets bundled locally
- Buttons, icon buttons, badges, chips, avatars and form controls
- Segmented controls, tabs, breadcrumbs and pagination
- Toolbars, selectable data tables, summary panels and operational states
- Accessible modal and menu presentation patterns
- Flat accommodation and visa rate-card tables with named non-price states

## Operational contracts

- Filled teal is the one required next action in a region.
- Table rows are at least 56px high; six visible columns is the default budget.
- Supporting values fold beneath primary values before a new column is added.
- Blank pricing means missing, never free.
- Rate-card products stay visible as complete rows; do not hide fee identity in row dropdowns.

Run `npm run check` and `npm run test-storybook` before review.
