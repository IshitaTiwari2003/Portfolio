interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200/50 dark:border-gray-700/50',
    accent: 'bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/50',
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono border backdrop-blur-sm ${variants[variant]}`}>
      {children}
    </span>
  )
}
