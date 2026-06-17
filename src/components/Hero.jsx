import { useState, useEffect } from 'react'

const roles = [
  'AI Engineer',
  'RAG Systems Builder',
  'Agentic Workflow Developer',
  'GenAI Full Stack Dev',
]

function LaptopSVG() {
  return (
    <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '420px', animation: 'float 4s ease-in-out infinite', filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.25))' }}
      aria-label="Animated laptop">
      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6d28d9" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="screenClip">
          <rect x="60" y="28" width="220" height="140" rx="6" />
        </clipPath>
      </defs>

      <rect x="30" y="185" width="280" height="18" rx="6" fill="#1a1a2e" stroke="#2d2d4e" strokeWidth="1" />
      <rect x="20" y="200" width="300" height="8" rx="4" fill="#13132a" />
      <rect x="135" y="188" width="70" height="12" rx="3" fill="#111128" stroke="#2d2d4e" strokeWidth="0.5" />

      <rect x="52" y="22" width="236" height="163" rx="10" fill="#13132a" stroke="#2d2d4e" strokeWidth="1.5" />
      <rect x="60" y="28" width="220" height="140" rx="6" fill="#0d0d1a" />
      <rect x="60" y="28" width="220" height="140" rx="6" fill="url(#screenGlow)" opacity="0.7" />

      <g clipPath="url(#screenClip)">
        <rect x="70" y="42" width="55" height="4" rx="2" fill="#7c3aed" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.7;1;0.9" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="132" y="42" width="95" height="4" rx="2" fill="#2d2d4e" opacity="0.6" />
        <rect x="78" y="54" width="38" height="4" rx="2" fill="#a78bfa" opacity="0.8" />
        <rect x="122" y="54" width="115" height="4" rx="2" fill="#2d2d4e" opacity="0.4" />
        <rect x="78" y="66" width="70" height="4" rx="2" fill="#6d28d9" opacity="0.7">
          <animate attributeName="width" values="70;110;70" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="78" y="78" width="48" height="4" rx="2" fill="#a78bfa" opacity="0.5" />
        <rect x="132" y="78" width="75" height="4" rx="2" fill="#2d2d4e" opacity="0.3" />
        <rect x="78" y="90" width="90" height="4" rx="2" fill="#7c3aed" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="70" y="106" width="2" height="14" rx="1" fill="#a78bfa">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="76" y="109" width="60" height="4" rx="2" fill="#7c3aed" opacity="0.9">
          <animate attributeName="width" values="0;60;60;0" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="60" y="28" width="220" height="4" rx="1" fill="rgba(139,92,246,0.07)">
          <animateTransform attributeName="transform" type="translate" values="0,0;0,144;0,0" dur="5s" repeatCount="indefinite" />
        </rect>
      </g>

      <rect x="60" y="28" width="220" height="140" rx="6" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <circle cx="170" cy="25" r="2.5" fill="#1a1a2e" />
      <circle cx="170" cy="25" r="1" fill="#7c3aed" opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>

      <circle cx="170" cy="98" r="9" fill="#7c3aed" opacity="0.2" filter="url(#glow)" />
      <circle cx="170" cy="98" r="5" fill="url(#nodeGrad)" filter="url(#glow)">
        <animate attributeName="r" values="5;6.5;5" dur="2.5s" repeatCount="indefinite" />
      </circle>

      <circle r="4.5" fill="#a78bfa" style={{ transformOrigin: '170px 98px', animation: 'orbit 4s linear infinite' }} filter="url(#glow)" />
      <circle r="3.5" fill="#c4b5fd" style={{ transformOrigin: '170px 98px', animation: 'orbit2 6s linear infinite' }} filter="url(#glow)" />
      <circle r="3" fill="#8b5cf6" style={{ transformOrigin: '170px 98px', animation: 'orbit3 5s linear infinite' }} filter="url(#glow)" />

      <line x1="170" y1="98" x2="245" y2="58" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="170" y1="98" x2="98" y2="132" stroke="rgba(167,139,250,0.25)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="opacity" values="0.25;0.6;0.25" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="170" y1="98" x2="215" y2="148" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
      </line>

      <circle cx="245" cy="58" r="3.5" fill="#a78bfa" filter="url(#glow)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="98" cy="132" r="3" fill="#7c3aed" filter="url(#glow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="215" cy="148" r="2.5" fill="#a78bfa" filter="url(#glow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '80px 2rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px', margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
      }} className="hero-grid">

        <div style={{ animation: 'fadeUp 0.7s ease forwards' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px',
            background: 'rgba(139,92,246,0.1)',
            border: '1px solid rgba(139,92,246,0.25)',
            borderRadius: '20px',
            marginBottom: '24px',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#8b5cf6', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--purple-300)', letterSpacing: '0.08em' }}>
              Open to AI Engineer roles
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700, lineHeight: 1.1,
            marginBottom: '16px', color: 'var(--text-primary)',
          }}>
            Raghavendra<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Goud</span>
          </h1>

          <div style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 600,
            color: 'var(--text-secondary)', marginBottom: '24px',
            minHeight: '40px', display: 'flex', alignItems: 'center', gap: '2px',
          }}>
            <span>{displayed}</span>
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--purple-400)', fontWeight: 300 }}>|</span>
          </div>

          <p style={{
            fontSize: '17px', color: 'var(--text-secondary)',
            lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px',
          }}>
            I build production-grade AI systems — RAG pipelines, agentic workflows, and full-stack LLM products using FastAPI, React, LangChain, and CrewAI.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get in Touch
            </a>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginTop: '48px', flexWrap: 'wrap' }}>
            {[
              { num: '4+', label: 'GenAI Projects' },
              { num: '80%', label: 'RAG Accuracy' },
              { num: '5+', label: 'AI Frameworks' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--purple-400)' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'fadeIn 1s ease 0.3s both' }}>
          <LaptopSVG />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  )
}