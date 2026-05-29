import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function MobileCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden border-t border-border bg-background px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="flex gap-2">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gold/40 text-gold py-3 text-sm font-semibold active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" />
          Ara
        </a>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white py-3 text-sm font-semibold active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Sipariş
        </a>
      </div>
    </div>
  );
}
