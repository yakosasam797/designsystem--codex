import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { referenceColorGroups, semanticColorGroups, semanticColorTokens, type SemanticColorToken } from '../tokens'
import '../components/Components.stories.css'

const meta = {
  title: 'Foundations/Colour',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: { description: { component: 'The code representation of the Paryatech Figma colour variables: reference palette → semantic aliases → component usage, with Light and Dark modes.' } },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

function Header({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="ds-colour-header"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></header>
}

function ModeSwatch({ token, mode }: { token: SemanticColorToken; mode: 'light' | 'dark' }) {
  const value = token[mode]
  return <div className="ds-mode-swatch" data-paryatech-theme={mode}><i style={{ background: `var(${token.cssVariable})` }} /><span><strong>{mode === 'light' ? 'Light' : 'Dark'}</strong><code>{value.value}</code><small>↳ {value.reference}</small></span></div>
}

function SemanticTable({ tokens }: { tokens: readonly SemanticColorToken[] }) {
  return <div className="ds-semantic-table"><div className="ds-semantic-table__head"><span>Semantic token</span><span>Light mode</span><span>Dark mode</span><span>Purpose</span></div>{tokens.map(token => <article className="ds-semantic-row" key={token.name}><div><strong>{token.name}</strong><code>{token.cssVariable}</code><span className="ds-token-scopes">{token.scopes.map(scope => <small key={scope}>{scope}</small>)}</span></div><ModeSwatch mode="light" token={token} /><ModeSwatch mode="dark" token={token} /><p>{token.description}</p></article>)}</div>
}

export const Overview: Story = {
  render: () => <div className="ds-colour-page"><Header eyebrow="Foundation · Colour" title="A semantic colour system, not a palette" description="Components ask for purpose—surface, text, border, action or status. Light and Dark modes then resolve that purpose to the correct reference colour." /><div className="ds-colour-stats"><article><strong>89</strong><span>Reference colours</span><p>Raw, reusable values hidden from component decisions.</p></article><article><strong>84</strong><span>Semantic tokens</span><p>Named by role and scoped to the properties they support.</p></article><article><strong>2</strong><span>Theme modes</span><p>Light and Dark share the same semantic contract.</p></article></div><section className="ds-colour-section"><h2>Architecture</h2><div className="ds-token-flow"><article><span>1</span><strong>Reference</strong><code>Color/Brand/700</code><p>Stable raw colour. Never consumed directly by components.</p></article><article><span>2</span><strong>Semantic</strong><code>Action/Primary/Background</code><p>Describes intent and aliases a reference in each mode.</p></article><article><span>3</span><strong>Component</strong><code>Button · Primary</code><p>Consumes meaning and changes theme without changing its API.</p></article></div></section><section className="ds-colour-section"><h2>Core rules</h2><div className="ds-colour-guidance"><article><strong>Teal is action</strong><p>Reserve filled teal for the required next step and interactive links.</p></article><article><strong>Rose is identity</strong><p>Use rose for selected navigation, avatars and personality—not general actions.</p></article><article><strong>Status is explicit</strong><p>Success, warning, danger, information and neutral each have background, border and foreground.</p></article><article><strong>No component hex</strong><p>Components consume semantic variables so Light and Dark remain centrally controlled.</p></article></div></section></div>,
}

export const ReferencePalette: Story = {
  render: () => <div className="ds-colour-page"><Header eyebrow="Tier 1 · Reference" title="Reference palette" description="The complete Figma Core colour inventory. These values provide stable building blocks; product components never select them directly." />{referenceColorGroups.map(group => <section className="ds-colour-section" key={group.name}><div className="ds-colour-section__intro"><h2>{group.name}</h2><p>{group.description}</p></div><div className="ds-reference-grid">{group.tokens.map(token => <article className="ds-reference-token" key={token.name}><i style={{ background: token.value }} /><div><strong>{token.name.replace('Color/', '')}</strong><code>{token.cssVariable}</code><span>{token.value}</span><p>{token.description}</p></div></article>)}</div></section>)}</div>,
}

export const SemanticTokens: Story = {
  render: () => <div className="ds-colour-page"><Header eyebrow="Tier 2 · Semantic" title="Semantic colour tokens" description="Every token keeps one name across themes and aliases a purpose-built Light and Dark reference value." />{semanticColorGroups.map(group => { const tokens = semanticColorTokens.filter(token => token.group === group); return <section className="ds-colour-section" key={group}><div className="ds-colour-section__intro"><h2>{group}</h2><p>{tokens.length} documented token{tokens.length === 1 ? '' : 's'} with mode-specific aliases.</p></div><SemanticTable tokens={tokens} /></section> })}</div>,
}

export const SurfaceSystem: Story = {
  render: () => { const tokens = semanticColorTokens.filter(token => token.group === 'Surface'); return <div className="ds-colour-page"><Header eyebrow="Semantic family" title="Surface hierarchy" description="Surfaces communicate depth and grouping. Canvas contains the screen; Default contains components; Sunken, Raised and Overlay communicate elevation or containment." /><div className="ds-surface-comparison"><section data-paryatech-theme="light"><header><strong>Light</strong><span>Warm and restrained</span></header>{tokens.map(token => <article key={token.name} style={{ '--preview-surface': `var(${token.cssVariable})` } as CSSProperties}><i /><div><strong>{token.name.replace('Surface/', '')}</strong><code>{token.light.value}</code><p>{token.description}</p></div></article>)}</section><section data-paryatech-theme="dark"><header><strong>Dark</strong><span>Elevation without pure black</span></header>{tokens.map(token => <article key={token.name} style={{ '--preview-surface': `var(${token.cssVariable})` } as CSSProperties}><i /><div><strong>{token.name.replace('Surface/', '')}</strong><code>{token.dark.value}</code><p>{token.description}</p></div></article>)}</section></div></div> },
}

export const StatusSystem: Story = {
  render: () => { const tokens = semanticColorTokens.filter(token => token.group === 'Status'); return <div className="ds-colour-page"><Header eyebrow="Semantic family" title="Status colours" description="Status families are complete three-part systems: background, border and foreground. A colour is never used alone to communicate state." /><SemanticTable tokens={tokens} /><div className="ds-do-dont"><article><span>Do</span><strong>Use status by meaning</strong><p>Verified uses Success. Requested uses Warning. Missing uses Danger. In review uses Information.</p></article><article><span>Don’t</span><strong>Use brand colour as status</strong><p>Teal indicates interaction and rose indicates identity; neither replaces a semantic status.</p></article></div></div> },
}

export const UsageGuidance: Story = {
  render: () => <div className="ds-colour-page"><Header eyebrow="Guidance" title="Choosing the right token" description="Start with what the colour means in the interface. Never choose a reference value because it merely looks close." /><div className="ds-usage-table"><div><strong>Need</strong><strong>Use</strong><strong>Avoid</strong></div><div><span>Page background</span><code>Surface/Canvas</code><span>Neutral/025 directly</span></div><div><span>Card, table or input</span><code>Surface/Default</code><span>White directly</span></div><div><span>Primary text</span><code>Text/Primary</code><span>Neutral/950 directly</span></div><div><span>Required next action</span><code>Action/Primary/*</code><span>Brand/700 directly</span></div><div><span>Selected navigation</span><code>Sidebar/Selected/*</code><span>Action colour</span></div><div><span>Validation error</span><code>Status/Danger/*</code><span>Accent pink</span></div><div><span>Keyboard focus</span><code>Border/Focused</code><span>Hover border</span></div></div><section className="ds-colour-section"><h2>Implementation rule</h2><div className="ds-code-example"><code>{`.booking-card {\n  background: var(--color-surface-default);\n  color: var(--color-text-primary);\n  border: 1px solid var(--color-border-default);\n}`}</code></div></section></div>,
}
