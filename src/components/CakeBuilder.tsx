import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Info, Heart, ArrowRight, RefreshCw, ShoppingCart } from 'lucide-react';

interface CakeBuilderProps {
  onInquireCustomCake: (cakeDetails: {
    category: string;
    tiers: string;
    flavor: string;
    style: string;
    addons: string;
    dietary: string;
    estimatedPrice: number;
  }) => void;
  selectedPreset?: {
    name: string;
    price: number;
  } | null;
  clearPreset: () => void;
}

const CATEGORIES = [
  { id: 'wedding', name: 'Wedding Cake', basePrice: 200 },
  { id: 'birthday', name: 'Birthday Cake', basePrice: 50 },
  { id: 'custom', name: 'Custom Theme Cake', basePrice: 85 },
  { id: 'bento', name: 'Bento Cake', basePrice: 40 },
  { id: 'floral', name: 'Floral Cake', basePrice: 65 },
  { id: 'cupcake', name: 'Cupcake Collection', basePrice: 30 }
];

const TIERS = [
  { id: '1-tier', name: '1 Tier (Feeds 10-15)', multiplier: 1.0, cost: 0 },
  { id: '2-tier', name: '2 Tiers (Feeds 25-35)', multiplier: 1.8, cost: 120 },
  { id: '3-tier', name: '3 Tiers (Feeds 50-70)', multiplier: 2.5, cost: 260 },
  { id: '4-tier', name: '4 Tiers (Feeds 100+)', multiplier: 3.4, cost: 420 }
];

const FLAVORS = [
  { id: 'vanilla', name: 'Madagascar Vanilla Bean Chiffon', cost: 0 },
  { id: 'chocolate', name: 'Belgian Triple Chocolate Ganache', cost: 10 },
  { id: 'pistachio', name: 'Pistachio Persian Rose', cost: 20 },
  { id: 'raspberry', name: 'Champagne & Wild Raspberry', cost: 15 },
  { id: 'redvelvet', name: 'Rich Red Velvet Crema', cost: 10 },
  { id: 'saltedcaramel', name: 'Espresso Salted Caramel', cost: 12 }
];

const STYLES = [
  { id: 'minimalist', name: 'Minimalist Buttercream', multiplier: 1.0, color: '#FCF9F5', details: 'Sleek, clean frosting strokes with clean pastel borders' },
  { id: 'floral', name: 'Elegant Hand-Piped Floral', multiplier: 1.25, color: '#FFF5F2', details: 'Dressed with exquisite handcrafted edible buttercream flora' },
  { id: 'metallic', name: 'Luxury Metallic & Gold Leaf', multiplier: 1.4, color: '#F4ECE1', details: 'Brushed gold trim highlights and authentic 24k gold leaf flakes' },
  { id: 'fondant', name: 'Playful Hand-Sculpted Fondant', multiplier: 1.5, color: '#FFEFE5', details: 'Elaborate personalized figures, character motifs, and drapes' }
];

const ADDONS = [
  { id: 'none', name: 'No Extra Add-ons', cost: 0 },
  { id: 'macarons', name: 'French Macaron Cascade', cost: 35 },
  { id: 'topper', name: 'Custom Calligraphy Acrylic Topper', cost: 20 },
  { id: 'goldleaf', name: '24k Gold Leaf Splatter', cost: 30 },
  { id: 'flowers', name: 'Fresh Edible Flowers Garland', cost: 45 }
];

const DIETARY = [
  { id: 'classic', name: 'Classic Organic Sweetness', cost: 0 },
  { id: 'gluten-free', name: 'Gluten-Free Premium Chiffon', cost: 15 },
  { id: 'eggless', name: 'Artisan Eggless Recipe', cost: 10 },
  { id: 'vegan', name: 'Vegan Butter & Plant-Based Sponge', cost: 25 }
];

export default function CakeBuilder({ onInquireCustomCake, selectedPreset, clearPreset }: CakeBuilderProps) {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [tier, setTier] = useState(TIERS[0]);
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [style, setStyle] = useState(STYLES[0]);
  const [addon, setAddon] = useState(ADDONS[0]);
  const [diet, setDiet] = useState(DIETARY[0]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // If a preset was selected from Signature Collection, synchronize fields
  useEffect(() => {
    if (selectedPreset) {
      const presetName = selectedPreset.name.toLowerCase();
      
      // Attempt matching category
      let matchedCategory = CATEGORIES.find(c => presetName.includes(c.id) || (c.id === 'wedding' && presetName.includes('wedding')) || (c.id === 'cupcake' && presetName.includes('cupcake')));
      if (matchedCategory) setCategory(matchedCategory);

      // Match tiers based on preset complexity
      if (presetName.includes('wedding')) {
        setTier(TIERS[2]); // 3 Tiers
      } else if (presetName.includes('celebration') || presetName.includes('theme')) {
        setTier(TIERS[1]); // 2 Tiers
      } else {
        setTier(TIERS[0]); // 1 Tier
      }

      // Match style
      let matchedStyle = STYLES.find(s => presetName.includes(s.id) || (s.id === 'metallic' && presetName.includes('gold')) || (s.id === 'floral' && presetName.includes('floral')));
      if (matchedStyle) setStyle(matchedStyle);

      // Match flavor (default to gourmet chocolate or raspberry for signature presets)
      if (presetName.includes('chocolate')) {
        setFlavor(FLAVORS[1]);
      } else if (presetName.includes('wedding')) {
        setFlavor(FLAVORS[3]); // champagne raspberry
      } else {
        setFlavor(FLAVORS[0]);
      }
    }
  }, [selectedPreset]);

  // Recalculate price dynamically
  useEffect(() => {
    let base = category.basePrice;
    
    // Tier adds multiplier and extra cost
    let subtotal = (base + tier.cost) * tier.multiplier;
    
    // Flavor premium
    subtotal += flavor.cost;
    
    // Style multiplier
    subtotal = subtotal * style.multiplier;
    
    // Addons & dietary additions
    subtotal += addon.cost + diet.cost;
    
    setEstimatedPrice(Math.round(subtotal));
  }, [category, tier, flavor, style, addon, diet]);

  const handleReset = () => {
    setCategory(CATEGORIES[0]);
    setTier(TIERS[0]);
    setFlavor(FLAVORS[0]);
    setStyle(STYLES[0]);
    setAddon(ADDONS[0]);
    setDiet(DIETARY[0]);
    clearPreset();
  };

  const handleSubmitInquiry = () => {
    onInquireCustomCake({
      category: category.name,
      tiers: tier.name,
      flavor: flavor.name,
      style: style.name,
      addons: addon.name,
      dietary: diet.name,
      estimatedPrice: estimatedPrice
    });
  };

  // Stack of tiers for custom visual generator
  const renderVisualCake = () => {
    const tierCount = parseInt(tier.id.split('-')[0]); // 1, 2, 3, or 4
    const bgHex = style.color;

    return (
      <div className="relative w-full h-80 flex flex-col items-center justify-end pb-12 pt-8" id="cake-preview-canvas">
        {/* Soft platform plate */}
        <div className="absolute bottom-6 w-60 h-4 bg-luxury-champagne rounded-full border border-luxury-gold/20 shadow-sm flex items-center justify-center">
          <div className="w-56 h-1 border-b border-dashed border-luxury-gold/30 rounded-full" />
        </div>

        {/* Dynamic stacked tiers */}
        <div className="flex flex-col items-center gap-1.5 z-10 w-full relative">
          {Array.from({ length: tierCount }).map((_, idx) => {
            const level = tierCount - idx; // Top layer is index 0 (largest level number e.g. 3, 2, 1)
            // Width decreases for top layers
            const widthClass = 
              level === 4 ? 'w-24 h-11' :
              level === 3 ? 'w-32 h-13' :
              level === 2 ? 'w-40 h-15' :
              'w-48 h-18';

            const shadowDepth = 
              level === 4 ? 'shadow-[0_4px_6px_rgba(0,0,0,0.06)]' :
              level === 3 ? 'shadow-[0_6px_10px_rgba(0,0,0,0.06)]' :
              level === 2 ? 'shadow-[0_8px_14px_rgba(0,0,0,0.06)]' :
              'shadow-[0_10px_18px_rgba(0,0,0,0.08)]';

            return (
              <motion.div
                key={level}
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: 'spring', delay: level * 0.1, stiffness: 120 }}
                className={`${widthClass} ${shadowDepth} rounded-2xl relative border border-luxury-gold/15 flex items-center justify-center`}
                style={{ backgroundColor: bgHex }}
              >
                {/* Lace Piping Accent decoration */}
                <div className="absolute inset-x-2 bottom-1 h-0.5 border-t border-dashed border-luxury-gold/40" />
                
                {/* Special details styled per selected theme */}
                {style.id === 'floral' && (
                  <div className="absolute -top-1 -left-1 text-xs">🌸</div>
                )}
                {style.id === 'floral' && level === 1 && (
                  <div className="absolute -top-2 -right-1 text-xs">🌹</div>
                )}
                {style.id === 'metallic' && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-luxury-gold/40 pointer-events-none" />
                )}
                {style.id === 'metallic' && level === tierCount && (
                  <div className="absolute -top-3 text-sm animate-pulse">✨</div>
                )}
                {style.id === 'fondant' && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-pink-100/50 rounded-t-2xl border-b border-pink-200" />
                )}

                {/* Level Tag (Only in subtle view) */}
                <span className="text-[8px] font-mono font-bold text-luxury-gold/70 select-none">
                  T-{level}
                </span>
              </motion.div>
            );
          })}

          {/* Addon overlay decoration icons */}
          <AnimatePresence>
            {addon.id === 'macarons' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-2 right-12 text-sm z-20 bg-luxury-white/95 p-1 rounded-full border border-luxury-gold/20"
              >
                🍬🍬
              </motion.div>
            )}
            {addon.id === 'flowers' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-4 text-lg z-20"
              >
                💐
              </motion.div>
            )}
            {addon.id === 'topper' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-6 font-serif text-xs italic font-semibold text-luxury-gold bg-luxury-cream border border-luxury-gold px-2.5 py-0.5 rounded-full z-20"
              >
                Love Always
              </motion.div>
            )}
            {addon.id === 'goldleaf' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
              >
                <div className="w-44 h-44 rounded-full border border-yellow-400/20 animate-spin-slow filter blur-xs" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Display Visual Accent Text */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-luxury-white/60 backdrop-blur-xs p-2.5 rounded-xl border border-luxury-champagne/45">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[9px] tracking-widest uppercase font-bold text-luxury-mocha/80">Interactive Blueprint</span>
          </div>
          <button
            onClick={handleReset}
            className="text-[9px] uppercase tracking-widest font-bold text-luxury-gold hover:text-luxury-charcoal flex items-center gap-1 transition-colors duration-200"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            Reset
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-luxury-blush/25 relative overflow-hidden" id="designer">
      {/* Decorative vectors */}
      <div className="absolute -left-20 top-20 w-80 h-80 rounded-full bg-luxury-peach/20 filter blur-3xl -z-10" />
      <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-luxury-blush/30 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Bespoke Ordering Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            The Dream Cake Designer
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed max-w-lg mx-auto">
            Design your custom masterpiece in real-time. Choose your tiers, gourmet fillings, frosting styles, and receive an instant investment estimate.
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Interactive 3D CSS Preview (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit flex flex-col gap-6">
            
            {/* Realtime Preset Notification Banner */}
            {selectedPreset && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-luxury-gold/10 border border-luxury-gold/30 p-4 rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-luxury-white flex items-center justify-center border border-luxury-gold/15">
                    <Heart className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-luxury-gold-hover uppercase">Selected Preset Loaded</p>
                    <p className="text-xs font-semibold text-luxury-charcoal mt-0.5">{selectedPreset.name}</p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="text-[10px] font-bold tracking-wider text-luxury-mocha hover:text-luxury-charcoal hover:underline"
                >
                  Clear
                </button>
              </motion.div>
            )}

            {/* Customizer Box */}
            <div className="bg-luxury-white rounded-3xl border border-luxury-champagne p-6 shadow-lg flex flex-col justify-between">
              {/* Visual render stack */}
              {renderVisualCake()}

              {/* Pricing readout with gold gradients */}
              <div className="bg-luxury-blush/60 border border-luxury-gold/15 rounded-2xl p-5 mt-6 flex justify-between items-center shadow-inner">
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold">
                    Estimated Investment
                  </h4>
                  <p className="text-[11px] text-luxury-mocha/60 mt-1">Subject to design revisions</p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-extrabold text-luxury-charcoal">${estimatedPrice}</span>
                  <p className="text-[9px] text-luxury-gold font-bold uppercase tracking-wider mt-0.5">Est. starting cost</p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSubmitInquiry}
                className="w-full mt-5 py-4.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-cream text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 text-luxury-cream" />
                Book Consultation for This Design
              </button>
            </div>
            
            <div className="bg-luxury-white/50 backdrop-blur-sm border border-luxury-champagne/50 rounded-2xl p-4 flex gap-3">
              <Info className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <p className="text-[10.5px] text-luxury-mocha/70 leading-relaxed">
                <strong>Pricing Guideline:</strong> Our cakes are premium artisan works of art. Final rates are finalized based on hours of custom decoration, fruit supply, and special flavor additions.
              </p>
            </div>
          </div>

          {/* Right Block: Dynamic Choices Customizer Form */}
          <div className="lg:col-span-7 bg-luxury-white rounded-3xl border border-luxury-champagne p-6 md:p-8 shadow-lg flex flex-col justify-between">
            
            <div className="space-y-8">
              
              {/* 1. Category Selection */}
              <div>
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-mocha/70 flex items-center gap-1.5 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  1. Choose Celebration Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat)}
                      className={`py-3 px-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        category.id === cat.id
                          ? 'border-luxury-gold bg-luxury-blush text-luxury-charcoal font-semibold shadow-xs'
                          : 'border-luxury-champagne/50 hover:border-luxury-gold/50 text-luxury-mocha bg-transparent'
                      }`}
                    >
                      <p className="text-xs">{cat.name}</p>
                      <p className="text-[9px] text-luxury-gold/80 mt-1">Base: ${cat.basePrice}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Tier Selection */}
              <div>
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-mocha/70 flex items-center gap-1.5 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  2. Select Size & Tiers
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {TIERS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t)}
                      className={`py-3 px-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        tier.id === t.id
                          ? 'border-luxury-gold bg-luxury-blush text-luxury-charcoal font-semibold shadow-xs'
                          : 'border-luxury-champagne/50 hover:border-luxury-gold/50 text-luxury-mocha bg-transparent'
                      }`}
                    >
                      <p className="text-xs">{t.name}</p>
                      <p className="text-[9px] text-luxury-gold/80 mt-1">
                        {t.cost > 0 ? `+ $${t.cost}` : 'Included'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Frosting Styles & Themes */}
              <div>
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-mocha/70 flex items-center gap-1.5 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  3. Decorating Style Complexity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {STYLES.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setStyle(st)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        style.id === st.id
                          ? 'border-luxury-gold bg-luxury-blush text-luxury-charcoal font-semibold shadow-xs'
                          : 'border-luxury-champagne/50 hover:border-luxury-gold/50 text-luxury-mocha bg-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-luxury-gold/20 shadow-xs shrink-0" style={{ backgroundColor: st.color }} />
                        <span className="text-xs">{st.name}</span>
                      </div>
                      <p className="text-[10px] text-luxury-mocha/60 font-normal mt-1.5 leading-relaxed">
                        {st.details}
                      </p>
                      <p className="text-[9px] text-luxury-gold/80 font-bold uppercase mt-2">
                        Multiplier: {st.multiplier}x
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Flavor Selection */}
              <div>
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-mocha/70 flex items-center gap-1.5 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  4. Sponge & Gourmet Fillings
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FLAVORS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFlavor(f)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex justify-between items-center ${
                        flavor.id === f.id
                          ? 'border-luxury-gold bg-luxury-blush text-luxury-charcoal font-semibold shadow-xs'
                          : 'border-luxury-champagne/50 hover:border-luxury-gold/50 text-luxury-mocha bg-transparent'
                      }`}
                    >
                      <span className="text-xs pr-2">{f.name}</span>
                      <span className="text-[9px] text-luxury-gold/80 shrink-0 font-bold">
                        {f.cost > 0 ? `+ $${f.cost}` : 'Gourmet Base'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Add-ons Cascade */}
              <div>
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-mocha/70 flex items-center gap-1.5 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  5. Luxury Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADDONS.map((ad) => (
                    <button
                      key={ad.id}
                      onClick={() => setAddon(ad)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex justify-between items-center ${
                        addon.id === ad.id
                          ? 'border-luxury-gold bg-luxury-blush text-luxury-charcoal font-semibold shadow-xs'
                          : 'border-luxury-champagne/50 hover:border-luxury-gold/50 text-luxury-mocha bg-transparent'
                      }`}
                    >
                      <span className="text-xs pr-2">{ad.name}</span>
                      <span className="text-[9px] text-luxury-gold/80 shrink-0 font-bold">
                        {ad.cost > 0 ? `+ $${ad.cost}` : 'Included'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. Dietary preference */}
              <div>
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-mocha/70 flex items-center gap-1.5 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  6. Dietary Accommodations
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {DIETARY.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDiet(d)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex justify-between items-center ${
                        diet.id === d.id
                          ? 'border-luxury-gold bg-luxury-blush text-luxury-charcoal font-semibold shadow-xs'
                          : 'border-luxury-champagne/50 hover:border-luxury-gold/50 text-luxury-mocha bg-transparent'
                      }`}
                    >
                      <span className="text-xs">{d.name}</span>
                      <span className="text-[9px] text-luxury-gold/80 shrink-0 font-bold">
                        {d.cost > 0 ? `+ $${d.cost}` : 'Standard'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="border-t border-luxury-champagne/55 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[10.5px] text-luxury-mocha/60 text-center sm:text-left leading-normal">
                Designing for a specific theme or have custom sketches? Hit <strong>Inquire Consultation</strong> and attach details.
              </p>
              <button
                onClick={handleSubmitInquiry}
                className="w-full sm:w-auto shrink-0 bg-luxury-charcoal hover:bg-luxury-mocha text-luxury-cream text-[10px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-full transition-colors duration-250 cursor-pointer"
              >
                Inquire Consultation
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
