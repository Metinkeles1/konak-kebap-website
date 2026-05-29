import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-display text-gold mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-display text-foreground mt-10 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-display text-foreground mt-8 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-foreground/90 leading-relaxed my-4 text-base md:text-lg">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href ?? '#'}
        className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 my-4 space-y-2 text-foreground/90">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 my-4 space-y-2 text-foreground/90">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-6 py-2 my-6 italic text-foreground/80 bg-surface/50">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => <strong className="text-gold font-semibold">{children}</strong>,
    hr: () => <hr className="border-border my-12" />,
    ...components,
  };
}
