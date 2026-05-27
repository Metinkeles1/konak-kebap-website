import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  kicker,
  title,
  description,
  align = 'center',
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
      <h2 className="text-3xl md:text-5xl font-display text-cream leading-tight">{title}</h2>
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
