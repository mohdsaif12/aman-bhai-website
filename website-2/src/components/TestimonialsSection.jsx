import { motion } from 'framer-motion';

const CLIENT_LOGOS = [
  { file: 'img-10.jpeg', name: 'Wurth' },
  { file: 'img-1.jpeg', name: 'Aurum Realty' },
  { file: 'img-2.jpeg', name: 'Crest Connect' },
  { file: 'img-3.jpeg', name: 'AZ Food Stuff' },
  { file: 'img-4.jpeg', name: 'Eldo Lifestyle' },
  { file: 'img-5.jpeg', name: 'Fajr Alnoujoum' },
  { file: 'img-6.jpeg', name: 'Green Zone' },
  { file: 'img-7.jpeg', name: 'I-T-S' },
  { file: 'img-8.jpeg', name: 'J-T-S' },
  { file: 'img-9.jpeg', name: 'MRZ Global' },
  { file: 'img-11.jpeg', name: 'Zenit' },
];

const TestimonialsSection = () => {
  // We duplicate the logos array to create a seamless infinite loop
// Duplicate logos for infinite scroll
  const infiniteLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  // Index of middle logo in original list (zero based)
  const middleIndex = Math.floor(CLIENT_LOGOS.length / 2);


  return (
    <section style={{ background: 'transparent', padding: 'clamp(60px, 10vh, 100px) 0', overflow: 'hidden', position: 'relative' }}>
      
      {/* Header */}
      <div className="container-custom text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
            Trusted Partners
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: '#0A1628', marginBottom: '16px' }}>
            The Companies That Trust Us<br /><span style={{ color: '#0054B1' }}>To Structure Their Growth.</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div style={{ position: 'relative', width: '100%', height: '240px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* Single Track: Colored Logos */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 50, ease: 'linear' },
          }}
          style={{ 
            display: 'flex', width: 'max-content', position: 'absolute', left: 0, top: 0, bottom: 0, alignItems: 'center'
          }}
        >
          {infiniteLogos.map((logo, i) => (
            <div key={`logo-${i}`} style={{ width: '360px', margin: '0 80px', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={`/clients/${logo.file}`} alt="" style={{ height: '130px', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </motion.div>

        {/* Edge Fades */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%', background: 'linear-gradient(to right, #fff 0%, transparent 100%)', zIndex: 10 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '20%', background: 'linear-gradient(to left, #fff 0%, transparent 100%)', zIndex: 10 }} />
      </div>


    </section>
  );
};

export default TestimonialsSection;
