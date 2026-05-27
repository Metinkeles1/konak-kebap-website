import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd } from '@/components/shared/json-ld';
import { getBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [{ name: 'Ana Sayfa', url: '/' }, ...items.map((i) => ({ name: i.name, url: i.href }))];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-gold transition-colors flex items-center" aria-label="Ana Sayfa">
          <Home className="w-3.5 h-3.5" />
        </Link>
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-border" />
            {i === items.length - 1 ? (
              <span className="text-gold">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-gold transition-colors">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
