export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: '100px 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'center' }} className="about-grid">

        {/* Photo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            {/* Glow ring behind photo */}
            <div style={{
              position: 'absolute', inset: '-4px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa, #6d28d9)',
              zIndex: 0,
            }} />
            {/* Photo */}
            <img
              src="/dp.png"
              alt="Raghavendra Goud"
              style={{
                width: '200px', height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top',
                position: 'relative', zIndex: 1,
                border: '3px solid var(--bg-secondary)',
                display: 'block',
              }}
            />
            {/* Floating badges */}
            {[
              { label: 'RAG', top: '-10px', right: '-10px' },
              { label: 'CrewAI', bottom: '10px', right: '-28px' },
              { label: 'FastAPI', bottom: '-10px', left: '-10px' },
            ].map(b => (
              <div key={b.label} style={{
                position: 'absolute', top: b.top, right: b.right, bottom: b.bottom, left: b.left,
                background: 'var(--bg-card)', border: '1px solid var(--border-hover)',
                borderRadius: '20px', padding: '4px 12px',
                fontSize: '12px', fontFamily: 'var(--font-mono)',
                color: 'var(--purple-300)', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                zIndex: 2,
              }}>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="section-label">About me</p>
          <h2 className="section-title">Building AI that actually works in production</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            I am an Applied AI Engineer based in Hyderabad, India, focused on building real-world AI systems — not just demos. My work spans RAG pipelines with hallucination guards, multi-agent orchestration with CrewAI, and full-stack products using FastAPI and React.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
            I care about the whole system: retrieval quality, answer grounding, evaluation metrics, and shipping something that holds up under real usage. Currently working at GenAI Lakes building competitive intelligence and workflow automation platforms.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['LangChain', 'CrewAI', 'n8n', 'ChromaDB', 'OpenAI API', 'Groq', 'Docker', 'PostgreSQL'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center; }
        }
      `}</style>
    </section>
  )
}