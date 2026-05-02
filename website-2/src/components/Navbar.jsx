import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Services', hasDropdown: true },
  { label: 'About Us', hasDropdown: false },
  { label: 'Industries', hasDropdown: false },
  { label: 'Resources', hasDropdown: true },
  { label: 'Contact', hasDropdown: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div
        className="w-full max-w-[1600px] mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          height: '90px',
          padding: '0 60px',
        }}
      >
        {/* Col 1 — Logo */}
        <div>
          <Logo />
        </div>

        {/* Col 2 — Nav Links (true center) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#0054B1] transition-colors duration-200 whitespace-nowrap"
              style={{ fontSize: '15px' }}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={2} />
              )}
            </a>
          ))}
        </nav>

        {/* Col 3 — CTA Button (right-aligned) */}
        <div className="hidden lg:flex items-center justify-end">
          <button
            className="font-semibold text-[#0054B1] rounded-xl transition-all duration-200 hover:bg-[#0054B1] hover:text-white"
            style={{
              fontSize: '15px',
              padding: '12px 24px',
              border: '2px solid #0054B1',
            }}
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center justify-end col-span-2">
          <button
            className="p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0054B1] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-1 font-semibold text-[#0054B1] rounded-xl hover:bg-[#0054B1] hover:text-white transition-all duration-200 w-full"
            style={{ fontSize: '15px', padding: '12px 24px', border: '2px solid #0054B1' }}
          >
            Book a Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
