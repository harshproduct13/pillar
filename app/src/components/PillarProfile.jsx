import { X } from 'lucide-react'
import Avatar from './Avatar'
import { coaches } from '../data/pillars'

export default function PillarProfile({ pillar, onClose, onStartChat }) {
  const isCoach = coaches.some((c) => c.id === pillar.id)

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 rounded-t-3xl overflow-hidden"
        style={{ backgroundColor: '#242422', maxHeight: '88vh' }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ backgroundColor: '#ffffff20' }} />
        </div>

        <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(88vh - 20px)' }}>
          {/* Hero avatar */}
          <div className="relative mx-5 mt-3 rounded-2xl overflow-hidden" style={{ height: '220px' }}>
            <Avatar
              src={pillar.avatar}
              alt={pillar.name}
              initials={pillar.initials}
              color={pillar.color}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#00000060' }}
            >
              <X size={16} color="white" strokeWidth={2} />
            </button>
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-[24px] text-white leading-tight">{pillar.name}</p>
              <span
                className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: `${pillar.color}40`,
                  color: pillar.accent || 'white',
                }}
              >
                {isCoach ? pillar.role : pillar.vibe}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="px-5 mt-5">
            <p className="text-[14px] leading-relaxed" style={{ color: '#b0b0a8' }}>
              {pillar.bio}
            </p>
          </div>

          {/* Tags */}
          {pillar.tags && (
            <div className="px-5 mt-4 flex flex-wrap gap-2">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{ backgroundColor: `${pillar.color}25`, color: pillar.accent || '#f5f0ea' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Sessions (coaches only) */}
          {isCoach && pillar.situations && (
            <div className="mt-6 px-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#55554f' }}>
                Topics
              </p>
              <div className="space-y-2">
                {pillar.situations.map((sit) => (
                  <button
                    key={sit.id}
                    onClick={() => onStartChat(sit.text)}
                    className="w-full text-left px-4 py-3 rounded-2xl flex items-center justify-between active:opacity-70 transition-opacity"
                    style={{ backgroundColor: '#2e2e2b' }}
                  >
                    <span className="text-[14px]" style={{ color: '#f5f0ea' }}>{sit.text}</span>
                    <span style={{ color: pillar.accent || '#f97316' }} className="text-[16px]">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Start chat CTA */}
          <div className="px-5 mt-6 mb-10">
            <button
              onClick={() => onStartChat()}
              className="w-full py-4 rounded-2xl font-semibold text-[15px] text-white active:opacity-80 transition-opacity"
              style={{ backgroundColor: pillar.color }}
            >
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
