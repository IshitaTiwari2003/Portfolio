import { getPortfolioDetail } from '@/lib/detail'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'

export default function Experience() {
  const detail = getPortfolioDetail()

  if (!detail?.experience?.length) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader label="Experience" title="Where I've worked" />
        <p className="text-gray-500 dark:text-gray-400 mt-8">
          No experience found. Please add your experience to <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">src/content/detail.md</code>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          description="My professional journey and key accomplishments."
        />
      </FadeIn>

      <StaggerChildren className="mt-12 space-y-0">
        {detail.experience.map((role, index) => (
          <StaggerItem key={index}>
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0">
              <div className="absolute left-0 top-0 w-3 h-3 -ml-[7px] rounded-full bg-emerald-500 shadow-glow" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {role.company}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {role.role}
                  </p>
                </div>
                <time className="font-mono text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {role.startDate} — {role.endDate}
                </time>
              </div>

              <ul className="space-y-2">
                {role.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-emerald-500 mt-1">—</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
