import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
    title: 'Advisory-First Approach',
    desc: 'We start with your goals and craft the right strategy for long-term success.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'UAE Expertise You Can Trust',
    desc: 'Years of local experience and strong relationships with authorities mean smoother approvals.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'End-to-End Support',
    desc: "From company formation to ongoing compliance — we're with you every step of the way.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Transparent & Straightforward',
    desc: 'Clear pricing, honest guidance, and zero hidden surprises.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Personalized Client Care',
    desc: 'Dedicated support tailored to your business, whenever you need it.',
  },
]

const stats = [
  { icon: '👥', value: '500+', label: 'Businesses Served', desc: 'Trusted by startups, SMEs and global companies.' },
  { icon: '🏆', value: '10+', label: 'Years of Excellence', desc: 'A decade of delivering reliable business solutions.' },
  { icon: '🌍', value: '50+', label: 'Countries Served', desc: 'Helping entrepreneurs from around the world.' },
  { icon: '😊', value: '98%', label: 'Client Satisfaction', desc: 'Our clients recommend us and stay with us.' },
]

const WhyIncorvia = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: 'easeOut', delay },
  })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        backgroundColor: '#f8fafc',
        padding: '100px 0 0',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden',
      }}
    >

      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '0 60px',
        display: 'grid', gridTemplateColumns: '45% 55%', gap: '60px',
        alignItems: 'start', position: 'relative', zIndex: 2,
      }}>

        {/* ═══════ LEFT SIDE ═══════ */}
        <div>
          {/* Tagline */}
          <motion.p {...fadeUp(0)} style={{
            color: '#2563eb', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px',
          }}>
            Why Incorvia?
          </motion.p>

          {/* Heading */}
          <motion.h2 {...fadeUp(0.1)} style={{
            fontWeight: 800, fontSize: '52px', lineHeight: 1.1,
            color: '#0a1d4d', margin: '0 0 24px 0',
          }}>
            Why Businesses<br />Choose{' '}
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic', fontWeight: 400, color: '#2563eb',
            }}>Incorvia</span>
          </motion.h2>

          {/* Description */}
          <motion.p {...fadeUp(0.2)} style={{
            color: '#94a3b8', fontSize: '16px', lineHeight: 1.75,
            maxWidth: '460px', margin: '0 0 48px 0',
          }}>
            We combine deep local expertise with a client-first approach to deliver seamless business setup and support in the UAE. Your success is our mission.
          </motion.p>

          {/* Feature List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(0.25 + i * 0.08)}
                style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: '#eff6ff', border: '1px solid #dbeafe',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontWeight: 700, fontSize: '15px', color: '#0a1d4d' }}>{f.title}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ RIGHT SIDE ═══════ */}
        <div style={{ position: 'relative', marginTop: '130px' }}>
          {/* Stats Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px',
            position: 'relative', zIndex: 2,
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                {...fadeUp(0.3 + i * 0.1)}
                style={{
                  backgroundColor: '#fff', borderRadius: '16px', padding: '28px',
                  border: '1px solid #e8ecf2', boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  backgroundColor: '#eff6ff', border: '1px solid #dbeafe',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <StatIcon type={i} />
                </div>
                <p style={{ margin: '0 0 4px', fontWeight: 800, fontSize: '36px', color: '#0a1d4d', lineHeight: 1 }}>{s.value}</p>
                <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: '14px', color: '#0a1d4d' }}>{s.label}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8', lineHeight: 1.5 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ BOTTOM CTA BAR ═══════ */}
      <motion.div
        {...fadeUp(0.8)}
        style={{
          maxWidth: '1400px', margin: '60px auto 0', padding: '0 60px 0',
        }}
      >
        <div style={{
          backgroundColor: '#fff', borderRadius: '16px',
          border: '1px solid #e8ecf2', padding: '28px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '-30px', position: 'relative', zIndex: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              backgroundColor: '#eff6ff', border: '1px solid #dbeafe',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '16px', color: '#0a1d4d' }}>
                Your Vision. Our Expertise. Shared Success.
              </p>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#94a3b8' }}>
                Let's build something remarkable together in the UAE.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: '#2563eb', color: '#fff', border: 'none',
              padding: '16px 32px', borderRadius: '10px', fontWeight: 700,
              fontSize: '15px', cursor: 'pointer', display: 'flex',
              alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif",
              flexShrink: 0,
            }}
          >
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

const StatIcon = ({ type }) => {
  const icons = [
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>,
  ]
  return icons[type] || icons[0]
}

export default WhyIncorvia
