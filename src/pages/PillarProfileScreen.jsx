import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Phone, BadgeCheck, MapPin, Briefcase } from 'lucide-react'
import { coaches, friends } from '../data/pillars'
import Avatar from '../components/Avatar'

const allPillars = [...coaches, ...friends]

export default function PillarProfileScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const pillarId = location.state?.pillarId || 'mira'
  const pillar = allPillars.find((p) => p.id === pillarId) || allPillars[0]
  const isCoach = coaches.some((c) => c.id === pillarId)

  const goToChat = (situationText = null) => {
    navigate('/chat', { state: { pillarId, situation: situationText } })
  }

  return (
    <div className="min-h-screen pb-28 overflow-x-hidden" style={{ backgroundColor: '#141412' }}>

      {/* Top bar */}
      <div className="flex items-center px-4 pt-13 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full flex items-center justify-center active:opacity-60"
          style={{ backgroundColor: '#2a2a27' }}
        >
          <ArrowLeft size={18} color="#f5f0ea" strokeWidth={2} />
        </button>
      </div>

      {/* Centered avatar + name */}
      <div className="flex flex-col items-center px-6 pt-2 pb-6">
        {/* Circular avatar */}
        <div
          className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-2xl"
          style={{ border: `3px solid ${pillar.color}` }}
        >
          <Avatar
            src={pillar.avatar}
            alt={pillar.name}
            initials={pillar.initials}
            color={pillar.color}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name + verified badge */}
        <div className="flex items-center gap-2 mb-1">
          <h1 className="font-serif text-[28px] text-[#f5f0ea] leading-tight">{pillar.name}</h1>
          <BadgeCheck size={22} color={pillar.accent || '#f97316'} strokeWidth={2} fill={`${pillar.color}`} />
        </div>

        {/* Role / vibe */}
        <p className="text-[13px] mb-5" style={{ color: '#88887f' }}>
          {isCoach ? pillar.role : pillar.vibe}
        </p>

        {/* Bio — centered */}
        <p className="text-[14px] leading-relaxed text-center" style={{ color: '#a0a09a' }}>
          {pillar.bio}
        </p>
      </div>

      {/* Stats — coaches only */}
      {isCoach && (
        <div
          className="mx-5 mb-5 rounded-2xl flex overflow-hidden"
          style={{ backgroundColor: '#242422' }}
        >
          <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
            <p className="text-[22px] font-bold text-[#f5f0ea]">{pillar.sessions.toLocaleString()}</p>
            <p className="text-[11px] font-medium" style={{ color: '#55554f' }}>Sessions</p>
          </div>
          <div style={{ width: '1px', backgroundColor: '#ffffff08' }} />
          <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
            <p className="text-[22px] font-bold text-[#f5f0ea]">{pillar.helped.toLocaleString()}+</p>
            <p className="text-[11px] font-medium" style={{ color: '#55554f' }}>People Helped</p>
          </div>
          <div style={{ width: '1px', backgroundColor: '#ffffff08' }} />
          <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
            <p className="text-[22px] font-bold text-[#f5f0ea]">4.9</p>
            <p className="text-[11px] font-medium" style={{ color: '#55554f' }}>Rating</p>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="mx-5 mb-5 flex gap-3">
        <button
          onClick={() => goToChat()}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl active:opacity-70 transition-opacity font-semibold text-[14px] text-white"
          style={{ backgroundColor: pillar.color }}
        >
          <MessageCircle size={16} color="white" strokeWidth={2} />
          Message
        </button>
        <button
          onClick={() => navigate('/call', { state: { pillarId } })}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl active:opacity-70 transition-opacity font-semibold text-[14px]"
          style={{ backgroundColor: '#242422', color: pillar.accent || '#f97316' }}
        >
          <Phone size={16} color={pillar.accent || '#f97316'} strokeWidth={2} />
          Call
        </button>
      </div>

      {/* Location & profession — friends only */}
      {!isCoach && (pillar.location || pillar.profession) && (
        <div className="mx-5 mb-3 rounded-2xl px-4 py-4" style={{ backgroundColor: '#1e1e1c' }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#55554f' }}>About</p>
          {pillar.profession && (
            <div className="flex items-center gap-2.5 mb-2.5">
              <Briefcase size={15} color={pillar.color} strokeWidth={1.8} />
              <p className="text-[14px]" style={{ color: '#c0c0b8' }}>{pillar.profession}</p>
            </div>
          )}
          {pillar.location && (
            <div className="flex items-center gap-2.5">
              <MapPin size={15} color={pillar.color} strokeWidth={1.8} />
              <p className="text-[14px]" style={{ color: '#c0c0b8' }}>{pillar.location}</p>
            </div>
          )}
        </div>
      )}

      {/* Style (coaches) / Interests (friends) */}
      {isCoach && pillar.tags && (
        <div className="mx-5 mb-3 rounded-2xl px-4 py-4" style={{ backgroundColor: '#1e1e1c' }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#55554f' }}>Style</p>
          <div className="flex flex-wrap gap-2">
            {pillar.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-[12px] font-medium"
                style={{ backgroundColor: `${pillar.color}30`, color: pillar.accent || '#f97316' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {!isCoach && pillar.interests && (
        <div className="mx-5 mb-3 rounded-2xl px-4 py-4" style={{ backgroundColor: '#1e1e1c' }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#55554f' }}>Interests</p>
          <div className="flex flex-wrap gap-2">
            {pillar.interests.map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full text-[12px] font-medium"
                style={{ backgroundColor: `${pillar.color}30`, color: 'white' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Topics — coaches only */}
      {isCoach && pillar.situations && (
        <div className="mx-5 rounded-2xl overflow-hidden" style={{ backgroundColor: '#1e1e1c' }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] px-4 pt-4 pb-3" style={{ color: '#55554f' }}>
            Topics
          </p>
          {pillar.situations.map((sit, i) => (
            <button
              key={sit.id}
              onClick={() => goToChat(sit.text)}
              className="w-full text-left flex items-center justify-between px-4 py-3.5 active:opacity-60 transition-opacity"
              style={{ borderTop: i === 0 ? 'none' : '1px solid #ffffff08' }}
            >
              <span className="text-[14px]" style={{ color: '#f5f0ea' }}>{sit.text}</span>
              <span className="text-[15px]" style={{ color: pillar.accent || '#f97316' }}>→</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
