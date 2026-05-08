import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dubaiDaySkyline from '../assets/dubai_day_skyline.png';

const SERVICE_OPTIONS = [
  'Business Advisory Services',
  'Business Incorporation',
  'Banking Support & Compliance',
  'Golden Visa & Residency',
  'Tax Advisory & Accounting',
  'Corporate & PRO Services — Government Liaison',
  'Holding Structures',
  'Others',
];

const PROCESS_OPTIONS = [
  'Just exploring',
  'Ready to start',
  'Already set up, need advisory',
];

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '', 
    service: '',
    process: '',
    message: '' 
  });
  const [status, setStatus] = useState('idle');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Using the same Apps Script logic as the popup
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxONF4ZmIe5sE2b8ZMWLs-5ClBPnokAQ9C97j2bIWRGZ5bXuwXzP4RxK8maGwDkHxc/exec';
    
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setStatus('success');
      alert('Thank you! Your message has been sent successfully.');
      setForm({ name: '', email: '', phone: '', company: '', service: '', process: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      alert('Something went wrong. Please try again.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full z-0"
        style={{ backgroundImage: `url(${dubaiDaySkyline})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.15 }}
      />
      <div className="fixed inset-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%)' }}
      />

      <div className="relative z-10 pt-28 pb-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B9FF3', marginBottom: '10px' }}>
            Get In Touch
          </p>
          <div style={{ width: '32px', height: '2px', background: '#0054B1', margin: '0 auto 20px' }} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0A1628', marginBottom: '16px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Every engagement begins with a discovery call — no pitching, no pressure.
            Just a focused conversation about whether we're the right fit.
          </p>
        </motion.div>

        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full lg:w-2/5 flex flex-col gap-8 lg:mt-12"
            >
              {[
                { label: 'Location', value: 'GF24, Al Fahad Building, Dubai', icon: '📍' },
                { label: 'Email', value: 'advisory@incorvia.ae', icon: '📧' },
                { label: 'Office Hours', value: 'Mon–Fri: 9AM – 6PM GST', icon: '🕐' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF4FD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{item.label}</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: '#0A1628' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right — form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="w-full lg:w-3/5"
              style={{ background: '#fff', borderRadius: '24px', border: '1px solid #E5EAF0', padding: '48px', boxShadow: '0 20px 60px rgba(0,84,177,0.06)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Name */}
                <div className="md:col-span-1">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-1">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Phone */}
                <div className="md:col-span-1">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+971 5X XXX XXXX" required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Company */}
                <div className="md:col-span-1">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Company / Business</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Service Dropdown */}
                <div className="md:col-span-1">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Service of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', boxSizing: 'border-box', background: '#fff' }}
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Process / Stage Dropdown */}
                <div className="md:col-span-1">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Where are you in the process?</label>
                  <select name="process" value={form.process} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', boxSizing: 'border-box', background: '#fff' }}
                  >
                    <option value="" disabled>Select your stage</option>
                    {PROCESS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>How can we help?</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us briefly about your business and what you're looking to achieve..." required rows={4}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5EAF0', fontSize: '15px', color: '#0A1628', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(0,84,177,0.3)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: '100%', background: '#0054B1', color: '#fff',
                  fontWeight: 700, fontSize: '16px', padding: '16px 32px',
                  borderRadius: '12px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
