import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionTitle({
  kicker,
  title,
  description,
  align = 'center',
  as: Heading = 'h2',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {kicker && <p className="kicker mb-4">{kicker}</p>}
      <Heading className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-cream tracking-tight leading-[1.05]">{title}</Heading>
      <div
        className={cn('h-px bg-gold/60 mt-6 mb-4', align === 'center' ? 'mx-auto w-16' : 'w-16')}
      />
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
