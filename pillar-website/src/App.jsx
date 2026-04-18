import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Screenshots, { Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5 } from './pages/Screenshots'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#0f0f0d' }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsConditions /></Layout>} />
        <Route path="/screenshots" element={<Screenshots />} />
        <Route path="/screenshots/1" element={<Screenshot1 />} />
        <Route path="/screenshots/2" element={<Screenshot2 />} />
        <Route path="/screenshots/3" element={<Screenshot3 />} />
        <Route path="/screenshots/4" element={<Screenshot4 />} />
        <Route path="/screenshots/5" element={<Screenshot5 />} />
      </Routes>
    </BrowserRouter>
  )
}
