import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  { num: '5+', label: 'Years in\nBusiness Advisory' },
  { num: '5', label: 'Years in Civil\nEngineering' },
  { num: '6+', label: 'Industry\nSectors Served' },
];

const AboutFounder = () => {
  return (
    <section style={{
      padding: 'clamp(60px, 10vh, 120px) 0',
      background: 'transparent',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
              Leadership
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', marginBottom: '24px' }}>
              3. About the Founder
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#0054B1', marginBottom: '32px' }} />

            <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.8, marginBottom: '20px' }}>
              Aman Khan is the <strong style={{ color: '#0A1628' }}>Founder & Principal Advisor</strong> at Incorvia Corporate Advisory, a boutique firm established to guide entrepreneurs and businesses through the complexities of setting up and scaling in the UAE.
            </p>
            <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.8, marginBottom: '20px' }}>
              With a strong track record in business advisory, Aman brings a deep understanding of the UAE's regulatory and commercial landscape. He has worked closely with clients across diverse sectors — including <strong style={{ color: '#0A1628' }}>real estate, healthcare, F&B, technology, and travel</strong> — delivering tailored solutions that go beyond standard business setup services.
            </p>
            <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.8, marginBottom: '20px' }}>
              Before transitioning into consulting, Aman spent five years in civil engineering, contributing to high-rise development projects. This foundation instilled in him a disciplined, detail-oriented, and structured approach — qualities that now define his advisory style.
            </p>
            <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.8, marginBottom: '36px' }}>
              At the core of Aman's work is a commitment to <strong style={{ color: '#0A1628' }}>clarity, precision, and long-term value</strong>. He specialises in navigating complex licensing requirements, structuring businesses efficiently, and ensuring every client engagement is seamless, compliant, and strategically aligned.
            </p>

            {/* Stat highlights */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {HIGHLIGHTS.map(h => (
                <div key={h.label} style={{
                  background: '#F4F8FE', borderRadius: '16px', padding: '20px 24px',
                  borderLeft: '3px solid #0054B1', minWidth: '110px'
                }}>
                  <p style={{ fontSize: '26px', fontWeight: 900, color: '#0054B1', lineHeight: 1 }}>{h.num}</p>
                  <p style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600, lineHeight: 1.4, marginTop: '4px', whiteSpace: 'pre-line' }}>{h.label}</p>
                </div>
              ))}
            </div>

            {/* Founder signature block */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: '#0054B1', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0
              }}>
                <svg viewBox="0 0 24 24" fill="none" style={{ width: '28px', height: '28px' }}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0A1628', marginBottom: '2px' }}>Aman Khan</h4>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>Founder & Principal Advisor, Incorvia Corporate Advisory</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Main card */}
            <div style={{
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(145deg, #0A1628 0%, #0054B1 100%)',
            }}>
              {/* Pattern overlay */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }} viewBox="0 0 400 500" fill="none">
                <circle cx="200" cy="250" r="200" stroke="white" strokeWidth="1"/>
                <circle cx="200" cy="250" r="150" stroke="white" strokeWidth="1"/>
                <circle cx="200" cy="250" r="100" stroke="white" strokeWidth="1"/>
                <circle cx="200" cy="250" r="50" stroke="white" strokeWidth="1"/>
              </svg>

              {/* Centered content */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: '48px', height: '48px' }}>
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>Aman Khan</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>Founder & Principal Advisor</p>

                {/* Quote */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', width: '100%' }}>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontStyle: 'italic' }}>
                    "Helping entrepreneurs establish with confidence and scale with clarity in one of the world's most dynamic business environments."
                  </p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                background: '#fff',
                border: '1px solid #E5EAF0',
                padding: '20px 24px',
                borderRadius: '16px',
                boxShadow: '0 16px 40px rgba(0,84,177,0.12)',
              }}
            >
              <p style={{ fontSize: '28px', fontWeight: 900, color: '#0054B1', lineHeight: 1 }}>10+</p>
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', marginTop: '4px' }}>Years Combined<br />Experience</p>
            </motion.div>

            {/* Sectors badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75, type: 'spring' }}
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: '#0054B1',
                color: '#fff',
                padding: '16px 20px',
                borderRadius: '14px',
                boxShadow: '0 12px 30px rgba(0,84,177,0.25)',
              }}
            >
              <p style={{ fontSize: '22px', fontWeight: 900, lineHeight: 1 }}>6+</p>
              <p style={{ fontSize: '11px', fontWeight: 600, marginTop: '2px' }}>Industry<br />Sectors</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
