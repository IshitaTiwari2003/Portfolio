'use client'

import { motion } from 'framer-motion'

interface TextLogoProps {
  initials?: string
}

export function TextLogo({ initials = 'IT' }: TextLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        w-10 h-10 flex items-center justify-center
        bg-gray-900 dark:bg-gray-100
        text-gray-100 dark:text-gray-900
        font-mono text-sm font-bold
        rounded-xl
        shadow-md hover:shadow-lg
        hover:bg-emerald-600 dark:hover:bg-emerald-400
        hover:text-white dark:hover:text-gray-900
        transition-colors duration-200
      "
      aria-label="Home"
    >
      {initials}
    </motion.div>
  )
}
