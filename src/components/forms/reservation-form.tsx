'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, MessageCircle, Users } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

const reservationSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  phone: z.string().regex(/^[0-9\s+()-]{10,}$/, 'Geçerli telefon numarası girin'),
  date: z.string().min(1, 'Tarih seçin'),
  time: z.string().min(1, 'Saat seçin'),
  guests: z.string().min(1, 'Kişi sayısını seçin'),
  note: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const timeSlots: string[] = [];
for (let h = 10; h <= 24; h++) {
  const hh = (h % 24).toString().padStart(2, '0');
  timeSlots.push(`${hh}:00`);
  timeSlots.push(`${hh}:30`);
}

export function ReservationForm() {
  const today = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(reservationSchema as any),
    defaultValues: { date: today },
  });

  const onSubmit = (data: ReservationFormData) => {
    const msg = `🍽️ REZERVASYON TALEBİ\n\n👤 İsim: ${data.name}\n📞 Telefon: ${data.phone}\n📅 Tarih: ${data.date}\n⏰ Saat: ${data.time}\n👥 Kişi: ${data.guests}${data.note ? `\n📝 Not: ${data.note}` : ''}`;
    const url = `${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    toast.success('WhatsApp üzerinden rezervasyon talebiniz iletiliyor...');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="res-name">Ad Soyad</Label>
          <Input id="res-name" {...register('name')} placeholder="Adınız Soyadınız" className="mt-2" />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="res-phone">Telefon</Label>
          <Input id="res-phone" type="tel" {...register('phone')} placeholder="0555 123 45 67" className="mt-2" />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <Label htmlFor="res-date" className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            Tarih
          </Label>
          <Input id="res-date" type="date" min={today} {...register('date')} className="mt-2" />
          {errors.date && <p className="text-sm text-destructive mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <Label htmlFor="res-time" className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" />
            Saat
          </Label>
          <select
            id="res-time"
            {...register('time')}
            className="mt-2 w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Seçin
            </option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-sm text-destructive mt-1">{errors.time.message}</p>}
        </div>
        <div>
          <Label htmlFor="res-guests" className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gold" />
            Kişi Sayısı
          </Label>
          <select
            id="res-guests"
            {...register('guests')}
            className="mt-2 w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Seçin
            </option>
            <option value="1-2">1-2 Kişi</option>
            <option value="3-4">3-4 Kişi</option>
            <option value="5-6">5-6 Kişi</option>
            <option value="7-10">7-10 Kişi</option>
            <option value="10+">10+ Kişi</option>
          </select>
          {errors.guests && <p className="text-sm text-destructive mt-1">{errors.guests.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="res-note">Özel İstek (opsiyonel)</Label>
        <Textarea
          id="res-note"
          {...register('note')}
          placeholder="Doğum günü, anneler günü gibi özel günler veya diyet talepleri..."
          rows={3}
          className="mt-2"
        />
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
        Rezervasyon Talebi Gönder
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Rezervasyon talebiniz WhatsApp üzerinden iletilecektir. Onayı kısa süre içinde size dönüş yapılacaktır.
      </p>
    </form>
  );
}
