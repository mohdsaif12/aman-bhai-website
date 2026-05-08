import { useEffect } from 'react';
import { motion } from 'framer-motion';
import WhyIncorvia from '../components/WhyIncorvia';
import VisionMission from '../components/VisionMission';
import WhyDifferent from '../components/WhyDifferent';
import AboutFounder from '../components/AboutFounder';
import HowItWorks from '../components/HowItWorks';
import dubaiDaySkyline from '../assets/dubai_day_skyline.png';

const AboutPage = ({ onBookClick }) => {
  useEffect(() => {
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background with parallax effect */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${dubaiDaySkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.15, // Keep it subtle so content is readable
        }}
      />
      {/* Overlay gradient to ensure text readability */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%)',
        }}
      />

      <div className="relative z-10 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0A1628' }}>
            Who We Are
          </h1>
        </motion.div>

        {/* 1. About Us */}
        <div id="about-us">
          <WhyIncorvia />
        </div>

        {/* 2. Vision & Mission */}
        <div id="vision-mission">
          <VisionMission />
        </div>

        {/* What Makes Us Different */}
        <div id="why-different">
          <WhyDifferent variant="about" />
        </div>

        {/* 3. About the Founder */}
        <div id="about-founder">
          <AboutFounder />
        </div>

        {/* 4. How It Works */}
        <div id="how-it-works">
          <HowItWorks onBookClick={onBookClick} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
