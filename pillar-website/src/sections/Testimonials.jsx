import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Aarav',
    city: 'Mumbai',
    messages: '2,341',
    coach: 'Kabir',
    coachAccent: '#60a5fa',
    coachBg: 'rgba(30,58,95,0.25)',
    initial: 'A',
    quote: "I'd been stuck in a career rut for months. Three sessions with Kabir and I finally had a plan. 2,341 messages later, I still come back every week.",
  },
  {
    name: 'Priya',
    city: 'Bangalore',
    messages: '1,876',
    coach: 'Mira',
    coachAccent: '#4ade80',
    coachBg: 'rgba(45,106,79,0.25)',
    initial: 'P',
    quote: "After my breakup I had no one to talk to at 2am. Mira just... got it. She didn't tell me what to do, she helped me figure it out myself.",
  },
  {
    name: 'Naina',
    city: 'Delhi',
    messages: '987',
    coach: 'Myra',
    coachAccent: '#c084fc',
    coachBg: 'rgba(107,63,160,0.25)',
    initial: 'N',
    quote: "I was so confused about this guy I liked. Myra helped me stop overthinking and just go for it. 987 messages in and she still keeps it real.",
  },
]

const stats = [
  { value: '5,000+', label: 'Active Users' },
  { value: '50K+', label: 'Conversations' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '6', label: 'Companions' },
]

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: '#161614',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {/* Large quote mark */}
      <span className="font-serif" style={{ color: '#f97316', fontSize: 56, lineHeight: 0.8, opacity: 0.35, marginBottom: -4 }}>"</span>

      {/* Quote text */}
      <p style={{ color: '#e0dbd4', fontSize: 15, lineHeight: 1.75, flex: 1 }}>
        {t.quote}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            className="font-serif"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.07)',
              color: '#f5f0ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {t.initial}
          </div>
          <div>
            <p style={{ color: '#f5f0ea', fontSize: 14, fontWeight: 600 }}>{t.name}</p>
            <p style={{ color: '#55554f', fontSize: 12 }}>{t.city}</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            backgroundColor: t.coachBg,
            color: t.coachAccent,
            border: `1px solid ${t.coachAccent}25`,
            padding: '4px 10px',
            borderRadius: 100,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: t.coachAccent, display: 'inline-block' }} />
          {t.coach}
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ backgroundColor: '#0d0d0b', padding: '120px 0' }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#55554f', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            Real Stories
          </p>
          <h2 className="font-serif" style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.15 }}>
            People like you trust Pillar
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            backgroundColor: '#161614',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '32px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: 24,
          }}
        >
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="font-serif" style={{ color: '#f97316', fontSize: 32, fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>
                {s.value}
              </div>
              <div style={{ color: '#55554f', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
