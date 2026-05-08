import { useEffect } from 'react';
import { motion } from 'framer-motion';
import dubaiDaySkyline from '../assets/dubai_day_skyline.png';

const ARTICLES = [
  {
    tag: 'Company Formation',
    title: "Mainland vs Free Zone vs Offshore: What's Right for Your Business?",
    desc: "The structure you choose affects your tax position, operational flexibility, and growth path. Here's how to think through it.",
    readTime: '5 min read',
  },
  {
    tag: 'Compliance',
    title: 'UAE Corporate Tax 2024: What Business Owners Need to Know',
    desc: 'The introduction of corporate tax in the UAE changes the compliance landscape. We break down what applies to your business.',
    readTime: '7 min read',
  },
  {
    tag: 'Visa & Immigration',
    title: 'The Golden Visa: Who Qualifies and How to Apply',
    desc: 'Long-term residency in the UAE is now accessible to more categories of investors and professionals. Here is the full breakdown.',
    readTime: '6 min read',
  },
  {
    tag: 'Banking',
    title: 'Why UAE Corporate Bank Account Openings Fail — And How to Avoid It',
    desc: 'Banks reject applications for predictable reasons. Preparation and profile alignment are the difference between approval and delay.',
    readTime: '4 min read',
  },
  {
    tag: 'Strategy',
    title: 'Expanding into the GCC: The UAE as Your Base of Operations',
    desc: 'For businesses eyeing the broader Middle East, the UAE offers infrastructure, banking, and treaty advantages that make it the natural hub.',
    readTime: '8 min read',
  },
  {
    tag: 'Advisory',
    title: 'When to Restructure Your UAE Business — And When Not To',
    desc: 'Restructuring is not always the answer. Here is how to evaluate whether a structural change actually serves your business goals.',
    readTime: '5 min read',
  },
];

const ResourcesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full z-0"
        style={{ backgroundImage: `url(${dubaiDaySkyline})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.15 }}
      />
      <div className="fixed inset-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%)' }}
      />

      <div className="relative z-10 pt-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-6"
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
            Knowledge Hub
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0A1628', marginBottom: '16px' }}>
            Resources
          </h1>
          <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Practical insights on UAE business setup, compliance, visas, and strategy — written for founders, not lawyers.
          </p>
        </motion.div>

        <div className="container-custom mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: '1px solid #E5EAF0',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,84,177,0.1)';
                  e.currentTarget.style.borderColor = '#4B9FF3';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E5EAF0';
                }}
              >
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#0054B1', background: '#EEF4FD',
                  padding: '4px 12px', borderRadius: '100px', marginBottom: '16px', alignSelf: 'flex-start',
                }}>
                  {article.tag}
                </span>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1628', lineHeight: 1.4, marginBottom: '12px', flex: 1 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.7, marginBottom: '20px' }}>
                  {article.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{article.readTime}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#0054B1' }}>Read →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
