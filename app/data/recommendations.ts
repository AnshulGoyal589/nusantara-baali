export type Recommendation = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  description: string;
  price: string;
  imageSrc: string;
  tags: string[];
};

export const recommendationsData: Recommendation[] = [
  {
    id: 'rec1',
    name: 'Venice',
    rating: 5.90,
    reviews: 99,
    description: "Venice's iconic canals and rich history promise an unforgettable experience.",
    price: '123,4',
    imageSrc: '/images/venice.jpg',
    tags: ['Popular', 'Recommend'],
  },
  {
    id: 'rec2',
    name: 'Madrid',
    rating: 6.00,
    reviews: 99,
    description: "Spain's vibrant capital, brimming with culture, architecture, and lively streets.",
    price: '123,4',
    imageSrc: '/images/madrid.jpg',
    tags: ['Popular', 'Recommend'],
  },
  {
    id: 'rec3',
    name: 'Netherlands',
    rating: 5.00,
    reviews: 99,
    description: "Picturesque landscapes, iconic windmills, and vibrant cities offer a perfect blend.",
    price: '123,4',
    imageSrc: '/images/netherlands.jpg',
    tags: ['Popular'],
  },
  {
    id: 'rec4',
    name: 'Bali',
    rating: 5.90,
    reviews: 99,
    description: 'Tropical paradise with stunning beaches, lush landscapes, and vibrant culture.',
    price: '123,4',
    imageSrc: '/images/bali.jpg',
    tags: ['Popular'],
  },
  {
    id: 'rec5',
    name: 'Curug Telu',
    rating: 5.90,
    reviews: 99,
    description: 'Three breathtaking waterfalls tucked away in Indonesia’s verdant oasis.',
    price: '123,4',
    imageSrc: '/images/curug-telu.jpg',
    tags: ['Recommend'],
  },
  {
    id: 'rec6',
    name: 'Bromo',
    rating: 5.90,
    reviews: 99,
    description: 'Bromo Indonesia’s iconic Mount Bromo and its surrounding volcanic landscape.',
    price: '123,4',
    imageSrc: '/images/bromo.jpg',
    tags: ['Popular', 'Recommend'],
  },
];