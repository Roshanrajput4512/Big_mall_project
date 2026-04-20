import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';
import GlassCard from '../ui/GlassCard';
import { Coffee, Wine, UtensilsCrossed, Flame, Leaf, Star } from 'lucide-react';

const diningCategories = [
  {
    icon: Star,
    title: 'Fine Dining',
    description: 'Michelin-starred restaurants and world-renowned chefs',
    color: 'from-amber-500/20 to-gold/20',
  },
  {
    icon: Coffee,
    title: 'Artisan Cafés',
    description: 'Specialty coffee houses and patisseries',
    color: 'from-amber-700/20 to-amber-500/20',
  },
  {
    icon: Wine,
    title: 'Rooftop Lounges',
    description: 'Panoramic views overlooking The Dubai Fountain',
    color: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Flame,
    title: 'Live Cooking',
    description: 'Interactive teppanyaki, grills & open kitchens',
    color: 'from-red-500/10 to-orange-500/10',
  },
  {
    icon: UtensilsCrossed,
    title: 'Global Cuisines',
    description: 'Japanese, Italian, Lebanese, Indian & beyond',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Leaf,
    title: 'Healthy & Organic',
    description: 'Farm-to-table, vegan, and wellness-focused dining',
    color: 'from-green-500/10 to-emerald-500/10',
  },
];

export default function DiningLifestyle() {
  return (
    <section id="dining" className="relative py-32 md:py-40 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-[#1a1520] to-navy-deep" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <RevealText>
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
                Culinary Excellence
              </span>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-display text-section font-bold mt-4 mb-6">
                A World of Flavors.{' '}
                <span className="text-gold-gradient">Elevated.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <div className="luxury-divider" />
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-ivory/50 text-subtitle font-light leading-relaxed">
                Over 200 culinary destinations — from Michelin-starred excellence
                to vibrant street food concepts. Every palate, every occasion,
                every craving — answered.
              </p>
            </RevealText>
          </div>

          {/* Hero Image */}
          <RevealText delay={0.2} direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] image-shine">
              <img
                src="/images/dining.png"
                alt="Fine Dining at Dubai Mall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold/60 font-medium">
                  200+ Restaurants & Cafés
                </p>
              </div>
            </div>
          </RevealText>
        </div>

        {/* Dining Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diningCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <RevealText key={i} delay={0.1 * i}>
                <GlassCard className="p-7 group cursor-default h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-ivory/90 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-ivory/40 font-light leading-relaxed">
                    {cat.description}
                  </p>
                </GlassCard>
              </RevealText>
            );
          })}
        </div>

        {/* Pull Quote */}
        <RevealText delay={0.4} className="mt-20 text-center">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-display text-ivory/30 italic leading-relaxed">
              "From rooftop terraces overlooking The Dubai Fountain to intimate
              tasting rooms — dining here is an event in itself."
            </p>
          </blockquote>
        </RevealText>
      </div>
    </section>
  );
}
