export interface Specialty {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SignatureCake {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'birthday' | 'custom' | 'cupcakes' | 'dessert-tables' | 'seasonal';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  role?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface OrderFormInputs {
  fullName: string;
  phone: string;
  email: string;
  cakeType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
