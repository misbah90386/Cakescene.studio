import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Calendar, Users, MapPin, CheckCircle2, Copy, Star, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OrderFormInputs } from '../types';

interface ContactProps {
  draftCakeSpecs: {
    category: string;
    tiers: string;
    flavor: string;
    style: string;
    addons: string;
    dietary: string;
    estimatedPrice: number;
  } | null;
  clearDraftSpecs: () => void;
}

export default function Contact({ draftCakeSpecs, clearDraftSpecs }: ContactProps) {
  const [formInputs, setFormInputs] = useState<OrderFormInputs>({
    fullName: '',
    phone: '',
    email: '',
    cakeType: 'wedding',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // If draft specs change, prefill form messages & values
  useEffect(() => {
    if (draftCakeSpecs) {
      setFormInputs(prev => ({
        ...prev,
        cakeType: draftCakeSpecs.category.toLowerCase().includes('wedding') ? 'wedding' : 
                  draftCakeSpecs.category.toLowerCase().includes('birthday') ? 'birthday' : 'custom',
        message: `I designed a custom cake blueprint!\n- Type: ${draftCakeSpecs.category}\n- Size: ${draftCakeSpecs.tiers}\n- Flavor: ${draftCakeSpecs.flavor}\n- Style: ${draftCakeSpecs.style}\n- Add-ons: ${draftCakeSpecs.addons}\n- Dietary: ${draftCakeSpecs.dietary}\n- Estimated Price: $${draftCakeSpecs.estimatedPrice}`
      }));

      // Smooth scroll to contact form container
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [draftCakeSpecs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API response timing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTicketId(`CSC-${Math.floor(1000 + Math.random() * 9000)}`);
      clearDraftSpecs();
    }, 1500);
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketId);
  };

  return (
    <section className="py-24 bg-luxury-cream border-t border-luxury-champagne/40" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info & Custom Map Card */}
          <div className="lg:col-span-5 space-y-8" id="contact-info">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-luxury-gold uppercase block mb-3">
                Concierge Desk
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-charcoal leading-tight">
                Secure Your Date
              </h2>
              <p className="text-luxury-mocha/70 text-xs sm:text-sm mt-4 leading-relaxed">
                Connect with our concierge team. Let’s collaborate to turn your theme, colors, and flavors into a showstopping visual center of gravity for your venue.
              </p>
            </div>

            {/* Quick action buttons (Call, WhatsApp, Email) */}
            <div className="space-y-4">
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-luxury-white border border-luxury-champagne hover:border-emerald-400/40 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-luxury-gold">WhatsApp Chat</h4>
                  <p className="text-xs font-bold text-luxury-charcoal mt-0.5">+1 (555) 789-1234</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">● Response in 15 mins</p>
                </div>
              </a>

              <a
                href="tel:+15557891234"
                className="flex items-center gap-4 p-4 rounded-2xl bg-luxury-white border border-luxury-champagne hover:border-luxury-gold/40 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-luxury-blush text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-cream flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-luxury-gold">Call Studio Line</h4>
                  <p className="text-xs font-bold text-luxury-charcoal mt-0.5">+1 (555) 789-1234</p>
                  <p className="text-[10px] text-luxury-mocha/60 mt-0.5">Mon–Sat, 9:00 AM – 6:00 PM</p>
                </div>
              </a>

              <a
                href="mailto:orders@cakescene.studio"
                className="flex items-center gap-4 p-4 rounded-2xl bg-luxury-white border border-luxury-champagne hover:border-luxury-gold/40 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-luxury-champagne text-luxury-mocha group-hover:bg-luxury-gold group-hover:text-luxury-cream flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-luxury-gold">Concierge Email</h4>
                  <p className="text-xs font-bold text-luxury-charcoal mt-0.5">orders@cakescene.studio</p>
                  <p className="text-[10px] text-luxury-mocha/60 mt-0.5">24-hour reply window</p>
                </div>
              </a>
            </div>

            {/* Custom styled map/address block with map design */}
            <div className="bg-luxury-white rounded-3xl p-6 border border-luxury-champagne shadow-sm space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-charcoal">Cakescene flagship boutique</h4>
                  <p className="text-[11px] leading-relaxed text-luxury-mocha/70 mt-1">
                    842 Patisserie Avenue, Couture Gardens, Suite 10, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Styled interactive-looking vector map plate */}
              <div className="relative h-44 rounded-2xl bg-luxury-blush/60 overflow-hidden border border-luxury-champagne/45 flex flex-col justify-between p-4 group">
                {/* Visual grid lines for map design */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5ddd5_1px,transparent_1px)] [background-size:16px_16px] opacity-60 z-0" />
                {/* Decorative map roads and labels */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-luxury-cream z-0" />
                <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-luxury-cream z-0" />
                
                {/* Location Pin overlay */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-8 h-8 rounded-full bg-luxury-gold border border-luxury-white flex items-center justify-center text-luxury-cream shadow-md"
                  >
                    🍰
                  </motion.div>
                  <div className="w-2.5 h-1 bg-luxury-charcoal/20 rounded-full blur-xs mt-0.5" />
                </div>

                <div className="relative z-10 flex justify-between items-start w-full">
                  <span className="text-[8px] tracking-wider bg-luxury-white/95 text-luxury-mocha font-bold uppercase px-2 py-1 rounded-md shadow-xs border border-luxury-champagne">
                    GPS Coordinates
                  </span>
                  <span className="text-[8px] font-mono font-bold text-luxury-mocha/50 bg-luxury-white/50 px-2 py-1 rounded-md">
                    34.0736° N, 118.4004° W
                  </span>
                </div>

                <div className="relative z-10 flex items-end justify-between w-full">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-luxury-gold" />
                    <span className="text-[9px] font-semibold text-luxury-mocha/80">In-Store Consultations Required</span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-bold tracking-wider text-luxury-gold hover:text-luxury-charcoal bg-luxury-white/95 border border-luxury-champagne px-3 py-1.5 rounded-md shadow-xs uppercase transition-colors"
                  >
                    Open Directions
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact form with conditional Success screen */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-luxury-white rounded-3xl border border-luxury-champagne p-6 md:p-8 shadow-lg min-h-[500px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* Full Name */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formInputs.fullName}
                            onChange={handleInputChange}
                            placeholder="Eleanor Vance"
                            className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal placeholder:text-luxury-mocha/40 transition-colors"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formInputs.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 789-1234"
                            className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal placeholder:text-luxury-mocha/40 transition-colors"
                          />
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formInputs.email}
                            onChange={handleInputChange}
                            placeholder="eleanor@example.com"
                            className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal placeholder:text-luxury-mocha/40 transition-colors"
                          />
                        </div>

                        {/* Cake Type Selection */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2">
                            Cake Type Selection *
                          </label>
                          <select
                            name="cakeType"
                            value={formInputs.cakeType}
                            onChange={handleInputChange}
                            className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal transition-colors appearance-none"
                          >
                            <option value="wedding">Luxury Wedding Cake</option>
                            <option value="birthday">Birthday Celebration Cake</option>
                            <option value="custom">Custom Theme Cake</option>
                            <option value="bento">Bento Mini Cake</option>
                            <option value="cupcakes">Cupcake Collection</option>
                            <option value="dessert">Dessert Table / Macarons</option>
                          </select>
                        </div>

                        {/* Event Date */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                            Event Date *
                          </label>
                          <input
                            type="date"
                            name="eventDate"
                            required
                            value={formInputs.eventDate}
                            onChange={handleInputChange}
                            className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal transition-colors"
                          />
                        </div>

                        {/* Guest Count */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2 flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-luxury-gold" />
                            Estimated Guests *
                          </label>
                          <input
                            type="number"
                            name="guestCount"
                            required
                            min="1"
                            value={formInputs.guestCount}
                            onChange={handleInputChange}
                            placeholder="50"
                            className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal placeholder:text-luxury-mocha/40 transition-colors"
                          />
                        </div>

                      </div>

                      {/* Message details */}
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-mocha/80 block mb-2">
                          Message & Custom Design Instructions
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formInputs.message}
                          onChange={handleInputChange}
                          placeholder="Describe color palettes, flower types, sponge requests, or Pinterest boards you want to match..."
                          className="w-full bg-luxury-cream border border-luxury-champagne/60 focus:border-luxury-gold focus:outline-none rounded-xl px-4.5 py-3.5 text-xs text-luxury-charcoal placeholder:text-luxury-mocha/40 transition-colors resize-none leading-relaxed font-sans"
                        />
                      </div>

                      {/* Submit Consultation */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-hover disabled:bg-luxury-gold/60 text-luxury-cream text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-luxury-cream border-t-transparent animate-spin" />
                            Locking Reservation Date...
                          </>
                        ) : (
                          'Submit Inquiry & Secure Date'
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-6 max-w-md mx-auto py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">
                        Inquiry Received!
                      </h3>
                      <p className="text-xs text-luxury-mocha/70 leading-relaxed">
                        Thank you, <strong className="text-luxury-charcoal">{formInputs.fullName}</strong>. Your luxury consultation ticket has been registered on our secure server. We have locked in <strong className="text-luxury-charcoal">{formInputs.eventDate}</strong> pending deposit.
                      </p>
                    </div>

                    {/* Styled Ticket */}
                    <div className="bg-luxury-cream border border-luxury-champagne rounded-2xl p-5 flex flex-col items-center shadow-inner relative overflow-hidden">
                      {/* Ticket notches decoration */}
                      <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-luxury-white border-r border-luxury-champagne -translate-y-1/2" />
                      <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-luxury-white border-l border-luxury-champagne -translate-y-1/2" />

                      <span className="text-[9px] uppercase tracking-widest font-extrabold text-luxury-gold mb-1">
                        Secure Order ID
                      </span>
                      
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="font-mono text-lg font-bold text-luxury-charcoal select-all">
                          {ticketId}
                        </span>
                        <button
                          onClick={handleCopyTicket}
                          className="p-1 rounded hover:bg-luxury-champagne/30 text-luxury-mocha/70 hover:text-luxury-mocha transition-colors cursor-pointer"
                          title="Copy Ticket ID"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="h-px w-full bg-dashed bg-luxury-champagne/50 my-4" />

                      <div className="w-full grid grid-cols-2 gap-3 text-left">
                        <div>
                          <p className="text-[8px] uppercase text-luxury-mocha/55 font-bold">Event Guests</p>
                          <p className="text-xs font-bold text-luxury-charcoal mt-0.5">{formInputs.guestCount} guests</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase text-luxury-mocha/55 font-bold">Category</p>
                          <p className="text-xs font-bold text-luxury-charcoal mt-0.5 uppercase tracking-wide">{formInputs.cakeType}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href={`https://wa.me/123456789?text=Hi%20Cakescene.studio,%20I%20just%20submitted%20inquiry%20${ticketId}!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        WhatsApp Follow-Up
                      </a>
                      <button
                        onClick={() => {
                          setSubmitSuccess(false);
                          setFormInputs({
                            fullName: '',
                            phone: '',
                            email: '',
                            cakeType: 'wedding',
                            eventDate: '',
                            guestCount: '',
                            message: ''
                          });
                        }}
                        className="w-full text-center py-3.5 rounded-full border border-luxury-gold/30 text-luxury-mocha text-xs font-bold tracking-widest uppercase hover:bg-luxury-champagne/15 transition-colors cursor-pointer"
                      >
                        Submit Another
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
