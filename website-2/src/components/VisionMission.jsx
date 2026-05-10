import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section style={{
      padding: 'clamp(30px, 5vh, 60px) 0',
      background: 'transparent',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '40px' }}
        >
          <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '14px' }}>
            Vision &amp; Mission
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, color: '#0A1628', marginBottom: '0' }}>
            2. Built with Purpose. Guided by Principle.
          </h2>
          <div style={{ width: '100%', height: '1px', background: '#E5EAF0', marginTop: '28px' }} />
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Vision — dark navy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#0F2D5E',
              borderRadius: '16px',
              padding: '48px 44px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle circle decoration */}
            <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

            <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '48px' }}>
              Our Vision
            </p>
            <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.85, fontStyle: 'italic', flex: 1, marginTop: 'auto', textAlign: 'justify' }}>
              To be the most trusted corporate advisory firm in the UAE — known not for the volume of businesses we set up, but for the quality of structures we build and the long-term success of the clients we serve.
            </p>
          </motion.div>

          {/* Mission — light blue-grey */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#EBF3FB',
              borderRadius: '16px',
              padding: '48px 44px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <p style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '48px' }}>
              Our Mission
            </p>
            <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: '#1D3A5F', lineHeight: 1.85, flex: 1, marginTop: 'auto', textAlign: 'justify' }}>
              To provide founders, investors, and established businesses with the strategic clarity and precise execution they need to build in the UAE with confidence. We combine deep regulatory knowledge with genuine advisory thinking — so every client leaves with a structure that is right for their business, not just compliant on paper.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
