import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyIncorvia from './components/WhyIncorvia'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Navbar />
      <Hero />
      <WhyIncorvia />
    </div>
  )
}

export default App
