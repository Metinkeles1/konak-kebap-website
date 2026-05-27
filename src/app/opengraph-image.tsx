import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const runtime = 'edge';
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1E1E1E 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'serif',
          color: '#F0EDE6',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          ··· Sancaktepe Yenidoğan ···
        </div>
        <div style={{ fontSize: 64, fontStyle: 'italic', color: '#F0EDE6', lineHeight: 1 }}>
          Efendi Usta
        </div>
        <div style={{ fontSize: 96, color: '#C9A84C', fontWeight: 700, lineHeight: 1, marginTop: 8 }}>
          Konak Kebap
        </div>
        <div style={{ fontSize: 24, color: '#9A9590', marginTop: 32, textAlign: 'center' }}>
          Sancaktepe&apos;nin en lezzetli kebap adresi
        </div>
      </div>
    ),
    { ...size }
  );
}
