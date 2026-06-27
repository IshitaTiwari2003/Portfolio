import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, PostFrontmatter, ExternalPost } from './types'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')
const detailPath = path.join(process.cwd(), 'src/content/detail.md')

function getLocalPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const frontmatter = data as PostFrontmatter
      const wordCount = content.split(/\s+/).length
      const readingTime = Math.ceil(wordCount / 200)

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        description: frontmatter.description,
        tags: frontmatter.tags,
        readingTime,
        content,
      }
    })
}

function getExternalPosts(): Post[] {
  if (!fs.existsSync(detailPath)) {
    return []
  }

  const fileContents = fs.readFileSync(detailPath, 'utf8')
  const { data } = matter(fileContents)

  const externalPosts = (data.posts || []) as ExternalPost[]

  return externalPosts.map((post) => ({
    slug: `external-${Buffer.from(post.url).toString('base64').slice(0, 10)}`,
    title: post.title,
    date: post.date,
    description: post.description,
    tags: post.tags,
    readingTime: 0,
    content: '',
    externalUrl: post.url,
    platform: post.platform,
  }))
}

export function getAllPosts(): Post[] {
  const localPosts = getLocalPosts()
  const externalPosts = getExternalPosts()

  const allPosts = [...localPosts, ...externalPosts]

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | null {
  if (slug.startsWith('external-')) {
    const externalPosts = getExternalPosts()
    return externalPosts.find((p) => p.slug === slug) || null
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const frontmatter = data as PostFrontmatter
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    tags: frontmatter.tags,
    readingTime,
    content,
  }
}
