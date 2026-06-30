import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SPECIALTIES } from '../data';

interface SpecialtiesProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export default function Specialties({ onSelectSpecialty }: SpecialtiesProps) {
  // Stagger animation container config
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.1, duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-luxury-blush/35 relative overflow-hidden" id="specialties">
      {/* Decorative floral background swirl or ring */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-luxury-peach/20 filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-luxury-champagne/30 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Creative Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            Our Sweet Specialties
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Every creation is a fusion of sculptural aesthetics and custom, gourmet baking, ensuring
            memorable, delicious milestones.
          </p>
        </div>

        {/* Dynamic Card Grid with Staggered Framer Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          id="specialties-grid"
        >
          {SPECIALTIES.map((spec) => (
            <motion.div
              key={spec.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-luxury-white rounded-2xl overflow-hidden border border-luxury-champagne/35 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(71,63,58,0.05)] transition-all duration-350 flex flex-col h-full cursor-pointer"
              onClick={() => onSelectSpecialty(spec.title)}
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                {/* Soft gradient bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-base font-semibold text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-250">
                  {spec.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-luxury-mocha/70 mt-2 flex-grow">
                  {spec.description}
                </p>

                {/* Card CTA Link */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-luxury-champagne/25 text-[10px] uppercase font-bold tracking-widest text-luxury-gold group-hover:text-luxury-charcoal transition-colors duration-250">
                  <span>Inquire Specs</span>
                  <div className="w-6 h-6 rounded-full bg-luxury-blush group-hover:bg-luxury-gold group-hover:text-luxury-cream transition-all duration-250 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
