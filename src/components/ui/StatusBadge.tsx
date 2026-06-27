type Status = 'active' | 'archived' | 'open-source' | 'wip'

interface StatusBadgeProps {
  status: Status
}

const statusLabels: Record<Status, string> = {
  active: 'Active',
  archived: 'Archived',
  'open-source': 'Open Source',
  wip: 'WIP',
}

const statusColors: Record<Status, string> = {
  active: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/50',
  archived: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200/50 dark:border-gray-700/50',
  'open-source': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/50',
  wip: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/50',
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono
        border backdrop-blur-sm
        ${statusColors[status]}
      `}
    >
      {statusLabels[status]}
    </span>
  )
}
