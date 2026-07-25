import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EMAIL = 'getinclined@gmail.com'

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}

export default function ContactUs() {
  return (
    <div style={{ backgroundColor: '#0f0f0d', paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#55554f' }}
        >
          <Link to="/" style={{ color: '#88887f' }} className="hover:text-white transition-colors">Pillar</Link>
          <span>/</span>
          <span>Contact Us</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <h1
            style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}
          >
            Contact Us
          </h1>
          <p style={{ fontSize: 16, color: '#c0c0b8', lineHeight: 1.7 }}>
            Have a question, need help with your subscription, or just want to reach the people behind Pillar? We&apos;d love to hear from you. The best way to reach us is email — we read every message.
          </p>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              backgroundColor: '#1a1a18',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16,
              padding: '20px 24px',
              textDecoration: 'none',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: 12,
                backgroundColor: 'rgba(249,115,22,0.12)',
                flexShrink: 0,
              }}
            >
              <MailIcon />
            </div>
            <div>
              <p style={{ color: '#88887f', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>
                Email us
              </p>
              <p style={{ color: '#f5f0ea', fontSize: 18, fontWeight: 600 }}>
                {EMAIL}
              </p>
            </div>
          </a>

          <p style={{ color: '#88887f', fontSize: 14, lineHeight: 1.85, marginTop: 24 }}>
            Tap the card above to open your mail app with a new message to us. We aim to respond within 5 business days. For subscription, cancellation, or refund queries, do include your registered email and any relevant transaction details so we can help you faster.
          </p>
        </motion.div>

        {/* Footer nav */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to="/"
            className="text-sm flex items-center gap-2 transition-colors"
            style={{ color: '#88887f' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f0ea'}
            onMouseLeave={e => e.currentTarget.style.color = '#88887f'}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <Link
            to="/cancellation-exchange"
            className="text-sm transition-colors"
            style={{ color: '#88887f' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f0ea'}
            onMouseLeave={e => e.currentTarget.style.color = '#88887f'}
          >
            Cancellation &amp; Exchange &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
