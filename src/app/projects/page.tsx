import Link from 'next/link'
import { getPortfolioDetail } from '@/lib/detail'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { GlassCard } from '@/components/ui/GlassCard'
import { TagPill } from '@/components/ui/TagPill'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const detail = getPortfolioDetail()

  if (!detail?.projects?.length) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader label="Projects" title="Selected work" />
        <p className="text-gray-500 dark:text-gray-400 mt-8">
          No projects found. Please add your projects to <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">src/content/detail.md</code>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <SectionHeader
          label="Projects"
          title="Selected work"
          description="A collection of projects I've built and contributed to."
        />
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {detail.projects.map((project, index) => (
          <StaggerItem key={index}>
            <GlassCard variant="hover" className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      <Github size={16} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <TagPill key={i}>{tech}</TagPill>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
