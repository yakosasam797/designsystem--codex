# Agent guide: Mofi design system

This repository is the code source of truth. Before generating UI, read `design-system.json`, then the metadata file for every token or component you use.

## Rules

1. Import public APIs from `src/index.ts`.
2. Use semantic color variables in product UI. Never replace a semantic token with a hex value.
3. Do not invent dark-mode values. Figma currently defines only Light mode.
4. Use `Button` for actions and an anchor for navigation. The `link` Button variant does not change HTML semantics.
5. Preserve keyboard focus, disabled, loading, and accessible-name behavior.
6. Add a Storybook story and metadata whenever a component API changes.
7. Run `npm run check` and `npm run test-storybook` before handing work off.

## Figma traceability

- File key: `VTqZIKqYuZ3o90hgC4Wi7C`
- Color documentation: `50:2`
- Primitive collection: `VariableCollectionId:56:2`
- Semantic collection: `VariableCollectionId:56:40`
- Button component set: `71:228`

Figma is currently unpublished and Code Connect cannot be activated on the connected plan. Do not describe the repo as live-connected until both conditions change.
