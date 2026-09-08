export type TokenRecord = { name: string; cssVariable: `--pt-${string}`; value: string; role: string }

export const semanticColorTokens = [
  { name: 'page', cssVariable: '--pt-color-page', value: '#FDFFFC', role: 'Application canvas' },
  { name: 'surface', cssVariable: '--pt-color-surface', value: '#FFFFFF', role: 'Cards, dialogs and controls' },
  { name: 'surface/tinted', cssVariable: '--pt-color-surface-tinted', value: '#F7FBFA', role: 'Summary headers' },
  { name: 'surface/column', cssVariable: '--pt-color-surface-column', value: '#F1F8F6', role: 'Table column headers' },
  { name: 'text', cssVariable: '--pt-color-text', value: '#1A1917', role: 'Headings and body text' },
  { name: 'text/secondary', cssVariable: '--pt-color-text-secondary', value: '#57534E', role: 'Supporting labels' },
  { name: 'border', cssVariable: '--pt-color-border', value: '#E7E5E4', role: 'Panel boundaries' },
  { name: 'primary', cssVariable: '--pt-color-primary', value: '#115553', role: 'Required next action' },
  { name: 'accent', cssVariable: '--pt-color-accent', value: '#A56383', role: 'Selected pagination and accents' },
  { name: 'success', cssVariable: '--pt-color-success', value: '#15803D', role: 'Completed and positive states' },
  { name: 'warning', cssVariable: '--pt-color-warning', value: '#B45309', role: 'Attention-needed states' },
  { name: 'danger', cssVariable: '--pt-color-danger', value: '#C0414D', role: 'Destructive and blocking states' },
  { name: 'info', cssVariable: '--pt-color-info', value: '#1D4ED8', role: 'Informational states, never actions' },
] as const satisfies readonly TokenRecord[]

export const designSystemMetadata = {
  name: 'ParyatechOS',
  source: 'Paryatech Design System.dc.html',
  themeModes: ['light'],
  tokenArchitecture: ['brand primitives', 'semantic aliases', 'component leaves'],
  fonts: { heading: 'Onest', body: 'Public Sans', data: 'JetBrains Mono' },
  rules: {
    action: 'Reserve filled teal for the one required next step in a region.',
    tables: 'Default to six columns; fold supporting values into a second line before adding a track.',
    data: 'Use tabular mono text for money, dates, identifiers and counts.',
    state: 'A blank price is missing, never free. Represent non-price outcomes explicitly.',
  },
  semanticColorTokens,
} as const
