import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import consultationImg from '../assets/consultation.png';
import dubaiImg from '../assets/dubai_skyline.png';

const STEPS = [
  {
    num: '01',
    title: 'Initial Enquiry',
    desc: 'Your journey begins with a simple enquiry. We review your objective at a high level to understand whether Incorvia is the right fit. We are selective — and that selectivity protects the integrity of every engagement we take on.',
    img: dubaiImg,
    tag: 'Getting Started',
  },
  {
    num: '02',
    title: 'Discovery Call',
    desc: 'A focused advisory conversation with a senior consultant. We discuss your goals, background, jurisdictional needs, timelines, and constraints — without selling or pitching. This is a genuine assessment.',
    img: consultationImg,
    tag: 'Advisory',
  },
  {
    num: '03',
    title: 'Understanding Your Requirements',
    desc: 'We go deeper into your business model, ownership structure, future plans, and risk exposure. This stage surfaces compliance, banking, and scalability considerations most clients would otherwise encounter too late.',
    img: consultationImg,
    tag: 'Analysis',
  },
  {
    num: '04',
    title: 'Advisory & Structuring',
    desc: 'Based on the discovery, we design the right structure — not a standard package. Licensing strategy, jurisdiction alignment, compliance and risk considerations, and banking readiness. Every recommendation is intentional and defensible.',
    img: dubaiImg,
    tag: 'Strategy',
  },
  {
    num: '05',
    title: 'Advisory Sign-Off & Clarity',
    desc: 'Before execution begins, you receive a clear roadmap: what will be done, why it is being done, and what the timelines, costs, and next steps look like. No ambiguity. No rushed decisions.',
    img: consultationImg,
    tag: 'Sign-Off',
  },
  {
    num: '06',
    title: 'Execution & Processing',
    desc: 'With the thinking done correctly, execution becomes smooth. We handle licensing, documentation, regulatory coordination, follow-ups, and approvals end-to-end.',
    img: dubaiImg,
    tag: 'Execution',
  },
  {
    num: '07',
    title: 'Ongoing Support',
    desc: 'As your business evolves, we remain available for compliance support, amendments, expansions, and strategic advisory. Businesses that are well-advised early scale without the costly surprises.',
    img: dubaiImg,
    tag: 'Long-Term',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section style={{
      background: '#F8FAFF',
      padding: '120px 0',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Bg decoration */}
      <svg style={{ position: 'absolute', left: 0, bottom: 0, opacity: 0.3, pointerEvents: 'none' }}
        width="320" height="320" viewBox="0 0 320 320" fill="none">
        <circle cx="0" cy="320" r="220" stroke="#4B9FF3" strokeWidth="1"/>
        <circle cx="0" cy="320" r="150" stroke="#4B9FF3" strokeWidth="0.6"/>
      </svg>

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
            How It Works
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', marginBottom: '16px' }}>
            A Process Built Around<br /><span style={{ color: '#0054B1' }}>Thinking First.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            We follow a structured advisory process because the quality of the outcome depends on the quality of the thinking that precedes it.
          </p>
        </motion.div>

        {/* 2-col layout: steps list left, image + detail right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>

          {/* LEFT — Step list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {STEPS.map(({ num, title, tag }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveStep(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  background: activeStep === i ? '#fff' : 'transparent',
                  border: activeStep === i ? '1px solid rgba(0,84,177,0.15)' : '1px solid transparent',
                  boxShadow: activeStep === i ? '0 8px 32px rgba(0,84,177,0.08)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Number circle */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: activeStep === i ? '#0054B1' : '#E8EDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 800,
                  color: activeStep === i ? '#fff' : '#6B7280',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  boxShadow: activeStep === i ? '0 4px 16px rgba(0,84,177,0.3)' : 'none',
                }}>
                  {num}
                </div>

                {/* Title + tag */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: activeStep === i ? '#0A1628' : '#6B7280',
                    marginBottom: '3px',
                    transition: 'color 0.3s',
                  }}>
                    {title}
                  </p>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: activeStep === i ? '#4B9FF3' : '#9CA3AF',
                    transition: 'color 0.3s',
                  }}>
                    {tag}
                  </span>
                </div>

                {/* Active indicator */}
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: activeStep === i ? '#0054B1' : 'transparent',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }} />
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Sticky image + detail card */}
          <div style={{ position: 'sticky', top: '110px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  border: '1px solid #E5EAF0',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,84,177,0.08)',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={STEPS[activeStep].img}
                    alt={STEPS[activeStep].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  {/* Overlay gradient */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(0,84,177,0.55) 100%)',
                  }} />
                  {/* Step badge on image */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', fontWeight: 900, color: '#0054B1',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    }}>
                      {STEPS[activeStep].num}
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '2px' }}>Step</p>
                      <p style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>{STEPS[activeStep].tag}</p>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div style={{ padding: '32px 36px 36px' }}>
                  <p style={{ fontSize: '20px', fontWeight: 800, color: '#0A1628', marginBottom: '14px', lineHeight: 1.3 }}>
                    {STEPS[activeStep].title}
                  </p>
                  <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.8 }}>
                    {STEPS[activeStep].desc}
                  </p>

                  {/* Progress dots */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '28px', alignItems: 'center' }}>
                    {STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        style={{
                          width: activeStep === i ? '28px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          background: activeStep === i ? '#0054B1' : '#D1D5DB',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: '64px' }}
        >
          <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '20px' }}>
            Ready to start with a conversation that's actually useful?
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: '#0054B1',
              color: '#fff',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 32px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Book Your Discovery Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
