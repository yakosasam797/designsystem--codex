import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Menu, Modal } from './components'
import './Components.stories.css'

const meta = { title: 'Components/Overlays', parameters: { layout: 'padded' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const AnchoredMenu: Story = {
  render: function MenuStory() { const [selected, setSelected] = useState('all'); return <Menu label="Filter by traveller" selectedId={selected} onSelect={setSelected} items={[{ id: 'all', label: 'All travellers' }, { id: 'amit', label: 'Amit Kumar' }, { id: 'priya', label: 'Priya Shah' }]} /> },
}

export const ManageMarginModal: Story = {
  render: function ModalStory() { const [open, setOpen] = useState(false); return <div className="ds-modal-demo"><Button onClick={() => setOpen(true)}>Manage margin</Button><Modal open={open} eyebrow="Services & Vendors" title="Manage margin" onClose={() => setOpen(false)} footer={<><Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => setOpen(false)}>Save</Button></>}><div className="ds-story__card"><strong>Overall markup</strong><span>Apply one percentage to total supplier cost.</span></div></Modal></div> },
}
