import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { GlassCard } from '@/components/ui/GlassCard'
import { ExternalLink, BookOpen } from 'lucide-react'

const platformIcons: Record<string, string> = {
  medium: 'M',
  linkedin: 'in',
  devto: 'D',
  hashnode: 'H',
  other: 'E',
}

const platformColors: Record<string, string> = {
  medium: 'bg-black text-white',
  linkedin: 'bg-[#0077B5] text-white',
  devto: 'bg-[#0A0A0A] text-white',
  hashnode: 'bg-[#2962FF] text-white',
  other: 'bg-gray-500 text-white',
}

export default function Writing() {
  const posts = getAllPosts()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <SectionHeader
          label="Writing"
          title="Thoughts and insights"
          description="Writing about software, AI, and the craft of building things."
        />
      </FadeIn>

      {posts.length > 0 ? (
        <StaggerChildren className="mt-12 space-y-4">
          {posts.map((post) => {
            const isExternal = !!post.externalUrl
            const href = isExternal ? post.externalUrl! : `/writing/${post.slug}`

            return (
              <StaggerItem key={post.slug}>
                <Link
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <GlassCard variant="hover" className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <time
                          dateTime={post.date}
                          className="font-mono text-sm text-gray-400 dark:text-gray-500"
                        >
                          {post.date}
                        </time>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        {isExternal && (
                          <ExternalLink size={14} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {post.platform && (
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold ${platformColors[post.platform] || platformColors.other}`}>
                            {platformIcons[post.platform] || 'E'}
                          </span>
                        )}
                        {post.readingTime > 0 && (
                          <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                            {post.readingTime} min read
                          </span>
                        )}
                      </div>
                    </div>
                    {post.description && (
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post.description}
                      </p>
                    )}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs text-emerald-600 dark:text-emerald-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      ) : (
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center py-16 glass-card rounded-2xl">
            <BookOpen size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No posts yet. Check back soon.
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
