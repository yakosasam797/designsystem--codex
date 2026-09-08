import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontal, Search } from 'lucide-react'
import { Avatar, Button, DataPair, DataTable, EmptyState, IconButton, LoadingState, Pagination, RateCardTable, StatusBadge, SummaryPanel } from './components'
import './Components.stories.css'

const meta = { title: 'Components/Data Display', parameters: { layout: 'padded' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type DocumentRow = { id: string; initials: string; tone: 'teal' | 'pink' | 'amber'; who: string; role: string; document: string; detail: string; state: 'Verified' | 'Due soon' | 'Missing'; action: string }
const documents: DocumentRow[] = [
  { id: '1', initials: 'AK', tone: 'teal', who: 'Amit Kumar', role: 'Primary traveller', document: 'Passport', detail: 'Expires 18 Nov 2029', state: 'Verified', action: 'View' },
  { id: '2', initials: 'PS', tone: 'pink', who: 'Priya Shah', role: 'Adult', document: 'Bank statement', detail: 'Last 6 months · 1 file', state: 'Due soon', action: 'Remind' },
  { id: '3', initials: 'RK', tone: 'amber', who: 'Riya Kumar', role: 'Child · 8 yrs', document: 'Birth certificate', detail: 'Not received', state: 'Missing', action: 'Request' },
]

export const TravellerDocuments: Story = {
  render: function DocumentTableStory() {
    const [selected, setSelected] = useState<string[]>([])
    const [page, setPage] = useState(1)
    return <div className="ds-story"><section className="ds-story__section"><h2>Traveller documents</h2><p>Title stays outside the table. Secondary values are folded under the primary cell to preserve the six-column budget.</p><DataTable rows={documents} getRowId={row => row.id} selectedIds={selected} onSelectionChange={setSelected} columns={[
      { id: 'traveller', header: 'Traveller', width: 'minmax(210px, 1.25fr)', cell: row => <div className="ds-story__row" style={{ flexWrap: 'nowrap' }}><Avatar size="sm" initials={row.initials} name={row.who} tone={row.tone} /><DataPair primary={row.who} secondary={row.role} /></div> },
      { id: 'document', header: 'Document', width: 'minmax(220px, 1.4fr)', cell: row => <DataPair primary={row.document} secondary={row.detail} /> },
      { id: 'status', header: 'Status', width: '150px', cell: row => <StatusBadge tone={row.state === 'Verified' ? 'success' : row.state === 'Due soon' ? 'warning' : 'danger'}>{row.state}</StatusBadge> },
      { id: 'actions', header: 'Action', width: '150px', cell: row => <div className="ds-story__row" style={{ flexWrap: 'nowrap', gap: 7 }}><Button size="sm" variant={row.action === 'Request' ? 'primary' : 'secondary'}>{row.action}</Button><IconButton label={`More actions for ${row.who}`} treatment="row" icon={<MoreHorizontal />} /></div> },
    ]} bulkActions={<><Button size="sm" variant="ghost">Export</Button><Button size="sm" variant="secondary">Resend</Button><Button size="sm" variant="ghost" onClick={() => setSelected([])}>Clear</Button></>} footer={<><span className="ds-story__mono">Showing 1–3 of 42 documents</span><Pagination page={page} pageCount={2} onChange={setPage} /></>} /></section></div>
  },
}

export const FinanceSummary: Story = {
  render: () => <SummaryPanel title="Finance summary" metrics={[{ label: 'Supplier cost', value: '₹ 92,400', note: '7 service lines' }, { label: 'Customer total', value: '₹ 1,20,000', note: 'Tax included' }, { label: 'Gross margin', value: '₹ 27,600', note: '23%', tone: 'success' }, { label: 'Payment due', value: '₹ 48,000', note: 'Due today', tone: 'warning' }, { label: 'Paid', value: '₹ 72,000', note: '3 receipts', tone: 'success' }, { label: 'Refundable', value: '₹ 34,000', note: 'Before 12 Sep' }, { label: 'Overdue', value: '₹ 0', note: 'Nothing overdue' }, { label: 'Open items', value: '2', note: 'Needs review', tone: 'info' }]} />,
}

export const EmptyAndLoading: Story = {
  render: () => <div className="ds-story__grid"><div className="pt-table"><EmptyState icon={<Search />} title="No documents match this filter" description="Try a different filter or clear it to see everything." action={<Button size="sm" variant="secondary">Clear filter</Button>} /></div><LoadingState /></div>,
}

export const AccommodationRateCard: Story = {
  render: () => <RateCardTable selector={<Button variant="secondary">Season · Low</Button>} actions={<Button variant="secondary">Import source</Button>} onAdd={() => undefined} columns={[{ id: 'room', label: 'Room only' }, { id: 'breakfast', label: 'With breakfast' }, { id: 'halfboard', label: 'Breakfast + one meal' }, { id: 'fullboard', label: 'All meals' }]} rows={[
    { id: 'garden', title: 'Garden View', subtitle: 'Ground floor · 28 sqm', facts: ['2A included', 'max 3', 'per room/night'], prices: { room: { amount: '5,200', taxLabel: 'Tax included' }, breakfast: { amount: '6,000', taxLabel: 'Tax included' }, halfboard: { amount: '7,100', taxLabel: 'Tax included' }, fullboard: { amount: '8,400', taxLabel: 'Tax included' } } },
    { id: 'sea', title: 'Sea View', subtitle: 'Upper floors · 32 sqm', facts: ['2A included', 'max 3', 'per room/night'], prices: { room: { amount: '6,800', taxLabel: 'Tax included' }, breakfast: { amount: '7,600', taxLabel: 'Tax included' }, halfboard: { amount: '8,700', taxLabel: 'Tax included' }, fullboard: { amount: '10,000', taxLabel: 'Tax included' } } },
    { id: 'suite', title: 'Sea View Suite', subtitle: 'Separate living area · 48 sqm', facts: ['2A included', 'max 4', 'per room/night'], prices: { room: { amount: '11,500', taxLabel: 'Tax included' }, breakfast: { amount: '12,300', taxLabel: 'Tax included' }, halfboard: { amount: '13,400', taxLabel: 'Tax included' }, fullboard: { amount: '14,700', taxLabel: 'Tax included' } } },
  ]} />,
}

export const VisaRateCard: Story = {
  render: () => <RateCardTable selector={<Button variant="secondary">UAE · Apply from India</Button>} actions={<Button variant="secondary">Import source</Button>} onAdd={() => undefined} columns={[{ id: 'government', label: 'Government fee' }, { id: 'centre', label: 'Visa-centre fee' }, { id: 'vendor', label: 'Vendor fee' }, { id: 'payable', label: 'Payable via vendor' }]} rows={[
    { id: 'adult-standard', title: 'Tourist · 30-day · Adult', subtitle: 'Single entry · Standard · 4–6 working days', facts: ['Indian passport', 'stay as granted'], prices: { government: { amount: '3,500', taxLabel: 'Pass-through' }, centre: { amount: '1,200', taxLabel: 'At appointment' }, vendor: { amount: '2,360', taxLabel: 'incl. ₹360 tax' }, payable: { amount: '5,860', taxLabel: 'Collected by vendor' } } },
    { id: 'child-standard', title: 'Tourist · 30-day · Child', subtitle: 'Single entry · Standard · 4–6 working days', facts: ['Indian passport', 'under 18'], prices: { government: { amount: '2,500', taxLabel: 'Pass-through' }, centre: { state: 'included' }, vendor: { amount: '1,770', taxLabel: 'incl. ₹270 tax' }, payable: { amount: '4,270', taxLabel: 'Collected by vendor' } } },
    { id: 'adult-express', title: 'Tourist · 30-day · Adult', subtitle: 'Single entry · Express', facts: ['Indian passport', 'priority requested'], prices: { government: { amount: '3,500', taxLabel: 'Pass-through' }, centre: { state: 'on-request' }, vendor: { amount: '3,540', taxLabel: 'incl. ₹540 tax' }, payable: { state: 'missing' } } },
  ]} />,
}
