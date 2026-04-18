import { NavLink } from 'react-router-dom'
import { Home, MessageCircle, User } from 'lucide-react'

const tabs = [
  { to: '/',        label: 'Pillars', Icon: Home },
  { to: '/chat',    label: 'Chat',    Icon: MessageCircle },
  { to: '/profile', label: 'Profile', Icon: User },
]

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50"
      style={{ backgroundColor: '#282826' }}
    >
      {/* Top hairline */}
      <div className="h-px w-full" style={{ backgroundColor: '#ffffff10' }} />

      <div className="flex items-center justify-around h-[62px] pb-safe">
        {tabs.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className="flex flex-col items-center justify-center gap-[5px] flex-1 h-full active:opacity-60 transition-opacity"
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2 : 1.5}
                  color={isActive ? '#f97316' : '#55554f'}
                />
                <span
                  className="text-[10px] font-semibold tracking-[0.08em] uppercase"
                  style={{ color: isActive ? '#f97316' : '#55554f' }}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
