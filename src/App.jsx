import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import PillarsScreen from './pages/PillarsScreen'
import ChatScreen from './pages/ChatScreen'
import ProfileScreen from './pages/ProfileScreen'
import CallScreen from './pages/CallScreen'
import PillarProfileScreen from './pages/PillarProfileScreen'

export default function App() {
  return (
    <BrowserRouter>
      {/* Mobile container — max 430px, centered */}
      <div className="min-h-screen bg-dark-bg flex justify-center">
        <div className="relative w-full max-w-[430px] bg-dark-bg min-h-screen shadow-xl">
          <Routes>
            <Route path="/"        element={<PillarsScreen />} />
            <Route path="/chat"    element={<ChatScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/call"           element={<CallScreen />} />
            <Route path="/pillar-profile" element={<PillarProfileScreen />} />
          </Routes>
          <BottomNav />
        </div>
      </div>
    </BrowserRouter>
  )
}
