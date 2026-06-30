import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { Cake, Paintbrush, ShieldCheck, Truck } from 'lucide-react';

const STEP_ICONS = [
  Cake,
  Paintbrush,
  ShieldCheck,
  Truck
];

export default function Process() {
  return (
    <section className="py-24 bg-luxury-blush/25 relative overflow-hidden border-t border-luxury-champagne/45" id="process">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-luxury-peach/15 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Concierge Workflow
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            The Bespoke Journey
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed max-w-lg mx-auto">
            Our frictionless four-step ordering process guarantees custom design accuracy, hygienic preparation, and absolute timing.
          </p>
        </div>

        {/* Process Flow Rows with Connect Lines */}
        <div className="relative" id="process-steps-container">
          
          {/* Connecting Line (Only desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-luxury-champagne/30 via-luxury-gold/25 to-luxury-champagne/30 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step bubble and floating icon */}
                  <div className="relative">
                    {/* Circle badge with step count */}
                    <div className="w-20 h-20 rounded-full bg-luxury-white border border-luxury-champagne group-hover:border-luxury-gold shadow-md group-hover:shadow-lg flex items-center justify-center transition-all duration-350 relative z-10">
                      <Icon className="w-7 h-7 text-luxury-gold group-hover:scale-110 transition-transform duration-350" />
                    </div>

                    {/* Step index overlay */}
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-luxury-gold text-luxury-cream text-[10px] font-extrabold flex items-center justify-center shadow-xs select-none border border-luxury-white">
                      {step.step}
                    </span>
                    
                    {/* Outer decorative ring */}
                    <div className="absolute -inset-1.5 rounded-full border border-dashed border-luxury-gold/15 group-hover:border-luxury-gold/40 animate-spin-slow group-hover:duration-[8000ms] transition-all" />
                  </div>

                  {/* Step Description content */}
                  <h3 className="font-serif text-base font-bold text-luxury-charcoal mt-7 group-hover:text-luxury-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-luxury-mocha/70 mt-3 max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
