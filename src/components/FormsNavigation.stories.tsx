import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Download, Filter } from 'lucide-react'
import { Breadcrumbs, Button, Checkbox, IconButton, Input, Pagination, SearchField, SegmentedControl, Select, Tabs, Toolbar } from './components'
import './Components.stories.css'

const meta = { title: 'Components/Forms & Navigation', parameters: { layout: 'padded' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const FormControls: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>Fields</h2><div className="ds-form-grid"><Input label="Traveller name" placeholder="Enter full name" /><Select label="Role" defaultValue="owner"><option value="owner">Owner</option><option value="admin">Admin</option><option value="member">Member</option></Select><Input label="Passport number" defaultValue="N1234567" hint="Match the passport exactly" /><Input label="Reference" error="Reference already exists" defaultValue="VIS-2048" /></div></section><section className="ds-story__section"><h2>Search</h2><SearchField placeholder="Search traveller or document" /><SearchField size="global" placeholder="Search rate cards, properties, room types" /></section><section className="ds-story__section"><h2>Checkbox states</h2><div className="ds-story__row"><Checkbox label="Unchecked" /><Checkbox label="Checked" defaultChecked /><Checkbox label="Indeterminate" indeterminate /><Checkbox label="Disabled" disabled /></div></section></div>,
}

export const SelectionControls: Story = {
  render: function SelectionStory() { const [role, setRole] = useState('admin'); const [tab, setTab] = useState('products'); return <div className="ds-story"><section className="ds-story__section"><h2>Segmented control</h2><SegmentedControl label="Permission role" value={role} onChange={setRole} options={[{ label: 'Owner', value: 'owner' }, { label: 'Admin', value: 'admin' }, { label: 'Member', value: 'member' }]} /></section><section className="ds-story__section"><h2>Tabs</h2><p>Counts mean items requiring action, never totals.</p><Tabs value={tab} onChange={setTab} items={[{ id: 'coverage', label: 'Coverage', count: 1 }, { id: 'products', label: 'Visa products', count: 27 }, { id: 'services', label: 'Vendor services' }, { id: 'finance', label: 'Financial rules' }]} /></section></div> },
}

export const BreadcrumbAndPagination: Story = {
  render: function NavigationStory() { const [page, setPage] = useState(1); return <div className="ds-story"><Breadcrumbs items={[{ label: 'Operations', href: '#' }, { label: 'Bookings', href: '#' }, { label: 'XYZ Family · Dubai' }]} /><div className="ds-pagination-row"><span className="ds-story__mono">Showing 1–3 of 42 documents</span><Pagination page={page} pageCount={3} onChange={setPage} /></div></div> },
}

export const StandardToolbar: Story = {
  render: () => <div className="ds-story__toolbar"><Toolbar search={<SearchField placeholder="Search traveller or document" />} filters={<IconButton label="Filters" icon={<Filter />} active />} secondaryAction={<Button variant="secondary" leadingIcon={<Download />}>Export</Button>} primaryAction={<Button>Request documents</Button>} /></div>,
}
