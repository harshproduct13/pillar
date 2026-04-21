import { motion } from 'framer-motion'

const coaches = [
  {
    name: 'Mira',
    role: 'Relationship Coach',
    accent: '#4ade80',
    colorBg: 'rgba(45,106,79,0.18)',
    initial: 'M',
    avatar: '/Mira.png',
    bio: 'Navigating the messiest, most human parts of life — relationships, family, and everything in between. Non-judgmental, always.',
    tags: ['Empathetic', 'Calm', 'Boundary-setter', 'Non-judgmental'],
    situations: ['Had a Fight with My Partner', 'Going through a Breakup', 'Feeling Disconnected', 'Parent Issue', 'How to Set Boundaries'],
  },
  {
    name: 'Kabir',
    role: 'Work Life Coach',
    accent: '#60a5fa',
    colorBg: 'rgba(30,58,95,0.2)',
    initial: 'K',
    avatar: '/Kabir.png',
    bio: 'Work shouldn\'t feel like a slow grind that drains you. Cut through the noise — toxic boss, career rut, or just the Sunday dread.',
    tags: ['Direct', 'Strategic', 'No-fluff', 'Action-oriented'],
    situations: ['Fight Procrastination', 'Feeling Stuck in My Career', 'Boss is Making Life Difficult', 'Thinking About Quitting', 'Ask for a Raise'],
  },
  {
    name: 'Myra',
    role: 'Dating Coach',
    accent: '#c084fc',
    colorBg: 'rgba(107,63,160,0.2)',
    initial: 'My',
    avatar: '/Diya.png',
    bio: 'Dating is confusing, exhausting, and honestly kind of a mess. Figure out what you want and how to actually put yourself out there.',
    tags: ['Honest', 'Warm', 'Zero judgment', 'Real talk'],
    situations: ['What to Reply to a Text', 'One Sided Love', 'How to Start a Conversation', 'Keep Attracting Wrong People', 'First Date Pep-Talk'],
  },
]

function CoachCard({ coach, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      style={{
        backgroundColor: '#161614',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${coach.accent}30`
        e.currentTarget.style.boxShadow = `0 0 60px ${coach.accent}14`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Gradient top bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, transparent, ${coach.accent}, transparent)` }} />

      <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
        {/* Avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              overflow: 'hidden',
              border: `1.5px solid ${coach.accent}40`,
              flexShrink: 0,
              backgroundColor: coach.colorBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {coach.avatar
              ? <img src={coach.avatar} alt={coach.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <span className="font-serif" style={{ color: coach.accent, fontSize: 18, fontWeight: 700 }}>{coach.initial}</span>
            }
          </div>
          <div>
            <h3 className="font-serif" style={{ color: '#f5f0ea', fontSize: 20, fontWeight: 700, lineHeight: 1.2, marginBottom: 5 }}>
              {coach.name}
            </h3>
            <span
              style={{
                backgroundColor: `${coach.accent}15`,
                color: coach.accent,
                padding: '3px 10px',
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 600,
                border: `1px solid ${coach.accent}25`,
              }}
            >
              {coach.role}
            </span>
          </div>
        </div>

        {/* Bio */}
        <p style={{ color: '#88887f', fontSize: 14, lineHeight: 1.7 }}>{coach.bio}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {coach.tags.map(tag => (
            <span
              key={tag}
              style={{
                backgroundColor: `${coach.accent}10`,
                color: coach.accent,
                border: `1px solid ${coach.accent}22`,
                padding: '4px 12px',
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Situations */}
        <div>
          <p style={{ color: '#55554f', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            Common Topics
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {coach.situations.map(s => (
              <div
                key={s}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#c0c0b8',
                  fontSize: 13,
                }}
              >
                <span style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: coach.accent, opacity: 0.6, flexShrink: 0 }} />
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://play.google.com/store/apps/details?id=com.incline.pillar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 'auto',
            display: 'block',
            textAlign: 'center',
            padding: '11px',
            borderRadius: 12,
            backgroundColor: `${coach.accent}12`,
            color: coach.accent,
            border: `1px solid ${coach.accent}28`,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = `${coach.accent}22`}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = `${coach.accent}12`}
        >
          Chat with {coach.name} →
        </a>
      </div>
    </motion.div>
  )
}

export default function Coaches() {
  return (
    <section id="coaches" style={{ backgroundColor: '#0d0d0b', padding: '120px 0' }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#55554f', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            Your Coaches
          </p>
          <h2 className="font-serif" style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
            Expert companions for life's hard moments
          </h2>
          <p style={{ color: '#88887f', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Warm, purposeful conversations that help you think more clearly.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {coaches.map((coach, i) => (
            <CoachCard key={coach.name} coach={coach} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
