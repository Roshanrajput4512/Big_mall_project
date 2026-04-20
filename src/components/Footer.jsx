import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { label: 'Leasing', href: '#cta' },
  { label: 'Events', href: '#events' },
  { label: 'Retail', href: '#retail' },
  { label: 'Attractions', href: '#attractions' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-white/[0.05]">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-gold/60 flex items-center justify-center">
                <span className="text-gold font-display text-sm font-bold">D</span>
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold/80 font-medium">
                The Dubai Mall
              </span>
            </div>
            <p className="text-xs text-ivory/30 font-light leading-relaxed max-w-xs">
              The world's most visited lifestyle destination.
              A development by Emaar Properties.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-ivory/40 font-medium mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ivory/30 hover:text-gold transition-colors duration-300 flex items-center gap-1 group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-ivory/40 font-medium mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-ivory/30 font-light">
              <p>Downtown Dubai, UAE</p>
              <p>leasing@thedubaimall.com</p>
              <p>+971 4 XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-ivory/20 font-light">
            © {new Date().getFullYear()} The Dubai Mall. All rights reserved. An Emaar Properties Development.
          </p>
          <p className="text-[11px] text-ivory/15 font-light">
            Sales Deck — Confidential
          </p>
        </div>
      </div>
    </footer>
  );
}
