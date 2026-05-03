import { motion } from 'framer-motion';
import { ArrowRight, Building2, Award, Landmark } from 'lucide-react';
import NetworkVisual from './NetworkVisual';

const STATS = [
  { icon: Building2, number: '500+', label: 'Businesses Setup' },
  { icon: Award, number: '10+', label: 'Years of Excellence' },
  { icon: Landmark, number: 'UAE', label: 'Government Partner' },
];

// Premium Cinematic Text Reveal
const WordReveal = ({ words, color, baseDelay = 0 }) =>
  words.map((word, i) => (
    <span
      key={i}
      style={{
        display: 'inline-flex',
        overflow: 'hidden',
        paddingBottom: '4px',
        marginRight: i < words.length - 1 ? '12px' : '0',
      }}
    >
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
          delay: baseDelay + i * 0.055,
        }}
        style={{ color: color || 'inherit', display: 'inline-block' }}
      >
        {word}
      </motion.span>
    </span>
  ));

const STEPS = [
  'Initial Enquiry',
  'Discovery Call',
  'Structuring & Advisory',
  'Execution',
  'Ongoing Support',
];

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        style={{
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          minHeight: 'calc(100vh - 90px)',
          padding: '0 60px',
          gap: '40px',
        }}
      >

        {/* ── LEFT: Text Content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '64px', paddingBottom: '64px' }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#4B9FF3',
              marginBottom: '20px',
            }}
          >
            Incorvia Corporate Advisory — Dubai, UAE
          </motion.p>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: '#000000',
            }}
          >
            <WordReveal words={['Your', 'Business.']} color="#000000" baseDelay={0.05} />
            <br />
            <WordReveal words={['Structured', 'Properly.']} color="#0054B1" baseDelay={0.35} />
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            style={{
              fontSize: '16px',
              color: '#4A5568',
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '440px',
            }}
          >
            Incorvia is a strategic advisory firm that helps founders and investors
            design the right UAE business structure — before a single document is filed.
          </motion.p>

          {/* Quote block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            style={{
              borderLeft: '3px solid #0054B1',
              paddingLeft: '16px',
              marginBottom: '32px',
              maxWidth: '420px',
            }}
          >
            <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.75, fontStyle: 'italic' }}>
              "We advise first. We structure second. We execute third. That sequence is not incidental — it is the entire point."
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#0054B1',
                color: '#fff',
                fontWeight: 600,
                fontSize: '15px',
                padding: '14px 28px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, background: 'rgba(0,84,177,0.04)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'transparent',
                color: '#0054B1',
                fontWeight: 600,
                fontSize: '15px',
                padding: '14px 28px',
                borderRadius: '10px',
                border: '1.5px solid #0054B1',
                cursor: 'pointer',
              }}
            >
              How It Works
            </motion.button>
          </motion.div>

          {/* Process teaser */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}
          >
            {STEPS.map((step, i) => (
              <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500 }}>{step}</span>
                {i < STEPS.length - 1 && <span style={{ color: '#4B9FF3', fontSize: '12px' }}>→</span>}
              </span>
            ))}
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '24px',
              borderTop: '1px solid #E8ECF0',
            }}
          >
            {STATS.map(({ icon: Icon, number, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'rgba(0,84,177,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={18} color="#0054B1" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#000', lineHeight: 1 }}>{number}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '3px' }}>{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Network Visual — constrained so it doesn't overflow ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          height: '100%',
          minHeight: '500px',
        }}>
          <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '1 / 1' }}>
            <NetworkVisual />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
