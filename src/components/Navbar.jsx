import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { id: 'why', label: 'Why Dubai Mall' },
  { id: 'retail', label: 'Retail' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'events', label: 'Events' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[60]"
        style={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? undefined : 0 }}
        id="scroll-progress"
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 glass-strong shadow-2xl shadow-black/20'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border border-gold/60 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
              <span className="text-gold font-display text-sm font-bold">D</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs tracking-[0.3em] uppercase text-gold/80 font-body font-medium">
                The Dubai Mall
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-300 ${
                  activeSection === id
                    ? 'text-gold'
                    : 'text-ivory/50 hover:text-ivory'
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-gold"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('cta')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold text-xs tracking-[0.12em] uppercase font-medium hover:bg-gold/20 transition-all duration-300 rounded-sm"
            >
              <span>Invest Now</span>
              <ArrowRight size={12} />
            </button>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden text-ivory/70 hover:text-gold transition-colors p-2"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-deep/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-6 right-6 text-ivory/70 hover:text-gold transition-colors p-2"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navItems.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  onClick={() => scrollTo(id)}
                  className="text-2xl font-display text-ivory/70 hover:text-gold transition-colors duration-300 tracking-wider"
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                onClick={() => scrollTo('cta')}
                className="mt-4 px-8 py-3 bg-gold text-navy-deep font-body font-semibold text-sm tracking-[0.15em] uppercase"
              >
                Invest Now
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
