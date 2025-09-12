// app/data/packages.ts
import type { Package } from './types';

export const allPackages: Package[] = [
  // Existing Data (updated)
  { id: 'pkg1', name: "Pattaya Beach", location: "Thailand", price: 200, imageSrc: "/images/pattaya.jpg", category: 'Relaxation', rating: 4.8, reviews: 320 },
  { id: 'pkg2', name: "Mayan Ruins Exploration", location: "Mexico", price: 280, imageSrc: "/images/mexico.jpg", category: 'Adventure', rating: 4.9, reviews: 410 },
  { id: 'pkg3', name: "Bali Underwater World", location: "Indonesia", price: 220, imageSrc: "/images/aquarium.jpg", category: 'Family', rating: 4.7, reviews: 180 },
  { id: 'pkg4', name: "Raja Ampat Diving", location: "Indonesia", price: 350, imageSrc: "/images/raja-ampat.jpg", category: 'Adventure', rating: 5.0, reviews: 250 },
  
  // New Data
  { id: 'pkg5', name: "Ubud Honeymoon Villa", location: "Indonesia", price: 400, imageSrc: "/images/ubud-villa.jpg", category: 'Honeymoon', rating: 5.0, reviews: 150 },
  { id: 'pkg6', name: "Santorini Sunset Romance", location: "Greece", price: 550, imageSrc: "/images/santorini.jpg", category: 'Honeymoon', rating: 4.9, reviews: 280 },
  { id: 'pkg7', name: "Swiss Alps Ski Trip", location: "Switzerland", price: 600, imageSrc: "/images/swiss-alps.jpg", category: 'Adventure', rating: 4.8, reviews: 190 },
  { id: 'pkg8', name: "Kyoto Temple Tour", location: "Japan", price: 300, imageSrc: "/images/kyoto.jpg", category: 'Relaxation', rating: 4.9, reviews: 350 },
  { id: 'pkg9', name: "Family Fun in Orlando", location: "USA", price: 180, imageSrc: "/images/orlando.jpg", category: 'Family', rating: 4.6, reviews: 500 },
];