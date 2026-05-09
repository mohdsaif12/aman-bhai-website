import { motion } from 'framer-motion';

const PURPOSE_ITEMS = [
  {
    icon: '🌳',
    title: 'We plant a tree for every company we incorporate.',
    desc: 'Every new business structure we build contributes to a greener future — because growth should leave something behind beyond a trade license.',
  },
  {
    icon: '❤️',
    title: 'We give 5% of our net profits to charity.',
    desc: 'A portion of what we earn goes directly toward causes that matter. Because a business that prospers has a responsibility to the community it operates in.',
  },
];

const BusinessWithPurpose = () => {
  return (
    <section style={{ background: 'transparent', padding: 'clamp(40px, 8vh, 80px) 0 clamp(60px, 10vh, 100px)', position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="container-custom"
      >
        <div className="p-8 lg:p-16 rounded-[24px] flex flex-col items-center text-center" style={{
          background: 'linear-gradient(135deg, #F4F8FE 0%, #EBF2FF 100%)',
          border: '1px solid #D6E4FF',
        }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '12px' }}>
            Business With Purpose
          </p>
          <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#0A1628', marginBottom: '16px' }}>
            Doing good business and doing good<br />in the world are not separate things.
          </h3>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '48px', fontStyle: 'italic', maxWidth: '600px' }}>
            These are not marketing promises. They are commitments built into how Incorvia operates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {PURPOSE_ITEMS.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid #E5EAF0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '32px', flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628', marginBottom: '8px' }}>{title}</p>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessWithPurpose;
