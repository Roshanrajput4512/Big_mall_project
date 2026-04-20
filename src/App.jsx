import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyDubaiMall from './components/WhyDubaiMall';
import Retail from './components/Retail';
import Luxury from './components/Luxury';
import DiningLifestyle from './components/DiningLifestyle';
import Attractions from './components/Attractions';
import Events from './components/Events';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const bar = document.getElementById('scroll-progress');
      if (bar) {
        bar.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-navy-deep min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyDubaiMall />
        <Retail />
        <Luxury />
        <DiningLifestyle />
        <Attractions />
        <Events />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
