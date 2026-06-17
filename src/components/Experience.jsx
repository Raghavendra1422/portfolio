const experiences = [
  {
    role: 'AI-Focused Full Stack Developer',
    company: 'GenAI Lakes Pvt Ltd',
    location: 'Hyderabad',
    period: 'Aug 2025 – Present',
    current: true,
    points: [
      'Built AI-powered workflow systems and competitive intelligence modules for keyword analysis, digital presence monitoring, and competitor intelligence.',
      'Developed scalable backend APIs using FastAPI and PostgreSQL for AI-driven automation systems, dashboard analytics, and structured workflow orchestration.',
      'Integrated OpenAI, Gemini, and xAI Grok APIs for contextual AI workflows, semantic retrieval systems, and intelligent recommendation pipelines.',
      'Built orchestration workflows using CrewAI and n8n for multi-step automation, AI agents, and workflow execution pipelines.',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'OpenAI', 'Gemini', 'CrewAI', 'n8n', 'React'],
  },
  {
    role: 'AI Prompt Engineer & Evaluator',
    company: 'Outlier',
    location: 'Remote',
    period: 'Nov 2024 – Mar 2025',
    current: false,
    points: [
      'Evaluated LLM outputs for reasoning quality, hallucination detection, contextual understanding, and prompt optimization workflows.',
      'Developed deep intuition for model failure modes, grounding issues, and evaluation criteria for production AI systems.',
    ],
    tags: ['Prompt Engineering', 'LLM Evaluation', 'Hallucination Detection'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Where I've worked</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle" style={{ marginBottom: '56px' }}>
        Building real AI products in fast-moving environments.
      </p>

      <div style={{ position: 'relative', paddingLeft: '32px' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: '7px', top: '8px', bottom: '8px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--purple-600), transparent)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experiences.map((e, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-29px', top: '6px',
                width: '14px', height: '14px', borderRadius: '50%',
                background: e.current ? 'var(--purple-500)' : 'var(--bg-card)',
                border: '2px solid var(--purple-500)',
                boxShadow: e.current ? '0 0 12px var(--purple-glow-strong)' : 'none',
              }} />

              <div className="card" style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {e.role}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--purple-400)', fontWeight: 500 }}>
                      {e.company} · {e.location}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {e.current && (
                      <span style={{
                        padding: '3px 10px', borderRadius: '20px', fontSize: '11px',
                        background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)',
                        color: 'var(--purple-300)', fontFamily: 'var(--font-mono)',
                      }}>Current</span>
                    )}
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{e.period}</span>
                  </div>
                </div>

                <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {e.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{pt}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}