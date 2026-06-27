import Link from 'next/link'
import { getPortfolioDetail } from '@/lib/detail'
import { FadeIn } from '@/components/ui/FadeIn'
import { TagPill } from '@/components/ui/TagPill'
import { Avatar } from '@/components/ui/Avatar'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const detail = getPortfolioDetail()

  if (!detail) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-gray-500 dark:text-gray-400">
          No portfolio data found. Please add your details to <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">src/content/detail.md</code>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-start">
        <FadeIn direction="left">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="section-label">About</span>
              <div className="space-y-5">
                {detail.about.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <span className="section-label">Now</span>
                <ul className="space-y-3">
                  {detail.now.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <span className="text-emerald-500 mt-1.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  View Projects
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Read Writing
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <div className="lg:sticky lg:top-20 space-y-5">
            <Avatar
              src="/main.png"
              alt={detail.name}
              initials={detail.initials}
              className="w-44 h-56 sm:w-48 sm:h-64 lg:w-full lg:h-auto lg:aspect-[3/4] rounded-2xl mx-auto lg:mx-0 object-cover"
            />

            <div className="text-center lg:text-right space-y-1">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {detail.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {detail.role}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {detail.tagline}
              </p>
            </div>

            <FadeIn delay={0.4}>
              <div className="space-y-3">
                <span className="section-label">Expertise</span>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                  {detail.expertise.map((item, index) => (
                    <TagPill key={index} variant="accent">{item}</TagPill>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="space-y-3">
                <span className="section-label">Tech Stack</span>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                  {detail.stack.map((tech, index) => (
                    <TagPill key={index}>{tech}</TagPill>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
