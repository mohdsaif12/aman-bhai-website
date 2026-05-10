import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Business Advisory Services',
    desc: 'Before anything is filed, we think. We analyse your goals, your risk profile, your residency needs, and your growth trajectory — then we design a structure that serves all of them. This is where every Incorvia engagement begins.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Goal & risk profile analysis', 'Residency needs assessment', 'Growth trajectory planning'],
  },
  {
    title: 'Business Incorporation',
    desc: 'Free Zone, Mainland, and Offshore — we manage complete business setup across all major UAE jurisdictions. We don\'t just process paperwork. We ensure the entity you form is the right one for where you are going, not just where you are today.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Free Zone, Mainland & Offshore', 'Full jurisdiction management', 'Entity formation & registration'],
  },
  {
    title: 'Banking Support & Compliance',
    desc: 'Corporate account opening is one of the most underestimated challenges in the UAE. We prepare your documentation, position your entity correctly, and manage the full banking engagement — so approvals happen and accounts perform.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Documentation preparation', 'Entity profile positioning', 'End-to-end banking engagement'],
  },
  {
    title: 'Golden Visa & Residency',
    desc: 'UAE residency pathways for founders, investors, and high-net-worth individuals — structured, managed, and executed end to end. We handle the full process so you and your family are covered.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Investor & founder visas', 'Golden Visa applications', 'Family & dependent coverage'],
  },
  {
    title: 'Tax Advisory & Accounting',
    desc: 'In partnership with our sister company, we provide UAE corporate tax advisory, VAT compliance, and accounting services — fully integrated with your structure from day one. No gaps. No misalignment between your entity and your books.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Corporate tax advisory', 'VAT compliance', 'Accounting & bookkeeping'],
  },
  {
    title: 'Corporate & PRO Services — Government Liaison',
    desc: 'Visa applications, Emirates ID, licence renewals, trade name registrations, notarisations, attestations — every interaction with UAE government authorities, managed professionally and without delay.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Visa & Emirates ID processing', 'Licence renewals & amendments', 'Notarisations & attestations'],
  },
  {
    title: 'Holding Structures',
    desc: 'For investors, HNWIs, and businesses with multi-entity or cross-border complexity — we design ownership structures that protect assets, optimise for tax efficiency, and position you for long-term growth.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['Multi-entity structuring', 'Asset protection planning', 'Cross-border optimisation'],
  },
  {
    title: 'AI Support & Business Automation',
    desc: 'In partnership with our partner company, we help businesses automate support, qualify leads, and streamline operations with AI powered systems that improve efficiency and customer experience.',
    icon: <img src="/v-icon.png" alt="Incorvia" style={{ width: '28px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />,
    includes: ['AI virtual assistants', 'Customer support automation', 'Lead qualification', 'Workflow automation'],
  },
];

const ServicesSection = ({ onBookClick }) => (
  <section
    className="w-full bg-transparent overflow-hidden relative flex justify-center"
    style={{ padding: 'clamp(30px, 5vh, 60px) 0' }}
  >
    {/* Deco lines top-right */}
    <svg className="absolute top-0 right-0 pointer-events-none opacity-50" width="280" height="280" viewBox="0 0 280 280" fill="none">
      <line x1="0" y1="280" x2="280" y2="0" stroke="#4B9FF3" strokeWidth="1.2"/>
      <line x1="40" y1="280" x2="280" y2="40" stroke="#4B9FF3" strokeWidth="0.6" opacity="0.5"/>
    </svg>

    <div className="container-custom z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-16"
      >
        <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '16px' }}>
          Advisory Scope
        </p>
        <div style={{ width: '48px', height: '3px', background: '#0054B1', marginBottom: '32px', borderRadius: '2px' }} />
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 900, lineHeight: 1.1, color: '#0A1628', textAlign: 'center', marginBottom: '16px' }}>
          A Complete Advisory Ecosystem.<br />
          <span style={{ color: '#0054B1' }}>Built Around Your Structure.</span>
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: 1.7, textAlign: 'center', maxWidth: '640px' }}>
          We don't offer services. We offer outcomes. Every engagement begins with strategy — and every service we provide is designed to support one goal: a business that is structured to perform.
        </p>
      </motion.div>

      {/* Cards — 4 col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 w-full">
        {SERVICES.map(({ title, desc, icon, includes }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#fff',
              border: '1px solid #E5EAF0',
              borderRadius: '20px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              height: '100%',
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
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EEF4FD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', alignSelf: 'center' }}>
              {icon}
            </div>
            <div style={{ width: '28px', height: '2.5px', background: '#0054B1', borderRadius: '2px', marginBottom: '12px', alignSelf: 'center' }} />
            <p style={{ fontSize: '15px', fontWeight: 800, color: '#0A1628', lineHeight: 1.3, marginBottom: '8px', textAlign: 'center' }}>{title}</p>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, flex: 1, marginBottom: '16px', textAlign: 'center' }}>{desc}</p>

            {/* Includes list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
              {includes.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#6B7280', textAlign: 'center' }}>
                  <span style={{ color: '#0054B1', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0054B1', textDecoration: 'none' }}>
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Closing tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ textAlign: 'center', marginTop: '56px', fontSize: '16px', fontStyle: 'italic', color: '#9CA3AF' }}
      >
        Every service we offer feeds back into one thing: <em style={{ color: '#0054B1', fontStyle: 'normal', fontWeight: 600 }}>a structure that works.</em>
      </motion.p>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginTop: '40px' }}
      >
        <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '20px' }}>
          Every engagement starts with a conversation — not a quote.
        </p>
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onBookClick}
          style={{
            background: '#0054B1', color: '#fff', fontWeight: 600,
            fontSize: '15px', padding: '14px 32px', borderRadius: '10px',
            border: 'none', cursor: 'pointer',
          }}
        >
          Book Your Discovery Call
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
