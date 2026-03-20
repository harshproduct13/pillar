import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, MoreHorizontal, Volume2, Mic, Phone } from 'lucide-react'
import { coaches, friends } from '../data/pillars'
import Avatar from '../components/Avatar'

const allPillars = [...coaches, ...friends]

function useTimer() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const m = String(Math.floor(seconds / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

export default function CallScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const pillarId = location.state?.pillarId || 'mira'
  const pillar = allPillars.find((p) => p.id === pillarId) || allPillars[0]
  const timer = useTimer()
  const [micOn, setMicOn] = useState(true)
  const [speakerOn, setSpeakerOn] = useState(true)

  return (
    <div
      className="flex flex-col min-h-screen max-w-[430px] mx-auto relative overflow-hidden"
      style={{ backgroundColor: '#1a1a18' }}
    >
      {/* Subtle orange glow behind avatar */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #f9731615 0%, transparent 70%)',
        }}
      />

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-14 pb-4 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
          style={{ backgroundColor: '#2e2e2b' }}
        >
          <ArrowLeft size={18} color="#f5f0ea" strokeWidth={2} />
        </button>

        <div className="text-center">
          <p className="font-semibold text-[#f5f0ea] text-[17px] leading-tight">{pillar.name}</p>
          <p className="text-[13px] mt-0.5" style={{ color: '#f97316' }}>{timer}</p>
        </div>

        <button
          className="w-10 h-10 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
          style={{ backgroundColor: '#2e2e2b' }}
        >
          <MoreHorizontal size={18} color="#f5f0ea" strokeWidth={2} />
        </button>
      </div>

      {/* Avatar */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative">
          {/* Outer pulse ring */}
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              backgroundColor: '#f9731612',
              margin: '-16px',
            }}
          />
          {/* Inner glow ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              margin: '-6px',
              border: '1.5px solid #f9731630',
            }}
          />
          {/* Avatar */}
          <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl"
            style={{ border: '3px solid #f9731640' }}
          >
            <Avatar
              src={pillar.avatar}
              alt={pillar.name}
              initials={pillar.initials}
              color={pillar.color}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="pb-20 pt-8 relative z-10">
        <div className="flex items-center justify-center gap-8">
          {/* Speaker */}
          <button
            onClick={() => setSpeakerOn((v) => !v)}
            className="w-16 h-16 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: speakerOn ? '#3a3a37' : '#f9731630' }}
          >
            <Volume2 size={22} color={speakerOn ? '#f5f0ea' : '#f97316'} strokeWidth={1.8} />
          </button>

          {/* End call */}
          <button
            onClick={() => navigate(-1)}
            className="w-20 h-20 rounded-full flex items-center justify-center active:scale-95 transition-transform shadow-xl"
            style={{ backgroundColor: '#e53935' }}
          >
            <Phone size={28} color="white" strokeWidth={2} style={{ transform: 'rotate(135deg)' }} />
          </button>

          {/* Mic */}
          <button
            onClick={() => setMicOn((v) => !v)}
            className="w-16 h-16 rounded-full flex items-center justify-center active:opacity-60 transition-opacity"
            style={{ backgroundColor: micOn ? '#3a3a37' : '#f9731630' }}
          >
            <Mic size={22} color={micOn ? '#f5f0ea' : '#f97316'} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  )
}
