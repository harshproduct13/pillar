import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f0f0d',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
      className="py-6"
    >
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center">
              <span className="text-lg font-serif font-bold" style={{ color: '#f5f0ea' }}>
                Pillar
              </span>
              <span style={{ color: '#f97316', fontSize: '1.3rem', lineHeight: 1 }}>.</span>
            </div>
            <p className="text-xs" style={{ color: '#55554f' }}>
              Everybody deserves a support system.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm" style={{ color: '#88887f' }}>
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-text-primary"
              style={{ color: '#88887f' }}
              onMouseEnter={e => e.target.style.color = '#f5f0ea'}
              onMouseLeave={e => e.target.style.color = '#88887f'}
            >
              Privacy Policy
            </Link>
            <span style={{ color: '#55554f' }}>|</span>
            <Link
              to="/terms"
              className="transition-colors duration-200"
              style={{ color: '#88887f' }}
              onMouseEnter={e => e.target.style.color = '#f5f0ea'}
              onMouseLeave={e => e.target.style.color = '#88887f'}
            >
              Terms &amp; Conditions
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: '#55554f' }}>
            &copy; 2025 Pillar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
