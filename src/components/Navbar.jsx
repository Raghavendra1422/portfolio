import { useState, useEffect } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact']

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem', height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <a href="#hero" onClick={e => handleNav(e, '#hero')} style={{
        fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 500,
        color: 'var(--purple-400)', letterSpacing: '0.05em',
      }}>
        rg.dev<span style={{ animation: 'blink 1.2s step-end infinite', color: 'var(--purple-500)' }}>_</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-links">
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`}
            onClick={e => handleNav(e, `#${link.toLowerCase()}`)}
            style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--purple-400)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >{link}</a>
        ))}
        <button onClick={toggleTheme} style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '50%', width: '36px', height: '36px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', transition: 'all 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--purple-500)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <button onClick={() => setMenuOpen(o => !o)} className="hamburger"
        aria-label="Toggle menu"
        style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '24px' }}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={e => handleNav(e, `#${link.toLowerCase()}`)}
              style={{ color: 'var(--text-secondary)', fontSize: '15px', fontWeight: 500 }}
            >{link}</a>
          ))}
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', textAlign: 'left', fontSize: '15px', padding: 0 }}>
            {theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode'}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}