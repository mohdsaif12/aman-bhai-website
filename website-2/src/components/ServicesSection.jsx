import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Company Formation',
    desc: 'Mainland, Freezone, and Offshore company setup made simple and efficient.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M14 14h2m0 0h3m-3 0v3m0-3v-2"/>
      </svg>
    ),
  },
  {
    title: 'Banking Solutions',
    desc: 'Corporate bank account opening and ongoing banking support.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/>
        <line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/>
        <line x1="18" y1="18" x2="18" y2="11"/><polyline points="2 11 12 2 22 11"/>
      </svg>
    ),
  },
  {
    title: 'Compliance & Legal',
    desc: 'Stay compliant with UAE regulations, licensing, and legal documentation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: 'Accounting & Tax',
    desc: 'VAT, bookkeeping, payroll, and financial reporting handled by experts.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="15" x2="12" y2="15"/>
        <rect x="13" y="13" width="6" height="6" rx="1"/>
        <line x1="15" y1="13" x2="15" y2="19"/><line x1="13" y1="16" x2="19" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Visas & PRO Services',
    desc: 'Residency visas, permits, and all government documentation support.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <circle cx="9" cy="10" r="2"/>
        <path d="M15 8h2M15 12h2M5 16s1-2 4-2 4 2 4 2"/>
      </svg>
    ),
  },
];

const ServicesSection = () => (
  <section 
    className="w-full bg-white overflow-hidden relative flex justify-center" 
    style={{ padding: '100px 0' }}
  >
    {/* Deco lines top-right */}
    <svg className="absolute top-0 right-0 pointer-events-none opacity-50" width="280" height="280" viewBox="0 0 280 280" fill="none">
      <line x1="0" y1="280" x2="280" y2="0" stroke="#4B9FF3" strokeWidth="1.2"/>
      <line x1="40" y1="280" x2="280" y2="40" stroke="#4B9FF3" strokeWidth="0.6" opacity="0.5"/>
    </svg>

    <div className="w-full max-w-[1600px] px-[60px]">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-16"
      >
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
          Our Services
        </p>
        <div style={{ width: '32px', height: '2px', background: '#0054B1', marginBottom: '20px' }} />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', textAlign: 'center', marginBottom: '20px' }}>
          Everything You Need to<br />Start and Scale in the{' '}
          <span style={{ color: '#0054B1' }}>UAE</span>
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, textAlign: 'center' }}>
          End-to-end corporate solutions designed for clarity,<br />speed, and compliance.
        </p>
      </motion.div>

      {/* Cards */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', 
          gap: '24px',
          width: '100%'
        }}
      >
        {SERVICES.map(({ title, desc, icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#fff',
              border: '1px solid #E5EAF0',
              borderRadius: '20px',
              padding: '42px 28px 36px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '340px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.borderColor = '#4B9FF3'; 
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,84,177,0.12)';
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.borderColor = '#E5EAF0'; 
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#EEF4FD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              {icon}
            </div>
            <div style={{ width: '28px', height: '2.5px', background: '#0054B1', borderRadius: '2px', marginBottom: '20px' }} />
            <p style={{ fontSize: '18px', fontWeight: 800, color: '#0A1628', lineHeight: 1.3, marginBottom: '14px' }}>{title}</p>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.7, flex: 1, marginBottom: '28px' }}>{desc}</p>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#0054B1', textDecoration: 'none' }}>
              Learn More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
