import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Coaches', href: '#coaches' },
  { label: 'Friends', href: '#friends' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isLanding = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      setHidden(y > lastScrollY.current && y > 100)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchor = (e, href) => {
    if (isLanding && href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(15,15,13,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <div className="site-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <span className="font-serif" style={{ color: '#f5f0ea', fontSize: 22, fontWeight: 700 }}>Pillar</span>
          <span style={{ color: '#f97316', fontSize: 26, lineHeight: 1, marginLeft: 1, fontWeight: 700 }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: 36 }}>
          {isLanding && navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleAnchor(e, link.href)}
              style={{ color: '#000000', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#333333'}
              onMouseLeave={e => e.target.style.color = '#000000'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          onClick={e => handleAnchor(e, '#download')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: '#f97316',
            color: '#fff',
            padding: '9px 20px',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ea6c0a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f97316'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Download App
        </a>

      </div>
    </motion.nav>
  )
}
