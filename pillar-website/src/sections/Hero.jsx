import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const VIDEO_URL = '/hero-bg.mp4'

function VideoBackground() {
  const videoRef = useRef(null)
  const rafRef = useRef(null)
  const FADE = 0.5

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tick = () => {
      if (!video.duration) { rafRef.current = requestAnimationFrame(tick); return }
      const t = video.currentTime
      const d = video.duration
      if (t < FADE) video.style.opacity = t / FADE
      else if (t > d - FADE) video.style.opacity = (d - t) / FADE
      else video.style.opacity = 1
      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      video.style.opacity = 0
      setTimeout(() => { video.currentTime = 0; video.play() }, 100)
    }

    video.style.opacity = 0
    video.play().catch(() => {})
    rafRef.current = requestAnimationFrame(tick)
    video.addEventListener('ended', handleEnded)
    return () => { cancelAnimationFrame(rafRef.current); video.removeEventListener('ended', handleEnded) }
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0, display: 'block' }}
      />
      {/* Bottom-up gradient only — no center darkening */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(15,15,13,0.05) 0%, rgba(15,15,13,0.15) 40%, rgba(15,15,13,0.55) 75%, #0f0f0d 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#0f0f0d',
        overflow: 'hidden',
      }}
    >
      <VideoBackground />

      {/* Content — lower third, left-aligned */}
      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          paddingBottom: 40,
          paddingTop: 160,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: 24 }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            backgroundColor: 'rgba(249,115,22,0.15)',
            border: '1px solid rgba(249,115,22,0.35)',
            color: '#f97316',
            padding: '6px 14px',
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#f97316', display: 'inline-block' }} />
            Now available on Android
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: 20,
            maxWidth: 700,
          }}
        >
          <span style={{ color: '#1a0e00' }}>Everybody deserves</span>
          <br />
          <span style={{ color: '#c45000' }}>a support system.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            color: '#2d1a00',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 36,
          }}
        >
          A private, judgment-free space to talk through whatever's on your mind.
          Coaches and friends, always available.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}
        >
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              backgroundColor: '#f97316',
              color: '#fff',
              padding: '13px 26px',
              borderRadius: 14,
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(249,115,22,0.35)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#ea6c0a'
              e.currentTarget.style.boxShadow = '0 0 60px rgba(249,115,22,0.55)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#f97316'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(249,115,22,0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img src="/google-play-logo.png" alt="Google Play" style={{ width: 22, height: 22, objectFit: 'contain' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, fontWeight: 400, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1, marginBottom: 3 }}>Get it on</div>
              <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1 }}>Google Play</div>
            </div>
          </a>

        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          zIndex: 10,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
