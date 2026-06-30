import { Specialty, SignatureCake, GalleryItem, Testimonial, FAQItem } from './types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'spec-1',
    title: 'Wedding Cakes',
    description: 'Elegant, multi-tiered masterpieces personalized for your dream wedding.',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-2',
    title: 'Birthday Cakes',
    description: 'Playful, chic, or themed designs that make birthdays truly magical.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-3',
    title: 'Custom Theme Cakes',
    description: 'Crafted to match any vision, hobby, or fantasy you can dream of.',
    image: 'https://images.unsplash.com/photo-1558961312-50a4983afbfc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-4',
    title: 'Cupcakes',
    description: 'Delicate personal-sized treats crowned with artisanal frosting.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-5',
    title: 'Bento Cakes',
    description: 'Miniature Korean-style cakes perfect for intimate celebrations.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-6',
    title: 'Floral Cakes',
    description: 'Adorned with hand-piped buttercream petals or fresh edible blossoms.',
    image: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-7',
    title: 'Chocolate Cakes',
    description: 'Rich, decadent layers of pure Belgian chocolate and gourmet ganache.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-8',
    title: 'Red Velvet Cakes',
    description: 'Velvety crimson layers paired with signature organic cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-9',
    title: 'Dessert Tables',
    description: 'A curated spread of macarons, tarts, cake pops, and luxurious sweets.',
    image: 'https://images.unsplash.com/photo-1519624535564-9f798e1f57f4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spec-10',
    title: 'Brownies & Cookies',
    description: 'Chewy, golden-baked delights infused with premium vanilla and chocolate chips.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800'
  }
];

export const SIGNATURE_COLLECTION: SignatureCake[] = [
  {
    id: 'sig-1',
    name: 'Luxury Wedding Cake',
    description: 'Elegant multi-tiered white velvet cake with custom hand-piped floral lace designs and edible 24k gold leaf.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-2',
    name: 'Minimalist Cake',
    description: 'Sleek Korean bento-style design with clean buttercream strokes, pastel tones, and subtle lettering.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-3',
    name: 'Floral Buttercream Cake',
    description: 'Breathtaking layers of Madagascan vanilla sponge adorned with stunning, hyper-realistic hand-piped flora.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-4',
    name: 'Chocolate Drip Cake',
    description: 'Rich dark chocolate cake layered with salted caramel buttercream, crowned with glossy ganache drops and premium truffles.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-5',
    name: 'Kids Theme Cake',
    description: 'Whimsical and colorful creations styled with handcrafted fondant characters and playful pastel swirls.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-6',
    name: 'Heart Cake',
    description: 'Vintage-styled Victorian piping surrounding a perfect heart-shaped red velvet sponge with cream cheese mousse.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-7',
    name: 'Cupcake Collection',
    description: 'A luxurious dozen of assorted velvet, pistachio, and champagne-infused cupcakes topped with pearls.',
    price: 36,
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-8',
    name: 'Celebration Cake',
    description: 'Showstopping dual-flavor drip cake featuring fresh berries, French macarons, and shimmering champagne dust.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Golden Crest Wedding Cake',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800',
    description: 'Three tiers of absolute elegance featuring fresh white roses and authentic gold leaf details.'
  },
  {
    id: 'gal-2',
    title: 'White Lace Tiered Cake',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=800',
    description: 'Detailed buttercream embroidery replicating vintage bridal lace, layered with champagne-soaked sponge.'
  },
  {
    id: 'gal-3',
    title: 'Macaron Delight Birthday',
    category: 'birthday',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=800',
    description: 'Soft pastel pink layers decorated with house-made vanilla macarons and white chocolate shards.'
  },
  {
    id: 'gal-4',
    title: 'Golden Confetti Celebration',
    category: 'birthday',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=800',
    description: 'Rich dark chocolate mud cake topped with hand-rolled gold leaf truffles and vanilla beans.'
  },
  {
    id: 'gal-5',
    title: 'Artistic Brushstroke Cake',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1558961312-50a4983afbfc?auto=format&fit=crop&q=80&w=800',
    description: 'Abstract chocolate brushstrokes in gold and champagne surrounding an organic lemon elderflower cake.'
  },
  {
    id: 'gal-6',
    title: 'Contemporary Textured Cake',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    description: 'Sculptured gray-and-gold cement look buttercream encasing premium dark forest fruit layers.'
  },
  {
    id: 'gal-7',
    title: 'Pastel Vanilla Cupcakes',
    category: 'cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800',
    description: 'Airy vanilla cupcakes with classic pastel frosting swirls and delicate edible sugar pearls.'
  },
  {
    id: 'gal-8',
    title: 'Artisan Berry Cupcakes',
    category: 'cupcakes',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800',
    description: 'Rich dark cocoa base with a fresh raspberry buttercream core and a handpicked wild berry.'
  },
  {
    id: 'gal-9',
    title: 'Grand Dessert Buffet',
    category: 'dessert-tables',
    image: 'https://images.unsplash.com/photo-1519624535564-9f798e1f57f4?auto=format&fit=crop&q=80&w=800',
    description: 'An expansive wedding setup combining cake pops, cream-filled pastries, fruit tarts, and bento treats.'
  },
  {
    id: 'gal-10',
    title: 'Blush French Macaron Tower',
    category: 'dessert-tables',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800',
    description: 'An elegant display of raspberry and vanilla bean French macarons arranged in a beautiful ombre tower.'
  },
  {
    id: 'gal-11',
    title: 'Rustic Autumn Spice Cake',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1605697040045-a53d7e6db413?auto=format&fit=crop&q=80&w=800',
    description: 'Cinnamon and nutmeg spiced layers dressed in naked-style buttercream and dried botanical accents.'
  },
  {
    id: 'gal-12',
    title: 'Winter Berry Snowy Gateau',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800',
    description: 'A frosted vanilla bean and rosemary gateau topped with sugar-powdered wild cranberries and forest leaves.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    rating: 5,
    text: 'The most beautiful cake we\'ve ever ordered. It tasted even better than it looked! Our wedding guests are still talking about the champagne-raspberry layers.',
    author: 'Eleanor & Julian Vance',
    role: 'Bride & Groom'
  },
  {
    id: 'rev-2',
    rating: 5,
    text: 'Professional service, stunning design, and incredible flavor. They transformed my abstract painting idea into a breathtaking cake for my gallery opening.',
    author: 'Clara Montrose',
    role: 'Art Director'
  },
  {
    id: 'rev-3',
    rating: 5,
    text: 'Perfect for weddings and birthdays. Highly recommended! The Bento Cakes are incredibly cute and make the absolute best gifts for coworkers.',
    author: 'Marcus Sterling',
    role: 'Corporate Planner'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I place an order?',
    answer: 'You can submit an order request through our contact form below, choose your favorite model from our Signature Collection, or contact us directly via WhatsApp. We will reach back within 24 hours with design consultations and pricing.'
  },
  {
    id: 'faq-2',
    question: 'How far in advance should I book?',
    answer: 'For wedding cakes and large dessert tables, we recommend booking 2 to 6 months in advance. For standard birthdays, custom bento cakes, or cupcakes, a minimum of 7 to 14 days is required to guarantee availability.'
  },
  {
    id: 'faq-3',
    question: 'Can I request a custom design?',
    answer: 'Absolutely! Custom cake artistry is our specialty. You can share color swatches, invitations, Pinterest boards, or themes, and we will sketch a unique, luxurious cake masterpiece specifically tailored to your celebration.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer delivery?',
    answer: 'Yes! We offer temperature-controlled delivery within a 50-mile radius. For multi-tiered wedding cakes, professional delivery and on-site assembly by our team are highly recommended and can be scheduled at checkout.'
  },
  {
    id: 'faq-5',
    question: 'What payment methods are accepted?',
    answer: 'We accept secure credit/debit card payments, bank transfers, PayPal, and Apple Pay. For custom orders, a 50% non-refundable deposit is required to secure your booking date, with the balance due 14 days prior to delivery.'
  },
  {
    id: 'faq-6',
    question: 'Can you accommodate dietary preferences?',
    answer: 'Yes, we can craft exquisite gluten-free, eggless, nut-free, and vegan options. Please specify your allergy details and dietary requirements in our booking form so we can take the utmost care in our hygienic kitchen.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Freshly Baked Daily',
    description: 'Every order is baked from scratch using local, wholesome ingredients just hours before delivery.'
  },
  {
    title: 'Premium Ingredients',
    description: 'We import Belgian chocolate, Madagascar Bourbon vanilla, and organic farm-fresh dairy.'
  },
  {
    title: 'Custom Designs',
    description: 'Our award-winning artists turn your unique imagination into edible, sculptural reality.'
  },
  {
    title: 'Elegant Presentation',
    description: 'Our creations arrive in heavy glassmorphic acrylic boxes wrapped in signature satin ribbons.'
  },
  {
    title: 'Fast Response',
    description: 'Our concierge customer service replies within hours to guide you through your customization.'
  },
  {
    title: 'On-Time Delivery',
    description: 'We deliver in custom-refrigerated vans with specialized suspension to ensure pristine arrivals.'
  },
  {
    title: 'Hygienic Kitchen',
    description: 'We maintain a state-of-the-art commercial studio with premium sanitization and dust controls.'
  },
  {
    title: 'Affordable Luxury',
    description: 'We offer breathtaking high-end quality, styled to fit both intimate budgets and grand galas.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Choose Your Cake',
    description: 'Browse our signature collection or submit custom concepts and dimensions.'
  },
  {
    step: '02',
    title: 'Customize the Design',
    description: 'Collaborate on colors, flower pipings, cake flavors, and custom fillings.'
  },
  {
    step: '03',
    title: 'Confirm Your Order',
    description: 'Secure your booking date with a seamless, protected deposit payment.'
  },
  {
    step: '04',
    title: 'Freshly Bake & Deliver',
    description: 'Our master chef bakes and delivers your masterwork safely to your venue.'
  }
];
