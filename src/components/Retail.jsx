import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../ui/RevealText';
import GlassCard from '../ui/GlassCard';

const brands = [
  'Louis Vuitton', 'Chanel', 'Gucci', 'Apple', 'Cartier',
  'Tiffany & Co.', 'Dior', 'Hermès', 'Prada', 'Burberry',
  'Rolex', 'Bulgari', 'Versace', 'Fendi', 'Valentino',
  'Galeries Lafayette', 'Bloomingdale\'s', 'Zara', 'H&M', 'Nike',
];

const highlights = [
  { number: '240', label: 'New Luxury Stores', detail: 'Currently under expansion' },
  { number: '4', label: 'Shopping Levels', detail: 'Each with distinct character' },
  { number: '65', label: 'Exclusive Brands', detail: 'Recently opened section' },
];

export default function Retail() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section id="retail" ref={containerRef} className="relative py-32 md:py-40 bg-navy overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <RevealText>
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
                World-Class Retail
              </span>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-display text-section font-bold mt-4 mb-6">
                The World's Most Coveted Brands.{' '}
                <span className="text-gold-gradient">Under One Roof.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <div className="luxury-divider" />
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-ivory/50 text-subtitle font-light leading-relaxed">
                From Galeries Lafayette to Bloomingdale's, from Apple to Cartier —
                over 1,200 brands call The Dubai Mall home. With 240 new luxury
                stores arriving, the opportunity has never been greater.
              </p>
            </RevealText>
          </div>

          {/* Highlights */}
          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <RevealText key={i} delay={0.2 + i * 0.1} direction="left">
                <GlassCard className="p-6 flex items-center gap-6" hover={false}>
                  <span className="text-3xl md:text-4xl font-display font-bold text-gold-gradient min-w-[80px]">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory/80 tracking-wide">{item.label}</h4>
                    <p className="text-xs text-ivory/40 mt-0.5">{item.detail}</p>
                  </div>
                </GlassCard>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Scrolling Brand Ticker */}
        <RevealText delay={0.2}>
          <div className="relative overflow-hidden py-8">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy to-transparent z-10" />

            <motion.div style={{ x }} className="flex gap-10 whitespace-nowrap">
              {[...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="text-lg md:text-xl font-display text-ivory/15 hover:text-gold/40 transition-colors duration-500 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </RevealText>

        {/* Retail Image */}
        <RevealText delay={0.3} className="mt-16">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] image-shine">
            <img
              src="/images/luxury-retail.png"
              alt="Luxury Retail at Dubai Mall"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[11px] tracking-[0.25em] uppercase text-gold/70 font-medium">
                Fashion Avenue — AED 1.5 Billion Expansion
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold text-ivory mt-2">
                The Future of Luxury Retail
              </p>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
