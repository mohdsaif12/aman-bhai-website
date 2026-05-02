import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Local Expertise',
    desc: 'Deep understanding of UAE regulations and procedures.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.6" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  },
  {
    title: 'Trusted & Compliant',
    desc: 'We ensure 100% compliance so you can operate with complete peace of mind.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    title: 'End-to-End Support',
    desc: 'From company formation to ongoing compliance — we manage it all.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: 'Client-Centric Approach',
    desc: 'Your goals drive our process. We tailor solutions that fit your business.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.6" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    title: 'Proven Track Record',
    desc: 'Hundreds of businesses launched and supported across the UAE.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.6" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    title: 'Long-Term Partnership',
    desc: "We're with you beyond setup, supporting your growth at every stage.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0054B1" strokeWidth="1.6" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  },
];

const STATS = [
  { num: '500+', label: 'Businesses Setup', icon: '🏛️' },
  { num: '10+',  label: 'Years of Excellence', icon: '👥' },
  { num: '100%', label: 'Compliance & Accuracy', icon: '🛡️' },
  { num: '24/7', label: 'Ongoing Support', icon: '🕐' },
];

const WhyIncorvia = () => (
  <section style={{ background: '#fff', padding: '120px 0', display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ width: '100%', maxWidth: '1600px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center', padding: '0 60px' }}>
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '16px' }}>Why Incorvia</p>
        <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, color: '#0A1628', marginBottom: '20px' }}>
          More Than Setup.<br />
          A Partner for <span style={{ color: '#0054B1' }}>Growth.</span>
        </h2>
        <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.75, maxWidth: '480px', marginBottom: '40px' }}>
          At Incorvia, we simplify complexity. Our experts combine local knowledge with global standards to deliver solutions that help your business grow with confidence.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px' }}>
          {FEATURES.map(({ title, desc, icon }, index) => (
            <motion.div 
              key={title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F4F8FE', border: '1px solid #E5EAF0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628', marginBottom: '4px' }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.65 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right — Stats card */}
      <motion.div 
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ position: 'relative' }}>
          <div style={{ background: '#fff', border: '1px solid #E5EAF0', borderRadius: '24px', padding: '12px', width: '380px', boxShadow: '0 25px 80px rgba(0,84,177,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {STATS.map(({ num, label, icon }, i) => (
                <div key={label} style={{
                  padding: '24px 20px',
                  borderRight: i % 2 === 0 ? '1px solid #E5EAF0' : 'none',
                  borderBottom: i < 2 ? '1px solid #E5EAF0' : 'none',
                }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F0F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '20px' }}>{icon}</div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    style={{ fontSize: '32px', fontWeight: 900, color: '#0A1628', lineHeight: 1, marginBottom: '6px' }}
                  >
                    {num}
                  </motion.div>
                  <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Logo badge */}
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "backOut" }}
            style={{ position: 'absolute', bottom: '-24px', right: '-24px', width: '80px', height: '80px', borderRadius: '50%', background: '#0054B1', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 40px rgba(0,84,177,0.35)' }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 4 L32 30 H4 Z" fill="white"/>
              <path d="M18 16 L24 28 H12 Z" fill="#0054B1"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyIncorvia;