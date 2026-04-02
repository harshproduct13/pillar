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

export default function TermsConditions() {
  return (
    <div style={{ backgroundColor: '#0f0f0d', paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}
          style={{ color: '#55554f' }}
        >
          <Link to="/" style={{ color: '#88887f' }} className="hover:text-white transition-colors">Pillar</Link>
          <span>/</span>
          <span>Terms &amp; Conditions</span>
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
            Terms &amp; Conditions
          </h1>
          <p style={{ color: '#55554f', fontSize: 14, marginBottom: 24 }}>
            Last updated: January 1, 2025
          </p>
          <p style={{ fontSize: 16, color: '#c0c0b8', lineHeight: 1.7 }}>
            Please read these Terms and Conditions carefully before using Pillar. By accessing or using our service, you agree to be bound by these terms.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Section title="1. Acceptance of Terms">
            <P>By downloading, installing, or using the Pillar application ("the App", "Service"), you agree to be bound by these Terms and Conditions ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use the Service.</P>
            <P>These Terms constitute a legally binding agreement between you and Pillar. We reserve the right to update these Terms at any time. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.</P>
            <P>You must be at least 18 years of age to use Pillar. By using the Service, you represent and warrant that you are 18 years of age or older.</P>
          </Section>

          <Section title="2. Description of Service">
            <P>Pillar is an AI-powered companion application that provides:</P>
            <Ul items={[
              'Access to AI coaches (Mira, Kabir, Myra) for guidance on relationships, work, and dating.',
              'Access to AI friends (Anya, Saira, David) for peer-style conversation and companionship.',
              'A private, judgment-free space for personal reflection and support.',
            ]} />
            <P>The Service is designed to complement, not replace, human connection. Pillar is not a medical service, mental health treatment, or crisis intervention tool.</P>
          </Section>

          <Section title="3. AI Disclaimer — Not Therapy">
            <P><strong style={{ color: '#f5f0ea' }}>IMPORTANT: Pillar is not a mental health service, therapy, or medical treatment.</strong></P>
            <P>The AI companions on Pillar — including all coaches and friends — are artificial intelligence systems. They are not licensed therapists, psychologists, counsellors, doctors, or any other kind of regulated healthcare professional.</P>
            <Ul items={[
              'Pillar is not a substitute for professional mental health care, therapy, or medical advice.',
              'Nothing said by a Pillar AI companion should be construed as medical, psychological, or therapeutic advice.',
              'If you are experiencing a mental health crisis, thoughts of self-harm or suicide, or any psychiatric emergency, please contact emergency services or a qualified mental health professional immediately.',
              'Crisis helpline (India): iCall — 9152987821 | Vandrevala Foundation — 1860-2662-345 (24/7)',
            ]} />
            <P>By using Pillar, you acknowledge and accept that the AI companions are not mental health professionals and that the Service does not constitute mental health treatment of any kind.</P>
          </Section>

          <Section title="4. User Accounts">
            <P>To use Pillar, you must create an account. You agree to:</P>
            <Ul items={[
              'Provide accurate and complete information during registration.',
              'Maintain the security of your account credentials.',
              'Notify us immediately of any unauthorised use of your account.',
              'Be responsible for all activity that occurs under your account.',
              'Not share your account with others or create multiple accounts.',
            ]} />
            <P>We reserve the right to suspend or terminate accounts that violate these Terms or that we determine, in our sole discretion, are being used inappropriately.</P>
          </Section>

          <Section title="5. User Conduct">
            <P>When using Pillar, you agree not to:</P>
            <Ul items={[
              'Use the Service for any unlawful purpose or in violation of any applicable laws.',
              'Attempt to manipulate, deceive, or "jailbreak" the AI companions to produce harmful, offensive, or inappropriate content.',
              'Use the Service to harass, threaten, or intimidate others.',
              'Attempt to reverse engineer, decompile, or extract the underlying AI models or systems.',
              'Reproduce, distribute, or create derivative works based on the Service without our written permission.',
              'Circumvent any technical limitations, security measures, or access controls.',
              'Use automated tools to scrape, crawl, or extract data from the Service.',
              'Impersonate any person or entity, or misrepresent your affiliation with any person or entity.',
            ]} />
            <P>We reserve the right to remove any content or terminate any account that violates these conduct guidelines, without notice and at our sole discretion.</P>
          </Section>

          <Section title="6. Intellectual Property">
            <P>All content, features, and functionality of Pillar — including but not limited to the AI companion characters, their names, personalities, conversation flows, visual design, logos, and underlying technology — are the exclusive intellectual property of Pillar and are protected by applicable copyright, trademark, patent, and other intellectual property laws.</P>
            <P>You are granted a limited, non-exclusive, non-transferable, revocable licence to use the Service for personal, non-commercial purposes. This licence does not include the right to:</P>
            <Ul items={[
              'Reproduce, modify, or distribute any part of the Service.',
              'Create derivative works based on the AI companions or their personalities.',
              'Use Pillar\'s branding, logos, or character likenesses without written permission.',
              'Commercially exploit any content from the Service.',
            ]} />
          </Section>

          <Section title="7. Subscription and Payments">
            <P>Pillar offers both free and paid subscription tiers. By subscribing to a paid tier, you agree to:</P>
            <Ul items={[
              'Pay all applicable fees as described at the time of purchase.',
              'Provide accurate and complete payment information.',
              'Subscriptions automatically renew unless cancelled before the renewal date.',
              'Fees are non-refundable except as required by applicable law or at our discretion.',
            ]} />
            <P>We reserve the right to change pricing at any time. Changes to pricing will be communicated with reasonable advance notice. Continued use of paid features after a price change constitutes your acceptance of the new pricing.</P>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <P>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</P>
            <P>We do not warrant that:</P>
            <Ul items={[
              'The Service will be uninterrupted, error-free, or completely secure.',
              'The AI companions will always provide accurate, helpful, or appropriate responses.',
              'The Service will meet your specific needs or expectations.',
              'Any defects in the Service will be corrected.',
            ]} />
            <P>You use the Service at your own risk. The AI companions may occasionally produce inaccurate, incomplete, or inappropriate responses, and you should exercise your own judgment when interpreting their output.</P>
          </Section>

          <Section title="9. Limitation of Liability">
            <P>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PILLAR AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:</P>
            <Ul items={[
              'Any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.',
              'Any decisions made based on AI companion responses.',
              'Any emotional distress, psychological harm, or personal injury arising from use of the Service.',
              'Loss of data, revenue, profits, or business opportunities.',
              'Any unauthorised access to your account or data.',
            ]} />
            <P>Our total liability to you for any claims arising from or related to the Service shall not exceed the amount you paid to us in the twelve months preceding the claim.</P>
          </Section>

          <Section title="10. Termination">
            <P>Either party may terminate this agreement at any time:</P>
            <Ul items={[
              'You may delete your account at any time through the app settings.',
              'We may suspend or terminate your access if you violate these Terms, engage in harmful behaviour, or for any other reason at our sole discretion.',
              'Upon termination, your right to use the Service ceases immediately.',
              'We will retain and handle your data as described in our Privacy Policy.',
            ]} />
            <P>Termination does not affect any rights or obligations that have accrued prior to termination, and Sections 3, 6, 8, 9 and 11 will survive termination.</P>
          </Section>

          <Section title="11. Governing Law and Disputes">
            <P>These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law provisions.</P>
            <P>Any disputes arising from or relating to these Terms or the Service shall first be attempted to be resolved through good-faith negotiation. If that fails, disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.</P>
          </Section>

          <Section title="12. Contact">
            <P>For questions about these Terms, please contact us:</P>
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
            to="/privacy-policy"
            className="text-sm transition-colors"
            style={{ color: '#88887f' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f0ea'}
            onMouseLeave={e => e.currentTarget.style.color = '#88887f'}
          >
            Privacy Policy &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
