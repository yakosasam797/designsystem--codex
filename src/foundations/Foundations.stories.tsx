import type { Meta, StoryObj } from '@storybook/react-vite'
import { designSystemMetadata, semanticColorTokens } from '../tokens'
import '../components/Components.stories.css'

const meta = { title: 'Foundations/ParyatechOS', parameters: { layout: 'padded' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const SemanticColors: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>Semantic colors</h2><p>Components consume these aliases; primitives stay inside the token layer.</p><div className="ds-token-grid">{semanticColorTokens.map(token => <article className="ds-token" key={token.name}><div className="ds-token__swatch" style={{ background: `var(${token.cssVariable})` }} /><div className="ds-token__body"><strong>{token.name}</strong><code>{token.cssVariable}</code><span>{token.role}</span></div></article>)}</div></section></div>,
}

export const Typography: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>Typography</h2><p>Onest carries hierarchy, Public Sans carries interface copy, and JetBrains Mono carries exact data.</p><div className="ds-story__card"><span style={{ font: 'var(--pt-type-page-title)' }}>Accommodation tariff · 2026–27</span><span style={{ font: 'var(--pt-type-heading-lg)' }}>Manage margin</span><span style={{ font: 'var(--pt-type-heading-md)' }}>Finance summary</span><span style={{ font: 'var(--pt-type-body-md)' }}>Processing times are estimates and do not guarantee approval.</span><span style={{ font: 'var(--pt-type-overline)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Government fee</span><span style={{ font: 'var(--pt-type-data-md)' }}>₹ 1,20,000 · RC-2026-0114</span></div></section></div>,
}

export const DesignRules: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>{designSystemMetadata.name} contracts</h2><div className="ds-story__grid">{Object.entries(designSystemMetadata.rules).map(([name, rule]) => <article className="ds-story__card" key={name}><strong>{name}</strong><span>{rule}</span></article>)}</div></section></div>,
}
