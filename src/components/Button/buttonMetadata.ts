import type { ButtonSize, ButtonVariant } from './Button'

export const buttonMetadata = {
  figma: {
    fileKey: 'VTqZIKqYuZ3o90hgC4Wi7C',
    componentSetNodeId: '71:228',
    componentSetKey: '7023d9b09986e43589dd610768b46541a6cd357e',
    status: 'Unpublished',
  },
  anatomy: ['container', 'optional left icon', 'label', 'optional right icon'],
  variants: {
    primary: {
      intent: 'The single highest-priority action in a section or flow.',
      avoid: 'Do not place multiple primary buttons in the same action group.',
    },
    secondary: {
      intent: 'A supporting action beside a primary action.',
      avoid: 'Do not use for destructive confirmation.',
    },
    outline: {
      intent: 'A neutral alternative when a filled treatment is too prominent.',
      avoid: 'Do not use on visually noisy backgrounds without checking contrast.',
    },
    ghost: {
      intent: 'Low-emphasis actions in toolbars, cards, and compact surfaces.',
      avoid: 'Do not use for the only critical action on a page.',
    },
    destructive: {
      intent: 'Irreversible or high-risk actions such as delete and revoke.',
      avoid: 'Do not use red merely to attract attention.',
    },
    link: {
      intent: 'Low-emphasis inline actions that behave like buttons.',
      avoid: 'Use an anchor element instead when the action navigates.',
    },
  } satisfies Record<ButtonVariant, { intent: string; avoid: string }>,
  sizes: {
    default: { height: 40, usage: 'Default for forms, dialogs, and page actions.' },
    sm: { height: 32, usage: 'Compact toolbars, tables, and dense interfaces.' },
  } satisfies Record<ButtonSize, { height: number; usage: string }>,
  states: {
    default: 'Resting interactive state.',
    hover: 'Pointer feedback only; never the sole way to reveal meaning.',
    focus: 'Keyboard focus uses a high-contrast semantic focus ring.',
    disabled: 'Unavailable action. Implemented in code; not yet modeled in Figma.',
    loading: 'In-progress action with aria-busy. Implemented in code; not yet modeled in Figma.',
  },
  accessibility: {
    label: 'Every button needs a concise accessible name that begins with a verb.',
    icons: 'Icons are decorative by default; the visible label supplies the name.',
    disabled: 'Loading and disabled states prevent repeat activation.',
    navigation: 'Navigation must use an anchor, not a button with the link style.',
  },
} as const
