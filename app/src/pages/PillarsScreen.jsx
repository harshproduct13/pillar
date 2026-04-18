import { useNavigate } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import { coaches, friends } from '../data/pillars'
import Avatar from '../components/Avatar'

function CoachSection({ coach }) {
  const navigate = useNavigate()
  const startChat = (situationText = null) => {
    navigate('/chat', { state: { pillarId: coach.id, situation: situationText } })
  }

  return (
    <div className="mb-10">
      {/* Coach header */}
      <div className="flex items-center gap-4 px-5 mb-4 w-full">
        <div className="relative flex-shrink-0">
          <Avatar
            src={coach.avatar}
            alt={coach.name}
            initials={coach.initials}
            color={coach.color}
            className="w-16 h-16 rounded-2xl shadow-lg"
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ boxShadow: `0 0 0 2px ${coach.color}55` }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-serif text-[18px] text-[#f5f0ea] leading-tight">{coach.name}</p>
          <span
            className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${coach.color}30`, color: coach.accent }}
          >
            {coach.role}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => startChat()}
            className="w-9 h-9 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: '#2e2e2b' }}
          >
            <MessageCircle size={16} color={coach.accent} strokeWidth={1.8} />
          </button>
          <button
            onClick={() => navigate('/call', { state: { pillarId: coach.id } })}
            className="w-9 h-9 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: '#2e2e2b' }}
          >
            <Phone size={16} color={coach.accent} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Talk about label */}
      <div className="flex items-center gap-2 px-5 mb-3">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: '#55554f' }}>Talk about</p>
        <div className="flex-1 h-px" style={{ backgroundColor: '#ffffff10' }} />
      </div>

      {/* Session cards */}
      <div className="flex items-stretch gap-3 overflow-x-auto scrollbar-hide pl-5 pr-5 pb-2">
        {coach.situations.map((sit) => (
          <button
            key={sit.id}
            onClick={() => startChat(sit.text)}
            className="flex-shrink-0 w-40 h-52 rounded-3xl overflow-hidden relative active:scale-95 transition-transform"
            style={{
              backgroundColor: coach.color,
              ...(sit.cardBg ? { backgroundImage: `url(${sit.cardBg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}),
            }}
          >
            {/* Layered gradients for depth */}
            {!sit.cardBg && <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-[13px] font-medium leading-snug text-left">
              {sit.text}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}

function FriendCard({ friend }) {
  const navigate = useNavigate()
  return (
    <div
      className="flex-shrink-0 w-36 h-48 rounded-3xl overflow-hidden relative shadow-lg"
      style={{ backgroundColor: friend.color }}
    >
      <Avatar
        src={friend.avatar}
        alt={friend.name}
        initials={friend.initials}
        color={friend.color}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {/* Online dot */}
      <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-green-400 rounded-full shadow-sm" />
      {/* Name & vibe */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-semibold text-[14px] leading-tight">{friend.name}</p>
        <p className="text-white/60 text-[11px] leading-snug mt-0.5">{friend.vibe}</p>
        {/* Icons */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => navigate('/chat', { state: { pillarId: friend.id } })}
            className="w-8 h-8 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: '#ffffff18' }}
          >
            <MessageCircle size={14} color="white" strokeWidth={1.8} />
          </button>
          <button
            onClick={() => navigate('/call', { state: { pillarId: friend.id } })}
            className="w-8 h-8 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: '#ffffff18' }}
          >
            <Phone size={14} color="white" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PillarsScreen() {
  return (
    <div className="min-h-screen bg-dark-bg pb-28 overflow-x-hidden">
      {/* Header */}
      <div className="px-5 pt-16 pb-7">
        <p className="text-[13px] text-dark-muted font-medium tracking-wide">Good evening,</p>
        <h1 className="font-serif text-[32px] text-[#f5f0ea] mt-1 leading-tight">Swayamjeet</h1>
      </div>

      {/* Coaches */}
      <div className="mb-4">
        <div className="flex items-center gap-2 px-5 mb-5">
          <p className="font-serif text-[22px] font-bold" style={{ color: '#f5f0ea' }}>Meet Your Coaches</p>
        </div>
        {coaches.map((coach) => (
          <CoachSection key={coach.id} coach={coach} />
        ))}
      </div>

      {/* Friends */}
      <div>
        <div className="flex items-center gap-2 px-5 mb-5">
          <p className="font-serif text-[22px] font-bold" style={{ color: '#f5f0ea' }}>Meet Your Friends</p>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pl-5 pr-5 pb-2">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  )
}
