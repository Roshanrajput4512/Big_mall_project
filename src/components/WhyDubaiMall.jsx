import RevealText from '../ui/RevealText';
import AnimatedCounter from '../ui/AnimatedCounter';
import GlassCard from '../ui/GlassCard';
import { MapPin, Users, Store, Utensils, TrendingUp } from 'lucide-react';

const stats = [
  { icon: MapPin, value: 12.1, suffix: 'M', label: 'Sq Ft Total Area', decimals: 1, description: 'The world\'s largest shopping destination by total area' },
  { icon: Users, value: 111, suffix: 'M+', label: 'Annual Visitors', decimals: 0, description: 'More visitors than the Eiffel Tower, Times Square & Niagara Falls combined' },
  { icon: Store, value: 1200, suffix: '+', label: 'Retail Destinations', decimals: 0, description: 'From global luxury houses to innovative concept stores' },
  { icon: Utensils, value: 200, suffix: '+', label: 'Dining Experiences', decimals: 0, description: 'Michelin stars to street food — every palate, every occasion' },
  { icon: TrendingUp, value: 1.5, suffix: 'B', label: 'AED Expansion', decimals: 1, description: '240 new luxury stores & dining venues underway' },
];

export default function WhyDubaiMall() {
  return (
    <section id="why" className="relative py-32 md:py-40 bg-navy-deep overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.015] rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <RevealText>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
              Unmatched Scale & Reach
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-display text-section font-bold mt-4 mb-6">
              More Than a Mall.{' '}
              <span className="text-gold-gradient">A Global Destination.</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="luxury-divider mx-auto" />
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-ivory/50 max-w-2xl mx-auto text-subtitle font-light leading-relaxed">
              Strategically positioned at the foot of Burj Khalifa in Downtown Dubai,
              The Dubai Mall commands an unrivaled position in the world's most
              dynamic retail landscape.
            </p>
          </RevealText>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <RevealText key={i} delay={0.1 * i}>
                <GlassCard className={`p-8 ${i === stats.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-stat text-3xl md:text-4xl mb-1">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                          prefix={stat.label === 'AED Expansion' ? 'AED ' : ''}
                        />
                      </div>
                      <p className="text-xs tracking-[0.15em] uppercase text-ivory/50 font-medium mb-2">
                        {stat.label}
                      </p>
                      <p className="text-sm text-ivory/30 font-light leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </RevealText>
            );
          })}
        </div>

        {/* Location Highlight */}
        <RevealText delay={0.3} className="mt-20">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="glass p-8 md:p-12 text-center">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-ivory/40">
                {['Downtown Dubai', 'Next to Burj Khalifa', 'Dubai Fountain', 'Metro Connected', 'Valet & 14,000 Parking Bays'].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
