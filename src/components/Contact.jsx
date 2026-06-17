export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Open to AI Engineer Roles</h2>
        <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '48px' }}>
          I'm actively looking for AI Engineer opportunities where I can build production RAG systems, agentic workflows, and LLM-powered products. Let's talk.
        </p>

        {/* All links in one row */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', gap: '12px',
          flexWrap: 'wrap', marginBottom: '32px',
        }}>
          <a href="mailto:raghava1402.ch@gmail.com" className="btn-primary"
            style={{ fontSize: '14px', padding: '12px 20px' }}>
            ✉️ Email
          </a>

          <a href="tel:+917780116630" className="btn-secondary"
            style={{ fontSize: '14px', padding: '12px 20px' }}>
            📞 +91 77801 16630
          </a>

          <a href="https://github.com/Raghavendra1422" target="_blank" rel="noopener noreferrer"
            className="btn-secondary" style={{ fontSize: '14px', padding: '12px 20px' }}>
            ⌥ GitHub
          </a>

          <a href="https://linkedin.com/in/raghavendra1422" target="_blank" rel="noopener noreferrer"
            className="btn-secondary" style={{ fontSize: '14px', padding: '12px 20px' }}>
            in LinkedIn
          </a>
        </div>

        {/* Resume row */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '12px',
          flexWrap: 'wrap', marginBottom: '64px',
          padding: '24px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <span style={{ 
            width: '100%', fontSize: '13px', 
            color: 'var(--text-muted)', marginBottom: '8px', 
            fontFamily: 'var(--font-mono)' 
          }}>
            📄 Resume
          </span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-secondary" style={{ fontSize: '14px', padding: '11px 24px' }}>
            👁️ View Resume
          </a>
          <a href="/resume.pdf" download="Raghavendra_Goud_Resume.pdf"
            className="btn-primary" style={{ fontSize: '14px', padding: '11px 24px' }}>
            ⬇️ Download Resume
          </a>
        </div>

        {/* Footer — minimal, no built with line */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'center',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)' }}>
            rg.dev<span style={{ animation: 'blink 1.2s step-end infinite', color: 'var(--purple-500)' }}>_</span>
          </span>
        </div>
      </div>
    </section>
  )
}