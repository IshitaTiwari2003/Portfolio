import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface SocialLinks {
  email: string
  github: string
  linkedin: string
  medium?: string
  twitter?: string
  website?: string
  youtube?: string
  discord?: string
}

export interface ProjectDetail {
  title: string
  category: 'open-source' | 'client' | 'side-project' | 'experiment'
  status: 'active' | 'archived' | 'open-source' | 'wip'
  description: string
  stack: string[]
  github?: string
  live?: string
}

export interface ExperienceDetail {
  company: string
  role: string
  startDate: string
  endDate: string
  achievements: string[]
}

export interface PrincipleDetail {
  title: string
  body: string
}

export interface RepoDetail {
  name: string
  url: string
  description: string
  stars?: number
  forks?: number
}

export interface ArticleDetail {
  title: string
  url: string
  platform: 'medium' | 'linkedin' | 'devto' | 'hashnode' | 'other'
  date: string
}

export interface PortfolioDetail {
  name: string
  role: string
  tagline: string
  initials: string
  about: string[]
  now: string[]
  expertise: string[]
  stack: string[]
  social: SocialLinks
  projects: ProjectDetail[]
  experience: ExperienceDetail[]
  principles: PrincipleDetail[]
  repos: RepoDetail[]
  articles: ArticleDetail[]
  body: string
}

const detailPath = path.join(process.cwd(), 'src/content/detail.md')
const linkPath = path.join(process.cwd(), 'src/content/link.md')

function readFileIfExists(filePath: string): { data: Record<string, unknown>; content: string } | null {
  if (!fs.existsSync(filePath)) {
    return null
  }
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return matter(fileContents)
}

export function getPortfolioDetail(): PortfolioDetail | null {
  const detailData = readFileIfExists(detailPath)
  const linkData = readFileIfExists(linkPath)

  if (!detailData && !linkData) {
    return null
  }

  const detail = detailData?.data || {}
  const link = linkData?.data || {}

  const socialFromDetail = (detail.social || {}) as Record<string, string>
  const socialFromLink = (link.social || {}) as Record<string, string>
  const mergedSocial: SocialLinks = {
    email: socialFromLink.email || socialFromDetail.email || '',
    github: socialFromLink.github || socialFromDetail.github || '',
    linkedin: socialFromLink.linkedin || socialFromDetail.linkedin || '',
    medium: socialFromLink.medium || socialFromDetail.medium || '',
    twitter: socialFromLink.twitter || socialFromDetail.twitter || '',
    website: socialFromLink.website || socialFromDetail.website || '',
    youtube: socialFromLink.youtube || socialFromDetail.youtube || '',
    discord: socialFromLink.discord || socialFromDetail.discord || '',
  }

  return {
    name: (detail.name as string) || '',
    role: (detail.role as string) || '',
    tagline: (detail.tagline as string) || '',
    initials: (detail.initials as string) || '',
    about: (detail.about as string[]) || [],
    now: (detail.now as string[]) || [],
    expertise: (detail.expertise as string[]) || [],
    stack: (detail.stack as string[]) || [],
    social: mergedSocial,
    projects: (detail.projects as ProjectDetail[]) || [],
    experience: (detail.experience as ExperienceDetail[]) || [],
    principles: (detail.principles as PrincipleDetail[]) || [],
    repos: (link.repos as RepoDetail[]) || [],
    articles: (link.articles as ArticleDetail[]) || [],
    body: detailData?.content || '',
  }
}
