'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TextLogo } from '@/components/ui/TextLogo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <TextLogo />
            <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
              Ishita Tiwari
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                  ${pathname === link.href
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }
                `}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-800">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <nav className="md:hidden pb-3 -mx-2 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-2 min-w-max">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200
                  ${pathname === link.href
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
