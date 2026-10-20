'use client';

export default function LibriBrainCTA() {
  return (
    <section data-dark-section style={{
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg,rgb(58, 58, 58) 0%,rgb(39, 5, 70) 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dotted texture pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }} />

      {/* Additional subtle overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.02) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 500,
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            Submissions Closed
          </span>
        </div>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 200,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          Thank You for Taking Part in the 2026 PNPL Competition
        </h2>

        <p style={{
          fontSize: '20px',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '700px',
          margin: '0 auto 3rem auto',
          fontWeight: 300
        }}>
          Teams made almost 7,000 submissions to this year&rsquo;s <strong>Word Classification</strong> task
          on LibriBrain100, across the <strong>Deep</strong> and <strong>Broad</strong> tracks. Submissions closed
          on 15 October 2026. We are now verifying the top-performing teams and aim to announce the final
          standings, winners and prizes by <strong>1 December 2026</strong>.
        </p>

        <div style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <a
            href="https://neural-processing-lab.github.io/2025-libribrain-competition/blog/competition-closed-verification-and-write-ups/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#000',
              textDecoration: 'none',
              background: '#fff',
              border: '2px solid #fff',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'inline-block',
              borderRadius: '4px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#000';
            }}
          >
            Read the Announcement →
          </a>

          <a
            href="https://neural-processing-lab.github.io/2025-libribrain-competition/editions/2026/leaderboard/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#fff',
              textDecoration: 'none',
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'inline-block',
              borderRadius: '4px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            View Leaderboard →
          </a>

          <div style={{
            display: 'grid',
            gap: '0.6rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#FFB74D',
                borderRadius: '50%'
              }} />
              <span>Competition concluded &mdash; verification of top teams underway</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#4FC3F7',
                borderRadius: '50%'
              }} />
              <span>
                Still working on it? <a href="https://neural-processing-lab.github.io/2025-libribrain-competition/editions/2026/submit/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>See how you would have scored</a> on the leaderboard
              </span>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 'clamp(2rem, 5vw, 3rem)',
          paddingTop: 'clamp(2rem, 5vw, 3rem)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 200,
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              ~7,000
            </div>
            <div style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Submissions
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 200,
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              94 &amp; 52
            </div>
            <div style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Teams on Deep &amp; Broad
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 200,
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              1 Dec 2026
            </div>
            <div style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Winners Announced
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
