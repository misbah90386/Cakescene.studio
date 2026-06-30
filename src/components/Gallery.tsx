import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

const CATEGORIES = [
  { id: 'all', name: 'All Masterpieces' },
  { id: 'wedding', name: 'Wedding Cakes' },
  { id: 'birthday', name: 'Birthday Cakes' },
  { id: 'custom', name: 'Custom Cakes' },
  { id: 'cupcakes', name: 'Cupcakes' },
  { id: 'dessert-tables', name: 'Dessert Tables' },
  { id: 'seasonal', name: 'Seasonal Collections' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // Filter items
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    setSelectedItem(item);
    setCurrentIndex(idx);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
    setCurrentIndex(-1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      const newIdx = currentIndex - 1;
      setCurrentIndex(newIdx);
      setSelectedItem(GALLERY_ITEMS[newIdx]);
    } else {
      // Loop to end
      const newIdx = GALLERY_ITEMS.length - 1;
      setCurrentIndex(newIdx);
      setSelectedItem(GALLERY_ITEMS[newIdx]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < GALLERY_ITEMS.length - 1) {
      const newIdx = currentIndex + 1;
      setCurrentIndex(newIdx);
      setSelectedItem(GALLERY_ITEMS[newIdx]);
    } else {
      // Loop to start
      const newIdx = 0;
      setCurrentIndex(newIdx);
      setSelectedItem(GALLERY_ITEMS[newIdx]);
    }
  };

  return (
    <section className="py-24 bg-luxury-white relative border-t border-luxury-champagne/45" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Titles */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
            Exquisite Showroom
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            The Cakescene Showroom
          </h2>
          <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed max-w-lg mx-auto">
            Browse our curated gallery of handcrafted masterworks. Filter by category to find the perfect inspiration for your upcoming celebration.
          </p>
        </div>

        {/* Categories Horizontal Filter Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none" id="gallery-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'bg-luxury-gold text-luxury-cream border-transparent shadow-md'
                  : 'bg-luxury-cream text-luxury-mocha/80 border-luxury-champagne/45 hover:border-luxury-gold hover:text-luxury-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid Portfolio */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative bg-luxury-cream rounded-2xl overflow-hidden border border-luxury-champagne/40 cursor-zoom-in aspect-[3/4]"
                onClick={() => handleOpenLightbox(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full. h-full w-full object-cover transition-transform duration-750 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Glassmorphic hover details overlay */}
                <div className="absolute inset-0 bg-luxury-charcoal/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-350 flex flex-col justify-end p-6">
                  {/* Category Tag */}
                  <span className="text-[8px] uppercase tracking-widest text-luxury-gold font-extrabold bg-luxury-blush/90 px-2.5 py-1 rounded-full self-start border border-luxury-gold/20 mb-2">
                    {item.category.replace('-', ' ')}
                  </span>
                  {/* Item title */}
                  <h3 className="font-serif text-sm font-semibold text-luxury-cream leading-snug">
                    {item.title}
                  </h3>
                  {/* Secondary info bar */}
                  <div className="flex items-center justify-between text-[10px] text-luxury-cream/80 border-t border-luxury-cream/20 pt-3 mt-3">
                    <span className="font-medium">Tap to view</span>
                    <Maximize2 className="w-3.5 h-3.5 text-luxury-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay Drawer */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={handleCloseLightbox}
            id="gallery-lightbox"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-luxury-white/10 hover:bg-luxury-white/20 text-luxury-cream border border-luxury-cream/10 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left arrow navigator */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-luxury-white/10 hover:bg-luxury-white/20 text-luxury-cream border border-luxury-cream/10 transition-colors cursor-pointer hidden md:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right arrow navigator */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-luxury-white/10 hover:bg-luxury-white/20 text-luxury-cream border border-luxury-cream/10 transition-colors cursor-pointer hidden md:block"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Inner Content Card (Stops propagation) */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-luxury-cream rounded-3xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl border border-luxury-champagne"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Column: Huge High-Def Image */}
              <div className="relative aspect-square md:aspect-auto md:min-h-[480px] bg-luxury-blush flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column: Rich Artistic Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Category breadcrumb */}
                  <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-extrabold bg-luxury-blush px-3 py-1.5 rounded-full border border-luxury-gold/15 inline-block mb-4">
                    {selectedItem.category.replace('-', ' ')}
                  </span>
                  
                  {/* Heading */}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-luxury-charcoal leading-snug">
                    {selectedItem.title}
                  </h3>

                  {/* Long descriptive narrative */}
                  <p className="text-luxury-mocha/80 text-xs sm:text-sm mt-4 leading-relaxed">
                    {selectedItem.description} This custom creation showcases Cakescene.studio’s hallmark attention to crumb texture, buttercream stability, and exquisite color layering.
                  </p>

                  <div className="mt-6 space-y-3.5 bg-luxury-white/50 border border-luxury-champagne/40 rounded-xl p-4">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-luxury-mocha/60 font-semibold uppercase">Freshness guarantee</span>
                      <span className="text-luxury-charcoal font-bold">100% Organic</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-luxury-mocha/60 font-semibold uppercase">Allergen options</span>
                      <span className="text-luxury-charcoal font-bold">Vegan / Gluten-Free</span>
                    </div>
                  </div>
                </div>

                {/* Inquire consultation buttons right in the lightbox */}
                <div className="mt-8 pt-6 border-t border-luxury-champagne/50 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={handleCloseLightbox}
                    className="w-full text-center py-3.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-cream text-xs font-bold tracking-widest uppercase shadow-sm transition-colors duration-250"
                  >
                    Inquire Spec Sheets
                  </a>
                  <button
                    onClick={handleCloseLightbox}
                    className="w-full text-center py-3.5 rounded-full border border-luxury-gold/30 text-luxury-mocha text-xs font-bold tracking-widest uppercase hover:bg-luxury-champagne/15 transition-colors cursor-pointer"
                  >
                    Back to Showroom
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
