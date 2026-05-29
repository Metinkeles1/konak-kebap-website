import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SectionTitle } from '@/components/shared/section-title';
import { JsonLd } from '@/components/shared/json-ld';
import { faqs } from '@/lib/faq';
import { getFAQSchema } from '@/lib/schema';

export function FAQ() {
  return (
    <section className="section px-4 md:px-8">
      <JsonLd data={getFAQSchema(faqs)} />
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          kicker="Sıkça Sorulan Sorular"
          title="Merak Edilenler"
          description="Restoranımız hakkında en sık sorulan sorulara cevaplar."
        />
        <BlurFade delay={0.2} inView>
          <Accordion className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-display text-foreground hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
