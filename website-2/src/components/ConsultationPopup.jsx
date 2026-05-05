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

  const openWhatsApp = () => {
    const text = `Hello Incorvia, I'd like to book a discovery call.%0A%0A*Name:* ${form.name}%0A*Process:* ${form.process}%0A*Message:* ${form.message}`;
    const phone = '9140741237'; // Replace with real WhatsApp number
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop and Flex Container */}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              boxSizing: 'border-box',
            }}
          >

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
              style={{
                width: '100%',
                maxWidth: '560px',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: '#fff',
                borderRadius: '24px',
                boxShadow: '0 32px 80px rgba(0,84,177,0.18)',
                position: 'relative',
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <button
                        onClick={openWhatsApp}
                        style={{
                          background: '#25D366', color: '#fff', fontWeight: 700,
                          fontSize: '15px', padding: '14px 28px',
                          borderRadius: '12px', border: 'none', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.009 1.355 4.636 1.356 5.403 0 9.801-4.398 9.804-9.802.002-5.402-4.396-9.8-9.8-9.801-5.405 0-9.803 4.398-9.805 9.801 0 1.93.546 3.51 1.458 5.035l-.991 3.62 3.702-.971zm11.367-7.399c-.312-.156-1.848-.911-2.138-1.015-.291-.104-.504-.156-.716.156-.213.312-.821 1.036-1.005 1.245-.183.209-.367.234-.679.078-.312-.156-1.317-.485-2.51-1.548-.928-.827-1.554-1.849-1.736-2.161-.183-.312-.019-.481.137-.636.14-.139.312-.364.469-.546.156-.182.209-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.716-1.724-.981-2.361-.258-.62-.522-.536-.716-.546l-.612-.013c-.213 0-.559.081-.851.39-.292.312-1.114 1.091-1.114 2.66 0 1.569 1.14 3.085 1.3 3.302.16.216 2.243 3.425 5.433 4.8.759.328 1.351.522 1.812.668.761.241 1.453.207 2.001.126.61-.09 1.848-.755 2.11-1.482.261-.727.261-1.351.182-1.482-.078-.13-.291-.208-.603-.364z" /></svg>
                        Send via WhatsApp
                      </button>
                      <button
                        onClick={handleClose}
                        style={{
                          background: 'transparent', color: '#6B7280', fontWeight: 600,
                          fontSize: '14px', padding: '12px 28px',
                          borderRadius: '10px', border: '1.5px solid #E5EAF0', cursor: 'pointer',
                        }}
                      >
                        Close Window
                      </button>
                    </div>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
