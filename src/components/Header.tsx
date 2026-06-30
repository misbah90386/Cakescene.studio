import { useState, useEffect } from 'react';
import { Menu, X, Cake, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenCustomizer: () => void;
}

export default function Header({ onOpenCustomizer }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Collection', href: '#collection' },
    { label: 'Cake Designer', href: '#designer' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Inquire', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-cream/90 backdrop-blur-md shadow-sm border-b border-luxury-champagne/40 py-4'
            : 'bg-transparent py-6'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            id="logo-link"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-luxury-blush border border-luxury-gold/20 group-hover:border-luxury-gold/50 transition-colors duration-300">
              <Cake className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full border border-dashed border-luxury-gold/20 animate-spin-slow group-hover:border-luxury-gold/40 duration-1000" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-semibold tracking-wider text-luxury-charcoal uppercase leading-none">
                Cakescene
              </span>
              <span className="text-[10px] tracking-[0.25em] text-luxury-gold uppercase font-medium leading-none mt-1">
                .studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xs font-semibold tracking-widest text-luxury-mocha/85 hover:text-luxury-gold uppercase transition-colors duration-300 relative py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-350 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenCustomizer}
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-luxury-gold hover:text-luxury-charcoal border border-luxury-gold/45 hover:border-luxury-charcoal/30 px-5 py-2.5 rounded-full uppercase transition-all duration-300 bg-transparent hover:bg-luxury-champagne/10 cursor-pointer"
              id="header-designer-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              Cake Designer
            </button>
            <a
              href="#contact"
              className="text-[10px] font-bold tracking-widest text-luxury-cream bg-luxury-gold hover:bg-luxury-gold-hover px-5 py-2.5 rounded-full uppercase shadow-sm hover:shadow transition-all duration-300"
              id="header-order-btn"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-luxury-charcoal hover:text-luxury-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] z-30 lg:hidden bg-luxury-cream/95 backdrop-blur-lg border-b border-luxury-champagne shadow-xl py-8 px-6 flex flex-col gap-6"
            id="mobile-drawer"
          >
            <nav className="flex flex-col gap-4 text-center">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-widest text-luxury-mocha hover:text-luxury-gold uppercase py-2 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="h-px bg-luxury-champagne/50" />
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full text-center text-xs font-bold tracking-widest text-luxury-gold border border-luxury-gold px-5 py-3 rounded-full uppercase transition-all duration-300"
              >
                ✨ Dream Cake Designer
              </button>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center text-xs font-bold tracking-widest text-luxury-cream bg-luxury-gold hover:bg-luxury-gold-hover px-5 py-3 rounded-full uppercase shadow-md transition-all duration-300"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
