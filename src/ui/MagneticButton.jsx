import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', variant = 'primary', onClick, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const baseStyles = variant === 'primary'
    ? 'bg-gold text-navy-deep hover:bg-gold-light hover:shadow-[0_10px_40px_rgba(201,169,110,0.3)]'
    : variant === 'outline'
    ? 'border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold'
    : 'bg-white/5 text-ivory border border-white/10 hover:bg-white/10';

  return (
    <motion.button
      ref={ref}
      className={`
        relative inline-flex items-center justify-center gap-2
        px-8 py-4 font-body font-semibold text-sm tracking-[0.15em] uppercase
        rounded-sm overflow-hidden transition-colors duration-300
        ${baseStyles} ${className}
      `}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      {...props}
    >
      {/* Shimmer overlay */}
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 gold-shimmer opacity-20" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
