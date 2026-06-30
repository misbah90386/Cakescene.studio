import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import SignatureCollection from './components/SignatureCollection';
import CakeBuilder from './components/CakeBuilder';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CollectionTicker from './components/CollectionTicker';
import Footer from './components/Footer';
import { SignatureCake } from './types';

export default function App() {
  // Preset cake selection state (for Signature collection triggers)
  const [selectedPreset, setSelectedPreset] = useState<{ name: string; price: number } | null>(null);
  
  // Custom-designed cake details (for pre-filling Contact form)
  const [draftCakeSpecs, setDraftCakeSpecs] = useState<{
    category: string;
    tiers: string;
    flavor: string;
    style: string;
    addons: string;
    dietary: string;
    estimatedPrice: number;
  } | null>(null);

  // When a user selects "Order Now" from SignatureCollection
  const handleOrderSignatureCake = (cake: SignatureCake) => {
    setSelectedPreset({ name: cake.name, price: cake.price });
    
    // Smooth scroll to CakeBuilder
    const builderEl = document.getElementById('designer');
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a user selects a specialty, preset the customizer category
  const handleSelectSpecialty = (specialtyTitle: string) => {
    setSelectedPreset({ name: `Custom ${specialtyTitle}`, price: 100 });
    
    // Scroll to designer
    const builderEl = document.getElementById('designer');
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a user submits/inquires about a custom cake in the CakeBuilder
  const handleInquireCustomCake = (specs: {
    category: string;
    tiers: string;
    flavor: string;
    style: string;
    addons: string;
    dietary: string;
    estimatedPrice: number;
  }) => {
    setDraftCakeSpecs(specs);
    
    // Smooth scroll to Contact Form
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomizerDirectly = () => {
    const builderEl = document.getElementById('designer');
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold selection:text-luxury-cream">
      {/* Premium Sticky Navigation */}
      <Header onOpenCustomizer={handleOpenCustomizerDirectly} />

      {/* Main Sections */}
      <main>
        {/* Breathtaking Hero Panel */}
        <Hero onOpenCustomizer={handleOpenCustomizerDirectly} />

        {/* Brand Legacy / Philosophy & Ingredients */}
        <About />

        {/* Artistic Specialties Grids */}
        <Specialties onSelectSpecialty={handleSelectSpecialty} />

        {/* Curated Portfolio Signature Collections */}
        <SignatureCollection onOrderCake={handleOrderSignatureCake} />

        {/* Interactive Custom Cake Estimator Widget */}
        <CakeBuilder
          selectedPreset={selectedPreset}
          clearPreset={() => setSelectedPreset(null)}
          onInquireCustomCake={handleInquireCustomCake}
        />

        {/* Core Benefits & Trust Badges */}
        <WhyChooseUs />

        {/* Fluid Step-by-Step Customer Journey */}
        <Process />

        {/* Acclaimed Client Testimonials */}
        <Reviews />

        {/* Masonry Portfolio & Luminous Lightbox */}
        <Gallery />

        {/* Frequently Asked Inquiries */}
        <FAQ />

        {/* High-Converting Order Booking Form */}
        <Contact
          draftCakeSpecs={draftCakeSpecs}
          clearDraftSpecs={() => setDraftCakeSpecs(null)}
        />
      </main>

      {/* Infinite scrolling immersive collection bar */}
      <CollectionTicker />

      {/* Elegant footer & journal newsletter form */}
      <Footer />
    </div>
  );
}
