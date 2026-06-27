import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FadeIn } from '@/components/ui/FadeIn'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts
    .filter((post) => !post.externalUrl)
    .map((post) => ({
      slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  if (post.externalUrl) {
    return {
      title: `${post.title} — Ishita Tiwari`,
      description: post.description,
      redirect: post.externalUrl,
    }
  }

  return {
    title: `${post.title} — Ishita Tiwari`,
    description: post.description,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  if (post.externalUrl) {
    redirect(post.externalUrl)
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={14} />
          Writing
        </Link>

        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <time
              dateTime={post.date}
              className="font-mono text-sm text-gray-400 dark:text-gray-500"
            >
              {post.date}
            </time>
            <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
              · {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              {post.description}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-sm text-emerald-600 dark:text-emerald-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-8">
          <div className="prose-custom">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </FadeIn>
    </article>
  )
}
