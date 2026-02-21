import { cn } from '@/lib/cn'

type Variant = 'primary' | 'dark' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
  href?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'ui-btn-primary',
  dark:    'ui-btn-dark',
  ghost:   'ui-btn-ghost',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-[0.58rem] px-4 py-2',
  md: '',   // base size defined in ui-btn-* utilities
  lg: 'text-[0.72rem] px-8 py-5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(variantClasses[variant], sizeClasses[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
