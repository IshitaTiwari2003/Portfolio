import { getPortfolioDetail } from '@/lib/detail'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { GlassCard } from '@/components/ui/GlassCard'

export default function Philosophy() {
  const detail = getPortfolioDetail()

  if (!detail?.principles?.length) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader label="Philosophy" title="How I think about engineering" />
        <p className="text-gray-500 dark:text-gray-400 mt-8">
          No principles found. Please add your philosophy to <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">src/content/detail.md</code>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <SectionHeader
          label="Philosophy"
          title="How I think about engineering"
          description="Principles that guide how I build and think about software."
        />
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {detail.principles.map((principle, index) => (
          <StaggerItem key={index}>
            <GlassCard variant="hover" className="p-6 h-full">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {principle.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {principle.body}
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
