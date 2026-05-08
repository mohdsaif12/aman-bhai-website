import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { id: 'home',      label: 'Home',       href: '/',           hasDropdown: false },
  { id: 'about',     label: 'About Us',   href: '/about',      hasDropdown: false },
  { id: 'services',  label: 'Services',   href: '/services',   hasDropdown: false },
  { id: 'resources', label: 'Resources',  href: '/resources',  hasDropdown: false },
  { id: 'contact',   label: 'Contact Us', href: '/contact',    hasDropdown: false },
];

const Navbar = ({ onBookClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      const handleScroll = () => {
        const sections = ['home', 'authorities', 'testimonials'];
        let current = 'home';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) current = section;
          }
        }
        setActiveSection(current);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Map pathname to nav id
      const map = { '/about': 'about', '/services': 'services', '/resources': 'resources', '/contact': 'contact' };
      setActiveSection(map[path] || '');
    }
  }, [location.pathname]);

  // Handle hash scrolling on page load or hash change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.substring(1));
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: 'auto' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const scrollTo = (e, href, id) => {
    e.preventDefault();
    
    const [path, hash] = href.split('#');
    const targetPath = path || '/';

    if (targetPath !== location.pathname) {
      navigate(href);
      setActiveSection(id);
      return;
    }

    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        // Offset by 90px (header height)
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'auto' }); // 'auto' = instant jump
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    setActiveSection(id);
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
          <a href="/" onClick={e => scrollTo(e, '/', 'home')} style={{ textDecoration: 'none' }}>
            <Logo />
          </a>
        </div>

        {/* Col 2 — Nav Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (location.pathname === '/about' && link.id === 'about');
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

        {/* Col 3 — Empty CTA space for layout balance */}
        <div className="hidden lg:flex items-center justify-end w-[180px]">
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
            const isActive = activeSection === link.id || (location.pathname === '/about' && link.id === 'about');
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
