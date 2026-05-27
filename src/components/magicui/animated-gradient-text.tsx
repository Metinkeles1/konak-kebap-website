import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/5 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#c9a84c1a] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#c9a84c3f]',
        className
      )}
    >
      <div
        className="absolute inset-0 block size-full bg-linear-to-r from-[#C9A84C]/40 via-[#E8C96A]/40 to-[#8B6914]/40 bg-size-[var(--bg-size)_100%] p-px mask-subtract! rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
      />
      <span className="inline animate-gradient bg-linear-to-r from-[#C9A84C] via-[#E8C96A] to-[#8B6914] bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent">
        {children}
      </span>
    </div>
  );
}
