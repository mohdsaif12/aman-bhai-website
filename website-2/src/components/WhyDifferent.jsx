import { motion } from 'framer-motion';

const DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Advisory-First, Not Transaction-First',
    desc: 'We are not a company formation agency. We are an advisory firm. Our job is to think before we act and ensure your structure serves your long-term goals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Senior-Led Engagement',
    desc: 'Every client works directly with senior advisory. No handoffs to interns. No shortcuts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Structure Before Paperwork',
    desc: 'We design first. We file second. The right sequence changes everything.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'End-to-End Execution',
    desc: 'From initial strategy to government liaison to banking — one firm, full accountability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Deeply Local, Globally Aware',
    desc: 'We operate from Dubai, understand the UAE regulatory landscape in depth, and advise clients with cross-border complexity as standard.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
  },
];

// variant = 'landing' (compact, horizontal cards) | 'about' (full, immersive)
const WhyDifferent = ({ variant = 'landing' }) => {
  if (variant === 'landing') {
    return (
      <section style={{ background: 'transparent', padding: 'clamp(30px, 5vh, 60px) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '64px' }}
          >
            <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '12px' }}>
              Why Incorvia
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#0A1628', lineHeight: 1.1, marginBottom: '0' }}>
              What Makes Us Different.
            </h2>
            <div style={{ width: '100%', height: '1px', background: '#E5EAF0', marginTop: '28px' }} />
          </motion.div>

          {/* Items — Flex Wrap to center last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.num}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  background: '#fff', borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 4px 20px rgba(0,84,177,0.04)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#4B9FF3';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,84,177,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,84,177,0.04)';
                }}
              >
                {/* Left blue bar + icon */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <div style={{ width: '3px', height: '100%', minHeight: '48px', background: '#0054B1', borderRadius: '2px' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ color: '#0054B1' }}>{item.icon}</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0054B1', lineHeight: 1.3 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // === About Page Variant — immersive split layout ===
  return (
    <section style={{ padding: 'clamp(30px, 5vh, 60px) 0', position: 'relative', zIndex: 10, overflow: 'hidden' }}>
      {/* Dark BG accent */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0A1628 0%, #0A1628 100%)',
        zIndex: 0,
      }} />
      {/* Grid pattern */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, zIndex: 1, pointerEvents: 'none' }} viewBox="0 0 800 600" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70} y2="600" stroke="white" strokeWidth="1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 65} x2="800" y2={i * 65} stroke="white" strokeWidth="1" />
        ))}
      </svg>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '72px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '12px' }}>
            Why Incorvia
          </p>
          <div style={{ width: '40px', height: '2px', background: '#4B9FF3', margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
            What Makes Us Different.
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Five principles that define every engagement — and explain why clients return.
          </p>
        </motion.div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '32px',
                padding: '32px 40px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(75,159,243,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              {/* Number */}
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#4B9FF3', letterSpacing: '0.05em', minWidth: '28px', paddingTop: '3px' }}>
                {item.num}
              </span>
              {/* Blue line */}
              <div style={{ width: '3px', minHeight: '48px', background: '#0054B1', borderRadius: '2px', flexShrink: 0 }} />
              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ color: '#4B9FF3' }}>{item.icon}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '700px' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
