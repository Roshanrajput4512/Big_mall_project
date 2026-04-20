import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';
import { Sparkles, Mic2, ShoppingBag, Camera, CalendarDays, Megaphone, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    icon: ShoppingBag,
    title: 'Brand Pop-ups & Activations',
    description: 'High-traffic concourses and exhibition courts designed for maximum brand exposure.',
  },
  {
    icon: Sparkles,
    title: 'Product Launches',
    description: 'Captivate 111 million visitors with an unforgettable debut in the world\'s most iconic mall.',
  },
  {
    icon: Camera,
    title: 'Fashion Shows & Runway',
    description: 'Fashion Avenue provides the ultimate stage for haute couture and ready-to-wear showcases.',
  },
  {
    icon: Mic2,
    title: 'Concerts & Live Shows',
    description: 'Multi-level atrium spaces with world-class acoustics and production capabilities.',
  },
  {
    icon: CalendarDays,
    title: 'Seasonal Campaigns',
    description: 'Dubai Shopping Festival, DSS, Eid, and festive season — premium calendar activations.',
  },
  {
    icon: Megaphone,
    title: 'Experiential Marketing',
    description: 'Create immersive, Instagram-worthy experiences that drive organic reach and engagement.',
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-32 md:py-40 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-[#12121f] to-navy-deep" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/[0.02] rounded-full blur-[130px]" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-purple-500/[0.02] rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <RevealText>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
              Limitless Possibilities
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-display text-section font-bold mt-4 mb-6">
              Your Stage.{' '}
              <span className="text-gold-gradient">The World's Audience.</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="luxury-divider mx-auto" />
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-ivory/50 max-w-2xl mx-auto text-subtitle font-light leading-relaxed">
              From global product launches to immersive brand activations,
              from concert spectacles to fashion runway events — The Dubai Mall
              offers unparalleled spaces to captivate 111 million annual visitors.
            </p>
          </RevealText>
        </div>

        {/* Opportunities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opp, i) => {
            const Icon = opp.icon;
            return (
              <RevealText key={i} delay={0.1 * i}>
                <GlassCard className="p-7 group cursor-default h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-500">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold text-ivory/90 mb-2">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-ivory/40 font-light leading-relaxed">
                        {opp.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </RevealText>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <RevealText delay={0.4}>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10" />
            <div className="glass p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-ivory mb-3">
                  Ready to Create an Unforgettable Experience?
                </h3>
                <p className="text-ivory/40 font-light max-w-lg">
                  Our dedicated events team will craft a tailored proposal for your brand,
                  ensuring maximum impact and ROI.
                </p>
              </div>
              <MagneticButton
                variant="primary"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-shrink-0"
              >
                Plan Your Event
                <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
