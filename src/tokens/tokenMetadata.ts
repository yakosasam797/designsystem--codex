export type ReferenceColorToken = {
  name: string
  cssVariable: `--ref-${string}`
  value: string
  description: string
}

export type ReferenceColorGroup = {
  name: string
  description: string
  tokens: readonly ReferenceColorToken[]
}

export type SemanticColorToken = {
  name: string
  cssVariable: `--${string}`
  group: string
  description: string
  scopes: readonly string[]
  light: { reference: string; value: string }
  dark: { reference: string; value: string }
}

const references = {
  Neutral: [
    ['Color/Neutral/000', '--ref-neutral-000', '#FFFFFF', 'Absolute white. Use only through semantic aliases.'],
    ['Color/Neutral/025', '--ref-neutral-025', '#FDFFFC', 'Warm page-white used by the Paryatech canvas.'],
    ['Color/Neutral/050', '--ref-neutral-050', '#FAFAF9', 'Warm off-white for subtle surfaces and hover foundations.'],
    ['Color/Neutral/075', '--ref-neutral-075', '#F7F6F3', 'Low-contrast warm neutral surface.'],
    ['Color/Neutral/100', '--ref-neutral-100', '#F5F5F4', 'Default neutral hover foundation.'],
    ['Color/Neutral/125', '--ref-neutral-125', '#F2F0EB', 'High-contrast inverse text on dark shell surfaces.'],
    ['Color/Neutral/150', '--ref-neutral-150', '#F1F0ED', 'Neutral status and quiet surface foundation.'],
    ['Color/Neutral/175', '--ref-neutral-175', '#EFEDEA', 'Subtle dividers and row rules.'],
    ['Color/Neutral/200', '--ref-neutral-200', '#E7E5E4', 'Default card, table and container border.'],
    ['Color/Neutral/225', '--ref-neutral-225', '#E4E1DA', 'Primary navigation text on the dark shell.'],
    ['Color/Neutral/250', '--ref-neutral-250', '#E0DDD8', 'Standard control outline.'],
    ['Color/Neutral/300', '--ref-neutral-300', '#D6D3D1', 'Strong divider and inactive checkbox outline.'],
    ['Color/Neutral/350', '--ref-neutral-350', '#C9C5BC', 'Secondary icon and inverse border foundation.'],
    ['Color/Neutral/400', '--ref-neutral-400', '#B5B0A7', 'Muted navigation and shell metadata.'],
    ['Color/Neutral/500', '--ref-neutral-500', '#A8A29E', 'Disabled foreground foundation.'],
    ['Color/Neutral/600', '--ref-neutral-600', '#78736B', 'Tertiary text and placeholder foundation.'],
    ['Color/Neutral/700', '--ref-neutral-700', '#6B675F', 'Muted metadata and overline foundation.'],
    ['Color/Neutral/800', '--ref-neutral-800', '#57534E', 'Secondary text foundation.'],
    ['Color/Neutral/900', '--ref-neutral-900', '#35342F', 'Dark shell and utility icon foundation.'],
    ['Color/Neutral/950', '--ref-neutral-950', '#1A1917', 'Primary text and high-emphasis ink.'],
    ['Color/Neutral/1000', '--ref-neutral-1000', '#0F1211', 'Deepest warm neutral and dark canvas foundation.'],
  ],
  'Dark foundations': [
    ['Color/Dark/Sunken', '--ref-dark-sunken', '#0B0E0D', 'Lowest dark elevation surface.'],
    ['Color/Dark/Surface', '--ref-dark-surface', '#151918', 'Default dark theme surface.'],
    ['Color/Dark/Subtle', '--ref-dark-subtle', '#191E1C', 'Quiet dark theme surface.'],
    ['Color/Dark/Raised', '--ref-dark-raised', '#1B211F', 'Raised dark theme surface.'],
    ['Color/Dark/Overlay', '--ref-dark-overlay', '#222927', 'Overlay and floating dark theme surface.'],
    ['Color/Dark/Border Subtle', '--ref-dark-border-subtle', '#262B29', 'Subtle divider on dark surfaces.'],
    ['Color/Dark/Border Default', '--ref-dark-border-default', '#2F3532', 'Default border on dark surfaces.'],
    ['Color/Dark/Border Control', '--ref-dark-border-control', '#3A423F', 'Control outline on dark surfaces.'],
    ['Color/Dark/Border Strong', '--ref-dark-border-strong', '#4A5551', 'High-emphasis border on dark surfaces.'],
    ['Color/Dark/Text Disabled', '--ref-dark-text-disabled', '#66635F', 'Disabled text on dark surfaces.'],
    ['Color/Dark/Text Tertiary', '--ref-dark-text-tertiary', '#8A867F', 'Tertiary text on dark surfaces.'],
    ['Color/Dark/Text Muted', '--ref-dark-text-muted', '#AFAAA1', 'Muted metadata on dark surfaces.'],
    ['Color/Dark/Text Secondary', '--ref-dark-text-secondary', '#D2CEC7', 'Secondary text on dark surfaces.'],
  ],
  Brand: [
    ['Color/Brand/025', '--ref-brand-025', '#F7FBFA', 'Quiet teal-tinted header surface.'],
    ['Color/Brand/050', '--ref-brand-050', '#F0F8F7', 'Light teal selected and hover surface.'],
    ['Color/Brand/060', '--ref-brand-060', '#F1F8F6', 'Dedicated data-table column-header surface.'],
    ['Color/Brand/075', '--ref-brand-075', '#EDF6F4', 'Booking summary surface.'],
    ['Color/Brand/100', '--ref-brand-100', '#E0F0EE', 'Soft teal surface foundation.'],
    ['Color/Brand/150', '--ref-brand-150', '#D6E9E5', 'Booking summary border.'],
    ['Color/Brand/200', '--ref-brand-200', '#C0E0DD', 'Subtle interactive border.'],
    ['Color/Brand/300', '--ref-brand-300', '#8FC4C0', 'Light teal foreground for dark-theme interaction.'],
    ['Color/Brand/400', '--ref-brand-400', '#62A9A6', 'Accessible focus and medium-emphasis interaction.'],
    ['Color/Brand/500', '--ref-brand-500', '#2A8784', 'Dark-theme primary action foundation.'],
    ['Color/Brand/600', '--ref-brand-600', '#1C6E6B', 'General interactive teal.'],
    ['Color/Brand/700', '--ref-brand-700', '#115553', 'Primary Paryatech action and link teal.'],
    ['Color/Brand/800', '--ref-brand-800', '#0E4644', 'Primary hover teal.'],
    ['Color/Brand/900', '--ref-brand-900', '#0A3A38', 'Primary pressed teal.'],
    ['Color/Brand/950', '--ref-brand-950', '#062826', 'Deepest teal foundation.'],
    ['Color/Brand/Dark Selected', '--ref-brand-dark-selected', '#15302E', 'Dark selected and subtle teal surface.'],
    ['Color/Brand/Dark Border', '--ref-brand-dark-border', '#285E5B', 'Dark interactive teal border.'],
  ],
  Accent: [
    ['Color/Accent/050', '--ref-accent-050', '#FCEFF4', 'Selected navigation and subtle personality surface.'],
    ['Color/Accent/100', '--ref-accent-100', '#F8DEE8', 'Avatar and identity accent surface.'],
    ['Color/Accent/200', '--ref-accent-200', '#EFBDD5', 'Profile and accent border.'],
    ['Color/Accent/300', '--ref-accent-300', '#DDA6C1', 'Light pink accent step.'],
    ['Color/Accent/400', '--ref-accent-400', '#C485A5', 'Medium pink accent step.'],
    ['Color/Accent/500', '--ref-accent-500', '#A56383', 'Primary Paryatech personality accent.'],
    ['Color/Accent/600', '--ref-accent-600', '#8D4E6C', 'Pink accent hover foundation.'],
    ['Color/Accent/700', '--ref-accent-700', '#733E58', 'Strong pink accent.'],
    ['Color/Accent/800', '--ref-accent-800', '#5B3045', 'Deep pink accent.'],
    ['Color/Accent/900', '--ref-accent-900', '#442435', 'Darkest pink accent.'],
    ['Color/Accent/Dark Surface', '--ref-accent-dark-surface', '#392833', 'Dark selected-navigation accent surface.'],
    ['Color/Accent/Dark Border', '--ref-accent-dark-border', '#71445C', 'Dark accent border.'],
    ['Color/Accent/Dark Foreground', '--ref-accent-dark-foreground', '#F0A9C8', 'Dark accent text and identity foreground.'],
  ],
  Success: [
    ['Color/Success/050', '--ref-success-050', '#E7FEF8', 'Light success surface.'], ['Color/Success/200', '--ref-success-200', '#C3EFE3', 'Light success border.'], ['Color/Success/700', '--ref-success-700', '#15803D', 'Light success foreground and dot.'], ['Color/Success/Dark Surface', '--ref-success-dark-surface', '#153528', 'Dark success surface.'], ['Color/Success/Dark Border', '--ref-success-dark-border', '#2B6B4F', 'Dark success border.'], ['Color/Success/Dark Foreground', '--ref-success-dark-foreground', '#7DE2A1', 'Dark success text and dot.'],
  ],
  Warning: [
    ['Color/Warning/050', '--ref-warning-050', '#FEF3C7', 'Light warning surface.'], ['Color/Warning/200', '--ref-warning-200', '#FDE68A', 'Light warning border.'], ['Color/Warning/700', '--ref-warning-700', '#B45309', 'Light warning foreground and dot.'], ['Color/Warning/Dark Surface', '--ref-warning-dark-surface', '#3A2B12', 'Dark warning surface.'], ['Color/Warning/Dark Border', '--ref-warning-dark-border', '#755316', 'Dark warning border.'], ['Color/Warning/Dark Foreground', '--ref-warning-dark-foreground', '#FCD34D', 'Dark warning text and dot.'],
  ],
  Danger: [
    ['Color/Danger/050', '--ref-danger-050', '#FCE2E5', 'Light danger surface.'], ['Color/Danger/200', '--ref-danger-200', '#F6CBD0', 'Light danger border.'], ['Color/Danger/700', '--ref-danger-700', '#C0414D', 'Light danger foreground and destructive action.'], ['Color/Danger/Dark Surface', '--ref-danger-dark-surface', '#3A1C22', 'Dark danger surface.'], ['Color/Danger/Dark Border', '--ref-danger-dark-border', '#7C3441', 'Dark danger border.'], ['Color/Danger/Dark Foreground', '--ref-danger-dark-foreground', '#FDA4AF', 'Dark danger text and dot.'],
  ],
  Information: [
    ['Color/Information/050', '--ref-info-050', '#DBEAFE', 'Light information and review surface.'], ['Color/Information/200', '--ref-info-200', '#BFDBFE', 'Light information and review border.'], ['Color/Information/700', '--ref-info-700', '#1D4ED8', 'Light information and review foreground.'], ['Color/Information/Dark Surface', '--ref-info-dark-surface', '#172A46', 'Dark information and review surface.'], ['Color/Information/Dark Border', '--ref-info-dark-border', '#295486', 'Dark information and review border.'], ['Color/Information/Dark Foreground', '--ref-info-dark-foreground', '#93C5FD', 'Dark information and review text and dot.'],
  ],
  Alpha: [['Color/Alpha/Black 56', '--ref-alpha-black-56', '#0000008F', 'Reference-only 56% black used by modal and drawer scrims.']],
} as const

export const referenceColorGroups: readonly ReferenceColorGroup[] = Object.entries(references).map(([name, tokens]) => ({
  name,
  description: name === 'Dark foundations' ? 'Dedicated foundations used only by Dark semantic aliases.' : `${name} reference values. Components never consume these directly.`,
  tokens: tokens.map(([tokenName, cssVariable, value, description]) => ({ name: tokenName, cssVariable, value, description })) as readonly ReferenceColorToken[],
}))

const valueByReference = new Map(referenceColorGroups.flatMap(group => group.tokens).map(token => [token.name, token.value]))

function scopesFor(name: string): readonly string[] {
  if (name.startsWith('Text/')) return ['TEXT_FILL']
  if (name.startsWith('Icon/')) return ['SHAPE_FILL', 'STROKE_COLOR']
  if (name.includes('/Border') || name.startsWith('Border/')) return ['STROKE_COLOR']
  if (name.includes('/Foreground') || name.startsWith('Sidebar/Text/')) return ['SHAPE_FILL', 'TEXT_FILL', 'STROKE_COLOR']
  return ['FRAME_FILL', 'SHAPE_FILL']
}

function semantic(name: string, cssVariable: `--${string}`, lightReference: string, darkReference: string, description: string): SemanticColorToken {
  return {
    name,
    cssVariable,
    group: name.split('/')[0],
    description,
    scopes: scopesFor(name),
    light: { reference: lightReference, value: valueByReference.get(lightReference) ?? '' },
    dark: { reference: darkReference, value: valueByReference.get(darkReference) ?? '' },
  }
}

export const semanticColorTokens: readonly SemanticColorToken[] = [
  semantic('Surface/Canvas', '--color-surface-canvas', 'Color/Neutral/025', 'Color/Neutral/1000', 'Application canvas behind all content. Use once per screen; never for cards.'),
  semantic('Surface/Default', '--color-surface-default', 'Color/Neutral/000', 'Color/Dark/Surface', 'Primary component surface for tables, inputs, cards and sheets.'),
  semantic('Surface/Subtle', '--color-surface-subtle', 'Color/Neutral/050', 'Color/Dark/Subtle', 'Quiet grouped content surface at a lower visual level.'),
  semantic('Surface/Sunken', '--color-surface-sunken', 'Color/Neutral/050', 'Color/Dark/Sunken', 'Recessed or inset regions such as wells and inactive areas.'),
  semantic('Surface/Raised', '--color-surface-raised', 'Color/Neutral/000', 'Color/Dark/Raised', 'Raised content surface used with an elevation style.'),
  semantic('Surface/Overlay', '--color-surface-overlay', 'Color/Neutral/000', 'Color/Dark/Overlay', 'Menus, popovers, drawers and modal surfaces.'),
  semantic('Surface/Quiet Header', '--color-surface-quiet-header', 'Color/Brand/025', 'Color/Dark/Subtle', 'Very quiet brand-tinted lightweight section header.'),
  semantic('Surface/Table Header', '--color-surface-table-header', 'Color/Brand/060', 'Color/Brand/Dark Selected', 'Dedicated data-table column-header surface.'),
  semantic('Surface/Selected', '--color-surface-selected', 'Color/Brand/050', 'Color/Brand/Dark Selected', 'Selected row or selected neutral content state; not a status.'),
  semantic('Surface/Brand Summary', '--color-surface-brand-summary', 'Color/Brand/075', 'Color/Brand/Dark Selected', 'Booking and summary surfaces requiring subtle Paryatech identity.'),
  semantic('Text/Primary', '--color-text-primary', 'Color/Neutral/950', 'Color/Neutral/125', 'Highest-emphasis text for titles, names and important values.'),
  semantic('Text/Secondary', '--color-text-secondary', 'Color/Neutral/800', 'Color/Dark/Text Secondary', 'Standard supporting text and body copy.'),
  semantic('Text/Muted', '--color-text-muted', 'Color/Neutral/700', 'Color/Dark/Text Muted', 'Reduced-emphasis metadata that remains comfortably readable.'),
  semantic('Text/Tertiary', '--color-text-tertiary', 'Color/Neutral/600', 'Color/Dark/Text Tertiary', 'Low-emphasis captions; never essential information.'),
  semantic('Text/Disabled', '--color-text-disabled', 'Color/Neutral/500', 'Color/Dark/Text Disabled', 'Genuinely unavailable controls and content.'),
  semantic('Text/Inverse', '--color-text-inverse', 'Color/Neutral/000', 'Color/Neutral/1000', 'Text on strong filled actions or inverse surfaces.'),
  semantic('Text/Link/Default', '--color-text-link', 'Color/Brand/700', 'Color/Brand/300', 'Default interactive text and file links.'),
  semantic('Text/Link/Hover', '--color-text-link-hover', 'Color/Brand/800', 'Color/Brand/400', 'Hover state for interactive text links.'),
  semantic('Icon/Default', '--color-icon-default', 'Color/Neutral/900', 'Color/Neutral/125', 'Default noninteractive and utility icon color.'),
  semantic('Icon/Muted', '--color-icon-muted', 'Color/Neutral/600', 'Color/Dark/Text Tertiary', 'Low-emphasis decorative or supporting icons.'),
  semantic('Icon/Interactive', '--color-icon-interactive', 'Color/Brand/700', 'Color/Brand/300', 'Icons that initiate or reinforce an action.'),
  semantic('Icon/Inverse', '--color-icon-inverse', 'Color/Neutral/000', 'Color/Neutral/1000', 'Icons on strong filled actions and inverse surfaces.'),
  semantic('Icon/Success', '--color-icon-success', 'Color/Success/700', 'Color/Success/Dark Foreground', 'Success-only icon color.'),
  semantic('Icon/Warning', '--color-icon-warning', 'Color/Warning/700', 'Color/Warning/Dark Foreground', 'Attention and due-state icon color.'),
  semantic('Icon/Danger', '--color-icon-danger', 'Color/Danger/700', 'Color/Danger/Dark Foreground', 'Danger, failure and destructive icon color.'),
  semantic('Icon/Info', '--color-icon-info', 'Color/Information/700', 'Color/Information/Dark Foreground', 'Informational and in-progress icon color.'),
  semantic('Border/Default', '--color-border-default', 'Color/Neutral/200', 'Color/Dark/Border Default', 'Default container, table and card border.'),
  semantic('Border/Subtle', '--color-border-subtle', 'Color/Neutral/175', 'Color/Dark/Border Subtle', 'Quiet separators and low-emphasis dividers.'),
  semantic('Border/Control', '--color-border-control', 'Color/Neutral/250', 'Color/Dark/Border Control', 'Inputs, selects and neutral button borders.'),
  semantic('Border/Strong', '--color-border-strong', 'Color/Neutral/300', 'Color/Dark/Border Strong', 'Higher-emphasis separators and selected neutral controls.'),
  semantic('Border/Interactive', '--color-border-interactive', 'Color/Brand/200', 'Color/Brand/Dark Border', 'Brand-aware border for selected interactive controls.'),
  semantic('Border/Focused', '--color-border-focused', 'Color/Brand/400', 'Color/Brand/400', 'Visible keyboard focus ring; never substitute hover.'),
  semantic('Border/Accent', '--color-border-accent', 'Color/Accent/200', 'Color/Accent/Dark Border', 'Pink identity or selected-navigation border.'),
  semantic('Border/Danger', '--color-border-danger', 'Color/Danger/200', 'Color/Danger/Dark Border', 'Border for destructive and error states.'),
  semantic('Action/Primary/Background/Default', '--color-action-primary-background', 'Color/Brand/700', 'Color/Brand/500', 'Default filled primary action background.'),
  semantic('Action/Primary/Background/Hover', '--color-action-primary-background-hover', 'Color/Brand/800', 'Color/Brand/400', 'Filled primary action hover background.'),
  semantic('Action/Primary/Background/Pressed', '--color-action-primary-background-pressed', 'Color/Brand/900', 'Color/Brand/600', 'Filled primary action pressed background.'),
  semantic('Action/Primary/Foreground', '--color-action-primary-foreground', 'Color/Neutral/000', 'Color/Neutral/1000', 'Foreground on filled primary actions.'),
  semantic('Action/Secondary/Background/Default', '--color-action-secondary-background', 'Color/Neutral/000', 'Color/Dark/Surface', 'Default neutral secondary action surface.'),
  semantic('Action/Secondary/Background/Hover', '--color-action-secondary-background-hover', 'Color/Neutral/100', 'Color/Dark/Subtle', 'Neutral secondary action hover surface.'),
  semantic('Action/Secondary/Foreground', '--color-action-secondary-foreground', 'Color/Neutral/950', 'Color/Neutral/125', 'Text and icon color for secondary actions.'),
  semantic('Action/Secondary/Border', '--color-action-secondary-border', 'Color/Neutral/250', 'Color/Dark/Border Control', 'Border for neutral secondary actions.'),
  semantic('Action/Tertiary/Background/Default', '--color-action-tertiary-background', 'Color/Neutral/000', 'Color/Dark/Surface', 'Default surface for outlined brand actions.'),
  semantic('Action/Tertiary/Background/Hover', '--color-action-tertiary-background-hover', 'Color/Brand/050', 'Color/Brand/Dark Selected', 'Hover surface for outlined and ghost brand actions.'),
  semantic('Action/Tertiary/Foreground', '--color-action-tertiary-foreground', 'Color/Brand/700', 'Color/Brand/300', 'Text and icon color for outlined brand actions.'),
  semantic('Action/Tertiary/Border', '--color-action-tertiary-border', 'Color/Brand/200', 'Color/Brand/Dark Border', 'Border for outlined brand actions.'),
  semantic('Action/Destructive/Background/Default', '--color-action-destructive-background', 'Color/Danger/700', 'Color/Danger/700', 'Filled destructive action background; reserve for explicit destructive intent.'),
  semantic('Action/Destructive/Background/Hover', '--color-action-destructive-background-hover', 'Color/Danger/Dark Border', 'Color/Danger/Dark Border', 'Filled destructive action hover background.'),
  semantic('Action/Destructive/Foreground', '--color-action-destructive-foreground', 'Color/Neutral/000', 'Color/Neutral/000', 'Foreground on filled destructive actions.'),
  semantic('Sidebar/Background', '--color-sidebar-background', 'Color/Neutral/900', 'Color/Neutral/1000', 'Persistent application navigation background.'),
  semantic('Sidebar/Surface', '--color-sidebar-surface', 'Color/Neutral/900', 'Color/Dark/Surface', 'Inset surface inside the navigation shell.'),
  semantic('Sidebar/Text/Primary', '--color-sidebar-text-primary', 'Color/Neutral/125', 'Color/Neutral/125', 'Primary navigation text and icon color.'),
  semantic('Sidebar/Text/Secondary', '--color-sidebar-text-secondary', 'Color/Neutral/400', 'Color/Dark/Text Muted', 'Sidebar group labels and supporting information.'),
  semantic('Sidebar/Border', '--color-sidebar-border', 'Color/Dark/Border Strong', 'Color/Dark/Border Strong', 'Borders used inside the dark navigation shell.'),
  semantic('Sidebar/Selected/Background', '--color-sidebar-selected-background', 'Color/Accent/050', 'Color/Accent/Dark Surface', 'Selected navigation item background. Pink is identity, not action.'),
  semantic('Sidebar/Selected/Foreground', '--color-sidebar-selected-foreground', 'Color/Accent/500', 'Color/Accent/Dark Foreground', 'Selected navigation label and icon color.'),
  semantic('Accent/Background', '--color-accent-background', 'Color/Accent/050', 'Color/Accent/Dark Surface', 'Low-emphasis pink identity surface.'),
  semantic('Accent/Foreground', '--color-accent-foreground', 'Color/Accent/500', 'Color/Accent/Dark Foreground', 'Pink identity foreground and personality accent.'),
  semantic('Status/Success/Background', '--color-status-success-background', 'Color/Success/050', 'Color/Success/Dark Surface', 'Success surface: verified, confirmed, paid and completed only.'),
  semantic('Status/Success/Border', '--color-status-success-border', 'Color/Success/200', 'Color/Success/Dark Border', 'Success status border.'),
  semantic('Status/Success/Foreground', '--color-status-success-foreground', 'Color/Success/700', 'Color/Success/Dark Foreground', 'Success label, dot and icon color.'),
  semantic('Status/Warning/Background', '--color-status-warning-background', 'Color/Warning/050', 'Color/Warning/Dark Surface', 'Warning surface: requested, due, upcoming and needs-attention.'),
  semantic('Status/Warning/Border', '--color-status-warning-border', 'Color/Warning/200', 'Color/Warning/Dark Border', 'Warning status border.'),
  semantic('Status/Warning/Foreground', '--color-status-warning-foreground', 'Color/Warning/700', 'Color/Warning/Dark Foreground', 'Warning label, dot and icon color.'),
  semantic('Status/Danger/Background', '--color-status-danger-background', 'Color/Danger/050', 'Color/Danger/Dark Surface', 'Danger surface: missing, blocked, overdue and failed.'),
  semantic('Status/Danger/Border', '--color-status-danger-border', 'Color/Danger/200', 'Color/Danger/Dark Border', 'Danger status border.'),
  semantic('Status/Danger/Foreground', '--color-status-danger-foreground', 'Color/Danger/700', 'Color/Danger/Dark Foreground', 'Danger label, dot and icon color.'),
  semantic('Status/Info/Background', '--color-status-info-background', 'Color/Information/050', 'Color/Information/Dark Surface', 'Information surface: in review, processing and pending approval.'),
  semantic('Status/Info/Border', '--color-status-info-border', 'Color/Information/200', 'Color/Information/Dark Border', 'Information status border.'),
  semantic('Status/Info/Foreground', '--color-status-info-foreground', 'Color/Information/700', 'Color/Information/Dark Foreground', 'Information label, dot and icon color.'),
  semantic('Status/Neutral/Background', '--color-status-neutral-background', 'Color/Neutral/150', 'Color/Dark/Subtle', 'Neutral surface for draft, open, unassigned or inactive.'),
  semantic('Status/Neutral/Border', '--color-status-neutral-border', 'Color/Neutral/200', 'Color/Dark/Border Default', 'Neutral status border.'),
  semantic('Status/Neutral/Foreground', '--color-status-neutral-foreground', 'Color/Neutral/800', 'Color/Dark/Text Secondary', 'Neutral status label, dot and icon color.'),
  semantic('Accent/Avatar/Background', '--color-accent-avatar-background', 'Color/Accent/100', 'Color/Accent/Dark Surface', 'Identity avatar background; not a status color.'),
  semantic('Skeleton/Base', '--color-skeleton-base', 'Color/Neutral/150', 'Color/Dark/Subtle', 'Base placeholder surface for initial loading.'),
  semantic('Skeleton/Highlight', '--color-skeleton-highlight', 'Color/Neutral/050', 'Color/Dark/Raised', 'Skeleton shimmer highlight; respect reduced motion.'),
  semantic('Overlay/Scrim', '--color-overlay-scrim', 'Color/Alpha/Black 56', 'Color/Alpha/Black 56', 'Modal and drawer backdrop scrim.'),
  semantic('Avatar/Tone/Info/Background', '--avatar-tone-info-background', 'Color/Information/050', 'Color/Information/050', 'Stable information avatar surface in both themes.'),
  semantic('Avatar/Tone/Info/Foreground', '--avatar-tone-info-foreground', 'Color/Information/700', 'Color/Information/700', 'Stable information avatar foreground in both themes.'),
  semantic('Avatar/Tone/Success/Background', '--avatar-tone-success-background', 'Color/Success/050', 'Color/Success/050', 'Stable success avatar surface in both themes.'),
  semantic('Avatar/Tone/Success/Foreground', '--avatar-tone-success-foreground', 'Color/Success/700', 'Color/Success/700', 'Stable success avatar foreground in both themes.'),
  semantic('Avatar/Tone/Warning/Background', '--avatar-tone-warning-background', 'Color/Warning/050', 'Color/Warning/050', 'Stable warning avatar surface in both themes.'),
  semantic('Avatar/Tone/Warning/Foreground', '--avatar-tone-warning-foreground', 'Color/Warning/700', 'Color/Warning/700', 'Stable warning avatar foreground in both themes.'),
  semantic('Sidebar/Action/Foreground', '--color-sidebar-action-foreground', 'Color/Accent/200', 'Color/Accent/200', 'High-visibility action foreground inside the dark sidebar.'),
]

export const semanticColorGroups = [...new Set(semanticColorTokens.map(token => token.group))]

export const designSystemMetadata = {
  name: 'ParyatechOS',
  source: 'PRD Figma variable system · Color only',
  themeModes: ['light', 'dark'],
  tokenArchitecture: ['reference palette', 'semantic aliases', 'component aliases'],
  fonts: { heading: 'Onest', body: 'Public Sans', data: 'JetBrains Mono' },
  rules: {
    action: 'Reserve filled teal for the one required next step in a region.',
    identity: 'Rose communicates Paryatech identity and selected navigation, never general action.',
    semantic: 'Components consume semantic tokens; reference values remain implementation-only.',
    modes: 'Every semantic token resolves through a Light or Dark alias; components do not switch hex values.',
  },
  referenceColorGroups,
  semanticColorTokens,
} as const
