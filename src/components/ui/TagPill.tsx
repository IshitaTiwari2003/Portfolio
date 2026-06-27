import { ReactNode } from 'react'

interface TagPillProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

export function TagPill({ children, variant = 'default', className = '' }: TagPillProps) {
  const variants = {
    default: 'tag-pill',
    accent: 'tag-pill-hover',
    outline: 'tag-pill border-emerald-300/50 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300',
  }

  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
