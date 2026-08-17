# Design-system decisions

## DS-001 — Destructive button label contrast

- Status: accepted
- Figma source: Button component set `71:228`
- Decision: keep the approved destructive fill `#DB5461`, but use `text/foreground` for the resting label. On hover, the darker `#C14A55` fill uses white.
- Reason: white on the resting fill measures 3.85:1, below WCAG AA's 4.5:1 requirement for 14px text. Storybook's axe test enforces this contract.
- Follow-up: update the Figma destructive variants when the component library can be edited and published.
