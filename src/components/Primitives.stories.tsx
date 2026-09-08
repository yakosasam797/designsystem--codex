import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Bell, Filter, MoreHorizontal, Plus, Trash2, Upload } from 'lucide-react'
import { Avatar, Button, IconButton, KindBadge, CountBadge, ReadinessChip, StatusBadge, buttonVariants } from './components'
import './Components.stories.css'

const meta = { title: 'Components/Primitives', parameters: { layout: 'padded' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Buttons: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>Buttons</h2><p>Five variants, two production sizes. Buttons stay rounded rectangles, never pills.</p>{buttonVariants.map(variant => <div className="ds-story__row" key={variant}><span className="ds-story__mono" style={{ width: 100 }}>{variant}</span><Button size="sm" variant={variant}>{variant === 'primary' ? 'Save' : 'View'}</Button><Button variant={variant}>{variant === 'primary' ? 'Save changes' : 'View details'}</Button><Button disabled variant={variant}>Disabled</Button></div>)}<div className="ds-story__row"><Button leadingIcon={<Upload />} >Upload file</Button><Button leadingIcon={<Plus />} variant="tertiary">Add service</Button><Button loading>Saving</Button></div></section></div>,
  play: async ({ canvasElement }) => { const canvas = within(canvasElement); await userEvent.tab(); await expect(canvas.getAllByRole('button')[0]).toHaveFocus() },
}

export const IconButtons: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>Icon buttons</h2><div className="ds-story__row"><IconButton label="Notifications" icon={<Bell />} /><IconButton label="Active filters" active icon={<Filter />} /><IconButton label="More actions" treatment="row" icon={<MoreHorizontal />} /><IconButton label="Delete row" treatment="destructive" icon={<Trash2 />} /></div></section></div>,
}

export const BadgesAndStatus: Story = {
  render: () => <div className="ds-story"><section className="ds-story__section"><h2>Badges and status</h2><div className="ds-story__row"><StatusBadge>Draft</StatusBadge><StatusBadge tone="success">Active</StatusBadge><StatusBadge tone="warning">Due today</StatusBadge><StatusBadge tone="danger">Blocked</StatusBadge><StatusBadge tone="info">In review</StatusBadge></div></section><section className="ds-story__section"><h2>Kind and count badges</h2><div className="ds-story__row"><KindBadge>Hotel</KindBadge><KindBadge>Transfer</KindBadge><KindBadge>Visa</KindBadge><CountBadge>3</CountBadge></div></section></div>,
}

export const ChipsAndAvatars: Story = {
  render: function ChipsAndAvatarsStory() { const [value, setValue] = useState('warning'); return <div className="ds-story"><section className="ds-story__section"><h2>Readiness chips</h2><div className="ds-story__row"><ReadinessChip tone="success" selected={value === 'success'} onClick={() => setValue('success')}>Clear</ReadinessChip><ReadinessChip tone="warning" selected={value === 'warning'} onClick={() => setValue('warning')}>Due soon</ReadinessChip><ReadinessChip tone="danger" selected={value === 'danger'} onClick={() => setValue('danger')}>Action needed</ReadinessChip></div></section><section className="ds-story__section"><h2>Stable initials</h2><div className="ds-story__row"><Avatar size="sm" initials="AK" name="Amit Kumar" /><Avatar initials="PS" name="Priya Shah" tone="pink" /><Avatar size="lg" initials="YK" name="Yash Kumar" tone="amber" /><Avatar initials="NM" name="Nina Mathew" tone="blue" /></div></section></div> },
}
