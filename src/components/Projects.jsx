const projects = [
  {
    featured: true,
    emoji: '🛡️',
    title: 'Compliance-Guard AI',
    subtitle: 'RBI Loan Compliance Checker',
    description: 'Production-grade Agentic RAG system that cross-checks loan applications against RBI regulations. Features multi-query retrieval, hallucination detection, confidence-based retry loops, and a full audit trail.',
    highlight: '80% end-to-end compliance accuracy',
    tags: ['LangChain', 'FastAPI', 'ChromaDB', 'Groq LLM', 'React', 'DeepEval', 'SQLite'],
    github: 'https://github.com/Raghavendra1422/compliance-guard-ai',
    concepts: ['Deep RAG', 'Hallucination Guard', 'Agentic Workflow', 'PDF Version Control'],
  },
  {
    emoji: '🤖',
    title: 'AI Job Market Analyzer',
    subtitle: 'Multi-Agent Research System',
    description: 'Autonomous crew of 3 specialized AI agents that research current job markets, analyze skill demand, and generate structured career reports using real-time web search.',
    highlight: '3 collaborative agents — researcher, analyst, writer',
    tags: ['CrewAI', 'Groq LLaMA 3.3 70B', 'Serper API', 'Python'],
    github: 'https://github.com/Raghavendra1422/job-market-analyzer',
    concepts: ['Multi-Agent', 'Tool Use', 'Sequential Tasks', 'Autonomous Reasoning'],
  },
  {
    emoji: '⚡',
    title: 'FastLeads99',
    subtitle: 'AI-Powered Lead Capture Automation',
    description: 'n8n workflow automation pipeline that captures leads, scores them 1 to 10 using Groq LLM, sends instant Telegram notifications to the sales team, and logs everything to Google Sheets automatically.',
    highlight: 'Full automation — zero manual steps',
    tags: ['n8n', 'Groq API', 'Telegram Bot', 'Google Sheets', 'Docker', 'Webhook'],
    github: 'https://github.com/Raghavendra1422/fastleads99-n8n-poc',
    concepts: ['Workflow Automation', 'AI Lead Scoring', 'Real-time Notifications'],
  },
  {
    emoji: '🤗',
    title: 'Sentiment Analysis API',
    subtitle: 'Production NLP REST API',
    description: 'Production-ready sentiment analysis API using HuggingFace DistilBERT. Includes batch prediction, Docker containerization, 7-test pytest suite, and a GitHub Actions CI/CD pipeline.',
    highlight: '99.8% confidence on negation handling',
    tags: ['HuggingFace', 'FastAPI', 'Docker', 'pytest', 'GitHub Actions', 'DistilBERT'],
    github: 'https://github.com/Raghavendra1422/sentiment-analysis-api',
    concepts: ['Transfer Learning', 'CI/CD', 'Containerization', 'Batch Processing'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">What I have built</p>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle" style={{ marginBottom: '56px' }}>
        Production-focused AI systems — each built to solve a real problem with measurable results.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }} className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="card" style={{
            padding: '32px',
            border: p.featured ? '1px solid rgba(139,92,246,0.5)' : '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {p.featured && (
              <div style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)',
                borderRadius: '20px', padding: '3px 10px',
                fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--purple-300)',
              }}>
                Featured
              </div>
            )}
            {p.featured && (
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse at top left, rgba(109,40,217,0.08) 0%, transparent 60%)',
              }} />
            )}

            <div style={{ fontSize: '36px', marginBottom: '16px' }}>{p.emoji}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{p.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--purple-400)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>{p.subtitle}</p>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>{p.description}</p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 14px',
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '20px',
            }}>
              <span style={{ fontSize: '14px' }}>✦</span>
              <span style={{ fontSize: '13px', color: 'var(--purple-300)', fontWeight: 500 }}>{p.highlight}</span>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {p.concepts.map(c => (
                <span key={c} style={{
                  fontSize: '11px', padding: '3px 9px',
                  background: 'rgba(139,92,246,0.06)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  borderRadius: '20px', color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}>{c}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {p.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary"
              style={{ fontSize: '14px', padding: '10px 20px' }}>
              GitHub
            </a>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}