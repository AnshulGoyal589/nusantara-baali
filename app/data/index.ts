// app/data/index.ts
import { tourPackages } from './tourPackages';
import { honeymoonPackages } from './honeymoonPackages';
// ... import other package types
import type { Package, PackageCategory } from './types';
import { transportationPackages } from './transportationPackages';
import { visaPackages } from './visaPackages';
import { airTicketPackages } from './airTicketPackages';
import { weddingPackages } from './weddingPackages';
// import { tr } from 'date-fns/locale';

// A central list of all packages
export const allPackages: Package[] = [
  ...tourPackages,
  ...honeymoonPackages,
  ...transportationPackages,
  ...visaPackages,
  ...airTicketPackages,
  ...weddingPackages
];

// A helper map to easily get data by category
export const packagesByCategory: Record<PackageCategory, Package[]> = {
  'Tour Packages': tourPackages,
  'Honeymoon Packages': honeymoonPackages,
  'Transportation': transportationPackages,
  'Visas': visaPackages,
  'Air Tickets': airTicketPackages,
  'Wedding Packages': weddingPackages,
};

// A helper for category page details
export const categoryDetails = {
  'Tour Packages': { slug: 'tour-packages', title: 'Exciting Tour Packages' },
  'Honeymoon Packages': { slug: 'honeymoon-packages', title: 'Romantic Honeymoon Getaways' },
  'Transportation': { slug: 'transportation', title: 'Convenient Transportation Services' },
  'Visas': { slug: 'visas', title: 'Hassle-Free Visa Services' },
  'Air Tickets': { slug: 'air-tickets', title: 'Affordable Air Tickets' },
  'Wedding Packages': { slug: 'wedding-packages', title: 'Dream Wedding Packages' },

};