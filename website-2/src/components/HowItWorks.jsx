import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import step1Img from '../assets/step1_discovery.png';
import step2Img from '../assets/step2_analysis.png';
import step3Img from '../assets/consultation.png';
import step4Img from '../assets/dubai_skyline.png';

const STEPS = [
  {
    num: '01',
    title: 'Initial Consultation & Discovery',
    desc: 'Your journey begins with a focused advisory conversation. We review your objectives, background, jurisdictional needs, and constraints—without selling or pitching. We qualify our clients to protect the integrity of every engagement.',
    img: step1Img,
    tag: 'Discovery',
  },
  {
    num: '02',
    title: 'Analysis & Structuring',
    desc: 'We dive deep into your business model and future plans. Based on this, we design the optimal structure, aligning jurisdiction, licensing, and compliance considerations. Every recommendation is intentional and defensible.',
    img: step2Img,
    tag: 'Strategy',
  },
  {
    num: '03',
    title: 'Client Onboarding',
    desc: 'Before execution begins, you receive a clear, unambiguous roadmap. We outline exactly what will be done, why it is being done, timelines, costs, and next steps. No rushed decisions, only clarity.',
    img: step3Img,
    tag: 'Onboarding',
  },
  {
    num: '04',
    title: 'Execution & Ongoing Support',
    desc: 'With the strategy finalized, we handle the licensing, regulatory coordination, and approvals end-to-end. As your business evolves, we remain your strategic partner for compliance, amendments, and growth advisory.',
    img: step4Img,
    tag: 'Execution',
  },
];

const HowItWorks = ({ onBookClick }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextStep = () => setActiveStep((prev) => (prev + 1) % STEPS.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);

  return (
    <section style={{
      background: 'transparent',
      padding: 'clamp(30px, 5vh, 60px) 0',
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

      <div className="container-custom z-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '96px' }}
        >
          <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
            How It Works
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', marginBottom: '16px' }}>
            4. How It Works
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            We follow a structured advisory process because the quality of the outcome depends on the quality of the thinking that precedes it.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="flex justify-center w-full">
          <div 
            className="relative w-full max-w-5xl px-12 md:px-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button 
              onClick={prevStep}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-[#E5EAF0] text-[#0054B1] flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition"
              aria-label="Previous step"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextStep}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-[#E5EAF0] text-[#0054B1] flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition"
              aria-label="Next step"
            >
              <ChevronRight size={24} />
            </button>

          {/* Card Frame */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,84,177,0.08)] border border-[#E5EAF0]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col md:flex-row"
                style={{ minHeight: '420px' }}
              >
                {/* Image Section — fixed width, fills height */}
                <div className="w-full md:w-[48%] shrink-0 relative" style={{ minHeight: '420px' }}>
                  <img
                    src={STEPS[activeStep].img}
                    alt={STEPS[activeStep].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />
                  
                  {/* Step Badge Over Image */}
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[15px] font-black text-[#0054B1] shadow-lg">
                      {STEPS[activeStep].num}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-white/80 mb-0.5">Stage</p>
                      <p className="text-[16px] font-extrabold text-white">{STEPS[activeStep].tag}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section — takes remaining space */}
                <div className="flex-1 flex flex-col justify-start items-start bg-white" style={{ padding: '48px 40px 40px 52px' }}>
                  <h3 className="text-2xl md:text-[26px] lg:text-[30px] font-black text-[#0A1628] mb-5 leading-tight text-left">
                    {STEPS[activeStep].title}
                  </h3>
                  <p className="text-[15px] text-[#6B7280] leading-relaxed text-left">
                    {STEPS[activeStep].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex justify-center gap-3 mt-32">
            {STEPS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  activeStep === index 
                    ? 'w-8 h-2.5 bg-[#0054B1]' 
                    : 'w-2.5 h-2.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: '96px' }}
        >
          <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '20px' }}>
            Ready to start with a conversation that's actually useful?
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onBookClick}
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
