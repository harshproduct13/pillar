import { ChevronRight, LogOut, Globe, User, Phone, Mail, HelpCircle, FileText, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProfileScreen() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen pb-28 overflow-x-hidden" style={{ backgroundColor: '#141412' }}>

      {/* Top label */}
      <div className="px-5 pt-16 pb-4">
        <h1 className="font-serif text-[28px] text-[#f5f0ea] leading-tight">Profile</h1>
      </div>

      {/* General settings group */}
      <div className="mx-5 mb-4 rounded-2xl overflow-hidden" style={{ backgroundColor: '#1e1e1c' }}>
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] px-4 pt-4 pb-2" style={{ color: '#55554f' }}>
          General
        </p>

        {/* Name */}
        <div className="flex items-center px-4 py-3.5 gap-3" style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#f9731618' }}>
            <User size={17} color="#f97316" strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] mb-1" style={{ color: '#55554f' }}>Name</p>
            <input
              type="text"
              defaultValue="Swayamjeet"
              className="w-full bg-transparent text-[14px] outline-none"
              style={{ color: '#f5f0ea' }}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center px-4 py-3.5 gap-3" style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#4ade8018' }}>
            <Phone size={17} color="#4ade80" strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] mb-1" style={{ color: '#55554f' }}>Phone Number</p>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              className="w-full bg-transparent text-[14px] outline-none"
              style={{ color: '#f5f0ea' }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center px-4 py-3.5 gap-3" style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#60a5fa18' }}>
            <Mail size={17} color="#60a5fa" strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] mb-1" style={{ color: '#55554f' }}>Email Address</p>
            <input
              type="email"
              defaultValue="swayam@example.com"
              className="w-full bg-transparent text-[14px] outline-none"
              style={{ color: '#f5f0ea' }}
            />
          </div>
        </div>

        {/* Language */}
        <button className="flex items-center px-4 py-3.5 w-full text-left active:opacity-60 transition-opacity"
          style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3 flex-shrink-0"
            style={{ backgroundColor: '#c084fc18' }}>
            <Globe size={17} color="#c084fc" strokeWidth={1.8} />
          </div>
          <p className="flex-1 text-[14px] text-[#f5f0ea]">Language</p>
          <span className="text-[13px] mr-2" style={{ color: '#88887f' }}>English</span>
          <ChevronRight size={16} color="#55554f" strokeWidth={1.8} />
        </button>
      </div>

      {/* Support group */}
      <div className="mx-5 mb-6 rounded-2xl overflow-hidden" style={{ backgroundColor: '#1e1e1c' }}>
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] px-4 pt-4 pb-2" style={{ color: '#55554f' }}>
          Support
        </p>

        <button className="flex items-center px-4 py-3.5 w-full text-left active:opacity-60 transition-opacity"
          style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3 flex-shrink-0"
            style={{ backgroundColor: '#f9731618' }}>
            <HelpCircle size={17} color="#f97316" strokeWidth={1.8} />
          </div>
          <p className="flex-1 text-[14px] text-[#f5f0ea]">FAQ</p>
          <ChevronRight size={16} color="#55554f" strokeWidth={1.8} />
        </button>

        <button className="flex items-center px-4 py-3.5 w-full text-left active:opacity-60 transition-opacity"
          style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3 flex-shrink-0"
            style={{ backgroundColor: '#88887f18' }}>
            <FileText size={17} color="#88887f" strokeWidth={1.8} />
          </div>
          <p className="flex-1 text-[14px] text-[#f5f0ea]">Terms of Service</p>
          <ChevronRight size={16} color="#55554f" strokeWidth={1.8} />
        </button>

        <button className="flex items-center px-4 py-3.5 w-full text-left active:opacity-60 transition-opacity"
          style={{ borderTop: '1px solid #ffffff08' }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center mr-3 flex-shrink-0"
            style={{ backgroundColor: '#88887f18' }}>
            <Shield size={17} color="#88887f" strokeWidth={1.8} />
          </div>
          <p className="flex-1 text-[14px] text-[#f5f0ea]">User Policy</p>
          <ChevronRight size={16} color="#55554f" strokeWidth={1.8} />
        </button>
      </div>

      {/* Log out */}
      <div className="mx-5">
        <button
          onClick={() => navigate('/auth')}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl active:opacity-60 transition-opacity"
          style={{ border: '1px solid #ef444430', backgroundColor: '#ef444408' }}>
          <LogOut size={16} color="#ef4444" strokeWidth={1.8} />
          <p className="text-[14px] font-semibold text-red-400">Log Out</p>
        </button>
      </div>

      <p className="text-center text-[11px] mt-8 mb-2" style={{ color: '#3a3a37' }}>Pillar v0.1.0</p>
    </div>
  )
}
