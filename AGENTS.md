# Agent guide: ParyatechOS design system

This repository is the code source of truth. Before generating product UI, read `design-system.json` and `src/components/componentMetadata.ts`.

## Rules

1. Import public APIs from `src/index.ts`.
2. Use semantic `--pt-*` variables in components. Primitive tokens only define semantic aliases.
3. Colour semantics support Light and Dark modes. Use the Figma aliases documented in `src/tokens/tokenMetadata.ts`; never invent mode values inside components.
4. Use `Button` for actions and anchors for navigation.
5. Preserve keyboard focus, disabled, loading and accessible-name behavior.
6. Add or update a Storybook story and component metadata whenever an API changes.
7. Keep rate-card fields visible in a single row. Do not add row expanders to hide operational data.
8. A blank price is missing, not zero or complimentary. Use a named `PriceCell` state.
9. Run `npm run check` and `npm run test-storybook` before handoff.

## Source traceability

- Visual source: `Paryatech Design System.dc.html`
- Colour source: PRD Figma file `2uayhHpYDyrue0XL4o2Zwt`
- Implementation tokens: `src/tokens/colors.css`
- Token metadata: `src/tokens/tokenMetadata.ts`
- Component APIs: `src/components/components.tsx`
- Component contracts: `src/components/componentMetadata.ts`
- Runnable examples: `src/**/*.stories.tsx`
