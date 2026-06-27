import Link from 'next/link'
import { Github, Linkedin, PenLine } from 'lucide-react'

interface FooterProps {
  name?: string
  social?: {
    github?: string
    linkedin?: string
    medium?: string
  }
}

export function Footer({ name = 'Ishita Tiwari', social }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-800/50 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {name}
          </p>
          <div className="flex items-center gap-4">
            {social?.github && (
              <Link
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Github size={18} strokeWidth={1.5} />
              </Link>
            )}
            {social?.linkedin && (
              <Link
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </Link>
            )}
            {social?.medium && (
              <Link
                href={social.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <PenLine size={18} strokeWidth={1.5} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
