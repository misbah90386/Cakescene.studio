import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Heart } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-luxury-blush/25 border-t border-luxury-champagne/40 relative overflow-hidden" id="faq">
      {/* Decorative circle */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-luxury-peach/15 filter blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Inquiry Helpdesk
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed max-w-lg mx-auto">
            Got queries? We have compiled professional answers regarding ordering terms, secure deposits, ingredients, and courier delivery.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordions-stack">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-luxury-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-luxury-gold shadow-md' 
                    : 'border-luxury-champagne/45 hover:border-luxury-gold/50 shadow-xs'
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4.5 h-4.5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-luxury-gold' : 'text-luxury-mocha/65'}`} />
                    <span className="font-serif text-sm md:text-base font-bold text-luxury-charcoal">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full bg-luxury-cream border border-luxury-champagne flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 border-luxury-gold/55 text-luxury-gold' : 'text-luxury-mocha/80'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion body (Animated height with Framer Motion) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 border-t border-luxury-champagne/20">
                        <p className="text-xs sm:text-sm leading-relaxed text-luxury-mocha/80">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 text-center bg-luxury-white rounded-3xl p-6 border border-luxury-champagne flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-left">
            <span className="text-2xl shrink-0">🍰</span>
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-luxury-charcoal">Still have custom requirements?</h4>
              <p className="text-[10.5px] text-luxury-mocha/65 mt-0.5">Contact our lead chef directly for a chat.</p>
            </div>
          </div>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center text-[10px] font-bold tracking-widest text-emerald-600 border border-emerald-500 hover:bg-emerald-500 hover:text-white px-5 py-3 rounded-full uppercase transition-all duration-300"
          >
            WhatsApp Live Chat
          </a>
        </div>
      </div>
    </section>
  );
}
