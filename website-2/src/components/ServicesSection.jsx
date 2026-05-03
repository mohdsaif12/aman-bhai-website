import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Business Structuring & Company Formation',
    desc: 'We assess your business model, ownership goals, and growth trajectory — then recommend the right structure. Mainland, free zone, or offshore — with the right activity codes and compliance baseline.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M14 14h2m0 0h3m-3 0v3m0-3v-2"/>
      </svg>
    ),
    includes: ['Jurisdiction evaluation & activity selection', 'Ownership structuring', 'DED / Free Zone / Offshore applications'],
  },
  {
    title: 'PRO Services & Government Liaison',
    desc: 'Government touchpoints in the UAE are numerous and non-negotiable. Our PRO team manages every interaction with accuracy and professionalism.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    includes: ['Document processing & attestation', 'Ministry filings', 'Trade license renewals', 'Regulatory coordination'],
  },
  {
    title: 'Visa & Immigration',
    desc: 'We manage the end-to-end visa process for investors, employees, and dependents — ensuring full compliance with UAE immigration authority requirements.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <circle cx="9" cy="10" r="2"/>
        <path d="M15 8h2M15 12h2M5 16s1-2 4-2 4 2 4 2"/>
      </svg>
    ),
    includes: ['Investor & partner visas', 'Employment visas', 'Dependent & family visas', 'Renewals & cancellations'],
  },
  {
    title: 'Corporate Compliance & Amendments',
    desc: 'Business structures evolve. We manage the amendments, renewals, and compliance obligations that keep your business in good standing — without disrupting operations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="15" x2="12" y2="15"/>
        <rect x="13" y="13" width="6" height="6" rx="1"/>
        <line x1="15" y1="13" x2="15" y2="19"/><line x1="13" y1="16" x2="19" y2="16"/>
      </svg>
    ),
    includes: ['Shareholder changes', 'Activity amendments', 'Annual renewals & compliance monitoring', 'Corporate governance support'],
  },
  {
    title: 'Banking Readiness & Account Support',
    desc: 'Corporate banking in the UAE requires proper documentation, the right business profile, and an understanding of what banks assess. We prepare your file.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/>
        <line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/>
        <line x1="18" y1="18" x2="18" y2="11"/><polyline points="2 11 12 2 22 11"/>
      </svg>
    ),
    includes: ['Banking document preparation & profile alignment', 'Bank introductions & facilitation'],
  },
  {
    title: 'Ongoing Strategic Advisory',
    desc: 'As your business scales, your advisory needs evolve. We remain engaged as a trusted partner for compliance decisions, structural adjustments, and strategic questions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    includes: ['Strategic reviews & expansion advisory', 'Compliance guidance', 'Structural optimisation as you scale'],
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
          Advisory Scope
        </p>
        <div style={{ width: '32px', height: '2px', background: '#0054B1', marginBottom: '20px' }} />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', textAlign: 'center', marginBottom: '20px' }}>
          Everything Your Business Needs.<br />
          <span style={{ color: '#0054B1' }}>Structured Properly.</span>
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, textAlign: 'center', maxWidth: '560px' }}>
          We don't offer packages. We design engagements based on what your business actually needs.
        </p>
      </motion.div>

      {/* Cards — 3 col grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '28px',
          width: '100%'
        }}
      >
        {SERVICES.map(({ title, desc, icon, includes }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#fff',
              border: '1px solid #E5EAF0',
              borderRadius: '20px',
              padding: '40px 32px 36px',
              display: 'flex',
              flexDirection: 'column',
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
            <div style={{ width: '28px', height: '2.5px', background: '#0054B1', borderRadius: '2px', marginBottom: '16px' }} />
            <p style={{ fontSize: '17px', fontWeight: 800, color: '#0A1628', lineHeight: 1.3, marginBottom: '12px' }}>{title}</p>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.7, flex: 1, marginBottom: '20px' }}>{desc}</p>

            {/* Includes list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {includes.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#6B7280' }}>
                  <span style={{ color: '#0054B1', fontWeight: 700, marginTop: '1px', flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#0054B1', textDecoration: 'none' }}>
              Learn More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginTop: '60px' }}
      >
        <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '20px' }}>
          Every engagement starts with a conversation — not a quote.
        </p>
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: '#0054B1',
            color: '#fff',
            fontWeight: 600,
            fontSize: '15px',
            padding: '14px 32px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Book Your Discovery Call
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
