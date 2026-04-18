import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import PillarsScreen from './pages/PillarsScreen'
import ChatScreen from './pages/ChatScreen'
import ProfileScreen from './pages/ProfileScreen'
import CallScreen from './pages/CallScreen'
import PillarProfileScreen from './pages/PillarProfileScreen'
import AuthScreen from './pages/AuthScreen'
import OnboardingScreen from './pages/OnboardingScreen'

// Routes where BottomNav should be hidden
const NO_NAV_ROUTES = ['/auth', '/onboarding']

function AppShell() {
  const location = useLocation()
  const hideNav = NO_NAV_ROUTES.includes(location.pathname)

  return (
    <div className="relative w-full max-w-[430px] bg-dark-bg min-h-screen shadow-xl">
      <Routes>
        <Route path="/auth"          element={<AuthScreen />} />
        <Route path="/onboarding"    element={<OnboardingScreen />} />
        <Route path="/"              element={<PillarsScreen />} />
        <Route path="/chat"          element={<ChatScreen />} />
        <Route path="/profile"       element={<ProfileScreen />} />
        <Route path="/call"          element={<CallScreen />} />
        <Route path="/pillar-profile" element={<PillarProfileScreen />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg flex justify-center">
        <AppShell />
      </div>
    </BrowserRouter>
  )
}
