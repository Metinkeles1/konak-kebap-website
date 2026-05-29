import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  onDark?: boolean;
  className?: string;
}

export function SectionTitle({
  kicker,
  title,
  description,
  align = 'center',
  as: Heading = 'h2',
  onDark = false,
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
      <Heading
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1.05]',
          onDark ? 'text-bg' : 'text-foreground'
        )}
      >
        {title}
      </Heading>
      <div
        className={cn('h-px bg-gold/60 mt-6 mb-4', align === 'center' ? 'mx-auto w-16' : 'w-16')}
      />
      {description && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed mt-4',
            onDark ? 'text-bg/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
