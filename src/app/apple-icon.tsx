import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// iOS ana ekran ikonu. Apple ikonları köşeleri kendi maskeler; arka plan dolu olmalı.
export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-3px',
        }}
      >
        KK
      </div>
    ),
    size
  );
}
