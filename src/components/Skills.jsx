const skillGroups = [
  {
    label: 'Generative AI',
    icon: '🧠',
    skills: ['LLMs', 'RAG Pipelines', 'Prompt Engineering', 'AI Agents', 'Semantic Search', 'Embeddings', 'Hallucination Detection', 'Re-ranking', 'Tool Calling', 'RAGAS / DeepEval'],
  },
  {
    label: 'Frameworks & Orchestration',
    icon: '⚙️',
    skills: ['LangChain', 'CrewAI', 'n8n', 'HuggingFace', 'Groq', 'OpenAI API', 'Gemini API', 'xAI Grok API'],
  },
  {
    label: 'Backend & APIs',
    icon: '🔧',
    skills: ['FastAPI', 'Python', 'REST APIs', 'Uvicorn', 'Pydantic', 'Swagger', 'WebScraping', 'BeautifulSoup'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Databases & Storage',
    icon: '🗄️',
    skills: ['PostgreSQL', 'ChromaDB', 'SQLite', 'Vector Databases'],
  },
  {
    label: 'DevOps & Tools',
    icon: '🚀',
    skills: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'CI/CD', 'pytest'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)', padding: '100px 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-subtitle" style={{ marginBottom: '56px' }}>
          Tools and technologies I use to build production AI systems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {skillGroups.map(g => (
            <div key={g.label} className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '24px' }}>{g.icon}</span>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>{g.label}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {g.skills.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}