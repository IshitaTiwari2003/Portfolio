import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  variant?: 'default' | 'hover' | 'strong'
  className?: string
}

export function GlassCard({ children, variant = 'default', className = '' }: GlassCardProps) {
  const variants = {
    default: 'glass-card',
    hover: 'glass-card-hover',
    strong: 'glass-strong rounded-2xl',
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
