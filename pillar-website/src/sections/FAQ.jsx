import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Is Pillar a therapy app?',
    a: 'No. Pillar is not a substitute for therapy or mental health treatment. Think of it as a support system — coaches who help you think more clearly and friends who just listen. If you\'re in crisis, please reach out to a mental health professional.',
  },
  {
    q: 'Are my conversations private?',
    a: 'Yes, completely. Your conversations are private and not shared with anyone. We don\'t sell your data or use it for advertising.',
  },
  {
    q: "What's the difference between coaches and friends?",
    a: 'Coaches are expert-positioned companions who help you think through specific challenges — relationships, work, dating. Friends are peer-positioned — no expertise, no unsolicited advice. Just company.',
  },
  {
    q: 'Is Pillar free?',
    a: 'Pillar offers a free tier so you can get started right away. Premium features are available for users who want unlimited sessions and access to all companions.',
  },
  {
    q: 'Is it available on iPhone?',
    a: 'Pillar is currently available on Android. iOS is coming soon — follow us to be notified when it launches.',
  },
  {
    q: 'Who are the coaches and friends?',
    a: 'Mira, Kabir, and Myra are AI coaches trained for specific domains. Anya, Saira, and David are AI friends — no coaching, just conversation. All are designed to feel warm and human.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: isOpen ? '1px solid rgba(249,115,22,0.22)' : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: isOpen ? '#1a1a18' : 'transparent',
        transition: 'background-color 0.2s, border-color 0.2s',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ color: isOpen ? '#f5f0ea' : '#c0c0b8', fontSize: 15, fontWeight: 500, lineHeight: 1.4, transition: 'color 0.2s' }}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: isOpen ? 'rgba(249,115,22,0.18)' : 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 0.2s',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v9M1 5.5h9" stroke={isOpen ? '#f97316' : '#88887f'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: '#88887f', fontSize: 14, lineHeight: 1.75, padding: '0 24px 22px' }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" style={{ backgroundColor: '#0f0f0d', padding: '120px 0' }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#55554f', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            FAQ
          </p>
          <h2 className="font-serif" style={{ color: '#f5f0ea', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.15 }}>
            Questions? We've got answers.
          </h2>
        </motion.div>

        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
