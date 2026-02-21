'use client'

import { cn } from '@/lib/cn'

interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  variant?: 'flavor' | 'pack'
  note?: string
}

export default function Pill({
  active = false,
  variant = 'flavor',
  note,
  className,
  children,
  ...props
}: PillProps) {
  const base =
    'font-[family-name:var(--font-unbounded)] text-[0.58rem] tracking-[0.06em] ' +
    'border transition-all duration-200 cursor-pointer ui-ring'

  const flavorClasses = cn(
    base,
    'px-4 py-[0.6rem] rounded-full',
    active
      ? 'bg-[var(--black)] text-[var(--linen)] border-[var(--black)]'
      : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:text-[var(--black)] hover:border-[var(--black)]'
  )

  const packClasses = cn(
    base,
    'flex-1 px-2 py-3 rounded-[var(--r-sm)] text-center flex flex-col items-center gap-1',
    active
      ? 'bg-[var(--black)] text-[var(--linen)] border-[var(--black)]'
      : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:text-[var(--black)] hover:border-[rgba(35,31,32,0.35)]'
  )

  return (
    <button
      className={cn(variant === 'flavor' ? flavorClasses : packClasses, className)}
      {...props}
    >
      {children}
      {note && (
        <span className="block text-[0.44rem] opacity-60 mt-0.5">{note}</span>
      )}
    </button>
  )
}
