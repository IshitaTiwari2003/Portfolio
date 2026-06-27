import { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <span className="section-label">{label}</span>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      {description && (
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
