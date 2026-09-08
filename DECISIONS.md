# Design-system decisions

## DS-001 — HTML specification is the visual source

- Status: accepted
- Decision: the supplied ParyatechOS HTML specification replaces the previous starter tokens and Button set.
- Reason: it defines the complete visual language and operational patterns requested for the platform.

## DS-002 — Flat operational rate cards

- Status: accepted
- Decision: `RateCardTable` renders one visible row per product or priced combination. Price components remain visible columns.
- Reason: important accommodation and visa facts must not be hidden inside a row dropdown.

## DS-003 — Named price outcomes

- Status: accepted
- Decision: a price cell is one of `entered`, `included`, `complimentary`, `on-request`, `not-offered` or `missing`.
- Reason: zero, unavailable and unknown are operationally different and must not collapse into a blank cell.

## DS-004 — Installed icon and font assets

- Status: accepted
- Decision: use Lucide React for the source's rounded outline icon style and bundle Onest, Public Sans and JetBrains Mono with Fontsource.
- Reason: avoids handcrafted approximations and keeps Storybook faithful without external font requests.
