import { Button, buttonVariants, semanticColorTokens } from './index'
import './App.css'

function App() {
  return (
    <main className="showcase">
      <header className="showcase__header">
        <p className="showcase__eyebrow">Mofi foundations · v0.1</p>
        <h1>A small, explicit design system.</h1>
        <p>Figma-aligned tokens and production React components, documented and tested in Storybook.</p>
        <Button onClick={() => window.open('/storybook-static/index.html', '_self')}>Open Storybook build</Button>
      </header>

      <section className="showcase__section">
        <div>
          <p className="showcase__eyebrow">Foundation</p>
          <h2>Semantic colors</h2>
        </div>
        <div className="showcase__colors">
          {semanticColorTokens.map((token) => (
            <article key={token.name}>
              <div style={{ background: `var(${token.cssVariable})` }} />
              <strong>{token.name}</strong>
              <code>{token.cssVariable}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase__section">
        <div>
          <p className="showcase__eyebrow">Component</p>
          <h2>Button</h2>
        </div>
        <div className="showcase__buttons">
          {buttonVariants.map((variant) => <Button key={variant} variant={variant}>{variant}</Button>)}
        </div>
      </section>
    </main>
  )
}

export default App
