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

export default function PrivacyPolicy() {
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
          <span>Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p style={{ color: '#55554f', fontSize: 14, marginBottom: 24 }}>
            Last updated: January 1, 2025
          </p>
          <p style={{ fontSize: 16, color: '#c0c0b8', lineHeight: 1.7 }}>
            Your privacy is fundamental to everything we build at Pillar. This policy explains what data we collect, why we collect it, and how we protect it.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Section title="1. Who We Are">
            <P>Pillar ("we", "us", "our") is an AI companion application designed to provide emotional support, coaching, and companionship to users. We are committed to protecting your personal information and being transparent about how we handle it.</P>
            <P>For privacy-related inquiries, you may contact us at: <span style={{ color: '#f97316' }}>privacy@pillar.app</span></P>
          </Section>

          <Section title="2. Information We Collect">
            <P><strong style={{ color: '#c0c0b8' }}>Information you provide directly:</strong></P>
            <Ul items={[
              'Account information: Name, email address, and profile details you enter during sign-up and onboarding.',
              'Demographic information: Age range, gender, and language preference collected during onboarding to personalise your experience.',
              'Conversation data: Messages and interactions you have with our AI coaches and friends.',
              'Preferences and settings: Your companion selections, notification preferences, and other in-app settings.',
            ]} />
            <P><strong style={{ color: '#c0c0b8' }}>Information collected automatically:</strong></P>
            <Ul items={[
              'Usage data: How you interact with the app, including features used, session duration, and navigation patterns.',
              'Device information: Device type, operating system version, and app version.',
              'Log data: IP address, access times, pages viewed, and crash reports.',
            ]} />
          </Section>

          <Section title="3. How We Use Your Information">
            <P>We use the information we collect to:</P>
            <Ul items={[
              'Provide, maintain, and improve the Pillar app and its features.',
              'Personalise your experience with AI companions based on your profile and preferences.',
              'Generate contextually appropriate responses from our AI coaches and friends.',
              'Send you important service updates, security alerts, and support messages.',
              'Analyse usage patterns to improve our AI models and user experience.',
              'Comply with legal obligations and enforce our Terms of Service.',
              'Detect, prevent, and address technical issues or fraudulent activity.',
            ]} />
            <P>We will never use your conversation data for advertising purposes, sell it to third parties, or use it to train public AI models without your explicit consent.</P>
          </Section>

          <Section title="4. Data Storage and Security">
            <P>We take the security of your data seriously and implement industry-standard safeguards:</P>
            <Ul items={[
              'All data is transmitted over encrypted HTTPS connections.',
              'Conversation data is encrypted at rest using AES-256 encryption.',
              'Access to user data is restricted to authorised personnel only, on a need-to-know basis.',
              'We conduct regular security audits and vulnerability assessments.',
              'We maintain incident response procedures in case of a data breach.',
            ]} />
            <P>Your data is stored on secure servers. We retain your conversation data for as long as your account is active, or as needed to provide our services. You may request deletion of your data at any time.</P>
          </Section>

          <Section title="5. Third-Party Services">
            <P>Pillar uses a limited number of trusted third-party services to operate:</P>
            <Ul items={[
              'Google Sign-In: For authentication. Google\'s privacy policy governs data processed through this service.',
              'Cloud infrastructure providers: For hosting and data storage. These providers are contractually bound to protect your data.',
              'Analytics tools: For understanding app usage in aggregate. We do not share personally identifiable information with analytics providers.',
            ]} />
            <P>We carefully vet all third-party partners and require them to adhere to strict data protection standards. We do not sell, rent, or share your personal information with advertisers or data brokers.</P>
          </Section>

          <Section title="6. Your Rights">
            <P>Depending on your location, you may have the following rights regarding your personal data:</P>
            <Ul items={[
              'Access: Request a copy of the personal data we hold about you.',
              'Correction: Request correction of inaccurate or incomplete data.',
              'Deletion: Request deletion of your personal data ("right to be forgotten").',
              'Portability: Request your data in a structured, machine-readable format.',
              'Restriction: Request that we limit how we process your data.',
              'Objection: Object to certain types of data processing.',
              'Withdrawal of consent: Withdraw consent where processing is based on consent.',
            ]} />
            <P>To exercise any of these rights, please contact us at <span style={{ color: '#f97316' }}>privacy@pillar.app</span>. We will respond to your request within 30 days.</P>
          </Section>

          <Section title="7. Conversation Privacy">
            <P>We understand that your conversations with Pillar companions may be deeply personal. We are committed to protecting the confidentiality of these conversations:</P>
            <Ul items={[
              'Your conversations are not read by Pillar employees except in cases required by law or to investigate reported safety concerns.',
              'Conversations are not used to serve you targeted advertisements.',
              'We do not share individual conversation content with third parties.',
              'You can delete your conversation history at any time from within the app.',
            ]} />
          </Section>

          <Section title="8. Children's Privacy">
            <P>Pillar is intended for users aged 18 and older. We do not knowingly collect personal information from individuals under 18. If we learn that we have collected data from a person under 18, we will promptly delete that information. If you believe a minor has provided us with personal information, please contact us immediately at <span style={{ color: '#f97316' }}>privacy@pillar.app</span>.</P>
          </Section>

          <Section title="9. Changes to This Policy">
            <P>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will notify you through the app or via email. The "Last updated" date at the top of this page indicates when the most recent changes were made.</P>
            <P>Continued use of Pillar after changes take effect constitutes your acceptance of the updated policy.</P>
          </Section>

          <Section title="10. Contact Us">
            <P>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</P>
            <Ul items={[
              'Email: privacy@pillar.app',
              'Response time: We aim to respond within 5 business days.',
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
