# Mofi design system

The code source of truth for Mofi foundations and components. The initial release mirrors the Paryatech Figma file's color variables and Button component set, then documents implementation details, usage, states, and accessibility in Storybook.

## Start

```bash
npm install
npm run storybook
```

Storybook runs at `http://localhost:6006`. Use `npm run build-storybook` for the static build and `npm run check` before review.

## Sources of truth

- CSS token values: `src/tokens/colors.css`
- Token meaning and Figma source IDs: `src/tokens/colorMetadata.ts`
- Component implementation: `src/components/Button/Button.tsx`
- Component usage contract: `src/components/Button/buttonMetadata.ts`
- Runnable examples and state matrix: `src/components/Button/Button.stories.tsx`
- Machine-readable index: `design-system.json`

Product code should import from `src/index.ts`. Components should consume semantic CSS variables such as `--mofi-color-action-primary`; primitive variables are reserved for defining semantics.

## Figma status

Source file: `VTqZIKqYuZ3o90hgC4Wi7C`. The Button component set is node `71:228`, key `7023d9b09986e43589dd610768b46541a6cd357e`, and is currently unpublished. The Figma file exposes Light mode only, so this repo does not invent a dark theme.

Code Connect activation requires the Figma component to be published and an eligible Organization or Enterprise plan/seat. Until then, the IDs above preserve traceability without claiming a live mapping.
