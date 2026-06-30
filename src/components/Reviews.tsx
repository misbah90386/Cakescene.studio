import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Reviews() {
  return (
    <section className="py-24 bg-luxury-cream border-t border-luxury-champagne/40 relative overflow-hidden" id="reviews">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-luxury-blush/20 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Acclaimed Artistry
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            Loved by Celebrants
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed max-w-lg mx-auto">
            Read inspiring stories from our clients who elevated their wedding ceremonies and private galas with custom Cakescene.studio pieces.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-luxury-white rounded-3xl p-8 border border-luxury-champagne/40 hover:border-luxury-gold/30 shadow-[0_12px_36px_rgba(47,31,18,0.02)] hover:shadow-[0_20px_50px_rgba(47,31,18,0.06)] hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between relative group"
            >
              {/* Floating luxury double quote mark */}
              <div className="absolute top-6 right-8 text-luxury-blush group-hover:text-luxury-peach/50 transition-colors duration-300">
                <Quote className="w-10 h-10 stroke-[1.5]" />
              </div>

              {/* Card Core Content */}
              <div>
                {/* 5 Star rating */}
                <div className="flex gap-1 text-luxury-gold mb-6">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold stroke-transparent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-luxury-mocha/90 text-[13px] sm:text-sm leading-relaxed italic relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 border-t border-luxury-champagne/40 pt-6 mt-8">
                {/* Custom artistic avatar placeholder (Initials) */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-luxury-champagne to-luxury-blush border border-luxury-gold/15 flex items-center justify-center font-serif text-xs font-bold text-luxury-mocha shrink-0">
                  {rev.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-luxury-charcoal">
                    {rev.author}
                  </h4>
                  {rev.role && (
                    <p className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold mt-0.5">
                      {rev.role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
