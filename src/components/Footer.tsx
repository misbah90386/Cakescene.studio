import React, { useState } from 'react';
import { Cake, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-luxury-charcoal text-luxury-cream border-t border-luxury-mocha py-20" id="app-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-luxury-mocha/40">
        
        {/* Brand / About Us Column (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-luxury-mocha border border-luxury-gold/30">
              <Cake className="w-4.5 h-4.5 text-luxury-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-semibold tracking-wider uppercase leading-none text-luxury-white">
                Cakescene
              </span>
              <span className="text-[9px] tracking-[0.25em] text-luxury-gold uppercase font-medium leading-none mt-1">
                .studio
              </span>
            </div>
          </div>
          
          <p className="text-luxury-cream/70 text-xs sm:text-[13px] leading-relaxed max-w-sm">
            Cakescene.studio is a premier haute-couture bakery crafting luxury custom wedding cakes, bento boxes, and artisanal desserts that anchor grand life moments in beauty and taste.
          </p>

          {/* Social media links */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-luxury-mocha hover:bg-luxury-gold text-luxury-cream hover:text-luxury-charcoal flex items-center justify-center border border-luxury-cream/10 hover:border-transparent transition-all duration-300"
              aria-label="Instagram Link"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-luxury-mocha hover:bg-luxury-gold text-luxury-cream hover:text-luxury-charcoal flex items-center justify-center border border-luxury-cream/10 hover:border-transparent transition-all duration-300"
              aria-label="Facebook Link"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-luxury-mocha hover:bg-luxury-gold text-luxury-cream hover:text-luxury-charcoal flex items-center justify-center border border-luxury-cream/10 hover:border-transparent transition-all duration-300"
              aria-label="Twitter Link"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Collections Links (Span 2) */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-luxury-gold">
            Collections
          </h4>
          <ul className="space-y-3 text-xs text-luxury-cream/70">
            <li><a href="#specialties" className="hover:text-luxury-gold transition-colors">Wedding Masterpieces</a></li>
            <li><a href="#specialties" className="hover:text-luxury-gold transition-colors">Birthday & Sculpted</a></li>
            <li><a href="#specialties" className="hover:text-luxury-gold transition-colors">Custom Bento Boxes</a></li>
            <li><a href="#specialties" className="hover:text-luxury-gold transition-colors">Artisanal Cupcakes</a></li>
            <li><a href="#specialties" className="hover:text-luxury-gold transition-colors">Grand Dessert Tables</a></li>
          </ul>
        </div>

        {/* Ordering Information & FAQ Link (Span 2) */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-luxury-gold">
            Support & Info
          </h4>
          <ul className="space-y-3 text-xs text-luxury-cream/70">
            <li><a href="#process" className="hover:text-luxury-gold transition-colors">Order Process</a></li>
            <li><a href="#faq" className="hover:text-luxury-gold transition-colors">Frequently Asked FAQs</a></li>
            <li><a href="#about" className="hover:text-luxury-gold transition-colors">Ingredients & Allergens</a></li>
            <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Secure Deposit T&C</a></li>
            <li><a href="#why-choose-us" className="hover:text-luxury-gold transition-colors">Hygienic Standards</a></li>
          </ul>
        </div>

        {/* Newsletter Signup (Span 4) */}
        <div className="lg:col-span-4 space-y-5">
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-luxury-gold">
            The Studio Journal
          </h4>
          <p className="text-luxury-cream/70 text-xs sm:text-[13px] leading-relaxed">
            Subscribe to receive invitation to tasting flights, seasonal flavor releases, and couture cake designs.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="bg-luxury-mocha text-xs text-luxury-cream placeholder:text-luxury-cream/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-luxury-gold border border-transparent w-full"
              />
              <button
                type="submit"
                className="bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-cream text-[10px] font-bold tracking-widest uppercase px-5 rounded-xl transition-colors shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
          ) : (
            <div className="bg-luxury-mocha/45 border border-luxury-gold/30 p-4 rounded-xl flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-luxury-gold shrink-0" />
              <div>
                <p className="text-xs font-bold text-luxury-white">Welcome to the Journal!</p>
                <p className="text-[10px] text-luxury-cream/60 mt-0.5">We send only refined seasonal updates.</p>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Copyright statement and meta information */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-luxury-cream/50">
        <p>© 2026 Cakescene.studio. Handcrafted daily in Beverly Hills. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Use</a>
          <span>•</span>
          <a href="#" className="hover:text-luxury-gold transition-colors">Dietary Certification</a>
        </div>
      </div>
    </footer>
  );
}
