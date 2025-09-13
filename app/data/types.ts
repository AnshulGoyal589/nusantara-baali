// app/data/types.ts
export type PackageCategory = 
  | 'Transportation' 
  | 'Tour Packages' 
  | 'Visas' 
  | 'Air Tickets' 
  | 'Wedding Packages' 
  | 'Honeymoon Packages';

export type Package = {
  id: string; // e.g., 'tour-mount-bromo'
  name: string;
  location: string;
  price: number;
  imageSrc: string;
  category: PackageCategory;
  rating: number;
  reviews: number;
  description: string;
};