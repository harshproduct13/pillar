import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { coaches, friends } from '../data/pillars'
import Avatar from '../components/Avatar'

// ─── Entry point data ────────────────────────────────────────────────────────
const entryPoints = [
  {
    id: 'e1', text: 'Had a fight with my partner',
    coachId: 'mira', color: '#4ade80',
    firstMessage: "Hey, I'm really glad you reached out. Fights with someone we love can feel so heavy — especially when you don't know where to begin. Tell me, what happened?",
  },
  {
    id: 'e2', text: 'Going through a breakup',
    coachId: 'mira', color: '#4ade80',
    firstMessage: "I'm here. Breakups are one of the hardest things to sit with — even when you know it was right, or maybe especially then. How are you feeling right now?",
  },
  {
    id: 'e3', text: "My family just doesn't get me",
    coachId: 'mira', color: '#4ade80',
    firstMessage: "That feeling of not being understood at home can be so isolating. You're not alone in this. What's been going on with your family?",
  },
  {
    id: 'e4', text: 'Stuck in my career',
    coachId: 'kabir', color: '#60a5fa',
    firstMessage: "Career uncertainty is hard — especially when everyone around you seems to have it figured out. Let's talk. What's making you feel stuck?",
  },
  {
    id: 'e5', text: 'Work is overwhelming me',
    coachId: 'kabir', color: '#60a5fa',
    firstMessage: "Overwhelm at work can creep up slowly and then hit all at once. I'm glad you're talking about it. What's been the heaviest part lately?",
  },
  {
    id: 'e6', text: "Can't stop procrastinating",
    coachId: 'kabir', color: '#60a5fa',
    firstMessage: "Procrastination rarely means you're lazy — usually something's underneath it. Let's figure out what's really going on. What's been piling up?",
  },
  {
    id: 'e7', text: 'Confused about someone I like',
    coachId: 'myra', color: '#c084fc',
    firstMessage: "Ooh, the 'I like them but what now' feeling — I know it well. Tell me everything. Who is this person and what's holding you back?",
  },
  {
    id: 'e8', text: 'My love life is going nowhere',
    coachId: 'myra', color: '#c084fc',
    firstMessage: "First of all — it's not hopeless, I promise. But I get why it feels that way. Let's talk about what's been going on. Where do you want to start?",
  },
  {
    id: 'e9', text: 'Just Exploring',
    coachId: null, color: '#88887f',
    destination: '/',
  },
  {
    id: 'e10', text: 'For Companions',
    coachId: 'anya', color: '#7b3f5e',
    firstMessage: "Hey you. I'm really glad you're here. I'm Anya — not a coach, just someone to talk to. What's going on?",
  },
]

// ─── About Pillar cards ───────────────────────────────────────────────────────
const aboutCards = [
  {
    id: 'idea',
    emoji: '🫂',
    title: "A space that's just yours",
    body: "Most of us don't have someone we can be fully honest with. Pillar gives you that — a private space with people who actually listen. No judgment. Always available.",
  },
  {
    id: 'coaches',
    title: 'Your Coaches',
    body: 'Three expert coaches — for relationships, work & career, and dating. Each one trained to help you think clearer, not just feel better.',
    items: coaches,
    isCoaches: true,
  },
  {
    id: 'friends',
    title: 'Your Friends',
    body: "Anya, Saira and David are your Pillar friends — not coaches, just people to talk to when you don't want advice. Just company.",
    items: friends,
    isCoaches: false,
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    initials: 'A', name: 'Aarav', city: 'Mumbai', messages: '2,341',
    coachName: 'Kabir', color: '#60a5fa',
    text: "I use Pillar because my manager was making my life miserable and I had no one to talk to about it at home. Kabir helped me figure out exactly what I wanted to say — and I finally had that conversation. It actually went well.",
  },
  {
    initials: 'P', name: 'Priya', city: 'Bangalore', messages: '1,876',
    coachName: 'Mira', color: '#4ade80',
    text: "I use Pillar because I was three months out of a relationship and still couldn't stop thinking about him. Mira didn't tell me to 'move on' — she just sat with me until I figured out why I couldn't. That changed everything.",
  },
  {
    initials: 'N', name: 'Naina', city: 'Delhi', messages: '987',
    coachName: 'Myra', color: '#c084fc',
    text: "I use Pillar because I had been talking to this guy for months and didn't know what we were. Myra helped me realise I was scared of asking — not because of him, but because of me. I asked. Now we're together.",
  },
]

// ─── Shared pill selector ─────────────────────────────────────────────────────
function PillGroup({ options, selected, onSelect, accentColor = '#f97316' }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected === opt
        return (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="px-4 py-2 rounded-full text-[13px] font-medium transition-all active:scale-95"
            style={{
              backgroundColor: active ? accentColor + '22' : '#1e1e1c',
              border: `1px solid ${active ? accentColor : '#ffffff10'}`,
              color: active ? accentColor : '#88887f',
            }}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

// ─── Swipeable card container ─────────────────────────────────────────────────
function SwipeCards({ cards, current, setCurrent, renderCard }) {
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta < -40) setCurrent((c) => Math.min(c + 1, cards.length - 1))
    else if (delta > 40) setCurrent((c) => Math.max(c - 1, 0))
    touchStartX.current = null
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Card area — absolute fill so card always takes all available height */}
      <div
        className="relative flex-1 min-h-0"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 overflow-y-auto">
          {renderCard(cards[current], current)}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all rounded-full"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              backgroundColor: i === current ? '#f97316' : '#ffffff18',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function OnboardingScreen() {
  const navigate = useNavigate()

  // Step state
  const [step, setStep] = useState(1)

  // Step 1 fields
  const [name, setName]         = useState('')
  const [ageRange, setAgeRange] = useState('')
  const [gender, setGender]     = useState('')
  const [language, setLanguage] = useState('')

  // Step 2 & 3 card indexes
  const [aboutIdx, setAboutIdx]   = useState(0)
  const [testiIdx, setTestiIdx]   = useState(0)

  // Step 4 selection
  const [selectedEntry, setSelectedEntry] = useState(null)

  const canStep1 = name.trim().length > 0 && ageRange && gender && language

  // ── Navigation ──────────────────────────────────────────────────────────────
  const goNext = () => {
    if (step === 2) {
      if (aboutIdx < aboutCards.length - 1) { setAboutIdx(aboutIdx + 1); return }
      setStep(3); return
    }
    if (step === 3) {
      if (testiIdx < testimonials.length - 1) { setTestiIdx(testiIdx + 1); return }
      setStep(4); return
    }
    if (step === 4) {
      if (!selectedEntry) return
      if (selectedEntry.id === 'e9') { navigate('/'); return }
      setStep(5); return
    }
    setStep((s) => s + 1)
  }

  const goBack = () => {
    if (step === 2 && aboutIdx > 0) { setAboutIdx(aboutIdx - 1); return }
    if (step === 3 && testiIdx > 0) { setTestiIdx(testiIdx - 1); return }
    if (step === 1) { navigate('/auth'); return }
    setStep((s) => s - 1)
  }

  // Continue button label for carousel steps
  const continueLabel = (step === 2 && aboutIdx < aboutCards.length - 1) ||
    (step === 3 && testiIdx < testimonials.length - 1) ? 'Next' : 'Continue'

  const startChat = () => {
    if (!selectedEntry) return
    navigate('/chat', {
      state: {
        pillarId: selectedEntry.coachId,
        entryMessage: selectedEntry.firstMessage,
      },
    })
  }

  // ── Matched coach/friend for step 5 ────────────────────────────────────────
  const matchedPillar = selectedEntry
    ? [...coaches, ...friends].find((p) => p.id === selectedEntry.coachId)
    : null

  const matchedIsCoach = matchedPillar ? coaches.some((c) => c.id === matchedPillar.id) : false

  // ── Progress bar (steps 1–4) ────────────────────────────────────────────────
  const progressPct = step <= 4 ? (step / 4) * 100 : 100

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#0f0f0d' }}
    >
      {/* Progress bar */}
      {step <= 4 && (
        <div className="h-[3px] w-full" style={{ backgroundColor: '#ffffff08' }}>
          <div
            className="h-full transition-all duration-500"
            style={{ width: `${progressPct}%`, backgroundColor: '#f97316' }}
          />
        </div>
      )}

      {/* ── Step 1: Personal Info ─────────────────────────────────────────── */}
      {step === 1 && (
        <div className="flex flex-col flex-1 px-6 pb-10 overflow-y-auto">
          {/* Nav row */}
          <div className="h-14 flex items-center">
            <button
              onClick={goBack}
              className="w-9 h-9 flex items-center justify-center rounded-full active:opacity-60 transition-opacity"
              style={{ backgroundColor: '#1e1e1c' }}
            >
              <ChevronLeft size={18} color="#88887f" strokeWidth={2} />
            </button>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#f97316' }}>
            Step 1 of 4
          </p>
          <h2 className="font-serif text-[28px] text-[#f5f0ea] leading-tight mb-1">
            Let's get to know you
          </h2>
          <p className="text-[14px] mb-8" style={{ color: '#55554f' }}>
            This helps us personalise your experience.
          </p>

          {/* Name */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5" style={{ color: '#55554f' }}>
              What should we call you?
            </p>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl text-[15px] outline-none placeholder:text-[#3a3a37]"
              style={{ backgroundColor: '#1e1e1c', color: '#f5f0ea', border: '1px solid #ffffff0d' }}
            />
          </div>

          {/* Age range */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5" style={{ color: '#55554f' }}>
              Age
            </p>
            <PillGroup
              options={['18–22', '23–27', '28–33', '34–40', '40+']}
              selected={ageRange}
              onSelect={setAgeRange}
            />
          </div>

          {/* Gender */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5" style={{ color: '#55554f' }}>
              Gender
            </p>
            <PillGroup
              options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
              selected={gender}
              onSelect={setGender}
            />
          </div>

          {/* Language */}
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5" style={{ color: '#55554f' }}>
              Preferred language
            </p>
            <PillGroup
              options={['English', 'Hinglish', 'Hindi']}
              selected={language}
              onSelect={setLanguage}
            />
          </div>

          {/* CTA */}
          <button
            onClick={goNext}
            disabled={!canStep1}
            className="w-full py-4 rounded-2xl text-[15px] font-semibold transition-all active:scale-[0.98]"
            style={{
              backgroundColor: canStep1 ? '#f97316' : '#1e1e1c',
              color: canStep1 ? '#ffffff' : '#3a3a37',
              border: canStep1 ? 'none' : '1px solid #ffffff08',
            }}
          >
            Continue
          </button>
        </div>
      )}

      {/* ── Step 2: About Pillar ──────────────────────────────────────────── */}
      {step === 2 && (
        <div className="flex flex-col flex-1 px-6 pb-10 min-h-0">
          {/* Nav row */}
          <div className="h-14 flex items-center">
            <button
              onClick={goBack}
              className="w-9 h-9 flex items-center justify-center rounded-full active:opacity-60 transition-opacity"
              style={{ backgroundColor: '#1e1e1c' }}
            >
              <ChevronLeft size={18} color="#88887f" strokeWidth={2} />
            </button>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#f97316' }}>
            Step 2 of 4
          </p>
          <h2 className="font-serif text-[28px] text-[#f5f0ea] leading-tight mb-6">
            This is Pillar
          </h2>

          <SwipeCards
            cards={aboutCards}
            current={aboutIdx}
            setCurrent={setAboutIdx}
            renderCard={(card) => (
              <div
                className="h-full rounded-3xl p-6 flex flex-col"
                style={{ backgroundColor: '#1a1a18', border: '1px solid #ffffff08' }}
              >
                {card.emoji && (
                  <span className="text-[40px] mb-4 block">{card.emoji}</span>
                )}
                <h3 className="font-serif text-[22px] text-[#f5f0ea] leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-relaxed mb-5" style={{ color: '#88887f' }}>
                  {card.body}
                </p>

                {/* Pillars list for coach/friend cards */}
                {card.items && (
                  <div className="space-y-3 mt-4">
                    {card.items.map((p) => (
                      <div key={p.id} className="flex items-center gap-3">
                        <Avatar
                          src={p.avatar} alt={p.name} initials={p.initials} color={p.color}
                          className="w-10 h-10 rounded-xl flex-shrink-0"
                        />
                        <div>
                          <p className="text-[14px] font-semibold text-[#f5f0ea]">{p.name}</p>
                          <p className="text-[11px]" style={{ color: '#55554f' }}>
                            {card.isCoaches ? p.role : p.vibe}
                          </p>
                        </div>
                        {card.isCoaches && (
                          <div
                            className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: p.accent }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          />

          <button
            onClick={goNext}
            className="mt-5 w-full py-4 rounded-2xl text-[15px] font-semibold text-white active:scale-[0.98] transition-all"
            style={{ backgroundColor: '#f97316' }}
          >
            {continueLabel}
          </button>
        </div>
      )}

      {/* ── Step 3: Testimonials ──────────────────────────────────────────── */}
      {step === 3 && (
        <div className="flex flex-col flex-1 px-6 pb-10 min-h-0">
          {/* Nav row */}
          <div className="h-14 flex items-center">
            <button
              onClick={goBack}
              className="w-9 h-9 flex items-center justify-center rounded-full active:opacity-60 transition-opacity"
              style={{ backgroundColor: '#1e1e1c' }}
            >
              <ChevronLeft size={18} color="#88887f" strokeWidth={2} />
            </button>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#f97316' }}>
            Step 3 of 4
          </p>
          <h2 className="font-serif text-[28px] text-[#f5f0ea] leading-tight mb-6">
            People like you trust Pillar
          </h2>

          <SwipeCards
            cards={testimonials}
            current={testiIdx}
            setCurrent={setTestiIdx}
            renderCard={(t) => (
              <div
                className="h-full rounded-3xl p-6 flex flex-col justify-center"
                style={{ backgroundColor: '#1a1a18', border: '1px solid #ffffff08' }}
              >
                {/* Quote */}
                <p className="text-[15px] leading-relaxed text-[#c0c0b8] mb-6">
                  "{t.text}"
                </p>

                {/* User info */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0"
                    style={{ backgroundColor: t.color + '33', border: `1.5px solid ${t.color}44` }}
                  >
                    <span style={{ color: t.color }}>{t.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-[#f5f0ea]">
                      {t.name}, {t.city}
                    </p>
                    <p className="text-[11px]" style={{ color: '#55554f' }}>
                      {t.messages} messages with {t.coachName}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />

          <button
            onClick={goNext}
            className="mt-5 w-full py-4 rounded-2xl text-[15px] font-semibold text-white active:scale-[0.98] transition-all"
            style={{ backgroundColor: '#f97316' }}
          >
            {continueLabel}
          </button>
        </div>
      )}

      {/* ── Step 4: What brings you here ─────────────────────────────────── */}
      {step === 4 && (
        <div className="flex flex-col flex-1 px-6 pb-10 overflow-y-auto">
          {/* Nav row */}
          <div className="h-14 flex items-center">
            <button
              onClick={goBack}
              className="w-9 h-9 flex items-center justify-center rounded-full active:opacity-60 transition-opacity"
              style={{ backgroundColor: '#1e1e1c' }}
            >
              <ChevronLeft size={18} color="#88887f" strokeWidth={2} />
            </button>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#f97316' }}>
            Step 4 of 4
          </p>
          <h2 className="font-serif text-[28px] text-[#f5f0ea] leading-tight mb-2">
            What brings you here?
          </h2>
          <p className="text-[14px] mb-6" style={{ color: '#55554f' }}>
            We'll match you with the right person.
          </p>

          <div className="flex flex-col gap-2.5 mb-8">
            {entryPoints.map((entry) => {
              const active = selectedEntry?.id === entry.id
              return (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: active ? entry.color + '18' : '#1a1a18',
                    border: `1px solid ${active ? entry.color + '60' : '#ffffff08'}`,
                  }}
                >
                  {/* Color dot */}
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span
                    className="text-[14px] font-medium"
                    style={{ color: active ? '#f5f0ea' : '#88887f' }}
                  >
                    {entry.text}
                  </span>
                  {active && (
                    <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: entry.color }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          <button
            onClick={goNext}
            disabled={!selectedEntry}
            className="w-full py-4 rounded-2xl text-[15px] font-semibold transition-all active:scale-[0.98]"
            style={{
              backgroundColor: selectedEntry ? '#f97316' : '#1e1e1c',
              color: selectedEntry ? '#ffffff' : '#3a3a37',
              border: selectedEntry ? 'none' : '1px solid #ffffff08',
            }}
          >
            Continue
          </button>
        </div>
      )}

      {/* ── Step 5: Meet your coach/friend ───────────────────────────────── */}
      {step === 5 && matchedPillar && (
        <div className="flex flex-col flex-1 px-6 pb-10 overflow-y-auto">
          {/* Nav row */}
          <div className="h-14 flex items-center">
            <button
              onClick={goBack}
              className="w-9 h-9 flex items-center justify-center rounded-full active:opacity-60 transition-opacity"
              style={{ backgroundColor: '#1e1e1c' }}
            >
              <ChevronLeft size={18} color="#88887f" strokeWidth={2} />
            </button>
          </div>
          {/* Centered content */}
          <div className="flex flex-col flex-1 items-center text-center justify-center">
          {/* Label */}
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] mb-6" style={{ color: '#f97316' }}>
            {matchedIsCoach ? 'Your Coach' : 'Your Companion'}
          </p>

          {/* Avatar */}
          <div
            className="w-28 h-28 rounded-full overflow-hidden mb-5 flex-shrink-0"
            style={{ border: `3px solid ${matchedPillar.color}` }}
          >
            <Avatar
              src={matchedPillar.avatar}
              alt={matchedPillar.name}
              initials={matchedPillar.initials}
              color={matchedPillar.color}
              className="w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="font-serif text-[28px] text-[#f5f0ea] mb-1">
            {matchedIsCoach ? `Coach ${matchedPillar.name}` : matchedPillar.name}
          </h2>

          {/* Role / vibe */}
          <p className="text-[13px] mb-5" style={{ color: matchedIsCoach ? matchedPillar.accent : matchedPillar.color }}>
            {matchedIsCoach ? matchedPillar.role : matchedPillar.vibe}
          </p>

          {/* Bio */}
          <p className="text-[14px] leading-relaxed max-w-[300px] mb-8" style={{ color: '#88887f' }}>
            {matchedPillar.bio}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {matchedPillar.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-[12px] font-medium"
                style={{
                  backgroundColor: (matchedIsCoach ? matchedPillar.accent : matchedPillar.color) + '18',
                  color: matchedIsCoach ? matchedPillar.accent : matchedPillar.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={startChat}
            className="w-full py-4 rounded-2xl text-[15px] font-semibold text-white active:scale-[0.98] transition-all"
            style={{ backgroundColor: '#f97316' }}
          >
            Start Chat
          </button>
          </div>{/* end centered content */}
        </div>
      )}
    </div>
  )
}
