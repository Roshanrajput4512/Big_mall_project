import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';
import MagneticButton from '../ui/MagneticButton';
import GlassCard from '../ui/GlassCard';
import { ArrowRight, Send, Building2, CalendarDays, Handshake } from 'lucide-react';

const ctaOptions = [
  {
    icon: Building2,
    title: 'Explore Leasing',
    description: 'Secure your space in the world\'s most visited retail destination.',
    action: 'leasing',
  },
  {
    icon: CalendarDays,
    title: 'Plan an Event',
    description: 'Host your next brand activation, launch, or experiential campaign.',
    action: 'event',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Explore sponsorship, media, and strategic partnership opportunities.',
    action: 'partner',
  },
];

export default function CTA() {
  const [selectedAction, setSelectedAction] = useState('leasing');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="cta" className="relative py-32 md:py-40 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-[#0d0d18] to-navy-deep" />

      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[180px]" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealText>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 font-medium">
              Let's Build Something Extraordinary
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-display text-section font-bold mt-4 mb-6">
              Ready to Join the World's{' '}
              <br className="hidden sm:block" />
              <span className="text-gold-gradient">Most Visited Destination?</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="luxury-divider mx-auto" />
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-ivory/50 max-w-xl mx-auto text-subtitle font-light">
              Whether you're a global brand, event organizer, or visionary partner —
              we'd love to hear from you.
            </p>
          </RevealText>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left: Options */}
          <div className="lg:col-span-2 space-y-4">
            {ctaOptions.map((option) => {
              const Icon = option.icon;
              const isActive = selectedAction === option.action;
              return (
                <RevealText key={option.action} delay={0.1}>
                  <motion.button
                    onClick={() => setSelectedAction(option.action)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-400 ${
                      isActive
                        ? 'border-gold/30 bg-gold/[0.06]'
                        : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive ? 'bg-gold/20' : 'bg-white/[0.05]'
                      }`}>
                        <Icon size={18} className={isActive ? 'text-gold' : 'text-ivory/40'} />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-gold' : 'text-ivory/70'
                        }`}>
                          {option.title}
                        </h4>
                        <p className="text-xs text-ivory/30 mt-1 font-light">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                </RevealText>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <RevealText delay={0.3} className="lg:col-span-3">
            <GlassCard className="p-8 md:p-10" hover={false}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-ivory mb-2">
                    Thank You
                  </h3>
                  <p className="text-ivory/40 font-light">
                    Our team will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-ivory/40 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-ivory/40 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-ivory/40 mb-2 font-medium">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-ivory/40 mb-2 font-medium">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                      placeholder="I'm interested in..."
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton variant="primary" type="submit" className="w-full sm:w-auto">
                      Send Inquiry
                      <ArrowRight size={14} />
                    </MagneticButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
