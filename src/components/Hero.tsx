import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenCustomizer: () => void;
}

export default function Hero({ onOpenCustomizer }: HeroProps) {
  // Array of floating decoration coordinates and animations
  const floatingDecorations = [
    { icon: '🌸', size: 'text-3xl', x: '10%', y: '15%', delay: 0, duration: 6 },
    { icon: '🍓', size: 'text-2xl', x: '82%', y: '25%', delay: 1, duration: 7 },
    { icon: '🍰', size: 'text-3xl', x: '15%', y: '75%', delay: 2, duration: 8 },
    { icon: '🍬', size: 'text-xl', x: '85%', y: '68%', delay: 1.5, duration: 5.5 },
    { icon: '✨', size: 'text-2xl', x: '75%', y: '12%', delay: 0.5, duration: 6.5 },
    { icon: '🌹', size: 'text-3xl', x: '5%', y: '45%', delay: 2.5, duration: 9 },
    { icon: '🧁', size: 'text-2xl', x: '90%', y: '48%', delay: 3, duration: 7.5 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-cream pt-20"
      id="hero-section"
    >
      {/* Exquisite full-bleed background plate with subtle soft vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=1920"
          alt="Breathtaking Luxury Wedding Cake"
          className="w-full. h-full w-full object-cover scale-105 select-none opacity-20 md:opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream via-luxury-cream/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-cream via-luxury-cream/90 to-transparent md:hidden block" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-luxury-cream to-transparent" />
      </div>

      {/* Floating Animated Decorations */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {floatingDecorations.map((deco, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${deco.size} drop-shadow-[0_4px_12px_rgba(212,175,55,0.15)] filter saturate-[0.85] bg-luxury-white/65 p-2.5 rounded-full border border-luxury-gold/10`}
            style={{ left: deco.x, top: deco.y }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: deco.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: deco.delay,
            }}
          >
            {deco.icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-24">
        {/* Left column: Headings and CTAs */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          {/* Subtle animated tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-blush border border-luxury-gold/25 self-center lg:self-start mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-gold-hover">
              Boutique Cake Studio
            </span>
          </motion.div>

          {/* Breathtaking Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.1] text-luxury-charcoal tracking-tight"
          >
            Where Every Cake <br />
            <span className="relative">
              Becomes a
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-amber-600 to-luxury-gold italic font-medium">
                {' '}
                Masterpiece
              </span>
              <span className="absolute bottom-2 left-0 w-full h-1 bg-luxury-gold/15 -rotate-1 rounded-full" />
            </span>
          </motion.h1>

          {/* Sophisticated Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-luxury-mocha/80 max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed"
          >
            Luxury handcrafted cakes designed to make every celebration unforgettable. Freshly baked
            with premium ingredients and artistic perfection.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
          >
            <button
              onClick={onOpenCustomizer}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-cream text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-350 cursor-pointer"
            >
              Order Your Cake
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#collection"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-luxury-gold/40 hover:border-luxury-charcoal/30 bg-luxury-white/50 backdrop-blur-sm text-luxury-mocha text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-luxury-champagne/10 transition-all duration-350"
            >
              Explore Our Collection
              <Eye className="w-4 h-4 text-luxury-gold" />
            </a>
          </motion.div>

          {/* Key Quick Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 border-t border-luxury-champagne/60 pt-8 mt-12 text-left"
          >
            <div>
              <p className="font-serif text-2xl font-bold text-luxury-gold">100%</p>
              <p className="text-[10px] tracking-wider text-luxury-mocha/60 uppercase font-bold mt-1">
                Handcrafted Daily
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-luxury-gold">Premium</p>
              <p className="text-[10px] tracking-wider text-luxury-mocha/60 uppercase font-bold mt-1">
                Organic Ingredients
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-luxury-gold">Bespoke</p>
              <p className="text-[10px] tracking-wider text-luxury-mocha/60 uppercase font-bold mt-1">
                Artistic Designs
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right column: Display premium image in arch layout */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden bg-luxury-cream"
          >
            {/* Main high quality photography frame */}
            <img
              src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=800"
              alt="Artistic cake presentation"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant luxury visual background elements inside the arch */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/35 via-transparent to-transparent pointer-events-none" />

            {/* Subtle card text banner with elegant glassmorphism */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50 flex justify-between items-center shadow-md">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold">
                  Chef Signature
                </span>
                <h4 className="font-serif text-sm font-semibold text-luxury-charcoal mt-0.5">
                  Blush Rose Buttercream
                </h4>
              </div>
              <span className="font-serif text-xs font-semibold text-luxury-gold bg-luxury-blush px-3 py-1.5 rounded-full border border-luxury-gold/15">
                From $85
              </span>
            </div>
          </motion.div>

          {/* Floating glowing bubbles or floral blurs */}
          <div className="absolute -z-10 right-4 top-1/4 w-20 h-20 rounded-full bg-luxury-peach/40 blur-xl animate-pulse" />
          <div className="absolute -z-10 -left-6 -bottom-6 w-36 h-36 rounded-full bg-luxury-blush/60 filter blur-2xl" />
        </div>
      </div>
    </section>
  );
}
