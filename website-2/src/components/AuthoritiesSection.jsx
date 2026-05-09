import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local authority logos
import addedLogo from '../assets/authorities/added.png';
import adgmLogo from '../assets/authorities/adgm.png';
import ajmanDedLogo from '../assets/authorities/ajman ded.png';
import d3Logo from '../assets/authorities/D3.png';
import dafzaLogo from '../assets/authorities/DAFZA.png';
import detLogo from '../assets/authorities/DET.jpg';
import diacLogo from '../assets/authorities/DIAC.png';
import dicLogo from '../assets/authorities/DIC.jpg';
import difcLogo from '../assets/authorities/difc.png';
import dkpLogo from '../assets/authorities/DKP.png';
import dmccLogo from '../assets/authorities/dmcc.png';
import dsoLogo from '../assets/authorities/DSO.jpg';
import dubaiSouthLogo from '../assets/authorities/DUBAI SOUTH.png';
import ffzLogo from '../assets/authorities/FFZ.jpg';
import fujairahDedLogo from '../assets/authorities/FUJAIRAH DED.jpg';
import ifzaLogo from '../assets/authorities/ifza.png';
import jafzaLogo from '../assets/authorities/jafza.png';
import kizadLogo from '../assets/authorities/KIZAD.png';
import meydanLogo from '../assets/authorities/MEYDEN.jpg';
import rakDedLogo from '../assets/authorities/RAK DED.jpg';
import rakIccLogo from '../assets/authorities/RAK ICC.png';
import rakezLogo from '../assets/authorities/rakez.png';
import sedLogo from '../assets/authorities/SED.jpg';
import shamsLogo from '../assets/authorities/SHAMS.png';
import srtipLogo from '../assets/authorities/SRTIP.jpg';
import twofour54Logo from '../assets/authorities/TWOFOUR54.png';
import uaqDedLogo from '../assets/authorities/UAQ DED.png';
import uaqFtzLogo from '../assets/authorities/UAQ FTZ.png';

const LOGO_MAP = {
  'det.gov.ae': detLogo,
  'added.gov.ae': addedLogo,
  'sedd.ae': sedLogo,
  'ajmanded.gov.ae': ajmanDedLogo,
  'ded.rak.ae': rakDedLogo,
  'uaqded.gov.ae': uaqDedLogo,
  'fujded.gov.ae': fujairahDedLogo,
  'dmcc.ae': dmccLogo,
  'difc.ae': difcLogo,
  'adgm.com': adgmLogo,
  'jafza.ae': jafzaLogo,
  'dafza.ae': dafzaLogo,
  'meydan.ae': meydanLogo,
  'dsoa.ae': dsoLogo,
  'dubaisouth.ae': dubaiSouthLogo,
  'dic.ae': dicLogo,
  'd3.ae': d3Logo,
  'ifza.ae': ifzaLogo,
  'rakez.com': rakezLogo,
  'shamsfreezone.com': shamsLogo,
  'fujairahfreezone.ae': ffzLogo,
  'uaqftz.ae': uaqFtzLogo,
  'diac.ae': diacLogo,
  'kp.ae': dkpLogo,
  'srtip.ae': srtipLogo,
  'twofour54.com': twofour54Logo,
  'kizad.ae': kizadLogo,
  'rakia.ae': rakIccLogo,
};

const CATEGORIES = [
  {
    id: 'mainland',
    label: 'Mainland',
    icon: '🏛️',
    desc: 'Core UAE Government Bodies',
    authorities: [
      { name: 'Dubai DET', full: 'Dubai Department of Economy & Tourism', domain: 'det.gov.ae', abbr: 'DET' },
      { name: 'ADDED', full: 'Abu Dhabi Dept of Economic Development', domain: 'added.gov.ae', abbr: 'ADDED' },
      { name: 'SEDD', full: 'Sharjah Economic Development Dept', domain: 'sedd.ae', abbr: 'SEDD' },
      { name: 'Ajman DED', full: 'Ajman Dept of Economic Development', domain: 'ajmanded.gov.ae', abbr: 'AJMAN' },
      { name: 'RAKDED', full: 'RAK Dept of Economic Development', domain: 'ded.rak.ae', abbr: 'RAKDED' },
      { name: 'UAQ DED', full: 'Umm Al Quwain Dept of Economic Development', domain: 'uaqded.gov.ae', abbr: 'UAQ' },
      { name: 'Fujairah DED', full: 'Fujairah Dept of Industry & Economy', domain: 'fujded.gov.ae', abbr: 'FUJ' },
    ],
  },
  {
    id: 'tier1',
    label: 'Tier 1 — Premium',
    icon: '🏙️',
    desc: 'High-Prestige Free Zones',
    tip: 'Best for credibility, banking strength & investor appeal.',
    authorities: [
      { name: 'DMCC', full: 'Dubai Multi Commodities Centre', domain: 'dmcc.ae', abbr: 'DMCC' },
      { name: 'DIFC', full: 'Dubai International Financial Centre', domain: 'difc.ae', abbr: 'DIFC' },
      { name: 'ADGM', full: 'Abu Dhabi Global Market', domain: 'adgm.com', abbr: 'ADGM' },
      { name: 'JAFZA', full: 'Jebel Ali Free Zone Authority', domain: 'jafza.ae', abbr: 'JAFZA' },
      { name: 'DAFZA', full: 'Dubai Airport Freezone', domain: 'dafza.ae', abbr: 'DAFZA' },
    ],
  },
  {
    id: 'tier2',
    label: 'Tier 2 — Strategic',
    icon: '🚀',
    desc: 'Strategic Dubai Free Zones',
    tip: 'Dubai presence + cost efficiency.',
    authorities: [
      { name: 'Meydan', full: 'Meydan Free Zone', domain: 'meydan.ae', abbr: 'MFZ' },
      { name: 'DSO', full: 'Dubai Silicon Oasis Authority', domain: 'dsoa.ae', abbr: 'DSO' },
      { name: 'Dubai South', full: 'Dubai South Free Zone', domain: 'dubaisouth.ae', abbr: 'D/S' },
      { name: 'DMC', full: 'Dubai Media City', domain: 'dmc.ae', abbr: 'DMC' },
      { name: 'DIC', full: 'Dubai Internet City', domain: 'dic.ae', abbr: 'DIC' },
      { name: 'd3', full: 'Dubai Design District', domain: 'd3.ae', abbr: 'd3' },
    ],
  },
  {
    id: 'tier3',
    label: 'Tier 3 — Cost-Effective',
    icon: '💼',
    desc: 'High-Volume Free Zones',
    tip: 'Ideal for startups, solo founders & international clients.',
    authorities: [
      { name: 'IFZA', full: 'International Free Zone Authority', domain: 'ifza.ae', abbr: 'IFZA' },
      { name: 'RAKEZ', full: 'Ras Al Khaimah Economic Zone', domain: 'rakez.com', abbr: 'RAKEZ' },
      { name: 'SHAMS', full: 'Sharjah Media City', domain: 'shamsfreezone.com', abbr: 'SHAMS' },
      { name: 'AFZ', full: 'Ajman Free Zone Authority', domain: 'afz.ae', abbr: 'AFZ' },
      { name: 'FFZ', full: 'Fujairah Free Zone', domain: 'fujairahfreezone.ae', abbr: 'FFZ' },
      { name: 'UAQ FTZ', full: 'Umm Al Quwain Free Trade Zone', domain: 'uaqftz.ae', abbr: 'UAQ' },
    ],
  },
  {
    id: 'niche',
    label: 'Industry-Specific',
    icon: '🏭',
    desc: 'Niche & Sector Free Zones',
    tip: 'Strong for sector-aware positioning.',
    authorities: [
      { name: 'DHCC', full: 'Dubai Healthcare City', domain: 'dhcc.ae', abbr: 'DHCC' },
      { name: 'DIAC', full: 'Dubai International Academic City', domain: 'diac.ae', abbr: 'DIAC' },
      { name: 'DKP', full: 'Dubai Knowledge Park', domain: 'kp.ae', abbr: 'DKP' },
      { name: 'SRTIP', full: 'Sharjah Research Technology & Innovation Park', domain: 'srtip.ae', abbr: 'SRTIP' },
      { name: 'twofour54', full: 'twofour54 Abu Dhabi', domain: 'twofour54.com', abbr: 'TF54' },
      { name: 'KIZAD', full: 'Khalifa Industrial Zone Abu Dhabi', domain: 'kizad.ae', abbr: 'KIZAD' },
    ],
  },
  {
    id: 'offshore',
    label: 'Offshore',
    icon: '🌍',
    desc: 'Offshore & International Jurisdictions',
    tip: 'Cross-border structuring & holding.',
    authorities: [
      { name: 'RAK ICC', full: 'RAK International Corporate Centre', domain: 'rakia.ae', abbr: 'RAKICC' },
      { name: 'JAFZA Offshore', full: 'Jebel Ali Free Zone (Offshore)', domain: 'jafza.ae', abbr: 'JAFZA' },
      { name: 'Ajman Offshore', full: 'Ajman Offshore', domain: 'afz.ae', abbr: 'AFZ' },
    ],
  },
];

// Color accent per category
const CAT_COLORS = {
  mainland: '#0054B1',
  tier1: '#7C3AED',
  tier2: '#0891B2',
  tier3: '#059669',
  niche: '#B45309',
  offshore: '#0054B1',
};

const LogoCard = ({ auth, accent }) => {
  const [imgFailed, setImgFailed] = useState(false);

  // Use local asset if we have it, otherwise fallback to icon.horse
  const localLogo = LOGO_MAP[auth.domain];
  const fallbackUrl = `https://icon.horse/icon/${auth.domain}`;
  const logoUrl = localLogo || fallbackUrl;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      title={auth.full}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
        width: '180px', height: '140px', padding: '24px 16px',
        background: '#fff', borderRadius: '18px',
        border: '1px solid #F1F5F9',
        boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
        flexShrink: 0, cursor: 'default',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.08)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#F1F5F9';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
      }}
    >
      <div style={{ 
        width: '100%', height: '60px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '12px'
      }}>
        {!imgFailed ? (
          <img
            src={logoUrl}
            alt={auth.name}
            onError={() => setImgFailed(true)}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        ) : (
          <div style={{
            width: '64px', height: '44px', borderRadius: '10px',
            background: `${accent}12`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 800, color: accent, letterSpacing: '0.04em',
            textAlign: 'center', padding: '4px',
          }}>
            {auth.abbr}
          </div>
        )}
      </div>
      <p style={{ 
        fontSize: '12px', fontWeight: 700, color: '#374151', 
        textAlign: 'center', lineHeight: 1.3,
        width: '100%', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        overflow: 'hidden', height: '32px'
      }}>
        {auth.name}
      </p>
    </motion.div>
  );
};

const AuthoritiesSection = () => {
  const [activeTab, setActiveTab] = useState('mainland');
  const activeCategory = CATEGORIES.find(c => c.id === activeTab);
  const accent = CAT_COLORS[activeTab];

  return (
    <section style={{ background: 'transparent', padding: 'clamp(60px, 10vh, 100px) 0', overflow: 'hidden' }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
            Authorities We Work With
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, color: '#0A1628', marginBottom: '12px' }}>
            Across Every UAE Jurisdiction
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            From federal mainland bodies to specialist free zones — we navigate the full landscape so you don't have to.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '8px 18px', borderRadius: '100px', fontSize: '13px',
                fontWeight: 600, border: '1.5px solid',
                cursor: 'pointer', transition: 'all 0.2s ease',
                borderColor: activeTab === cat.id ? CAT_COLORS[cat.id] : '#E5EAF0',
                background: activeTab === cat.id ? CAT_COLORS[cat.id] : '#fff',
                color: activeTab === cat.id ? '#fff' : '#6B7280',
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Active category info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory.tip && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: `${accent}10`, borderRadius: '8px',
                padding: '8px 16px', marginBottom: '28px',
                border: `1px solid ${accent}25`,
              }}>
                <span style={{ fontSize: '13px', color: accent, fontWeight: 600 }}>💡 {activeCategory.tip}</span>
              </div>
            )}

            {/* Logo Grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {activeCategory.authorities.map(auth => (
                <LogoCard key={auth.name} auth={auth} accent={accent} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Count bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #F1F5F9' }}>
          {[
            { num: '7', label: 'Mainland Authorities' },
            { num: '20+', label: 'Free Zones' },
            { num: '3', label: 'Offshore Jurisdictions' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '26px', fontWeight: 900, color: '#0054B1', lineHeight: 1 }}>{stat.num}</p>
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#9CA3AF', marginTop: '4px' }}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AuthoritiesSection;
