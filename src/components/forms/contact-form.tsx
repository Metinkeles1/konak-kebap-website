'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  phone: z.string().regex(/^[0-9\s+()-]{10,}$/, 'Geçerli bir telefon numarası girin'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalı'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(contactSchema as any),
  });

  const onSubmit = (data: ContactFormData) => {
    const text = `Merhaba, ben ${data.name}.\n\n${data.message}\n\nTelefon: ${data.phone}`;
    const url = `${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    toast.success('WhatsApp&apos;a yönlendiriliyorsunuz...');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">İsim</Label>
        <Input id="name" {...register('name')} placeholder="Adınız Soyadınız" className="mt-2" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" type="tel" {...register('phone')} placeholder="0555 123 45 67" className="mt-2" />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">Mesaj</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Mesajınızı yazın..."
          rows={5}
          className="mt-2"
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          buttonVariants({ size: 'lg' }),
          'w-full bg-gold text-bg hover:bg-gold-light gap-2'
        )}
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp Üzerinden Gönder
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Formu doldurduğunuzda, WhatsApp üzerinden mesajınız iletilecektir.
      </p>
    </form>
  );
}
