import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const Hero = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Phase 2: UAE node pulse (continuous)
      gsap.to(".uae-ring-1", {
        scale: 2.5, opacity: 0, duration: 2, repeat: -1,
        ease: "power2.out", transformOrigin: "center center", delay: 1.6,
      })
      gsap.to(".uae-ring-2", {
        scale: 2, opacity: 0, duration: 2, delay: 2.0, repeat: -1,
        ease: "power2.out", transformOrigin: "center center",
      })

      // Phase 3: Connection lines draw (staggered)
      document.querySelectorAll('.conn-line').forEach((line, i) => {
        const length = line.getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 1.5,
          delay: 1.6 + (i * 0.2),
          ease: "power1.inOut",
        })
      })

      // Phase 4: Flowing dots along paths
      document.querySelectorAll('.conn-line').forEach((line, i) => {
        const dot = document.querySelectorAll('.flow-dot')[i]
        if (dot) {
          gsap.set(dot, { opacity: 0 })
          gsap.to(dot, { opacity: 1, delay: 2.4 + (i * 0.2), duration: 0.3 })
          gsap.to(dot, {
            motionPath: { path: line, align: line, alignOrigin: [0.5, 0.5] },
            duration: 3,
            delay: 2.4 + (i * 0.2),
            repeat: -1,
            ease: "none",
          })
        }
      })
    }, mapRef)

    return () => ctx.revert()
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '100px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}>

      {/* ═══════ MAP — behind everything ═══════ */}
      <motion.div
        ref={mapRef}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none', zIndex: 1,
          maskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,0.2) 38%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, transparent 92%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,0.2) 38%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, transparent 92%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in',
        }}>
        <div style={{
          width: '100%', height: '100%', position: 'relative',
          transform: 'scale(0.75)', transformOrigin: 'right center',
        }}>
          <img src="/dotted-map.png" alt="" style={{
            width: '100%', height: '100%',
            objectFit: 'contain', objectPosition: 'right center',
          }} />

          <svg viewBox="0 0 1000 650" preserveAspectRatio="xMaxYMid meet"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <defs>
              <filter id="cardShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.1" />
              </filter>
            </defs>

            {/* Connection Lines */}
            <path className="conn-line" d="M280,210 Q420,100 620,230" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
            <path className="conn-line" d="M530,120 Q580,150 620,230" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
            <path className="conn-line" d="M220,420 Q350,250 620,230" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
            <path className="conn-line" d="M480,390 Q550,300 620,230" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
            <path className="conn-line" d="M870,370 Q750,280 620,230" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />

            {/* Flowing dots */}
            <circle className="flow-dot" r="3" fill="#3b82f6" opacity="0" />
            <circle className="flow-dot" r="3" fill="#3b82f6" opacity="0" />
            <circle className="flow-dot" r="3" fill="#3b82f6" opacity="0" />
            <circle className="flow-dot" r="3" fill="#3b82f6" opacity="0" />
            <circle className="flow-dot" r="3" fill="#3b82f6" opacity="0" />

            {/* Region dots + labels */}
            <circle cx="280" cy="210" r="5" fill="#3b82f6" opacity="0.8" />
            <text x="200" y="195" style={{ fontSize: '14px', fontWeight: 600, fill: '#475569' }}>North America</text>
            <circle cx="530" cy="120" r="5" fill="#3b82f6" opacity="0.8" />
            <text x="490" y="105" style={{ fontSize: '14px', fontWeight: 600, fill: '#475569' }}>Europe</text>
            <circle cx="220" cy="420" r="5" fill="#3b82f6" opacity="0.8" />
            <text x="120" y="410" style={{ fontSize: '14px', fontWeight: 600, fill: '#475569' }}>South America</text>
            <circle cx="480" cy="390" r="5" fill="#3b82f6" opacity="0.8" />
            <text x="450" y="420" style={{ fontSize: '14px', fontWeight: 600, fill: '#475569' }}>Africa</text>
            <circle cx="870" cy="370" r="5" fill="#3b82f6" opacity="0.8" />
            <text x="830" y="400" style={{ fontSize: '14px', fontWeight: 600, fill: '#475569' }}>Asia Pacific</text>

            {/* UAE Node — animated in */}
            <g className="uae-node">
              <circle className="uae-ring-1" cx="620" cy="230" r="18" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.5" />
              <circle className="uae-ring-2" cx="620" cy="230" r="18" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.3" />
              <circle cx="620" cy="230" r="12" fill="white" stroke="#2563eb" strokeWidth="3" />
              <circle cx="620" cy="230" r="5" fill="#2563eb" />
            </g>

            {/* UAE Tooltip */}
            <g className="uae-tooltip">
              <rect x="648" y="185" width="170" height="75" rx="10" fill="white" filter="url(#cardShadow)" />
              <text x="668" y="212" style={{ fontSize: '18px', fontWeight: 800, fill: '#0a1d4d' }}>UAE</text>
              <text x="668" y="234" style={{ fontSize: '13px', fontWeight: 500, fill: '#94a3b8' }}>Your Gateway to</text>
              <text x="668" y="250" style={{ fontSize: '13px', fontWeight: 500, fill: '#94a3b8' }}>Global Opportunities</text>
            </g>
          </svg>
        </div>
      </motion.div>

      {/* ═══════ MAIN GRID ═══════ */}
      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '40px 60px 0',
        flex: 1, position: 'relative', zIndex: 2, width: '100%', boxSizing: 'border-box',
        display: 'grid', gridTemplateColumns: '42% 58%', gridTemplateRows: 'auto auto',
        gap: '0 40px',
      }}>

        {/* TOP LEFT — Text */}
        <div style={{ paddingTop: '20px' }}>
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
            style={{ color: '#2563eb', fontWeight: 700, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '28px' }}
          >
            Your business. Our expertise. UAE as your gateway.
          </motion.p>

          {/* Headline Line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            style={{ fontWeight: 800, fontSize: '68px', lineHeight: 1.08, color: '#0a1d4d', margin: '0 0 0 0' }}
          >
            Build Your Business<br />in the UAE.
          </motion.h1>

          {/* Headline Line 2 — "Seamlessly." */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: '#2563eb', fontSize: '68px', lineHeight: 1.08, margin: '0 0 28px 0' }}
          >
            Seamlessly.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            style={{ color: '#94a3b8', fontSize: '17px', lineHeight: 1.7, maxWidth: '440px', margin: '0 0 36px 0' }}
          >
            From company formation to compliance, we handle everything so you can focus on what matters most — growing your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: '#0a1d4d', color: '#fff', border: 'none', padding: '15px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif" }}
            >
              Book a Consultation <ArrowIcon />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: '#fff', color: '#0a1d4d', border: '1.5px solid #e2e8f0', padding: '15px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif" }}
            >
              Explore Services <ArrowIcon color="#0a1d4d" />
            </motion.button>
          </motion.div>
        </div>

        {/* TOP RIGHT — empty, map shows through */}
        <div />

        {/* BOTTOM LEFT — Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
          style={{ display: 'flex', alignItems: 'center', gap: '36px', paddingTop: '50px', paddingBottom: '30px' }}
        >
          <StatItem icon="users" value="500+" label="Businesses Trust Us" />
          <StatItem icon="clock" value="10+ Years" label="of Experience" />
          <StatItem icon="shield" value="100%" label="Compliance Focused" />
        </motion.div>

        {/* BOTTOM RIGHT — Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 2.6 }}
          style={{ display: 'flex', gap: '14px', paddingTop: '20px', paddingBottom: '30px', justifyContent: 'flex-end' }}
        >
          <FeatureCard icon={<BuildingIcon />} title="Company Formation" desc="End-to-end support for a smooth business setup." />
          <FeatureCard icon={<BankIcon />} title="Bank Account Setup" desc="We help you open a corporate bank account with ease." />
          <FeatureCard icon={<ComplianceIcon />} title="Compliance Support" desc="Stay compliant with local regulations, always." />
        </motion.div>
      </div>

      {/* ═══════ TRUST BAR — Infinite Marquee ═══════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.8 }}
        style={{
          backgroundColor: '#f8fafc', borderTop: '1px solid #e8ecf2',
          borderBottom: '1px solid #e8ecf2',
          padding: '22px 0', position: 'relative', zIndex: 2,
          display: 'flex', alignItems: 'center', overflow: 'hidden',
        }}>
        <span style={{
          fontSize: '11px', fontWeight: 800, color: '#94a3b8',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          whiteSpace: 'nowrap', paddingLeft: '60px', paddingRight: '40px',
          flexShrink: 0, zIndex: 2,
          background: 'linear-gradient(to right, #f8fafc 80%, transparent 100%)',
          position: 'relative',
        }}>
          Trusted by businesses worldwide
        </span>
        <div style={{ overflow: 'hidden', flex: 1, position: 'relative' }}>
          {/* Fade edges */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60px', background: 'linear-gradient(to right, #f8fafc, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60px', background: 'linear-gradient(to left, #f8fafc, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{
            display: 'flex', alignItems: 'center',
            animation: 'marquee 20s linear infinite',
            width: 'max-content',
          }}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} style={{ display: 'flex', alignItems: 'center', gap: '48px', paddingRight: '48px' }}>
                {['ASTRA', 'NOVEX', 'GLOBALTECH', 'VERTEX', 'PRAEDIUM', 'ALTITUDE', 'ZENITH', 'MERIDIAN'].map(name => (
                  <div key={`${setIdx}-${name}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.3, flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1e293b"><path d="M12 2L2 22h20L12 2z" /></svg>
                    <span style={{ fontWeight: 800, fontSize: '13px', color: '#1e293b', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </motion.div>
    </motion.section>
  )
}

/* ── Small Components ── */

const ArrowIcon = ({ color = '#fff' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
)

const StatItem = ({ icon, value, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon === 'users' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
      {icon === 'clock' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
      {icon === 'shield' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>}
    </div>
    <div>
      <p style={{ margin: 0, fontWeight: 800, fontSize: '17px', color: '#0a1d4d', lineHeight: 1 }}>{value}</p>
      <p style={{ margin: '3px 0 0', fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>{label}</p>
    </div>
  </div>
)

const FeatureCard = ({ icon, title, desc }) => (
  <div style={{
    width: '180px', backgroundColor: '#fff', padding: '20px', borderRadius: '14px',
    border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    flexShrink: 0,
  }}>
    <div style={{
      width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f0f4ff',
      border: '1px solid #e8eeff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px',
    }}>{icon}</div>
    <h3 style={{ margin: '0 0 5px', fontWeight: 700, fontSize: '14px', color: '#0a1d4d' }}>{title}</h3>
    <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', lineHeight: 1.5 }}>{desc}</p>
  </div>
)

const BuildingIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1d4d" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10M9 6h.01M15 6h.01M9 10h.01M15 10h.01"/></svg>
const BankIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1d4d" strokeWidth="1.5"><rect x="3" y="8" width="18" height="14" rx="2"/><path d="M7 8V6a5 5 0 0 1 10 0v2M12 14v2"/></svg>
const ComplianceIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1d4d" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>

export default Hero
