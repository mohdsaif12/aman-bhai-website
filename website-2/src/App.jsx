import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyIncorvia from './components/WhyIncorvia';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationPopup from './components/ConsultationPopup';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  // Auto-open popup after 2.5s, once per session
  useEffect(() => {
    const seen = sessionStorage.getItem('incorvia_popup_shown');
    if (!seen) {
      const timer = setTimeout(() => {
        setPopupOpen(true);
        sessionStorage.setItem('incorvia_popup_shown', '1');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-light)]">
      <Navbar onBookClick={() => setPopupOpen(true)} />

      <div id="home"><HeroSection onBookClick={() => setPopupOpen(true)} /></div>
      <div id="services"><ServicesSection /></div>
      <div id="about"><WhyIncorvia /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="testimonials"><TestimonialsSection /></div>

      {/* Contact anchor — minimal footer placeholder */}
      <div id="contact" className="container-custom mt-20 text-center" style={{ background: '#0A1628', maxWidth: 'none', borderRadius: '40px 40px 0 0', padding: '160px 24px 100px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '20px' }}>
          Get In Touch
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>
          Start With a Conversation.
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
          Every engagement begins with a discovery call — no pitching, no pressure. Just a focused conversation about whether we're the right fit.
        </p>
        <button
          onClick={() => setPopupOpen(true)}
          style={{
            background: '#fff', color: '#0054B1', fontWeight: 700,
            fontSize: '18px', padding: '20px 48px', borderRadius: '16px',
            border: 'none', cursor: 'pointer', marginBottom: '80px',
          }}
        >
          Book a Discovery Call →
        </button>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-[60px] flex-wrap border-t border-white/10 pt-12 mt-4">
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Location</p>
            <p style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>📍 Dubai, United Arab Emirates</p>
          </div>
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Email</p>
            <p style={{ fontSize: '14px', color: '#4B9FF3', fontWeight: 600 }}>📧 hello@incorvia.com</p>
          </div>
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Office Hours</p>
            <p style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>Mon–Fri: 9AM – 6PM GST</p>
          </div>
        </div>
      </div>

      <ConsultationPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}

export default App;
