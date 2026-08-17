import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export const buttonVariants = [
  'primary',
  'secondary',
  'outline',
  'ghost',
  'destructive',
  'link',
] as const

export const buttonSizes = ['default', 'sm'] as const

export type ButtonVariant = (typeof buttonVariants)[number]
export type ButtonSize = (typeof buttonSizes)[number]

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual hierarchy and intent. This maps to Figma's Type property. */
  variant?: ButtonVariant
  /** Control density. `default` is 40px and `sm` is 32px. */
  size?: ButtonSize
  /** Optional decorative icon before the label. */
  leftIcon?: ReactNode
  /** Optional decorative icon after the label. */
  rightIcon?: ReactNode
  /** Announces progress and prevents repeat activation. */
  loading?: boolean
}

/**
 * Mofi's standard action control. Use a real link for navigation, even when it
 * is styled like the `link` variant.
 */
export function Button({
  variant = 'primary',
  size = 'default',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading
  const classes = [
    'mofi-button',
    `mofi-button--${variant}`,
    `mofi-button--${size}`,
    loading ? 'mofi-button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      className={classes}
      disabled={isDisabled}
      type={type}
    >
      {loading ? <span aria-hidden="true" className="mofi-button__spinner" /> : null}
      {!loading && leftIcon ? (
        <span aria-hidden="true" className="mofi-button__icon">
          {leftIcon}
        </span>
      ) : null}
      <span className="mofi-button__label">{children}</span>
      {!loading && rightIcon ? (
        <span aria-hidden="true" className="mofi-button__icon">
          {rightIcon}
        </span>
      ) : null}
    </button>
  )
}
