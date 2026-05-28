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
          background: 'linear-gradient(135deg, #1A1410 0%, #2A2018 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'serif',
          color: '#FAF7F2',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            color: '#C04A26',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          ··· Sancaktepe Yenidoğan ···
        </div>
        <div style={{ fontSize: 64, fontStyle: 'italic', color: '#FAF7F2', lineHeight: 1 }}>
          Efendi Usta
        </div>
        <div style={{ fontSize: 96, color: '#C04A26', fontWeight: 700, lineHeight: 1, marginTop: 8 }}>
          Konak Kebap
        </div>
        <div style={{ fontSize: 24, color: '#6B5A48', marginTop: 32, textAlign: 'center' }}>
          Sancaktepe&apos;nin en lezzetli kebap adresi
        </div>
      </div>
    ),
    { ...size }
  );
}
