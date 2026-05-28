import { UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DishPlaceholderProps {
  name: string;
  className?: string;
  showName?: boolean;
}

export function DishPlaceholder({ name, className, showName = true }: DishPlaceholderProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-linear-to-br from-gold-dim/20 via-ember/10 to-surface',
        className
      )}
      aria-hidden="true"
    >
      <UtensilsCrossed className="h-7 w-7 sm:h-9 sm:w-9 text-gold/35" strokeWidth={1.5} />
      {showName && (
        <span className="font-display text-gold/45 text-xs sm:text-sm px-3 text-center leading-tight line-clamp-2">
          {name}
        </span>
      )}
    </div>
  );
}
