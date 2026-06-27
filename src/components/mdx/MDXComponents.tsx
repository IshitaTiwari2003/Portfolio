/**
 * Custom MDX components for blog post rendering.
 * Provides styled versions of standard HTML elements with emerald accent.
 */
export const mdxComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-10 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-8 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline underline-offset-2 decoration-gray-400 dark:decoration-gray-600 hover:decoration-emerald-500 dark:hover:decoration-emerald-400 transition-colors duration-200"
      {...props}
    >
      {children}
    </a>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 overflow-x-auto mb-6 rounded-xl" {...props}>
      {children}
    </pre>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-gray-600 dark:text-gray-400 my-6" {...props}>
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-none pl-0 my-4 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 my-4 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2" {...props}>
      <span className="text-emerald-500 mt-1.5">—</span>
      <span>{children}</span>
    </li>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-gray-200 dark:border-gray-800 my-8" {...props} />
  ),
}
