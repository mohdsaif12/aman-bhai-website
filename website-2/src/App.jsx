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
import Footer from './components/Footer';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  // Auto-open popup after 2.5s, once per session
  useEffect(() => {
    const seen = sessionStorage.getItem('incorvia_popup_shown');
    if (!seen) {
      const timer = setTimeout(() => {
        setPopupOpen(true);
        sessionStorage.setItem('incorvia_popup_shown', '1');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-light)]">
      <Navbar onBookClick={() => setPopupOpen(true)} />

      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><HeroSection onBookClick={() => setPopupOpen(true)} /></div>
            <div id="why"><WhyDifferent variant="landing" /></div>
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
