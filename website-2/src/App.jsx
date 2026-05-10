import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyDifferent from './components/WhyDifferent';
import AuthoritiesSection from './components/AuthoritiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationPopup from './components/ConsultationPopup';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import BusinessWithPurpose from './components/BusinessWithPurpose';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  // Auto-open popup after scrolling past services section, once per session
  useEffect(() => {
    const seen = sessionStorage.getItem('Incorvia_popup_shown');
    if (seen) return;

    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        // Trigger when the bottom of services section is scrolled into upper half of viewport
        if (rect.bottom < window.innerHeight / 2) {
          setPopupOpen(true);
          sessionStorage.setItem('Incorvia_popup_shown', '1');
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-light)]">
      <Navbar onBookClick={() => setPopupOpen(true)} />

      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><HeroSection onBookClick={() => setPopupOpen(true)} /></div>
            <div id="services"><ServicesSection onBookClick={() => setPopupOpen(true)} /></div>
            <div id="why"><WhyDifferent variant="landing" /></div>
            <div id="purpose"><BusinessWithPurpose /></div>
            <div id="authorities"><AuthoritiesSection /></div>
            <div id="testimonials"><TestimonialsSection /></div>
          </>
        } />
        <Route path="/about" element={<AboutPage onBookClick={() => setPopupOpen(true)} />} />
        <Route path="/services" element={<ServicesPage onBookClick={() => setPopupOpen(true)} />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      <ConsultationPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}

export default App;
