import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
} from 'react'
import { ChevronRight, Search, X } from 'lucide-react'
import './components.css'

const cx = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(' ')

export const buttonVariants = ['primary', 'secondary', 'tertiary', 'ghost', 'destructive'] as const
export const buttonSizes = ['sm', 'md'] as const
export type ButtonVariant = (typeof buttonVariants)[number]
export type ButtonSize = (typeof buttonSizes)[number]

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', leadingIcon, trailingIcon, loading, disabled, className, children, type = 'button', ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx('pt-button', `pt-button--${variant}`, `pt-button--${size}`, className)}
    >
      {loading ? <span className="pt-spinner" aria-hidden="true" /> : leadingIcon ? <span className="pt-button__icon" aria-hidden="true">{leadingIcon}</span> : null}
      <span>{children}</span>
      {!loading && trailingIcon ? <span className="pt-button__icon" aria-hidden="true">{trailingIcon}</span> : null}
    </button>
  )
})

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon: ReactNode
  treatment?: 'shell' | 'row' | 'destructive'
  active?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, icon, treatment = 'shell', active, className, type = 'button', ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cx('pt-icon-button', `pt-icon-button--${treatment}`, active && 'is-active', className)}
    >
      <span aria-hidden="true">{icon}</span>
      {active ? <span className="pt-icon-button__dot" aria-hidden="true" /> : null}
    </button>
  )
})

export const statusTones = ['neutral', 'success', 'warning', 'danger', 'info'] as const
export type StatusTone = (typeof statusTones)[number]

export function StatusBadge({ tone = 'neutral', children, dot = true, className }: { tone?: StatusTone; children: ReactNode; dot?: boolean; className?: string }) {
  return <span className={cx('pt-badge', `pt-tone--${tone}`, className)}>{dot ? <span className="pt-badge__dot" aria-hidden="true" /> : null}{children}</span>
}

export function KindBadge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx('pt-kind-badge', className)}>{children}</span>
}

export function CountBadge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx('pt-count-badge', className)}>{children}</span>
}

export function ReadinessChip({ tone, children, selected, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone: 'success' | 'warning' | 'danger'; selected?: boolean }) {
  return <button {...props} type="button" aria-pressed={selected} className={cx('pt-readiness-chip', `pt-tone--${tone}`, props.className)}><span className="pt-badge__dot" aria-hidden="true" />{children}</button>
}

const avatarPalette = ['teal', 'pink', 'amber', 'blue', 'neutral'] as const
export type AvatarTone = (typeof avatarPalette)[number]
export function Avatar({ initials, name, size = 'md', tone = 'teal' }: { initials: string; name: string; size?: 'sm' | 'md' | 'lg'; tone?: AvatarTone }) {
  return <span aria-label={name} role="img" className={cx('pt-avatar', `pt-avatar--${size}`, `pt-avatar--${tone}`)}>{initials.slice(0, 2).toUpperCase()}</span>
}

type FieldShellProps = { label?: string; hint?: string; error?: string; id?: string; children: (id: string, describedBy?: string) => ReactNode }
function FieldShell({ label, hint, error, id: providedId, children }: FieldShellProps) {
  const generatedId = useId()
  const id = providedId || generatedId
  const messageId = hint || error ? `${id}-message` : undefined
  return <div className="pt-field-shell">{label ? <label className="pt-field-label" htmlFor={id}>{label}</label> : null}{children(id, messageId)}{error || hint ? <span id={messageId} className={cx('pt-field-message', error && 'is-error')}>{error || hint}</span> : null}</div>
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string }>(function Input(
  { label, hint, error, id, className, ...props }, ref,
) {
  return <FieldShell label={label} hint={hint} error={error} id={id}>{(fieldId, describedBy) => <input {...props} ref={ref} id={fieldId} aria-describedby={describedBy} aria-invalid={Boolean(error) || undefined} className={cx('pt-input', error && 'is-error', className)} />}</FieldShell>
})

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { label?: string; hint?: string; error?: string }>(function Select(
  { label, hint, error, id, className, children, ...props }, ref,
) {
  return <FieldShell label={label} hint={hint} error={error} id={id}>{(fieldId, describedBy) => <select {...props} ref={ref} id={fieldId} aria-describedby={describedBy} aria-invalid={Boolean(error) || undefined} className={cx('pt-select', error && 'is-error', className)}>{children}</select>}</FieldShell>
})

export const SearchField = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & { size?: 'toolbar' | 'global'; label?: string }>(function SearchField(
  { size = 'toolbar', label = 'Search', className, ...props }, ref,
) {
  return <label className={cx('pt-search-field', `pt-search-field--${size}`, className)}><Search size={17} strokeWidth={1.9} aria-hidden="true" /><span className="pt-sr-only">{label}</span><input {...props} ref={ref} type="search" /></label>
})

export const Checkbox = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label?: ReactNode; indeterminate?: boolean }>(function Checkbox(
  { label, indeterminate, className, ...props }, forwardedRef,
) {
  const localRef = useRef<HTMLInputElement>(null)
  useEffect(() => { if (localRef.current) localRef.current.indeterminate = Boolean(indeterminate) }, [indeterminate])
  const setRef = (node: HTMLInputElement | null) => {
    localRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }
  return <label className={cx('pt-checkbox', className)}><input {...props} ref={setRef} type="checkbox" /><span className="pt-checkbox__box" aria-hidden="true" /><span>{label}</span></label>
})

export type SegmentOption = { label: string; value: string }
export function SegmentedControl({ value, options, onChange, label = 'View' }: { value: string; options: readonly SegmentOption[]; onChange: (value: string) => void; label?: string }) {
  return <div className="pt-segmented" role="group" aria-label={label}>{options.map(option => <button key={option.value} type="button" aria-pressed={value === option.value} onClick={() => onChange(option.value)}>{option.label}</button>)}</div>
}

export type TabItem = { id: string; label: string; count?: number }
export function Tabs({ items, value, onChange, ariaLabel = 'Sections' }: { items: readonly TabItem[]; value: string; onChange: (id: string) => void; ariaLabel?: string }) {
  return <div className="pt-tabs" role="tablist" aria-label={ariaLabel}>{items.map(item => <button key={item.id} role="tab" type="button" aria-selected={value === item.id} tabIndex={value === item.id ? 0 : -1} onClick={() => onChange(item.id)}>{item.label}{item.count !== undefined ? <CountBadge>{item.count}</CountBadge> : null}</button>)}</div>
}

export type BreadcrumbItem = { label: string; href?: string }
export function Breadcrumbs({ items, ariaLabel = 'Breadcrumb' }: { items: readonly BreadcrumbItem[]; ariaLabel?: string }) {
  return <nav aria-label={ariaLabel}><ol className="pt-breadcrumbs">{items.map((item, index) => <li key={`${item.label}-${index}`}>{index ? <ChevronRight size={14} aria-hidden="true" /> : null}{item.href && index < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.label}</span>}</li>)}</ol></nav>
}

export function Pagination({ page, pageCount, onChange, label = 'Pagination' }: { page: number; pageCount: number; onChange: (page: number) => void; label?: string }) {
  return <nav className="pt-pagination" aria-label={label}>{Array.from({ length: pageCount }, (_, index) => index + 1).map(item => <button key={item} type="button" aria-current={item === page ? 'page' : undefined} onClick={() => onChange(item)}>{item}</button>)}</nav>
}

export function Toolbar({ search, filters, secondaryAction, primaryAction, className }: { search?: ReactNode; filters?: ReactNode; secondaryAction?: ReactNode; primaryAction?: ReactNode; className?: string }) {
  return <div className={cx('pt-toolbar', className)}>{search ? <div className="pt-toolbar__search">{search}</div> : null}{filters ? <div className="pt-toolbar__filters">{filters}</div> : null}<div className="pt-toolbar__spacer" />{secondaryAction}{primaryAction}</div>
}

export type DataColumn<Row> = { id: string; header: ReactNode; cell: (row: Row) => ReactNode; width?: string; align?: 'start' | 'center' | 'end' }
export type DataTableProps<Row> = {
  columns: readonly DataColumn<Row>[]
  rows: readonly Row[]
  getRowId: (row: Row) => string
  selectedIds?: readonly string[]
  onSelectionChange?: (ids: string[]) => void
  empty?: ReactNode
  bulkActions?: ReactNode
  footer?: ReactNode
  className?: string
}

export function DataTable<Row>({ columns, rows, getRowId, selectedIds = [], onSelectionChange, empty, bulkActions, footer, className }: DataTableProps<Row>) {
  const selected = new Set(selectedIds)
  const allSelected = rows.length > 0 && rows.every(row => selected.has(getRowId(row)))
  const toggleAll = () => onSelectionChange?.(allSelected ? [] : rows.map(getRowId))
  const toggleRow = (id: string) => onSelectionChange?.(selected.has(id) ? selectedIds.filter(value => value !== id) : [...selectedIds, id])
  const tracks = `${onSelectionChange ? '52px ' : ''}${columns.map(column => column.width || 'minmax(120px, 1fr)').join(' ')}`
  return <div className={cx('pt-table', className)}><div className="pt-table__scroll"><div className="pt-table__grid" style={{ gridTemplateColumns: tracks }}>{onSelectionChange ? <div className="pt-table__head pt-table__check"><Checkbox aria-label="Select all rows" checked={allSelected} indeterminate={selectedIds.length > 0 && !allSelected} onChange={toggleAll} /></div> : null}{columns.map(column => <div key={column.id} className={cx('pt-table__head', `is-${column.align || 'start'}`)}>{column.header}</div>)}{rows.length ? rows.flatMap(row => { const id = getRowId(row); const cells: ReactNode[] = []; if (onSelectionChange) cells.push(<div key={`${id}-check`} className={cx('pt-table__cell', 'pt-table__check', selected.has(id) && 'is-selected')}><Checkbox aria-label={`Select row ${id}`} checked={selected.has(id)} onChange={() => toggleRow(id)} /></div>); columns.forEach(column => cells.push(<div key={`${id}-${column.id}`} className={cx('pt-table__cell', `is-${column.align || 'start'}`, selected.has(id) && 'is-selected')}>{column.cell(row)}</div>)); return cells }) : <div className="pt-table__empty" style={{ gridColumn: `1 / span ${columns.length + (onSelectionChange ? 1 : 0)}` }}>{empty || 'No records'}</div>}</div></div>{selectedIds.length > 0 ? <div className="pt-table__bulk"><strong>{selectedIds.length} selected</strong><div>{bulkActions}</div></div> : null}{footer ? <div className="pt-table__footer">{footer}</div> : null}</div>
}

export type SummaryMetric = { label: string; value: ReactNode; note?: ReactNode; tone?: 'default' | 'success' | 'warning' | 'danger' | 'info' }
export function SummaryPanel({ title, metrics, columns = 4 }: { title: ReactNode; metrics: readonly SummaryMetric[]; columns?: 2 | 3 | 4 }) {
  return <section className="pt-summary"><header><h3>{title}</h3></header><div className="pt-summary__grid" style={{ '--pt-summary-columns': columns } as CSSProperties}>{metrics.map((metric, index) => <div className="pt-summary__metric" key={`${metric.label}-${index}`}><span>{metric.label}</span><strong className={cx(metric.tone && `is-${metric.tone}`)}>{metric.value}</strong>{metric.note ? <small>{metric.note}</small> : null}</div>)}</div></section>
}

export function EmptyState({ icon, title, description, action }: { icon?: ReactNode; title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return <div className="pt-empty-state">{icon ? <div className="pt-empty-state__icon" aria-hidden="true">{icon}</div> : null}<strong>{title}</strong>{description ? <p>{description}</p> : null}{action ? <div>{action}</div> : null}</div>
}

export function LoadingState({ rows = 3, label = 'Loading' }: { rows?: number; label?: string }) {
  return <div className="pt-loading" role="status" aria-label={label}><div className="pt-loading__header">Loading</div>{Array.from({ length: rows }, (_, index) => <div className="pt-loading__row" key={index}><span className="pt-skeleton is-avatar" /><span className="pt-loading__lines"><span className="pt-skeleton is-line" /><span className="pt-skeleton is-line-short" /></span><span className="pt-skeleton is-pill" /></div>)}</div>
}

export function Modal({ open, eyebrow, title, children, footer, onClose, className }: { open: boolean; eyebrow?: ReactNode; title: ReactNode; children: ReactNode; footer?: ReactNode; onClose: () => void; className?: string }) {
  if (!open) return null
  return <div className="pt-modal-layer" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}><section className={cx('pt-modal', className)} role="dialog" aria-modal="true" aria-labelledby="pt-modal-title"><header>{eyebrow ? <span className="pt-overline">{eyebrow}</span> : null}<div><h2 id="pt-modal-title">{title}</h2><IconButton treatment="shell" label="Close" icon={<X size={15} />} onClick={onClose} /></div></header><div className="pt-modal__body">{children}</div>{footer ? <footer>{footer}</footer> : null}</section></div>
}

export type MenuItem = { id: string; label: ReactNode; disabled?: boolean }
export function Menu({ label, items, selectedId, onSelect, className }: { label?: ReactNode; items: readonly MenuItem[]; selectedId?: string; onSelect: (id: string) => void; className?: string }) {
  return <div className={cx('pt-menu', className)} role="menu" aria-label={typeof label === 'string' ? label : undefined}>{label ? <div className="pt-menu__label">{label}</div> : null}{items.map(item => <button key={item.id} type="button" role="menuitemradio" aria-checked={selectedId === item.id} disabled={item.disabled} onClick={() => onSelect(item.id)}>{item.label}{selectedId === item.id ? <span aria-hidden="true">✓</span> : null}</button>)}</div>
}

export type PriceState = 'entered' | 'included' | 'complimentary' | 'on-request' | 'not-offered' | 'missing'
export function PriceCell({ amount, currency = '₹', state = 'entered', taxLabel, onClick }: { amount?: string | number; currency?: string; state?: PriceState; taxLabel?: string; onClick?: () => void }) {
  const labels: Record<Exclude<PriceState, 'entered'>, string> = { included: 'Included', complimentary: 'Complimentary', 'on-request': 'On request', 'not-offered': 'Not offered', missing: 'Missing' }
  return <button type="button" onClick={onClick} className={cx('pt-price-cell', `is-${state}`)}><strong>{state === 'entered' ? `${currency} ${amount}` : labels[state]}</strong><small>{state === 'missing' ? 'Not entered' : taxLabel}</small></button>
}

export type RateCardColumn = { id: string; label: ReactNode }
export type RateCardRow = { id: string; title: ReactNode; subtitle?: ReactNode; facts?: readonly ReactNode[]; prices: Record<string, { amount?: string | number; state?: PriceState; taxLabel?: string }> }
export function RateCardTable({ selector, columns, rows, onAdd, onPriceClick, actions }: { selector?: ReactNode; columns: readonly RateCardColumn[]; rows: readonly RateCardRow[]; onAdd?: () => void; onPriceClick?: (rowId: string, columnId: string) => void; actions?: ReactNode }) {
  const tracks = `minmax(240px, 1.35fr) ${columns.map(() => 'minmax(164px, 1fr)').join(' ')}`
  return <section className="pt-rate-card"><header>{selector}<div>{actions}{onAdd ? <Button onClick={onAdd}>Add product</Button> : null}</div></header><div className="pt-rate-card__scroll"><div className="pt-rate-card__grid" style={{ gridTemplateColumns: tracks }}><div className="pt-rate-card__head">Product</div>{columns.map(column => <div key={column.id} className="pt-rate-card__head">{column.label}</div>)}{rows.flatMap(row => [<div key={`${row.id}-product`} className="pt-rate-card__product"><strong>{row.title}</strong>{row.subtitle ? <small>{row.subtitle}</small> : null}{row.facts?.length ? <span>{row.facts.map((fact, index) => <em key={index}>{fact}</em>)}</span> : null}</div>, ...columns.map(column => { const price = row.prices[column.id] || { state: 'missing' as const }; return <div key={`${row.id}-${column.id}`} className="pt-rate-card__price"><PriceCell {...price} onClick={() => onPriceClick?.(row.id, column.id)} /></div> })])}</div></div><footer>Click a price cell to type an amount, or use a named state for non-price outcomes. Blank is missing, never free.</footer></section>
}

export function DataPair({ primary, secondary, className }: { primary: ReactNode; secondary?: ReactNode; className?: string }) {
  return <div className={cx('pt-data-pair', className)}><strong>{primary}</strong>{secondary ? <small>{secondary}</small> : null}</div>
}

export function ScreenReaderOnly({ children }: { children: ReactNode }) { return <span className="pt-sr-only">{children}</span> }

export type { HTMLAttributes }
