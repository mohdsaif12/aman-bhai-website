import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// ─── PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ───────────────────────
const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
// ──────────────────────────────────────────────────────────────────────────

const PROCESS_OPTIONS = [
  'Just exploring',
  'Ready to start',
  'Already set up, need advisory',
];

const INITIAL = { name: '', email: '', phone: '', process: '', message: '' };

const ConsultationPopup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.process) return;
    setStatus('loading');

    try {
      if (APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        // Demo mode — simulate success without real network call
        await new Promise(r => setTimeout(r, 1200));
        setStatus('success');
        return;
      }

      // POST to Google Apps Script
      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        process: form.process,
        message: form.message,
        timestamp: new Date().toISOString(),
      });

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script doesn't send CORS headers on redirect
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after animation finishes
    setTimeout(() => { setForm(INITIAL); setStatus('idle'); }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(10, 22, 40, 0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1001,
              width: '100%',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#fff',
              borderRadius: '24px',
              boxShadow: '0 32px 80px rgba(0,84,177,0.18)',
            }}
          >
            {/* Blue top bar */}
            <div style={{
              background: 'linear-gradient(135deg, #0054B1 0%, #1A6FD4 100%)',
              borderRadius: '24px 24px 0 0',
              padding: '32px 36px 28px',
              position: 'relative',
            }}>
              <button
                onClick={handleClose}
                style={{
                  position: 'absolute', top: '20px', right: '20px',
                  background: 'rgba(255,255,255,0.15)', border: 'none',
                  borderRadius: '50%', width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                <X size={16} />
              </button>

              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                Incorvia Corporate Advisory
              </p>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '8px' }}>
                Book a Discovery Call
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                No pitching, no pressure. Just a focused conversation about whether we're the right fit for your business.
              </p>
            </div>

            {/* Form body */}
            <div style={{ padding: '32px 36px 36px' }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '24px 0' }}
                >
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle size={36} color="#10B981" />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0A1628', marginBottom: '10px' }}>Enquiry Received!</h3>
                  <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.7, marginBottom: '28px' }}>
                    Thank you, <strong>{form.name}</strong>. We respond to all enquiries within one business day. Your information is kept strictly confidential.
                  </p>
                  <button
                    onClick={handleClose}
                    style={{
                      background: '#0054B1', color: '#fff', fontWeight: 600,
                      fontSize: '15px', padding: '12px 28px',
                      borderRadius: '10px', border: 'none', cursor: 'pointer',
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '24px 0' }}
                >
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <AlertCircle size={36} color="#EF4444" />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0A1628', marginBottom: '10px' }}>Something went wrong</h3>
                  <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '24px' }}>
                    Please try again or email us directly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{
                      background: '#0054B1', color: '#fff', fontWeight: 600,
                      fontSize: '15px', padding: '12px 28px',
                      borderRadius: '10px', border: 'none', cursor: 'pointer',
                    }}
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Full Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required placeholder="e.g. James Richardson"
                      style={{
                        width: '100%', padding: '12px 16px', border: '1.5px solid #E5EAF0',
                        borderRadius: '10px', fontSize: '15px', color: '#0A1628',
                        outline: 'none', transition: 'border-color 0.2s', background: '#fff',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#0054B1'}
                      onBlur={e => e.target.style.borderColor = '#E5EAF0'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Email Address <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      required placeholder="you@company.com"
                      style={{
                        width: '100%', padding: '12px 16px', border: '1.5px solid #E5EAF0',
                        borderRadius: '10px', fontSize: '15px', color: '#0A1628',
                        outline: 'none', transition: 'border-color 0.2s', background: '#fff',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#0054B1'}
                      onBlur={e => e.target.style.borderColor = '#E5EAF0'}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Phone Number <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      required placeholder="+971 50 000 0000"
                      style={{
                        width: '100%', padding: '12px 16px', border: '1.5px solid #E5EAF0',
                        borderRadius: '10px', fontSize: '15px', color: '#0A1628',
                        outline: 'none', transition: 'border-color 0.2s', background: '#fff',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#0054B1'}
                      onBlur={e => e.target.style.borderColor = '#E5EAF0'}
                    />
                  </div>

                  {/* Where are you */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Where are you in the process? <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <select
                      name="process" value={form.process} onChange={handleChange} required
                      style={{
                        width: '100%', padding: '12px 16px', border: '1.5px solid #E5EAF0',
                        borderRadius: '10px', fontSize: '15px', color: form.process ? '#0A1628' : '#9CA3AF',
                        outline: 'none', transition: 'border-color 0.2s', background: '#fff',
                        boxSizing: 'border-box', appearance: 'none', cursor: 'pointer',
                      }}
                      onFocus={e => e.target.style.borderColor = '#0054B1'}
                      onBlur={e => e.target.style.borderColor = '#E5EAF0'}
                    >
                      <option value="" disabled>Select an option...</option>
                      {PROCESS_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      What would you like to discuss? <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={3} placeholder="Briefly describe your business goals or questions..."
                      style={{
                        width: '100%', padding: '12px 16px', border: '1.5px solid #E5EAF0',
                        borderRadius: '10px', fontSize: '15px', color: '#0A1628',
                        outline: 'none', transition: 'border-color 0.2s', background: '#fff',
                        boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit',
                      }}
                      onFocus={e => e.target.style.borderColor = '#0054B1'}
                      onBlur={e => e.target.style.borderColor = '#E5EAF0'}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02, boxShadow: '0 6px 24px rgba(0,84,177,0.3)' } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    style={{
                      background: '#0054B1', color: '#fff', fontWeight: 700,
                      fontSize: '16px', padding: '15px',
                      borderRadius: '12px', border: 'none',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      opacity: status === 'loading' ? 0.85 : 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      marginTop: '4px',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>
                          <Loader size={18} />
                        </motion.div>
                        Submitting...
                      </>
                    ) : 'Request a Discovery Call →'}
                  </motion.button>

                  <p style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', lineHeight: 1.6 }}>
                    We respond within one business day. Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
