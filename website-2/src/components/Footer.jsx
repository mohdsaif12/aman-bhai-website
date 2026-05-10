import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { 
      label: 'Facebook', 
      href: 'https://www.facebook.com/share/1EVXhHsoHj/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    { 
      label: 'Instagram', 
      href: 'https://www.instagram.com/Incorvia.ae?igsh=N2R5aWw5ZXplYXZz',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    { 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/Incorvia-corporate-advisory/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
  ];

  return (
    <footer style={{ background: '#0A1628', color: '#fff', paddingTop: '80px', paddingBottom: '40px', position: 'relative', zIndex: 20 }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <div style={{ marginBottom: '24px' }}>
              <Logo />
            </div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '28px' }}>
              Strategic corporate advisory for founders and investors scaling in the UAE. We prioritize structure before paperwork to ensure long-term success.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    width: '40px', height: '40px', borderRadius: '10px', 
                    background: 'rgba(255,255,255,0.05)', display: 'flex', 
                    alignItems: 'center', justifyContent: 'center', color: '#fff',
                    transition: 'all 0.3s ease', textDecoration: 'none'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#0054B1';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#fff' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#4B9FF3'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#fff' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Business Advisory', 'Company Formation', 'Golden Visa & Residency', 'Tax & Compliance', 'Banking Support'].map((s) => (
                <li key={s}>
                  <Link 
                    to="/services"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#4B9FF3'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#fff' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                <MapPin size={18} style={{ color: '#4B9FF3', flexShrink: 0 }} />
                <span>GF24, Al Fahad Building,<br />Dubai, UAE</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>
                <Mail size={18} style={{ color: '#4B9FF3', flexShrink: 0 }} />
                <a href="mailto:advisory@Incorvia.ae" style={{ color: 'inherit', textDecoration: 'none' }}>advisory@Incorvia.ae</a>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>
                <Phone size={18} style={{ color: '#4B9FF3', flexShrink: 0 }} />
                <a href="tel:+971582581214" style={{ color: 'inherit', textDecoration: 'none' }}>+971 58 258 1214</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)' }}>
            © {currentYear} Incorvia Corporate Advisory. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
