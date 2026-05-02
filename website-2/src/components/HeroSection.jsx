import { motion } from 'framer-motion';
import { ArrowRight, Building2, Award, Landmark } from 'lucide-react';
import NetworkVisual from './NetworkVisual';

const STATS = [
  { icon: Building2, number: '500+', label: 'Businesses Setup' },
  { icon: Award, number: '10+', label: 'Years of Excellence' },
  { icon: Landmark, number: 'UAE', label: 'Government Partner' },
];

// Premium Cinematic Text Reveal
// Each word is wrapped in an overflow-hidden mask, and the text slides up from the bottom edge
const WordReveal = ({ words, color, baseDelay = 0 }) =>
  words.map((word, i) => (
    <span
      key={i}
      style={{
        display: 'inline-flex',
        overflow: 'hidden',
        paddingBottom: '4px', // Prevent descender clipping (g, y, p)
        marginRight: i < words.length - 1 ? '12px' : '0', // Explicit space
      }}
    >
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1], // Custom cinematic spring-like ease
          delay: baseDelay + i * 0.05,
        }}
        style={{ color: color || 'inherit', display: 'inline-block' }}
      >
        {word}
      </motion.span>
    </span>
  ));

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="w-full max-w-[1600px] mx-auto grid grid-cols-2 items-center"
        style={{
          minHeight: 'calc(100vh - 90px)',
          padding: '0 60px',
          gap: '40px',
        }}
      >

        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col justify-center py-16">

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
            Your Partner in the UAE
          </motion.p>

          {/* Headline — natural text flow with word-by-word reveal */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: '#000000',
            }}
          >
            {/* Line 1: black words */}
            <WordReveal
              words={['Build', 'Your', 'Business', 'in', 'the', 'UAE.']}
              color="#000000"
              baseDelay={0.05}
            />
            <br />
            {/* Line 2: blue words */}
            <WordReveal
              words={['Without', 'Complexity.']}
              color="#0054B1"
              baseDelay={0.5}
            />
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
              marginBottom: '36px',
              maxWidth: '400px',
            }}
          >
            From company formation to compliance and beyond, we handle the
            details so you can focus on growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' }}
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
              Book a Consultation
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, background: 'rgba(0,84,177,0.04)' }}
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
              Explore Services
            </motion.button>
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
              flexWrap: 'nowrap',
              paddingTop: '28px',
              borderTop: '1px solid #E8ECF0',
            }}
          >
            {STATS.map(({ icon: Icon, number, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(0,84,177,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#0054B1" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#000', lineHeight: 1 }}>
                    {number}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '3px' }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Network Visual ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              width: '650px',
              height: '650px',
              position: 'relative',
              flexShrink: 0,
              transform: 'translateX(60px)', // Subtle push in the wider layout
            }}
          >
            <NetworkVisual />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
