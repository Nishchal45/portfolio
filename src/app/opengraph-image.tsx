import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Nishchal Vekariya — Software Engineer & AI/ML Specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top — badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
            }}
          />
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px' }}>
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          Nishchal
        </div>
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            color: '#f73626',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          Vekariya
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '24px',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          Software Development Engineer | Full-Stack | AI/ML | Quant Finance
        </div>

        {/* Bottom — skills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '40px',
          }}
        >
          {['Python', 'TypeScript', 'React', 'LLMs', 'PyTorch', 'Go'].map(
            (skill) => (
              <div
                key={skill}
                style={{
                  padding: '8px 16px',
                  borderRadius: '99px',
                  border: '1px solid rgba(247,54,38,0.3)',
                  backgroundColor: 'rgba(247,54,38,0.08)',
                  color: '#f73626',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
