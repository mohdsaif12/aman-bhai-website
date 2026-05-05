import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { id: 'services', label: 'Services',   href: '#services',    hasDropdown: true  },
  { id: 'about', label: 'About Us',  href: '#about',        hasDropdown: false },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works', hasDropdown: false },
  { id: 'testimonials', label: 'Our Clients', href: '#testimonials', hasDropdown: false },
  { id: 'contact', label: 'Contact',   href: '#contact',      hasDropdown: false },
];

const Navbar = ({ onBookClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track which section is currently on screen
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'how-it-works', 'testimonials', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is just past the header, or the section takes up the screen
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Instant scroll instead of smooth scroll
  const scrollTo = (e, href, id) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      // Offset by 90px (header height)
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'auto' }); // 'auto' = instant jump
      setActiveSection(id);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div
        className="container-custom flex items-center justify-between"
        style={{
          height: '100px',
        }}
      >
        {/* Col 1 — Logo */}
        <div>
          <a href="#" onClick={e => scrollTo(e, '#home', 'home')} style={{ textDecoration: 'none' }}>
            <Logo />
          </a>
        </div>

        {/* Col 2 — Nav Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={e => scrollTo(e, link.href, link.id)}
                className={`flex items-center gap-1 font-medium transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-[#0054B1]' : 'text-gray-700 hover:text-[#0054B1]'}`}
                style={{ fontSize: '15px', textDecoration: 'none' }}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 ${isActive ? 'text-[#0054B1]' : 'text-gray-500'}`} strokeWidth={2} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Col 3 — CTA */}
        <div className="hidden lg:flex items-center justify-end">
          <button
            onClick={onBookClick}
            className="font-semibold text-[#0054B1] rounded-xl transition-all duration-200 hover:bg-[#0054B1] hover:text-white"
            style={{ fontSize: '15px', padding: '12px 24px', border: '2px solid #0054B1', cursor: 'pointer' }}
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center">
          <button className="p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-5 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={e => { scrollTo(e, link.href, link.id); setMobileOpen(false); }}
                className={`text-[15px] font-medium transition-colors ${isActive ? 'text-[#0054B1]' : 'text-gray-700 hover:text-[#0054B1]'}`}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </a>
            );
          })}
          <button
            onClick={() => { setMobileOpen(false); onBookClick(); }}
            className="mt-1 font-semibold text-[#0054B1] rounded-xl hover:bg-[#0054B1] hover:text-white transition-all duration-200 w-full"
            style={{ fontSize: '15px', padding: '12px 24px', border: '2px solid #0054B1', cursor: 'pointer' }}
          >
            Book a Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
