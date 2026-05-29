import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl overflow-hidden border border-border bg-surface hover:border-gold/40 transition-all hover:-translate-y-1"
    >
      <div className="aspect-16/10 bg-linear-to-br from-gold-dim/30 via-ember/20 to-bg relative overflow-hidden">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-bg/80 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.readingTime && (
            <>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime} dk okuma
              </span>
            </>
          )}
        </div>
        <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors mt-3 leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm text-gold mt-4 group-hover:translate-x-1 transition-transform">
          Devamını oku <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
