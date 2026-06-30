import React from 'react';

export default function CollectionTicker() {
  const items = [
    'Floral Buttercream',
    'Minimalist Sculpts',
    'Red Velvet Noir',
    'Champagne Tiers',
    'Artisanal Macarons',
    'Chocolate Drip Art',
    'Bespoke Sugar Flowers',
    'Golden Leaf Ganache',
    'Velvet Vanilla Bean',
    'Decadent Espresso Truffle',
  ];

  // Double the list to make a seamless infinite scroll loop
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-luxury-charcoal text-luxury-cream/50 py-6 overflow-hidden border-t border-b border-luxury-gold/20 flex items-center relative z-10">
      {/* Decorative Label */}
      <div className="absolute left-0 top-0 bottom-0 bg-luxury-charcoal px-6 md:px-10 flex items-center z-20 shadow-[8px_0_16px_rgba(62,39,35,0.9)] border-r border-luxury-gold/15">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold font-sans whitespace-nowrap">
          Current Collections
        </span>
      </div>

      {/* Infinite scrolling row */}
      <div className="flex whitespace-nowrap animate-marquee pl-[220px] md:pl-[260px] select-none">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-6 text-[11px] uppercase tracking-[0.25em] font-sans font-medium">
            <span className="text-luxury-gold text-xs">✦</span>
            <span className="italic hover:text-luxury-gold transition-colors duration-300 cursor-default">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Embedded CSS animation for fallback marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
