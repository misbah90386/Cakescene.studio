import { useState } from 'react';
import { ChefHat, Award, Heart, ShieldCheck, Sparkles, Check, Coffee, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'flavors' | 'ingredients'>('philosophy');

  const highlights = [
    { title: 'Handcrafted Daily', icon: Heart, desc: 'Bespoke designs built fresh every morning.' },
    { title: 'Premium Ingredients', icon: Sparkles, desc: 'Finest organic chocolate, berries, and vanilla.' },
    { title: 'Customized Designs', icon: Award, desc: 'Sculpted to manifest your exact vision.' },
    { title: 'Artistic Decorating', icon: ChefHat, desc: 'Award-winning pastry chefs and decorators.' },
    { title: 'Freshly Baked', icon: Coffee, desc: 'Straight from oven to your event venue.' },
    { title: 'Hygienic Preparation', icon: ShieldCheck, desc: 'Surgical-grade sanitation and clean room studio.' },
    { title: 'Customer-Focused', icon: Star, desc: 'Attentive, concierge guidance through every detail.' }
  ];

  const spongeFlavors = [
    { name: 'Chantilly Madagascar Vanilla', desc: 'Light, fragrant chiffon infused with organic Bourbon vanilla bean caviar.' },
    { name: 'Belgian Triple Chocolate', desc: 'Moist devil’s food sponge layered with premium dark, milk, and white Callebaut chocolate ganache.' },
    { name: 'Pistachio Persian Rose', desc: 'Earthy Sicilian pistachio sponge paired with hints of rosewater and raspberry gelée.' },
    { name: 'Champagne & Wild Raspberry', desc: 'Rosé champagne-soaked cake with layers of fresh whole wild raspberries and buttercream.' },
    { name: 'Rich Red Velvet Crema', desc: 'Soft velvety buttermilk cocoa sponge paired with thick organic cream cheese mousse.' },
    { name: 'Espresso Salted Caramel', desc: 'Espresso-drenched layers with liquid house-made salted butter caramel and praline crunch.' }
  ];

  return (
    <section className="py-24 bg-luxury-cream border-t border-luxury-champagne/40" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Artistic Image Frame & Grid */}
          <div className="lg:col-span-5 relative" id="about-images">
            <div className="relative z-10 rounded-[32px] overflow-hidden border border-luxury-champagne shadow-xl aspect-[3/4] max-w-sm mx-auto">
              <img
                src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80&w=800"
                alt="Chef decorating luxury cake"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-luxury-cream bg-luxury-charcoal/60 backdrop-blur-sm p-5 rounded-2xl border border-luxury-white/10">
                <p className="font-serif italic text-lg text-luxury-gold">"We don't just bake cakes; we choreograph memories with sugar, flour, and absolute devotion."</p>
                <p className="text-[10px] tracking-widest font-bold uppercase text-luxury-cream/70 mt-3">— Chef Celine Chen, Founder</p>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-[40px] border border-luxury-gold/20 -rotate-6 -z-10" />
            <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full bg-luxury-blush/80 filter blur-xl -z-10" />
          </div>

          {/* Right: Rich Stories & Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col" id="about-content">
            <span className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold uppercase mb-3">Our Legacy & Passion</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal leading-tight">
              Transforming Your Sweet Imaginings into Edible Sculptures
            </h2>
            <p className="text-luxury-mocha/80 text-sm md:text-base mt-6 leading-relaxed">
              Founded in 2021, Cakescene.studio was born from the conviction that every extraordinary moment in life deserves a center stage. Our dedicated design team blends culinary mastery with couture design aesthetics to draft spectacular cakes that look like modern sculptures and taste absolutely heavenly.
            </p>

            {/* Interactive Tab Switcher */}
            <div className="flex border-b border-luxury-champagne mt-8 gap-4 sm:gap-8" id="about-tabs">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`pb-4 text-xs font-bold tracking-widest uppercase transition-colors relative cursor-pointer ${
                  activeTab === 'philosophy' ? 'text-luxury-gold' : 'text-luxury-mocha/50 hover:text-luxury-mocha'
                }`}
              >
                Our Philosophy
                {activeTab === 'philosophy' && (
                  <motion.div layoutId="aboutTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('flavors')}
                className={`pb-4 text-xs font-bold tracking-widest uppercase transition-colors relative cursor-pointer ${
                  activeTab === 'flavors' ? 'text-luxury-gold' : 'text-luxury-mocha/50 hover:text-luxury-mocha'
                }`}
              >
                Signature Flavors
                {activeTab === 'flavors' && (
                  <motion.div layoutId="aboutTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-4 text-xs font-bold tracking-widest uppercase transition-colors relative cursor-pointer ${
                  activeTab === 'ingredients' ? 'text-luxury-gold' : 'text-luxury-mocha/50 hover:text-luxury-mocha'
                }`}
              >
                Fine Ingredients
                {activeTab === 'ingredients' && (
                  <motion.div layoutId="aboutTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />
                )}
              </button>
            </div>

            {/* Tab content */}
            <div className="mt-6 min-h-[180px]">
              {activeTab === 'philosophy' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <p className="text-xs sm:text-sm text-luxury-mocha/85 leading-relaxed">
                    We approach cake making as a collaborative architectural commission. From initial hand-sketched designs and watercolored mockups to the final placement of sugar rose petals, our design team ensures your cake stands as a true visual reflection of your personality and story.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="bg-luxury-blush p-1 rounded-full border border-luxury-gold/10 text-luxury-gold mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-luxury-charcoal">{h.title}</p>
                          <p className="text-[11px] text-luxury-mocha/60">{h.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'flavors' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {spongeFlavors.slice(0, 4).map((f, i) => (
                    <div key={i} className="bg-luxury-white p-3.5 rounded-2xl border border-luxury-champagne/40 shadow-xs">
                      <p className="font-serif text-xs font-bold text-luxury-gold">{f.name}</p>
                      <p className="text-[11px] text-luxury-mocha/70 mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                  <div className="col-span-1 sm:col-span-2 text-center">
                    <p className="text-[11px] text-luxury-mocha/50 italic">Full tasting flight available with all pre-booked consultations.</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'ingredients' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <p className="text-xs sm:text-sm text-luxury-mocha/85 leading-relaxed">
                    Flavor should always match visual perfection. We strictly import and bake with organic farm-sourced dairy, organic flour, fair-trade vanilla pods, and pure culinary chocolates. We never use hydrogenated oils, artificial flavors, or powdered egg replacement bases.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-3 text-center">
                    <div className="bg-luxury-peach/55 p-3 rounded-2xl border border-luxury-gold/10">
                      <span className="text-xl">🍫</span>
                      <p className="text-[10px] font-bold text-luxury-charcoal uppercase mt-1">Callebaut Cocoa</p>
                    </div>
                    <div className="bg-luxury-blush p-3 rounded-2xl border border-luxury-gold/10">
                      <span className="text-xl">🌸</span>
                      <p className="text-[10px] font-bold text-luxury-charcoal uppercase mt-1">Bourbon Vanilla</p>
                    </div>
                    <div className="bg-luxury-champagne p-3 rounded-2xl border border-luxury-gold/10">
                      <span className="text-xl">🍓</span>
                      <p className="text-[10px] font-bold text-luxury-charcoal uppercase mt-1">Whole Berries</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Extended list of trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-luxury-champagne/60 pt-8 mt-8">
              {highlights.slice(4).map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-luxury-blush border border-luxury-gold/15 text-luxury-gold">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-luxury-charcoal leading-tight">{h.title}</h4>
                      <p className="text-[10px] text-luxury-mocha/60 mt-0.5">Certified Care</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
