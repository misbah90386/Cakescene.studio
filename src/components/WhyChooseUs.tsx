import { Flame, Sparkles, Palette, Gift, Zap, Truck, Shield, BadgePercent } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data';

const ICON_MAP = [
  Flame,
  Sparkles,
  Palette,
  Gift,
  Zap,
  Truck,
  Shield,
  BadgePercent
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-luxury-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative side accent blur circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-luxury-blush/40 filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-luxury-peach/30 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Our Quality Oath
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            Why Choose Cakescene.studio
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed max-w-lg mx-auto">
            We blend exquisite craftsmanship with the highest culinary standards, providing an unrivaled experience from blueprint sketch to delivery.
          </p>
        </div>

        {/* Dynamic Benefits Grid with staggered entrances */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="benefits-grid">
          {WHY_CHOOSE_US.map((benefit, idx) => {
            const Icon = ICON_MAP[idx % ICON_MAP.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-luxury-cream hover:bg-luxury-blush border border-luxury-champagne/40 hover:border-luxury-gold/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Animated Icon Frame */}
                <div className="w-14 h-14 rounded-2xl bg-luxury-white group-hover:bg-luxury-gold text-luxury-gold group-hover:text-luxury-cream border border-luxury-gold/15 group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-sm relative overflow-hidden">
                  <Icon className="w-6 h-6 z-10 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Text Content */}
                <h3 className="font-serif text-base font-semibold text-luxury-charcoal mt-5 group-hover:text-luxury-gold transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-luxury-mocha/70 mt-2.5">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
