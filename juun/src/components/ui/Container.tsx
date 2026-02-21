import { cn } from '@/lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={cn('ui-container', className)}>
      {children}
    </Tag>
  )
}
