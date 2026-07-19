import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { GlassCard } from '@/components/ui/GlassCard'
import { ExternalLink, Download } from 'lucide-react'

const certificates = [
  {
    title: 'Agile Scrum in Practice',
    file: 'Agile Scrum in Practice_certificate.pdf',
  },
  {
    title: 'Big Data',
    file: 'Big Data_certificate.pdf',
  },
  {
    title: 'Cloud Technologies',
    file: 'Cloud Technologies_certificate.pdf',
  },
  {
    title: 'Data Science',
    file: 'Data Science_certificate.pdf',
  },
  {
    title: 'Excel',
    file: 'Excel_certificate.pdf',
  },
  {
    title: 'Introduction to Business Intelligence',
    file: 'Introduction to Business Intelligence_certificate.pdf',
  },
  {
    title: 'Introduction to Entity Relationship (ER) Modeling',
    file: 'Introduction to Entity Relationship ER Modeling_certificate.pdf',
  },
  {
    title: 'Learning Microsoft Power BI',
    file: 'Learning Microsoft Power BI_certificate.pdf',
  },
  {
    title: 'Software Engineering and Agile Software Development',
    file: 'Software Engineering and Agile software development_certificate.pdf',
  },
  {
    title: 'TechA Data Analytics using Power BI Foundation Certification',
    file: 'TechA Data Analytics using Power BI Foundation Certification.pdf',
  },
]

export default function Certificates() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <SectionHeader
          label="Certificates"
          title="Certificates & Publications"
          description="Research work and professional certifications I've earned."
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-16">
          <span className="section-label">Research Paper</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-2">
            Publications
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
            Research work presented at academic conferences.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <StaggerItem>
          <GlassCard variant="hover" className="p-6 h-full flex flex-col">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              ComSIA Research Paper Certificate
            </h3>
            <div className="mt-auto flex items-center gap-3">
              <a
                href={`/${encodeURIComponent('ComSIA_Research_Paper_Certificate.pdf')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                View
                <ExternalLink size={14} />
              </a>
              <a
                href={`/${encodeURIComponent('ComSIA_Research_Paper_Certificate.pdf')}`}
                download
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                Download
                <Download size={14} />
              </a>
            </div>
          </GlassCard>
        </StaggerItem>
      </StaggerChildren>

      <FadeIn>
        <div className="mt-16">
          <span className="section-label">Certificates</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-2">
            Professional certifications
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
            Courses and certifications I've completed to deepen my skills.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {certificates.map((cert, index) => (
          <StaggerItem key={index}>
            <GlassCard variant="hover" className="p-6 h-full flex flex-col">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {cert.title}
              </h3>
              <div className="mt-auto flex items-center gap-3">
                <a
                  href={`/${encodeURIComponent(cert.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  View
                  <ExternalLink size={14} />
                </a>
                <a
                  href={`/${encodeURIComponent(cert.file)}`}
                  download
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  Download
                  <Download size={14} />
                </a>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
