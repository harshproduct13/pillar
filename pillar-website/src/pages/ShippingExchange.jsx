import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{ color: '#f5f0ea', fontSize: 22, fontWeight: 700, marginBottom: 20, marginTop: 8 }}
      >
        {title}
      </h2>
      <div style={{ color: '#88887f', lineHeight: '1.85', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }) {
  return <p className="text-sm">{children}</p>
}

function Ul({ items }) {
  return (
    <ul className="text-sm space-y-1.5 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span style={{ color: '#f97316', marginTop: '4px' }}>&#8226;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ShippingExchange() {
  return (
    <div style={{ backgroundColor: '#0f0f0d', paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#55554f' }}
        >
          <Link to="/" style={{ color: '#88887f' }} className="hover:text-white transition-colors">Pillar</Link>
          <span>/</span>
          <span>Shipping &amp; Exchange</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <h1
            style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}
          >
            Shipping &amp; Exchange
          </h1>
          <p style={{ color: '#55554f', fontSize: 14, marginBottom: 24 }}>
            Last updated: July 25, 2026
          </p>
          <p style={{ fontSize: 16, color: '#c0c0b8', lineHeight: 1.7 }}>
            Pillar is a fully digital product. There is nothing to ship physically — access is delivered instantly through the app. This page explains how delivery works and how you can exchange or change your subscription plan.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Section title="1. Digital Delivery — No Physical Shipping">
            <P>Pillar is a digital subscription service. We do not sell or ship any physical goods, so no shipping, courier, or delivery charges ever apply.</P>
            <Ul items={[
              'When your payment is successful, access to your paid features is granted instantly within the app.',
              'There is no waiting period, tracking number, or physical delivery involved.',
              'Your subscription is tied to your Pillar account and is available on your device as soon as payment is confirmed.',
            ]} />
          </Section>

          <Section title="2. When Access Is Activated">
            <P>Paid access is activated automatically the moment your UPI or other payment is confirmed by our payment partner. In rare cases where a payment is delayed or held for verification, access is granted as soon as the payment is confirmed.</P>
            <P>If you have completed a payment but do not see your paid features within a few minutes, please close and reopen the app. If it still does not appear, contact us and we will resolve it promptly.</P>
          </Section>

          <Section title="3. Exchanging or Changing Your Plan">
            <P>Because Pillar is a digital service, there are no physical items to return or exchange. &ldquo;Exchange&rdquo; here means changing your subscription plan — for example, switching between monthly and annual, or upgrading and downgrading.</P>
            <Ul items={[
              'You can change your plan any time from the app under Settings → Subscription, or by contacting us.',
              'Upgrades take effect immediately, and any applicable difference is adjusted at the time of change.',
              'Downgrades take effect from your next billing cycle, so you keep your current benefits until then.',
            ]} />
            <P>For details on cancelling a plan or getting a refund, please see our Cancellation &amp; Refund policy.</P>
          </Section>

          <Section title="4. Contact Us">
            <P>For any questions about delivery, activation, or changing your plan, please reach out:</P>
            <Ul items={[
              'Email: getinclined@gmail.com',
              'We aim to respond within 5 business days.',
            ]} />
          </Section>
        </motion.div>

        {/* Footer nav */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to="/"
            className="text-sm flex items-center gap-2 transition-colors"
            style={{ color: '#88887f' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f0ea'}
            onMouseLeave={e => e.currentTarget.style.color = '#88887f'}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <Link
            to="/cancellation-refund"
            className="text-sm transition-colors"
            style={{ color: '#88887f' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f0ea'}
            onMouseLeave={e => e.currentTarget.style.color = '#88887f'}
          >
            Cancellation &amp; Refund &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
