import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        padding: scrolled ? '14px 60px' : '20px 60px',
        boxSizing: 'border-box',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'padding 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
      }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{
            color: '#0a1d4d',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '28px',
            letterSpacing: '0.15em',
            lineHeight: 1,
          }}>INCORVIA</span>
          <span style={{
            color: '#3b82f6',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '10px',
            letterSpacing: '0.45em',
            marginTop: '4px',
            paddingLeft: '2px',
          }}>DUBAI</span>
        </div>

        {/* Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          color: '#0a1d4d',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '15px',
        }}>
          <NavItem label="Services" hasDropdown />
          <NavItem label="About Us" />
          <NavItem label="Industries" hasDropdown />
          <NavItem label="Resources" hasDropdown />
          <NavItem label="Contact Us" />
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            backgroundColor: '#0a1d4d',
            color: '#fff',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
          Book a Consultation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  )
}

const NavItem = ({ label, hasDropdown }) => (
  <a href="#" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}>
    {label}
    {hasDropdown && (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.4 }}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    )}
  </a>
)

export default Navbar
