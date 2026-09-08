import { useState } from 'react'
import { Bell, BookOpen, Box, CheckCircle2, ChevronDown, Command, Filter, LayoutGrid, Menu as MenuIcon, Settings, Sparkles, TableProperties, Type } from 'lucide-react'
import { Button, CountBadge, IconButton, RateCardTable, SearchField, StatusBadge, Tabs } from './index'
import './App.css'

const sections = [
  { id: 'foundations', label: 'Foundations', icon: <Sparkles /> },
  { id: 'typography', label: 'Typography', icon: <Type /> },
  { id: 'components', label: 'Components', icon: <Box /> },
  { id: 'tables', label: 'Operational tables', icon: <TableProperties /> },
]

function App() {
  const [activeTab, setActiveTab] = useState('rate-card')
  const [navOpen, setNavOpen] = useState(false)
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="catalogue-shell">
      <aside className={navOpen ? 'is-open' : undefined}>
        <div className="catalogue-brand"><span><Command size={18} /></span><div><strong>ParyatechOS</strong><small>Design system · v1.0</small></div></div>
        <nav aria-label="Design system sections">{sections.map((item, index) => <a className={index === 2 ? 'is-active' : ''} href={`#${item.id}`} key={item.id}><span>{item.icon}</span>{item.label}</a>)}</nav>
        <div className="catalogue-aside-footer"><StatusBadge tone="success">Production ready</StatusBadge><p>React 19 · TypeScript · Storybook</p></div>
      </aside>

      <main>
        <header className="catalogue-topbar"><button className="catalogue-menu" type="button" aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)}><MenuIcon /></button><SearchField size="global" placeholder="Search tokens, components, patterns" /><div className="catalogue-topbar__actions"><IconButton label="Notifications" icon={<Bell />} active /><IconButton label="Settings" icon={<Settings />} /></div></header>

        <div className="catalogue-content">
          <section className="catalogue-hero" id="foundations"><div><div className="catalogue-kicker">Paryatech operations platform</div><h1>One system for dense, serious work.</h1><p>The production React library rebuilt from the approved ParyatechOS HTML specification—tokens, components, states and operational patterns.</p><div className="catalogue-hero__actions"><Button onClick={() => goTo('components')} leadingIcon={<BookOpen />}>Browse components</Button><Button onClick={() => goTo('tables')} variant="secondary" leadingIcon={<LayoutGrid />}>View table patterns</Button></div></div><div className="catalogue-hero__meta"><div><span>Components</span><strong>19</strong></div><div><span>Token tiers</span><strong>3</strong></div><div><span>Theme</span><strong>Light</strong></div><div><span>A11y</span><strong><CheckCircle2 /> AA</strong></div></div></section>

          <section className="catalogue-section" id="typography"><div className="catalogue-section__title"><div><span className="catalogue-overline">Foundations</span><h2>Purposeful visual language</h2><p>Onest for hierarchy, Public Sans for interface copy, and JetBrains Mono for exact operational data.</p></div></div><div className="catalogue-principles"><article><span>01</span><strong>One teal action</strong><p>Filled teal is reserved for the required next step, so urgency stays legible.</p></article><article><span>02</span><strong>Visible data</strong><p>Important rate-card facts stay in the row. Nothing operational is hidden by default.</p></article><article><span>03</span><strong>Named states</strong><p>Missing, included, complimentary, on request and not offered are never ambiguous.</p></article></div></section>

          <section className="catalogue-section" id="components"><div className="catalogue-section__title"><div><span className="catalogue-overline">Components</span><h2>Interaction primitives</h2></div><Button variant="tertiary">View all 19</Button></div><div className="catalogue-components"><article><div className="catalogue-card-title"><strong>Buttons</strong><CountBadge>5</CountBadge></div><div className="catalogue-demo-row"><Button>Save</Button><Button variant="secondary">View</Button><Button variant="tertiary">Add service</Button><Button variant="ghost">Clear</Button></div></article><article><div className="catalogue-card-title"><strong>Status</strong><CountBadge>5</CountBadge></div><div className="catalogue-demo-row"><StatusBadge tone="success">Active</StatusBadge><StatusBadge tone="warning">Due soon</StatusBadge><StatusBadge tone="danger">Blocked</StatusBadge><StatusBadge tone="info">In review</StatusBadge></div></article></div></section>

          <section className="catalogue-section" id="tables"><div className="catalogue-section__title"><div><span className="catalogue-overline">Operational pattern</span><h2>Flat rate-card table</h2><p>One row per product. Named price states. No nested row dropdowns.</p></div><IconButton label="Filter products" icon={<Filter />} active /></div><Tabs value={activeTab} onChange={setActiveTab} items={[{ id: 'coverage', label: 'Coverage', count: 1 }, { id: 'rate-card', label: 'Visa products', count: 2 }, { id: 'services', label: 'Vendor services' }, { id: 'finance', label: 'Financial rules' }]} /><div className="catalogue-rate-table"><RateCardTable selector={<Button variant="secondary" trailingIcon={<ChevronDown />}>UAE · Apply from India</Button>} actions={<Button variant="secondary">Import source</Button>} onAdd={() => undefined} columns={[{ id: 'government', label: 'Government fee' }, { id: 'centre', label: 'Visa-centre fee' }, { id: 'vendor', label: 'Vendor fee' }, { id: 'payable', label: 'Payable via vendor' }]} rows={[{ id: 'adult', title: 'Tourist · 30-day · Adult', subtitle: 'Single entry · Standard · 4–6 working days', facts: ['Indian passport', 'stay as granted'], prices: { government: { amount: '3,500', taxLabel: 'Pass-through' }, centre: { amount: '1,200', taxLabel: 'At appointment' }, vendor: { amount: '2,360', taxLabel: 'incl. ₹360 tax' }, payable: { amount: '5,860', taxLabel: 'Collected by vendor' } } }, { id: 'child', title: 'Tourist · 30-day · Child', subtitle: 'Single entry · Standard · 4–6 working days', facts: ['Indian passport', 'under 18'], prices: { government: { amount: '2,500', taxLabel: 'Pass-through' }, centre: { state: 'included' }, vendor: { amount: '1,770', taxLabel: 'incl. ₹270 tax' }, payable: { amount: '4,270', taxLabel: 'Collected by vendor' } } }]} /></div></section>
        </div>
      </main>
    </div>
  )
}

export default App
