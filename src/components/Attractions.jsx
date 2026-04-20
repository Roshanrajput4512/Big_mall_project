import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../ui/RevealText';
import GlassCard from '../ui/GlassCard';
import { Fish, Gamepad2, Snowflake, ArrowRight, X } from 'lucide-react';

const attractions = [
  {
    id: 'aquarium',
    icon: Fish,
    title: 'Dubai Aquarium & Underwater Zoo',
    stat: '10M Litres',
    statLabel: 'Tank Volume',
    tagline: '33,000 marine animals. One breathtaking encounter.',
    description: 'One of the world\'s largest indoor aquariums featuring a 10-million-litre tank, a 48-meter walkthrough tunnel, shark dives, and over 33,000 marine animals including the world\'s largest collection of Sand Tiger sharks.',
    image: '/images/aquarium.png',
    features: ['48m Walkthrough Tunnel', 'Shark Diving', 'Glass-Bottom Boats', 'Underwater Zoo'],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-blue-600/20',
  },
  {
    id: 'playdxb',
    icon: Gamepad2,
    title: 'Play DXB',
    stat: '30+',
    statLabel: 'VR Experiences',
    tagline: 'The future of entertainment is here.',
    description: 'A major indoor virtual reality and augmented reality attraction offering over 30 immersive experiences, from the high-adrenaline "Burj Drop" to interactive games for all ages across multiple themed zones.',
    image: null,
    features: ['Burj Drop VR', 'AR Experiences', 'Multi-Player Zones', 'All Ages Welcome'],
    gradient: 'from-purple-500/20 via-violet-500/10 to-purple-600/20',
  },
  {
    id: 'icerink',
    icon: Snowflake,
    title: 'Dubai Ice Rink',
    stat: 'Olympic',
    statLabel: 'Sized Rink',
    tagline: 'Year-round. Unforgettable.',
    description: 'An Olympic-sized ice rink open year-round for public skating, hockey training, figure skating academy, disco nights, and private events. A beloved destination for families, celebrations, and corporate events.',
    image: null,
    features: ['Olympic Size', 'Skating Academy', 'Disco Nights', 'Private Events'],
    gradient: 'from-sky-500/20 via-blue-400/10 to-sky-600/20',
  },
];

export default function Attractions() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="attractions" className="relative py-32 md:py-40 bg-navy-deep overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <RevealText>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
              World-Class Entertainment
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-display text-section font-bold mt-4 mb-6">
              Beyond Shopping. Beyond Dining.{' '}
              <span className="text-gold-gradient">Beyond Imagination.</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="luxury-divider mx-auto" />
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-ivory/50 max-w-2xl mx-auto text-subtitle font-light leading-relaxed">
              The Dubai Mall is a universe of experiences — where a world-class
              aquarium meets cutting-edge virtual reality, and an Olympic ice rink
              sits steps from the world's tallest building.
            </p>
          </RevealText>
        </div>

        {/* Attraction Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {attractions.map((attraction, i) => {
            const Icon = attraction.icon;
            const isExpanded = expandedId === attraction.id;

            return (
              <RevealText key={attraction.id} delay={0.15 * i}>
                <motion.div
                  layout
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                    isExpanded ? 'md:col-span-3' : ''
                  }`}
                  onClick={() => setExpandedId(isExpanded ? null : attraction.id)}
                >
                  <GlassCard className="p-0 h-full" hover={false}>
                    {/* Image/Gradient Background */}
                    <div className={`relative h-48 bg-gradient-to-br ${attraction.gradient} overflow-hidden`}>
                      {attraction.image && (
                        <>
                          <img
                            src={attraction.image}
                            alt={attraction.title}
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                        </>
                      )}
                      {!attraction.image && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={64} className="text-white/10" />
                        </div>
                      )}

                      {/* Stat overlay */}
                      <div className="absolute bottom-4 left-6">
                        <span className="text-3xl font-display font-bold text-ivory">{attraction.stat}</span>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-ivory/50">{attraction.statLabel}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Icon size={18} className="text-gold" />
                          </div>
                          <h3 className="text-base font-display font-semibold text-ivory/90 leading-tight">
                            {attraction.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-ivory/40 font-light mb-4">
                        {attraction.tagline}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {attraction.features.map((feat, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase bg-white/[0.04] border border-white/[0.06] text-ivory/40 rounded"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      {/* Expandable description */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-white/[0.06]">
                              <p className="text-sm text-ivory/40 font-light leading-relaxed">
                                {attraction.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand indicator */}
                      <div className="flex items-center gap-2 mt-4 text-gold/50 group-hover:text-gold transition-colors">
                        <span className="text-[10px] tracking-[0.15em] uppercase font-medium">
                          {isExpanded ? 'Show Less' : 'Learn More'}
                        </span>
                        <ArrowRight size={12} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </RevealText>
            );
          })}
        </div>
      </div>
    </section>
  );
}
