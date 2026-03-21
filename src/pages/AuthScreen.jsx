import { useNavigate } from 'react-router-dom'

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function AuthScreen() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex flex-col px-6"
      style={{ backgroundColor: '#0f0f0d' }}
    >
      {/* Top spacer */}
      <div className="flex-1" />

      {/* Center content */}
      <div className="flex flex-col items-center text-center">
        {/* Logo mark */}
        <div
          className="w-[72px] h-[72px] rounded-[22px] flex items-center justify-center mb-5 shadow-lg"
          style={{ backgroundColor: '#f97316' }}
        >
          <span className="font-serif text-[36px] text-white leading-none">P</span>
        </div>

        {/* Wordmark */}
        <h1 className="font-serif text-[40px] leading-none text-[#f5f0ea] mb-3">
          Pillar
        </h1>

        {/* Tagline */}
        <p className="text-[17px] leading-snug max-w-[260px] font-medium" style={{ color: '#c0c0b8' }}>
          Everybody deserves a support system.
        </p>

        {/* Feature pills */}
        <div className="flex items-center gap-2 mt-5 flex-wrap justify-center">
          {['Judgement Free', 'Private', '24×7'].map((label) => (
            <span
              key={label}
              className="px-3.5 py-1.5 rounded-full text-[12px] font-medium"
              style={{ backgroundColor: '#f9731614', border: '1px solid #f9731630', color: '#f97316' }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="flex-1" />

      {/* Actions */}
      <div className="pb-12 space-y-3">
        {/* Google Sign In */}
        <button
          onClick={() => navigate('/onboarding')}
          className="w-full flex items-center justify-center gap-3 py-[15px] rounded-2xl active:opacity-80 transition-opacity shadow-sm"
          style={{ backgroundColor: '#ffffff' }}
        >
          <GoogleIcon />
          <span className="text-[15px] font-semibold text-[#1a1a18]">Continue with Google</span>
        </button>

        {/* Already have account — same button for now, same destination */}
        <button
          onClick={() => navigate('/')}
          className="w-full py-[13px] rounded-2xl active:opacity-60 transition-opacity"
          style={{ border: '1px solid #ffffff12' }}
        >
          <span className="text-[14px]" style={{ color: '#88887f' }}>Already have an account?&nbsp;</span>
          <span className="text-[14px] font-semibold" style={{ color: '#f97316' }}>Sign in</span>
        </button>

        <p className="text-center text-[11px] pt-1" style={{ color: '#3a3a37' }}>
          By continuing you agree to our Terms &amp; Privacy Policy
        </p>
      </div>
    </div>
  )
}
