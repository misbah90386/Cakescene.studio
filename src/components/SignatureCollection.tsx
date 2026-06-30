import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { SIGNATURE_COLLECTION } from '../data';
import { SignatureCake } from '../types';

interface SignatureCollectionProps {
  onOrderCake: (cake: SignatureCake) => void;
}

export default function SignatureCollection({ onOrderCake }: SignatureCollectionProps) {
  return (
    <section className="py-24 bg-luxury-cream border-t border-luxury-champagne/40" id="collection">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
              Masterpiece Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal leading-tight">
              Our Signature Collection
            </h2>
            <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed">
              Carefully conceptualized and meticulously baked, these classic designs stand as the crown jewels of Cakescene.studio. Select one to customize further or order instantly.
            </p>
          </div>
          <a
            href="#designer"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-luxury-gold hover:text-luxury-charcoal transition-colors duration-250 self-start md:self-end border-b-2 border-luxury-gold pb-1.5"
          >
            Design Custom Cake Instead
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="collection-grid">
          {SIGNATURE_COLLECTION.map((cake, idx) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative flex flex-col h-full bg-luxury-white rounded-2xl overflow-hidden border border-luxury-champagne/35 shadow-[0_12px_32px_rgba(47,31,18,0.02)] hover:shadow-[0_20px_45px_rgba(47,31,18,0.06)] hover:-translate-y-1 transition-all duration-350"
            >
              {/* Product Image Panel */}
              <div className="relative aspect-square overflow-hidden bg-luxury-blush">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating premium starting price badge */}
                <div className="absolute top-4 right-4 bg-luxury-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-luxury-gold/20 shadow-sm">
                  <span className="font-serif text-xs font-bold text-luxury-gold">
                    From ${cake.price}
                  </span>
                </div>
              </div>

              {/* Product details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-base font-semibold text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-250">
                  {cake.name}
                </h3>
                <p className="text-[11px] leading-relaxed text-luxury-mocha/70 mt-2.5 flex-grow">
                  {cake.description}
                </p>

                {/* Pricing / Booking button */}
                <button
                  onClick={() => onOrderCake(cake)}
                  className="w-full mt-6 py-3 rounded-full bg-luxury-blush hover:bg-luxury-gold hover:text-luxury-cream border border-luxury-gold/15 hover:border-transparent text-luxury-gold text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
