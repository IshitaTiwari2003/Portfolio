import Link from 'next/link'
import { getPortfolioDetail } from '@/lib/detail'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { GlassCard } from '@/components/ui/GlassCard'
import { Github, Linkedin, PenLine, Download, Mail, Twitter, Globe } from 'lucide-react'

export default function Contact() {
  const detail = getPortfolioDetail()

  const socialLinks = [
    { key: 'github', icon: Github, label: 'GitHub', href: detail?.social?.github },
    { key: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: detail?.social?.linkedin },
    { key: 'medium', icon: PenLine, label: 'Medium', href: detail?.social?.medium },
    { key: 'twitter', icon: Twitter, label: 'Twitter', href: detail?.social?.twitter },
    { key: 'website', icon: Globe, label: 'Website', href: detail?.social?.website },
  ].filter((link) => link.href)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="Have a question or want to work together? Reach out."
        />
      </FadeIn>

      <div className="mt-12 space-y-8">
        <FadeIn delay={0.1}>
          <GlassCard className="p-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="section-label">Email</span>
                <a
                  href={`mailto:${detail?.social?.email || 'hello@example.com'}`}
                  className="inline-flex items-center gap-3 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  <Mail size={20} className="text-emerald-500" />
                  {detail?.social?.email || 'hello@example.com'}
                </a>
              </div>

              {socialLinks.length > 0 && (
                <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-6">
                  <span className="section-label">Social</span>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.key}
                        href={link.href!}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
                      >
                        <link.icon size={18} />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  )
}
