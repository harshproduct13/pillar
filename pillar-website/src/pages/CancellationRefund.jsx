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

export default function CancellationRefund() {
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
          <span>Cancellation &amp; Exchange</span>
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
            Cancellation &amp; Exchange
          </h1>
          <p style={{ color: '#55554f', fontSize: 14, marginBottom: 24 }}>
            Last updated: July 25, 2026
          </p>
          <p style={{ fontSize: 16, color: '#c0c0b8', lineHeight: 1.7 }}>
            This policy explains how Pillar subscriptions work, how you can cancel, and how cancellations, refunds, and exchanges are handled for payments made through UPI and other supported methods.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Section title="1. Subscriptions">
            <P>Pillar offers a free tier and paid subscription plans. Paid plans unlock extended access to your AI coaches and friends. Subscriptions are billed in advance on a recurring basis (for example, monthly or annually) depending on the plan you choose at the time of purchase.</P>
            <P>Payments are processed securely through supported methods, including UPI. By subscribing, you authorise Pillar and its payment partners to charge the applicable fees for your chosen plan.</P>
          </Section>

          <Section title="2. Cancelling Your Subscription">
            <P>You can cancel your subscription at any time. When you cancel:</P>
            <Ul items={[
              'Your subscription remains active until the end of your current billing period.',
              'You will continue to have access to paid features until that period ends.',
              'You will not be charged for the next billing cycle.',
              'Auto-renewal is turned off, so no further payments are taken.',
            ]} />
            <P>To cancel, open the Pillar app and go to Settings &rarr; Subscription, or email us at getinclined@gmail.com and we will help you cancel.</P>
          </Section>

          <Section title="3. Refunds">
            <P>As Pillar provides digital access that is available immediately upon subscribing, payments are generally non-refundable once a billing period has begun, except where required by applicable law.</P>
            <P>We may, at our discretion, consider a refund in cases such as:</P>
            <Ul items={[
              'You were charged more than once for the same subscription period (duplicate payment).',
              'You were charged after cancelling and did not use the paid features in the new period.',
              'A verified technical issue on our side prevented you from accessing the service you paid for.',
            ]} />
            <P>Approved refunds are processed back to your original payment method (including the UPI account used) within 5–7 business days. The time it takes to reflect in your account depends on your bank or UPI provider.</P>
          </Section>

          <Section title="4. Exchanges">
            <P>Pillar is a digital subscription service, so there are no physical goods to exchange. If you wish to change your plan — for example, switching between monthly and annual, or upgrading and downgrading — you can do so from within the app, or by contacting us.</P>
            <Ul items={[
              'Upgrades take effect immediately, and any applicable difference is adjusted at the time of change.',
              'Downgrades take effect from your next billing cycle.',
            ]} />
          </Section>

          <Section title="5. Failed or Incorrect Payments">
            <P>If a UPI or other payment fails but an amount is debited from your account, the amount is typically reversed automatically by your bank or UPI provider within a few business days. If you do not see the reversal, please contact us with your transaction details and we will assist you.</P>
          </Section>

          <Section title="6. Contact Us">
            <P>For any questions about cancellations, refunds, or exchanges, please reach out:</P>
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
            to="/terms"
            className="text-sm transition-colors"
            style={{ color: '#88887f' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f0ea'}
            onMouseLeave={e => e.currentTarget.style.color = '#88887f'}
          >
            Terms &amp; Conditions &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
