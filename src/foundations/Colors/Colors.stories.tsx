import type { Meta, StoryObj } from '@storybook/react-vite'
import { colorMetadata, primitiveColorGroups, semanticColorTokens } from '../../tokens'
import './Colors.css'

const meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component: `Mofi's color architecture mirrors Figma collections ${colorMetadata.figma.primitiveCollectionId} and ${colorMetadata.figma.semanticCollectionId}. Product UI should use semantic variables.`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SemanticTokens: Story = {
  render: () => (
    <section className="color-docs">
      <header className="color-docs__intro">
        <p className="color-docs__eyebrow">Preferred API</p>
        <h1>Semantic color tokens</h1>
        <p>{colorMetadata.policy.semantic} {colorMetadata.policy.themes}</p>
      </header>
      <div className="color-docs__semantic-grid">
        {semanticColorTokens.map((token) => (
          <article className="color-card" key={token.name}>
            <div className="color-card__swatch" style={{ background: `var(${token.cssVariable})` }} />
            <div className="color-card__body">
              <strong>{token.name}</strong>
              <code>{token.cssVariable}</code>
              <span>{token.value} · {token.aliasOf}</span>
              <p><b>Use for:</b> {token.useFor}</p>
              <p><b>Avoid:</b> {token.avoidFor}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  ),
}

export const PrimitivePalette: Story = {
  render: () => (
    <section className="color-docs">
      <header className="color-docs__intro">
        <p className="color-docs__eyebrow">Reference only</p>
        <h1>Primitive palette</h1>
        <p>{colorMetadata.policy.primitive}</p>
      </header>
      {primitiveColorGroups.map((group) => (
        <article className="color-family" key={group.family}>
          <div>
            <h2>{group.family}</h2>
            <p>{group.purpose}</p>
          </div>
          <div className="color-family__scale">
            {group.tokens.map((token) => (
              <div className="color-chip" key={token.name}>
                <div className="color-chip__swatch" style={{ background: `var(${token.cssVariable})` }} />
                <strong>{token.name}</strong>
                <span>{token.value}</span>
                <code>{token.cssVariable}</code>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  ),
}
