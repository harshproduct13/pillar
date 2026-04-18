// Play Store Screenshots — 1080x1920px (9:16)
// Open each route in browser, zoom to fit, then screenshot

const AVATARS = {
  Mira: '/Mira.png',
  Kabir: '/Kabir.png',
  Myra: '/Diya.png',
  Anya: '/Anya.png',
  Saira: '/Saira.png',
  David: '/David.jpg',
}

const coaches = [
  { name: 'Mira', role: 'Relationship Coach', accent: '#4ade80', bg: '#1a3d2b' },
  { name: 'Kabir', role: 'Work Life Coach', accent: '#60a5fa', bg: '#1a2a3d' },
  { name: 'Myra', role: 'Dating Coach', accent: '#c084fc', bg: '#2d1a3d' },
]

const friends = [
  { name: 'Anya', vibe: 'The one who just gets it', color: '#a78bfa' },
  { name: 'Saira', vibe: 'Chaotic good energy', color: '#fb7185' },
  { name: 'David', vibe: 'Chill, no judgement', color: '#67e8f9' },
]

function PhoneFrame({ children, bg = '#0f0f0d' }) {
  return (
    <div style={{
      width: 480,
      height: 860,
      borderRadius: 52,
      background: bg,
      border: '10px solid #2a2a28',
      boxShadow: '0 40px 120px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.08)',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
    }}>
      {/* Status bar */}
      <div style={{ height: 36, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 600 }}>9:41</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 16, height: 10, border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 2, position: 'relative' }}>
            <div style={{ position: 'absolute', right: -4, top: '50%', transform: 'translateY(-50%)', width: 3, height: 5, background: 'rgba(255,255,255,0.4)', borderRadius: 1 }} />
            <div style={{ margin: 2, width: '70%', height: '60%', background: 'rgba(255,255,255,0.7)', borderRadius: 1 }} />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

function PillarLogo({ size = 32 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#f5f0ea', fontSize: size, fontWeight: 800, fontFamily: 'serif', letterSpacing: '-0.02em' }}>Pillar</span>
      <span style={{ color: '#f97316', fontSize: size * 1.2, fontWeight: 800, lineHeight: 1, marginLeft: 1 }}>.</span>
    </div>
  )
}

// ─── Screenshot 1: Brand Statement ───────────────────────────────────────────
export function Screenshot1() {
  return (
    <div style={{
      width: 1080,
      height: 1920,
      background: '#0c0c0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '120px 80px 100px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Top: Logo */}
      <PillarLogo size={48} />

      {/* Middle: Headline + avatars */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 80 }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#88887f', fontSize: 28, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>Everybody deserves</p>
          <h1 style={{ color: '#f5f0ea', fontSize: 112, fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', fontFamily: 'serif', marginBottom: 0 }}>
            a support<br />
            <span style={{ color: '#f97316' }}>system.</span>
          </h1>
        </div>

        {/* Avatar grid */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', gap: 40 }}>
            {[...coaches].map(c => (
              <div key={c.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: `3px solid ${c.accent}50`, boxShadow: `0 0 30px ${c.accent}20` }}>
                  <img src={AVATARS[c.name]} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#f5f0ea', fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{c.name}</p>
                  <p style={{ color: c.accent, fontSize: 16, fontWeight: 500 }}>{c.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 40 }}>
            {friends.map(f => (
              <div key={f.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: `3px solid ${f.color}50`, boxShadow: `0 0 30px ${f.color}20` }}>
                  <img src={AVATARS[f.name]} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#f5f0ea', fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{f.name}</p>
                  <p style={{ color: '#88887f', fontSize: 16, fontWeight: 500 }}>{f.vibe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <p style={{ color: '#55554f', fontSize: 26, fontWeight: 500 }}>Free to download · Available on Android</p>
    </div>
  )
}

// ─── Screenshot 2: Meet Your Coaches ─────────────────────────────────────────
export function Screenshot2() {
  const situations = {
    Mira: ['Had a Fight with My Partner', 'Going through a Breakup', 'Parent Issue'],
    Kabir: ['Feeling Stuck in My Career', 'Boss is Making Life Difficult', 'Fight Procrastination'],
    Myra: ['One Sided Love', 'What to Reply to a Text', 'First Date Pep-Talk'],
  }
  return (
    <div style={{
      width: 1080,
      height: 1920,
      background: '#0c0c0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 80px 80px',
      gap: 72,
      fontFamily: 'DM Sans, system-ui, sans-serif',
      overflow: 'hidden',
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#f97316', fontSize: 24, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Your Coaches</p>
        <h2 style={{ color: '#f5f0ea', fontSize: 80, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: 'serif' }}>
          Expert guidance for<br />life's hard moments
        </h2>
      </div>

      <PhoneFrame>
        <div style={{ padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'hidden', height: 'calc(100% - 36px)' }}>
          {coaches.map(c => (
            <div key={c.name} style={{ background: '#1a1a18', borderRadius: 20, padding: '16px 18px', border: `1px solid ${c.accent}20`, flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, overflow: 'hidden', border: `2px solid ${c.accent}40`, flexShrink: 0 }}>
                  <img src={AVATARS[c.name]} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ color: '#f5f0ea', fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{c.name}</p>
                  <span style={{ background: `${c.accent}18`, color: c.accent, fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.role}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {situations[c.name].map(s => (
                  <span key={s} style={{ background: `${c.accent}10`, color: '#c0c0b8', border: `1px solid ${c.accent}20`, fontSize: 10, padding: '4px 10px', borderRadius: 100 }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PhoneFrame>

      <p style={{ color: '#55554f', fontSize: 28, textAlign: 'center' }}>Warm, purposeful conversations that help<br />you think more clearly.</p>
    </div>
  )
}

// ─── Screenshot 3: Real Conversation ─────────────────────────────────────────
export function Screenshot3() {
  const messages = [
    { from: 'user', text: "I had a huge fight with my partner last night. I don't even know where to begin." },
    { from: 'mira', text: "I'm really glad you reached out. Fights with someone we love can feel so heavy — especially when you don't know where to begin. Tell me, what happened?" },
    { from: 'user', text: "We've been arguing about the same thing for months. I feel like they never listen." },
    { from: 'mira', text: "That feeling of not being heard — it's one of the most exhausting things in a relationship. When you say they don't listen, what does that look like for you?" },
  ]
  return (
    <div style={{
      width: 1080,
      height: 1920,
      background: '#0c0c0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 80px 80px',
      gap: 72,
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#4ade80', fontSize: 24, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>No Judgment</p>
        <h2 style={{ color: '#f5f0ea', fontSize: 80, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: 'serif' }}>
          Say what you<br />actually feel.
        </h2>
      </div>

      <PhoneFrame bg='#0f0f0d'>
        {/* Chat header */}
        <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, overflow: 'hidden', border: '2px solid #4ade8040' }}>
            <img src={AVATARS.Mira} alt="Mira" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ color: '#f5f0ea', fontSize: 15, fontWeight: 700, lineHeight: 1.2 }}>Coach Mira</p>
            <p style={{ color: '#4ade80', fontSize: 11 }}>● Online</p>
          </div>
        </div>
        {/* Messages */}
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '82%',
                background: m.from === 'user' ? '#f97316' : '#1e1e1c',
                color: '#f5f0ea',
                padding: '10px 14px',
                borderRadius: m.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                fontSize: 12,
                lineHeight: 1.5,
              }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </PhoneFrame>

      <p style={{ color: '#55554f', fontSize: 28, textAlign: 'center' }}>Private. Confidential. Always available.</p>
    </div>
  )
}

// ─── Screenshot 4: Voice Calls ────────────────────────────────────────────────
export function Screenshot4() {
  return (
    <div style={{
      width: 1080,
      height: 1920,
      background: '#0c0c0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 80px 80px',
      gap: 72,
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#60a5fa', fontSize: 24, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Voice Calls</p>
        <h2 style={{ color: '#f5f0ea', fontSize: 80, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: 'serif' }}>
          Sometimes you need<br />to hear a voice.
        </h2>
      </div>

      <PhoneFrame bg='#0a0f18'>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '40px 30px 50px' }}>
          {/* Avatar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -16, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,165,250,0.2) 0%, transparent 70%)' }} />
              <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(96,165,250,0.4)', boxShadow: '0 0 60px rgba(96,165,250,0.3)' }}>
                <img src={AVATARS.Kabir} alt="Kabir" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#f5f0ea', fontSize: 26, fontWeight: 700 }}>Coach Kabir</p>
              <p style={{ color: '#60a5fa', fontSize: 15 }}>Work Life Coach</p>
            </div>
            {/* Sound waves */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
              {[20, 32, 48, 36, 52, 30, 44, 26, 38].map((h, i) => (
                <div key={i} style={{ width: 4, height: h, background: 'rgba(96,165,250,0.5)', borderRadius: 4 }} />
              ))}
            </div>
            <p style={{ color: '#88887f', fontSize: 14 }}>02:34</p>
          </div>
          {/* Call buttons */}
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 0 1 3 3v8a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z" stroke="white" strokeWidth="1.8" fill="none"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <span style={{ color: '#88887f', fontSize: 12 }}>Mute</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(239,68,68,0.4)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              </div>
              <span style={{ color: '#88887f', fontSize: 12 }}>End</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <span style={{ color: '#88887f', fontSize: 12 }}>Speaker</span>
            </div>
          </div>
        </div>
      </PhoneFrame>

      <p style={{ color: '#55554f', fontSize: 28, textAlign: 'center' }}>Real conversations. Available 24/7.</p>
    </div>
  )
}

// ─── Screenshot 5: Meet Your Friends ─────────────────────────────────────────
export function Screenshot5() {
  return (
    <div style={{
      width: 1080,
      height: 1920,
      background: '#0c0c0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 80px 80px',
      gap: 72,
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#a78bfa', fontSize: 24, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Your Friends</p>
        <h2 style={{ color: '#f5f0ea', fontSize: 80, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: 'serif' }}>
          Not advice.<br />Just someone<br />to talk to.
        </h2>
      </div>

      <PhoneFrame>
        <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14, height: 'calc(100% - 36px)', overflowY: 'hidden' }}>
          {friends.map(f => (
            <div key={f.name} style={{ background: '#1a1a18', borderRadius: 20, overflow: 'hidden', display: 'flex', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
              <div style={{ width: 90, height: 90, flexShrink: 0, overflow: 'hidden' }}>
                <img src={AVATARS[f.name]} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '14px 16px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <p style={{ color: '#f5f0ea', fontSize: 16, fontWeight: 700 }}>{f.name}</p>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                </div>
                <p style={{ color: '#88887f', fontSize: 12, fontStyle: 'italic', marginBottom: 10 }}>"{f.vibe}"</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ background: `${f.color}18`, border: `1px solid ${f.color}30`, borderRadius: 100, padding: '4px 14px', color: f.color, fontSize: 11, fontWeight: 600 }}>Chat</div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '4px 14px', color: '#c0c0b8', fontSize: 11, fontWeight: 600 }}>Call</div>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom fading message */}
          <div style={{ marginTop: 8, padding: '0 8px' }}>
            <p style={{ color: '#55554f', fontSize: 12, textAlign: 'center' }}>No appointments. No judgment. Always here.</p>
          </div>
        </div>
      </PhoneFrame>

      <p style={{ color: '#55554f', fontSize: 28, textAlign: 'center' }}>Always available. Always on your side.</p>
    </div>
  )
}

// ─── Index: all screenshots ───────────────────────────────────────────────────
export default function Screenshots() {
  const screens = [
    { id: 1, label: 'Screenshot 1 — Brand', Component: Screenshot1 },
    { id: 2, label: 'Screenshot 2 — Coaches', Component: Screenshot2 },
    { id: 3, label: 'Screenshot 3 — Chat', Component: Screenshot3 },
    { id: 4, label: 'Screenshot 4 — Call', Component: Screenshot4 },
    { id: 5, label: 'Screenshot 5 — Friends', Component: Screenshot5 },
  ]
  return (
    <div style={{ background: '#111', padding: 40, fontFamily: 'system-ui' }}>
      <h1 style={{ color: 'white', marginBottom: 8 }}>Play Store Screenshots</h1>
      <p style={{ color: '#888', marginBottom: 40 }}>Each screenshot is 1080×1920px. Use browser DevTools → right-click → Screenshot node, or a full-page screenshot extension.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
        {screens.map(({ id, label, Component }) => (
          <div key={id}>
            <p style={{ color: '#f97316', fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
            <div style={{ transform: 'scale(0.4)', transformOrigin: 'top left', width: 1080, height: 1920, marginBottom: -1152 }}>
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
