const education = [
  {
    degree: 'Bachelor of Technology — Electronics & Communication Engineering',
    institution: 'CMR Engineering College',
    location: 'Hyderabad',
    period: '2020 – 2024',
    cgpa: '8.02',
    highlights: [
      'Specialized in signal processing and embedded systems fundamentals',
      'Transitioned into AI/ML and GenAI engineering during final years',
      'Built production AI projects independently alongside academics',
    ],
    tags: ['B.Tech', 'ECE', 'CGPA 8.02'],
  },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)', padding: '100px 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="section-label">Academic background</p>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle" style={{ marginBottom: '56px' }}>
          Engineering foundation that led to a full focus on AI systems.
        </p>

        {education.map((e, i) => (
          <div key={i} className="card" style={{ padding: '36px 40px', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle background glow */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse at bottom right, rgba(109,40,217,0.07) 0%, transparent 60%)',
            }} />

            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px',
              marginBottom: '24px',
            }}>
              <div>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎓</div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {e.degree}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--purple-400)', fontWeight: 500 }}>
                  {e.institution} · {e.location}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: 'var(--text-muted)',
                }}>{e.period}</span>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '6px 16px',
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  borderRadius: '20px',
                }}>
                  <span style={{ fontSize: '13px', color: 'var(--purple-300)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    CGPA {e.cgpa} / 10
                  </span>
                </div>
              </div>
            </div>

            <ul style={{ paddingLeft: '20px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {e.highlights.map((h, j) => (
                <li key={j} style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{h}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}