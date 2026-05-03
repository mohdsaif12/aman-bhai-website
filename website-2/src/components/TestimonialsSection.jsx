import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Incorvia didn't just set up our company — they structured it correctly from day one. That distinction saved us from a costly banking issue three months later. Worth every dirham.",
    name: 'James R.',
    title: 'Founder, Tech Startup',
    location: 'Dubai Mainland',
    initials: 'JR',
    color: '#0054B1',
  },
  {
    quote: "Most setup firms give you a quote before they understand your business. Incorvia asked questions I'd never even considered. The discovery call alone was more valuable than six months of advice elsewhere.",
    name: 'Priya S.',
    title: 'E-Commerce Entrepreneur',
    location: 'UAE Free Zone',
    initials: 'PS',
    color: '#1A6FD4',
  },
  {
    quote: "I came in thinking I needed a quick license. I left understanding why the wrong structure would have blocked my banking access entirely. That clarity is exactly what I was paying for.",
    name: 'Omar A.',
    title: 'Investment Advisor',
    location: 'DIFC, Dubai',
    initials: 'OA',
    color: '#0047A0',
  },
  {
    quote: "Their PRO team is exceptional. Every government interaction was handled with precision — I didn't have to follow up once. That kind of reliability is rare in this market.",
    name: 'Sarah K.',
    title: 'Managing Director',
    location: 'Abu Dhabi',
    initials: 'SK',
    color: '#2D7DD2',
  },
  {
    quote: "Incorvia's ongoing advisory is what sets them apart. A year after setup, they identified a compliance gap before it became a problem. They think ahead — and that's exactly the kind of partner you need in the UAE.",
    name: 'Marcus T.',
    title: 'Operations Director',
    location: 'Sharjah Free Zone',
    initials: 'MT',
    color: '#0054B1',
  },
];

const StarRating = () => (
  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    if (!paused) startTimer();
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (i) => {
    setActive(i);
    clearInterval(timerRef.current);
    if (!paused) startTimer();
  };

  return (
    <section style={{ background: '#fff', padding: '120px 0', display: 'flex', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,84,177,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '1600px', padding: '0 60px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
            Client Perspectives
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', marginBottom: '16px' }}>
            What Our Clients Say<br /><span style={{ color: '#0054B1' }}>About Working With Us.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            Founders, investors, and operators who chose clarity over speed — and what they experienced.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px', alignItems: 'center', marginBottom: '48px' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left — Avatars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {TESTIMONIALS.map(({ name, title, initials, color }, i) => (
              <motion.div
                key={name}
                onClick={() => goTo(i)}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  background: active === i ? 'rgba(0,84,177,0.05)' : 'transparent',
                  border: active === i ? '1px solid rgba(0,84,177,0.15)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: active === i ? color : '#E5EAF0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 800,
                  color: active === i ? '#fff' : '#6B7280',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  boxShadow: active === i ? `0 4px 16px ${color}44` : 'none',
                }}>
                  {initials}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: active === i ? '#0A1628' : '#6B7280', marginBottom: '2px', transition: 'color 0.3s' }}>{name}</p>
                  <p style={{ fontSize: '12px', color: '#9CA3AF' }}>{title}</p>
                </div>
                {active === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: '#0054B1', flexShrink: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right — Quote card */}
          <div style={{ position: 'relative' }}>
            {/* Large quotation mark */}
            <div style={{ position: 'absolute', top: '-20px', left: '28px', fontSize: '120px', color: 'rgba(0,84,177,0.07)', fontFamily: 'Georgia, serif', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#fff',
                  border: '1px solid #E5EAF0',
                  borderRadius: '24px',
                  padding: '52px 52px 44px',
                  boxShadow: '0 20px 60px rgba(0,84,177,0.07)',
                  position: 'relative',
                }}
              >
                <StarRating />
                <p style={{
                  fontSize: 'clamp(15px, 1.3vw, 18px)',
                  color: '#1A202C',
                  lineHeight: 1.8,
                  fontWeight: 500,
                  marginBottom: '36px',
                  fontStyle: 'italic',
                }}>
                  "{TESTIMONIALS[active].quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: '1px solid #E5EAF0' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: TESTIMONIALS[active].color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#fff',
                    boxShadow: `0 4px 16px ${TESTIMONIALS[active].color}44`,
                  }}>
                    {TESTIMONIALS[active].initials}
                  </div>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: 800, color: '#0A1628', marginBottom: '3px' }}>{TESTIMONIALS[active].name}</p>
                    <p style={{ fontSize: '13px', color: '#6B7280' }}>{TESTIMONIALS[active].title} · {TESTIMONIALS[active].location}</p>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #E5EAF0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0054B1'; e.currentTarget.style.background = '#F4F8FE'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5EAF0'; e.currentTarget.style.background = '#fff'; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    </button>
                    <button
                      onClick={() => goTo((active + 1) % TESTIMONIALS.length)}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #E5EAF0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0054B1'; e.currentTarget.style.background = '#F4F8FE'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5EAF0'; e.currentTarget.style.background = '#fff'; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '24px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: active === i ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: active === i ? '#0054B1' : '#D1D5DB',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
