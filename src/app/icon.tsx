import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

// Markalı uygulama ikonu (favicon + manifest). Maskable: arka plan tamamen dolu,
// monogram güvenli bölge içinde merkezde.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#C04A26',
          color: '#FAF7F2',
          fontSize: 280,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-8px',
        }}
      >
        KK
      </div>
    ),
    size
  );
}
