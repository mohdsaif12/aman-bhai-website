import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import dubaiDaySkyline from '../assets/dubai_day_skyline.png';

const ServicesPage = ({ onBookClick }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full z-0"
        style={{ backgroundImage: `url(${dubaiDaySkyline})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.15 }}
      />
      <div className="fixed inset-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%)' }}
      />
      <div className="relative z-10 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0A1628' }}>
            Our Services
          </h1>
        </motion.div>
        <ServicesSection onBookClick={onBookClick} />
      </div>
    </div>
  );
};

export default ServicesPage;
