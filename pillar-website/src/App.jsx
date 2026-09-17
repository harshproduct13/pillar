import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Seo from './components/Seo'
import LandingPage from './pages/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CancellationRefund from './pages/CancellationRefund'
import ShippingExchange from './pages/ShippingExchange'
import ContactUs from './pages/ContactUs'
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
        <Route path="/" element={<Layout><Seo title="Pillar — Everybody deserves a support system." description="Pillar — A private, judgment-free space to talk through whatever's on your mind. AI coaches and friends, always available." path="/" /><LandingPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><Seo title="Privacy Policy — Pillar" description="How Pillar collects, uses, stores and deletes your information." path="/privacy-policy" /><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><Seo title="Terms & Conditions — Pillar" description="The terms that apply when you use the Pillar app and website." path="/terms" /><TermsConditions /></Layout>} />
        <Route path="/cancellation-refund" element={<Layout><Seo title="Cancellation & Refund — Pillar" description="Pillar cancellation and refund policy." path="/cancellation-refund" noindex /><CancellationRefund /></Layout>} />
        <Route path="/shipping-exchange" element={<Layout><Seo title="Shipping & Exchange — Pillar" description="Pillar shipping and exchange policy." path="/shipping-exchange" noindex /><ShippingExchange /></Layout>} />
        <Route path="/contact" element={<Layout><Seo title="Contact — Pillar" description="How to reach the Pillar team." path="/contact" /><ContactUs /></Layout>} />
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
