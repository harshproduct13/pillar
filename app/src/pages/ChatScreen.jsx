import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, Phone, Send, X, Smile, Mic, MoreVertical } from 'lucide-react'
import { coaches, friends } from '../data/pillars'
import Avatar from '../components/Avatar'

const allPillars = [...coaches, ...friends]

const sampleMessages = {
  mira: [
    { id: 1, from: 'pillar', text: "Hey, I'm glad you're here. What's been weighing on you lately?", time: '10:02 AM' },
    { id: 2, from: 'user',   text: "Honestly, things with my partner have been really tense.", time: '10:03 AM' },
    { id: 3, from: 'pillar', text: "I hear you. Can you tell me a bit more about what's been happening between you two?", time: '10:03 AM' },
    { id: 4, from: 'user',   text: "We've been arguing about small things but it feels like it's about something bigger.", time: '10:04 AM' },
    { id: 5, from: 'pillar', text: "That's a really insightful observation. Often small arguments are surface-level expressions of deeper unmet needs. What do you think that something bigger might be?", time: '10:05 AM' },
  ],
  kabir: [
    { id: 1, from: 'pillar', text: "Good to have you here. What's going on with work?", time: 'Yesterday' },
    { id: 2, from: 'user',   text: "I dread going to the office every single day.", time: 'Yesterday' },
    { id: 3, from: 'pillar', text: "That sounds exhausting. How long have you been feeling this way?", time: 'Yesterday' },
  ],
  myra:  [
    { id: 1, from: 'pillar', text: "Hey! What's on your mind? Dating stuff?", time: 'Monday' },
    { id: 2, from: 'user',   text: "I keep getting ghosted and I don't know why.", time: 'Monday' },
    { id: 3, from: 'pillar', text: "Ugh, ghosting is the worst. Tell me about the last person who did this — what was the vibe like before it happened?", time: 'Monday' },
  ],
  anya:  [
    { id: 1, from: 'pillar', text: "Hey you. It's been a bit. How are you actually doing?", time: '9:45 PM' },
    { id: 2, from: 'user',   text: "Not great honestly. Just tired of everything.", time: '9:46 PM' },
    { id: 3, from: 'pillar', text: "Yeah. That bone-deep tired where even explaining it feels like too much effort?", time: '9:46 PM' },
  ],
  saira: [
    { id: 1, from: 'pillar', text: "OKAYY TELL ME EVERYTHING 😭", time: 'Tuesday' },
    { id: 2, from: 'user',   text: "So basically I texted him first and he left me on read for 6 hours.", time: 'Tuesday' },
    { id: 3, from: 'pillar', text: "SIX HOURS?? okay okay breathe — what did you say exactly lol", time: 'Tuesday' },
  ],
  david: [
    { id: 1, from: 'pillar', text: "yo, what's up", time: 'Wednesday' },
    { id: 2, from: 'user',   text: "man I don't even know. just feeling off.", time: 'Wednesday' },
    { id: 3, from: 'pillar', text: "yeah that happens. wanna talk or just vibe for a bit?", time: 'Wednesday' },
  ],
}

function DrawerMenu({ active, onSelect, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full z-50 flex">
        <div className="w-72 h-full flex flex-col" style={{ backgroundColor: '#282826' }}>
          <div className="flex items-center justify-between px-5 pt-14 pb-5">
            <h2 className="font-serif text-[20px] text-[#f5f0ea]">Your Pillars</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-dark-raised flex items-center justify-center text-dark-muted"
            >
              <X size={16} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 py-5 space-y-1">
            <p className="px-5 text-[10px] font-bold text-dark-muted uppercase tracking-[0.12em] mb-3">Coaches</p>
            {coaches.map((c) => (
              <button
                key={c.id}
                onClick={() => { onSelect(c.id); onClose() }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-colors mx-1 ${
                  active === c.id ? 'bg-orange-500/15' : 'active:bg-dark-raised'
                }`}
                style={{ width: 'calc(100% - 8px)' }}
              >
                <Avatar src={c.avatar} alt={c.name} initials={c.initials} color={c.color} className="w-11 h-11 rounded-xl" />
                <div className="text-left">
                  <p className={`text-[14px] font-semibold ${active === c.id ? 'text-orange-400' : 'text-[#f5f0ea]'}`}>{c.name}</p>
                  <p className="text-[11px] text-dark-muted mt-0.5">{c.role}</p>
                </div>
                {active === c.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-400" />}
              </button>
            ))}

            <p className="px-5 text-[10px] font-bold text-dark-muted uppercase tracking-[0.12em] mt-5 mb-3 pt-4">Friends</p>
            {friends.map((f) => (
              <button
                key={f.id}
                onClick={() => { onSelect(f.id); onClose() }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-colors mx-1 ${
                  active === f.id ? 'bg-orange-500/15' : 'active:bg-dark-raised'
                }`}
                style={{ width: 'calc(100% - 8px)' }}
              >
                <Avatar src={f.avatar} alt={f.name} initials={f.initials} color={f.color} className="w-11 h-11 rounded-xl" />
                <div className="text-left">
                  <p className={`text-[14px] font-semibold ${active === f.id ? 'text-orange-400' : 'text-[#f5f0ea]'}`}>{f.name}</p>
                  <p className="text-[11px] text-dark-muted mt-0.5">{f.vibe}</p>
                </div>
                {active === f.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-400" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function CheckMarks() {
  return (
    <span className="inline-flex ml-1" style={{ color: '#f97316' }}>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 5L8.5 8.5L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function ChatScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const initialPillarId = location.state?.pillarId || 'mira'
  const situation = location.state?.situation || null
  const entryMessage = location.state?.entryMessage || null

  const [activePillarId, setActivePillarId] = useState(initialPillarId)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  const pillar = allPillars.find((p) => p.id === activePillarId) || allPillars[0]
  // If arriving from onboarding with an entryMessage, start fresh with just that message
  const messages = entryMessage
    ? [{ id: 1, from: 'pillar', text: entryMessage, time: 'Just now' }]
    : (sampleMessages[activePillarId] || [])
  const isCoach = coaches.some((c) => c.id === activePillarId)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [activePillarId, messages])

  return (
    <div className="flex flex-col h-screen max-w-[430px] mx-auto" style={{ backgroundColor: '#1e1e1c' }}>

      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 pt-12 pb-3.5 flex-shrink-0"
        style={{ backgroundColor: '#242422', borderBottom: '1px solid #ffffff0d' }}
      >
        {/* Left: hamburger */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="w-9 h-9 rounded-full flex items-center justify-center active:opacity-60 transition-opacity flex-shrink-0"
          style={{ backgroundColor: '#2e2e2c' }}
        >
          <Menu size={18} color="#f5f0ea" strokeWidth={1.8} />
        </button>

        {/* Avatar + name */}
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="relative flex-shrink-0">
            <Avatar
              src={pillar.avatar}
              alt={pillar.name}
              initials={pillar.initials}
              color={pillar.color}
              className="w-9 h-9 rounded-full"
            />
            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
              style={{ backgroundColor: '#4ade80', borderColor: '#242422' }}
            />
          </div>
          <button className="min-w-0 text-left" onClick={() => navigate('/pillar-profile', { state: { pillarId: activePillarId } })}>
            <p className="font-semibold text-[#f5f0ea] text-[15px] leading-tight truncate">
              {isCoach ? `Coach ${pillar.name}` : pillar.name}
            </p>
            <p className="text-[11px] text-orange-400 leading-tight">View Profile</p>
          </button>
        </div>

        {/* Right: action buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => navigate('/call', { state: { pillarId: activePillarId } })}
            className="w-9 h-9 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: '#2e2e2c' }}
          >
            <Phone size={16} color="#f97316" strokeWidth={1.8} />
          </button>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: '#2e2e2c' }}
          >
            <MoreVertical size={16} color="#88887f" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 scrollbar-hide">
        {/* Date separator */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px" style={{ backgroundColor: '#ffffff0d' }} />
          <span className="text-[11px] font-medium tracking-wide" style={{ color: '#55554f' }}>Today</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#ffffff0d' }} />
        </div>

        {/* Situation pill — inline in chat */}
        {situation && (
          <div className="flex justify-center my-2">
            <div
              className="px-4 py-2 rounded-full"
              style={{ backgroundColor: '#f9731618', border: '1px solid #f9731630' }}
            >
              <p className="text-[12px] font-medium text-orange-400">Session: {situation}</p>
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex flex-col max-w-[78%] ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className="px-4 py-2.5 text-[14px] leading-relaxed"
                style={{
                  backgroundColor: msg.from === 'user' ? '#f97316' : '#2e2e2b',
                  color: '#f5f0ea',
                  borderRadius: msg.from === 'user'
                    ? '20px 20px 4px 20px'
                    : '20px 20px 20px 4px',
                }}
              >
                {msg.text}
              </div>
              <div className={`flex items-center gap-1 mt-1 px-1 ${msg.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-[10px]" style={{ color: '#55554f' }}>{msg.time}</span>
                {msg.from === 'user' && <CheckMarks />}
              </div>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <div
        className="px-4 py-3 pb-[82px] flex-shrink-0"
        style={{ backgroundColor: '#1e1e1c' }}
      >
        <div
          className="flex items-end gap-3"
        >
          {/* Text input container */}
          <div
            className="flex-1 flex items-end gap-2 px-4 py-3 rounded-[28px]"
            style={{ backgroundColor: '#2e2e2b' }}
          >
            <button className="flex-shrink-0 mb-0.5 active:opacity-60">
              <Smile size={20} color="#55554f" strokeWidth={1.8} />
            </button>
            <textarea
              ref={textareaRef}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message"
              rows={1}
              className="flex-1 bg-transparent text-[14px] text-[#f5f0ea] placeholder-[#55554f] resize-none outline-none leading-relaxed"
              style={{ maxHeight: '100px' }}
              onInput={(e) => {
                e.target.style.height = 'auto'
                e.target.style.height = e.target.scrollHeight + 'px'
              }}
            />
          </div>

          {/* Mic / Send button */}
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-lg"
            style={{ backgroundColor: '#f97316' }}
          >
            {inputText.trim()
              ? <Send size={18} color="white" strokeWidth={2} />
              : <Mic size={20} color="white" strokeWidth={1.8} />
            }
          </button>
        </div>
      </div>

      {drawerOpen && (
        <DrawerMenu
          active={activePillarId}
          onSelect={setActivePillarId}
          onClose={() => setDrawerOpen(false)}
        />
      )}

    </div>
  )
}
