import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyIncorvia from './components/WhyIncorvia';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyIncorvia />
    </div>
  );
}

export default App;
