export type Package = {
  id: string;
  name: string;
  location: string;
  price: number;
  imageSrc: string;
  category: 'Adventure' | 'Honeymoon' | 'Relaxation' | 'Family';
  rating: number;
  reviews: number;
};