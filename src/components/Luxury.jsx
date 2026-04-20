import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../ui/RevealText';

const luxuryBrands = ['Louis Vuitton', 'Chanel', 'Dior', 'Hermès', 'Cartier', 'Tiffany & Co.', 'Bulgari', 'Prada'];

export default function Luxury() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 0.4]);

  return (
    <section id="luxury" ref={sectionRef} className="relative min-h-screen bg-navy-deep overflow-hidden">
      {/* Full-bleed Background */}
      <div className="absolute inset-0">
        <motion.div style={{ scale: imageScale }} className="absolute inset-0">
          <img
            src="/images/luxury-retail.png"
            alt="Fashion Avenue"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-navy-deep"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container py-32">
          <div className="max-w-2xl">
            <RevealText>
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
                Fashion Avenue
              </span>
            </RevealText>

            <RevealText delay={0.15}>
              <h2 className="font-display text-section font-bold mt-4 mb-6">
                Where Luxury{' '}
                <span className="text-gold-gradient italic">Lives.</span>
              </h2>
            </RevealText>

            <RevealText delay={0.25}>
              <div className="luxury-divider" />
            </RevealText>

            <RevealText delay={0.35}>
              <p className="text-ivory/50 text-subtitle font-light leading-relaxed mb-8 max-w-lg">
                Fashion Avenue — the epicenter of high fashion in the Middle East.
                A curated destination spanning 100,000 sq ft of pure opulence,
                housing the world's most prestigious maisons.
              </p>
            </RevealText>

            <RevealText delay={0.45}>
              <p className="text-ivory/30 text-sm font-light leading-relaxed italic mb-12">
                "An experience designed for those who demand nothing less
                than extraordinary."
              </p>
            </RevealText>

            {/* Brand List with stagger */}
            <RevealText delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {luxuryBrands.map((brand, i) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 border border-gold/20 text-[11px] tracking-[0.15em] uppercase text-gold/60 hover:bg-gold/10 hover:text-gold hover:border-gold/40 transition-all duration-300 cursor-default"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </RevealText>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block" />
    </section>
  );
}
