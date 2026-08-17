import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Button, buttonSizes, buttonVariants } from './Button'
import { buttonMetadata } from './buttonMetadata'
import './Button.stories.css'

function ArrowIcon() {
  return (
    <svg fill="none" viewBox="0 0 16 16">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `${buttonMetadata.variants.primary.intent} Figma source: node ${buttonMetadata.figma.componentSetNodeId}.`,
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
  },
  argTypes: {
    variant: { control: 'select', options: buttonVariants, table: { category: 'Appearance' } },
    size: { control: 'inline-radio', options: buttonSizes, table: { category: 'Appearance' } },
    loading: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    leftIcon: { control: false, table: { category: 'Content' } },
    rightIcon: { control: false, table: { category: 'Content' } },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Destructive: Story = { args: { children: 'Delete', variant: 'destructive' } }
export const LinkStyle: Story = { args: { children: 'Show details', variant: 'link' } }
export const Small: Story = { args: { size: 'sm' } }
export const WithIcons: Story = { args: { leftIcon: <ArrowIcon />, rightIcon: <ArrowIcon /> } }
export const Loading: Story = { args: { children: 'Saving', loading: true } }
export const Disabled: Story = { args: { disabled: true } }

export const InteractionTest: Story = {
  args: { children: 'Continue' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Continue' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.click(button)
    await expect(button).toBeEnabled()
  },
}

export const VariantAndStateMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="button-matrix">
      <div aria-hidden="true" />
      {['Default', 'Hover', 'Focus', 'Disabled'].map((state) => <strong key={state}>{state}</strong>)}
      {buttonVariants.map((variant) => (
        <div className="button-matrix__row" key={variant}>
          <strong>{variant}</strong>
          <Button variant={variant}>Button</Button>
          <Button className="mofi-button--demo-hover" variant={variant}>Button</Button>
          <Button className="mofi-button--demo-focus" variant={variant}>Button</Button>
          <Button disabled variant={variant}>Button</Button>
        </div>
      ))}
    </div>
  ),
}
