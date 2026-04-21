import { motion } from 'framer-motion'

export default function DownloadCTA() {
  return (
    <section
      id="download"
      style={{
        position: 'relative',
        backgroundColor: '#0d0d0b',
        padding: '140px 0',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '30%', left: '10%', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(74,222,128,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '8%', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,165,250,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="site-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#55554f', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}
        >
          Get started today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif"
          style={{
            color: '#f5f0ea',
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          Your support system
          <br />
          <span style={{ color: '#f97316' }}>is waiting.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#88887f', fontSize: 16, marginBottom: 48 }}
        >
          Available on Android. Free to get started.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.incline.pillar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              backgroundColor: '#f97316',
              color: '#fff',
              padding: '16px 36px',
              borderRadius: 18,
              textDecoration: 'none',
              boxShadow: '0 0 50px rgba(249,115,22,0.35)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#ea6c0a'
              e.currentTarget.style.boxShadow = '0 0 70px rgba(249,115,22,0.55)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#f97316'
              e.currentTarget.style.boxShadow = '0 0 50px rgba(249,115,22,0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img src="/google-play-logo.png" alt="Google Play" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1, marginBottom: 4 }}>Get it on</div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>Google Play</div>
            </div>
          </a>

          <p style={{ color: '#55554f', fontSize: 13 }}>iOS coming soon</p>
        </motion.div>

        {/* Companion avatars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {[
              { i: 'M', color: '#4ade80', bg: '#2d6a4f' },
              { i: 'K', color: '#60a5fa', bg: '#1e3a5f' },
              { i: 'M', color: '#c084fc', bg: '#6b3fa0' },
              { i: 'A', color: '#e2c4f0', bg: '#4a2060' },
              { i: 'S', color: '#fca5a5', bg: '#6b2020' },
              { i: 'D', color: '#93c5fd', bg: '#1e2a4f' },
            ].map((c, i) => (
              <div
                key={i}
                className="font-serif"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: c.bg,
                  border: '2.5px solid #0d0d0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: c.color,
                  fontSize: 14,
                  fontWeight: 700,
                  marginLeft: i === 0 ? 0 : -12,
                  boxShadow: `0 0 16px ${c.color}18`,
                }}
              >
                {c.i}
              </div>
            ))}
          </div>
          <p style={{ color: '#55554f', fontSize: 13 }}>6 companions ready to talk</p>
        </motion.div>
      </div>
    </section>
  )
}
