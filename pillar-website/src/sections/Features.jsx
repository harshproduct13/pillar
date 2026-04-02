import { motion } from 'framer-motion'

const features = [
  {
    number: '01',
    title: 'Always Private',
    body: "Your conversations stay yours. No one's reading them, judging them, or storing them for ads. What you share here, stays here.",
    color: '#f97316',
    bg: 'rgba(249,115,22,0.07)',
  },
  {
    number: '02',
    title: 'Human AI',
    body: 'Coaches and friends that actually listen. Warm, real conversations — not scripted responses, not robotic deflections.',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.07)',
  },
  {
    number: '03',
    title: 'Always Available',
    body: '3am anxiety spiral? Post-breakup Sunday? Midweek slump? Your support system doesn\'t take days off.',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.07)',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      style={{ backgroundColor: '#0f0f0d', padding: '120px 0' }}
    >
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#55554f', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            Why Pillar
          </p>
          <h2
            className="font-serif"
            style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.15 }}
          >
            Some things are hard to say out loud.
            <br />
            <span style={{ color: '#f97316' }}>Say them here!</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#161614',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                padding: '36px 32px',
                cursor: 'default',
                transition: 'border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${f.color}33`
                e.currentTarget.style.boxShadow = `0 0 50px ${f.color}12`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: f.bg,
                  marginBottom: 28,
                }}
              >
                <span className="font-serif" style={{ color: f.color, fontSize: 16, fontWeight: 700 }}>{f.number}</span>
              </div>

              <h3
                className="font-serif"
                style={{ color: '#f5f0ea', fontSize: 22, fontWeight: 700, marginBottom: 14, lineHeight: 1.2 }}
              >
                {f.title}
              </h3>
              <p style={{ color: '#88887f', fontSize: 15, lineHeight: 1.7 }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
