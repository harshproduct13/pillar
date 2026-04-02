import { motion } from 'framer-motion'

const friends = [
  {
    name: 'Anya',
    vibe: 'The one who just gets it',
    location: 'Bangalore',
    profession: 'UX Designer',
    traits: ['Deep listener', 'Gentle', 'Emotionally in tune', 'Safe space'],
    initial: 'A',
    avatar: '/Anya.png',
    color: '#a78bfa',
    bg: 'rgba(139,92,246,0.15)',
    quote: "I won't fix everything — but I'll sit with you until it feels lighter.",
  },
  {
    name: 'Saira',
    vibe: 'Chaotic good energy',
    location: 'Mumbai',
    profession: 'Social Media Executive',
    traits: ['Hype person', 'Brutally honest', 'Keeps it fun', 'Chaotic energy'],
    initial: 'S',
    avatar: '/Saira.png',
    color: '#fb7185',
    bg: 'rgba(244,63,94,0.15)',
    quote: "Sometimes you just need someone to scream into the void with you.",
  },
  {
    name: 'David',
    vibe: 'Chill, no judgement',
    location: 'Delhi',
    profession: 'Student',
    traits: ['Chill', 'No pressure', 'Good listener', 'Low-key'],
    initial: 'D',
    avatar: '/David.jpg',
    color: '#67e8f9',
    bg: 'rgba(6,182,212,0.12)',
    quote: "No pressure, no unsolicited advice. I'm just here.",
  },
]

function FriendCard({ friend, index }) {
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
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        cursor: 'default',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${friend.color}30`
        e.currentTarget.style.boxShadow = `0 0 50px ${friend.color}10`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Avatar row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            overflow: 'hidden',
            border: `1.5px solid ${friend.color}40`,
            flexShrink: 0,
            backgroundColor: friend.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {friend.avatar
            ? <img src={friend.avatar} alt={friend.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span className="font-serif" style={{ color: friend.color, fontSize: 18, fontWeight: 700 }}>{friend.initial}</span>
          }
        </div>
        <div>
          <h3 className="font-serif" style={{ color: '#f5f0ea', fontSize: 20, fontWeight: 700, marginBottom: 3 }}>
            {friend.name}
          </h3>
          <p style={{ color: '#88887f', fontSize: 13, fontStyle: 'italic' }}>"{friend.vibe}"</p>
        </div>
      </div>

      {/* Quote */}
      <p style={{ color: '#c0c0b8', fontSize: 14, lineHeight: 1.7, fontStyle: 'italic' }}>
        "{friend.quote}"
      </p>

      {/* Traits */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {friend.traits.map(t => (
          <span
            key={t}
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: '#c0c0b8',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '4px 12px',
              borderRadius: 100,
              fontSize: 12,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Location + Profession */}
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z" stroke="#55554f" strokeWidth="1.3" fill="none" />
            <circle cx="7" cy="5" r="1.2" fill="#55554f" />
          </svg>
          <span style={{ color: '#55554f', fontSize: 12 }}>{friend.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <rect x="1.5" y="4" width="11" height="8" rx="1.5" stroke="#55554f" strokeWidth="1.3" />
            <path d="M4.5 4V3a2.5 2.5 0 015 0v1" stroke="#55554f" strokeWidth="1.3" />
          </svg>
          <span style={{ color: '#55554f', fontSize: 12 }}>{friend.profession}</span>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#download"
        onClick={e => { e.preventDefault(); document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' }) }}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '11px',
          borderRadius: 12,
          backgroundColor: 'rgba(255,255,255,0.05)',
          color: '#c0c0b8',
          border: '1px solid rgba(255,255,255,0.08)',
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = '#f5f0ea' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#c0c0b8' }}
      >
        Chat with {friend.name} →
      </a>
    </motion.div>
  )
}

export default function Friends() {
  return (
    <section id="friends" style={{ backgroundColor: '#0f0f0d', padding: '120px 0' }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#55554f', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            Your Friends
          </p>
          <h2 className="font-serif" style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
            Sometimes you just need someone to talk to
          </h2>
          <p style={{ color: '#88887f', fontSize: 16, maxWidth: 460, margin: '0 auto' }}>
            No expertise, no unsolicited advice. Just company — whenever you need it.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {friends.map((f, i) => (
            <FriendCard key={f.name} friend={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
