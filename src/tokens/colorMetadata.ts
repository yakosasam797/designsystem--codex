export type PrimitiveColorToken = {
  name: string
  cssVariable: `--mofi-color-${string}`
  value: `#${string}`
}

export type PrimitiveColorGroup = {
  family: string
  purpose: string
  tokens: readonly PrimitiveColorToken[]
}

export type SemanticColorToken = PrimitiveColorToken & {
  aliasOf: string
  useFor: string
  avoidFor: string
}

const token = (
  name: string,
  cssVariable: PrimitiveColorToken['cssVariable'],
  value: PrimitiveColorToken['value'],
): PrimitiveColorToken => ({ name, cssVariable, value })

export const primitiveColorGroups = [
  {
    family: 'Teal',
    purpose: 'Brand and primary-action scale. Do not use directly in product UI.',
    tokens: [
      token('teal/900', '--mofi-color-teal-900', '#0A3A38'),
      token('teal/800', '--mofi-color-teal-800', '#0E4644'),
      token('teal/700', '--mofi-color-teal-700', '#115553'),
      token('teal/600', '--mofi-color-teal-600', '#1C6E6B'),
      token('teal/500', '--mofi-color-teal-500', '#2A8784'),
      token('teal/400', '--mofi-color-teal-400', '#5BA9A6'),
      token('teal/300', '--mofi-color-teal-300', '#8FC9C6'),
      token('teal/200', '--mofi-color-teal-200', '#C0E0DD'),
      token('teal/100', '--mofi-color-teal-100', '#E3F1EF'),
      token('teal/50', '--mofi-color-teal-50', '#F0F8F7'),
    ],
  },
  {
    family: 'Pink',
    purpose: 'Secondary accent scale. Do not use directly in product UI.',
    tokens: [
      token('pink/700', '--mofi-color-pink-700', '#A56383'),
      token('pink/600', '--mofi-color-pink-600', '#C079A0'),
      token('pink/500', '--mofi-color-pink-500', '#D28EAD'),
      token('pink/400', '--mofi-color-pink-400', '#E0A4C0'),
      token('pink/300', '--mofi-color-pink-300', '#EFBDD5'),
      token('pink/200', '--mofi-color-pink-200', '#F4CCDF'),
      token('pink/100', '--mofi-color-pink-100', '#F8DEE8'),
      token('pink/50', '--mofi-color-pink-50', '#FCEFF4'),
    ],
  },
  {
    family: 'Mint',
    purpose: 'Fresh and informational surface scale. Do not use directly in product UI.',
    tokens: [
      token('mint/700', '--mofi-color-mint-700', '#5AB5A2'),
      token('mint/600', '--mofi-color-mint-600', '#79CCBA'),
      token('mint/500', '--mofi-color-mint-500', '#A5DCCF'),
      token('mint/400', '--mofi-color-mint-400', '#C5E8DE'),
      token('mint/300', '--mofi-color-mint-300', '#D7EFE8'),
      token('mint/200', '--mofi-color-mint-200', '#E7FEF8'),
      token('mint/100', '--mofi-color-mint-100', '#F1FEFB'),
      token('mint/50', '--mofi-color-mint-50', '#F8FFFE'),
    ],
  },
  {
    family: 'Gray',
    purpose: 'Neutral text, surface, and border scale. Prefer semantic aliases.',
    tokens: [
      token('gray/950', '--mofi-color-gray-950', '#0A0A0A'),
      token('gray/900', '--mofi-color-gray-900', '#171717'),
      token('gray/800', '--mofi-color-gray-800', '#262626'),
      token('gray/700', '--mofi-color-gray-700', '#3F3F3F'),
      token('gray/600', '--mofi-color-gray-600', '#525252'),
      token('gray/500', '--mofi-color-gray-500', '#737373'),
      token('gray/400', '--mofi-color-gray-400', '#A3A3A3'),
      token('gray/300', '--mofi-color-gray-300', '#D4D4D4'),
      token('gray/200', '--mofi-color-gray-200', '#E5E5E5'),
      token('gray/100', '--mofi-color-gray-100', '#F5F5F5'),
      token('gray/50', '--mofi-color-gray-50', '#FAFAFA'),
      token('base/white', '--mofi-color-base-white', '#FFFFFF'),
    ],
  },
  {
    family: 'State primitives',
    purpose: 'Raw feedback tones used by semantic state tokens.',
    tokens: [
      token('state/success', '--mofi-color-state-success-base', '#15803D'),
      token('state/warning', '--mofi-color-state-warning-base', '#B45309'),
      token('state/destructive', '--mofi-color-state-destructive-base', '#DB5461'),
      token('state/destructive-hover', '--mofi-color-state-destructive-hover', '#C14A55'),
      token('state/info', '--mofi-color-state-info-base', '#1D4ED8'),
    ],
  },
] satisfies readonly PrimitiveColorGroup[]

export const semanticColorTokens = [
  { name: 'action/primary', cssVariable: '--mofi-color-action-primary', value: '#115553', aliasOf: 'teal/700', useFor: 'Primary CTAs, links, active indicators, and focus rings.', avoidFor: 'Page backgrounds, card backgrounds, and disabled states.' },
  { name: 'action/secondary', cssVariable: '--mofi-color-action-secondary', value: '#EFBDD5', aliasOf: 'pink/300', useFor: 'Secondary accents, soft highlights, and badge surfaces.', avoidFor: 'Body text or primary CTAs.' },
  { name: 'action/tertiary', cssVariable: '--mofi-color-action-tertiary', value: '#E7FEF8', aliasOf: 'mint/200', useFor: 'Subtle informational surfaces and tags.', avoidFor: 'Text or borders requiring strong contrast.' },
  { name: 'text/foreground', cssVariable: '--mofi-color-text-foreground', value: '#0A0A0A', aliasOf: 'gray/950', useFor: 'Default body text, headings, and neutral button labels.', avoidFor: 'Text on dark fills.' },
  { name: 'surface/muted', cssVariable: '--mofi-color-surface-muted', value: '#F5F5F5', aliasOf: 'gray/100', useFor: 'Subtle surfaces, secondary controls, and ghost hover states.', avoidFor: 'Text and strong boundaries.' },
  { name: 'surface/background', cssVariable: '--mofi-color-surface-background', value: '#FAFAFA', aliasOf: 'gray/50', useFor: 'Application and documentation page backgrounds.', avoidFor: 'Text and action emphasis.' },
  { name: 'surface/card', cssVariable: '--mofi-color-surface-card', value: '#FFFFFF', aliasOf: 'base/white', useFor: 'Cards, dialogs, and elevated content surfaces.', avoidFor: 'Text and action emphasis.' },
  { name: 'border/default', cssVariable: '--mofi-color-border-default', value: '#E5E5E5', aliasOf: 'gray/200', useFor: 'Dividers and default neutral boundaries.', avoidFor: 'Focus rings or selected-state emphasis.' },
  { name: 'state/success', cssVariable: '--mofi-color-state-success', value: '#15803D', aliasOf: 'state/success primitive', useFor: 'Successful validation and completed-status feedback.', avoidFor: 'Decorative accents unrelated to status.' },
  { name: 'state/warning', cssVariable: '--mofi-color-state-warning', value: '#B45309', aliasOf: 'state/warning primitive', useFor: 'Warning feedback and attention-required status.', avoidFor: 'Destructive or blocking errors.' },
  { name: 'state/destructive', cssVariable: '--mofi-color-state-destructive', value: '#DB5461', aliasOf: 'state/destructive primitive', useFor: 'Destructive actions and error feedback.', avoidFor: 'Neutral cancel actions or decoration.' },
  { name: 'state/info', cssVariable: '--mofi-color-state-info', value: '#1D4ED8', aliasOf: 'state/info primitive', useFor: 'Informational feedback and system notices.', avoidFor: 'Primary brand actions.' },
] as const satisfies readonly SemanticColorToken[]

export const colorMetadata = {
  figma: {
    fileKey: 'VTqZIKqYuZ3o90hgC4Wi7C',
    documentationNodeId: '50:2',
    primitiveCollectionId: 'VariableCollectionId:56:2',
    semanticCollectionId: 'VariableCollectionId:56:40',
  },
  policy: {
    primitive: 'Use primitives only to define semantic tokens or one-off illustration work.',
    semantic: 'Components and product UI must consume semantic tokens whenever a role exists.',
    themes: 'Only the Light semantic mode is approved. Do not invent a dark theme.',
  },
  primitiveColorGroups,
  semanticColorTokens,
} as const
