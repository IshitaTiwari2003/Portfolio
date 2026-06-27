export interface Project {
  id: string
  title: string
  category: 'open-source' | 'client' | 'side-project' | 'experiment'
  status: 'active' | 'archived' | 'open-source' | 'wip'
  description: string
  stack: string[]
  github?: string
  live?: string
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  achievements: string[]
}

export interface Principle {
  index: number
  title: string
  body: string
}

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readingTime: number
  content: string
  externalUrl?: string
  platform?: 'medium' | 'linkedin' | 'devto' | 'hashnode' | 'other'
}

export interface PostFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  externalUrl?: string
  platform?: 'medium' | 'linkedin' | 'devto' | 'hashnode' | 'other'
}

export interface ExternalPost {
  title: string
  date: string
  description: string
  tags: string[]
  url: string
  platform: 'medium' | 'linkedin' | 'devto' | 'hashnode' | 'other'
}
