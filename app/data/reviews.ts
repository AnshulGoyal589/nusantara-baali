
export type Review = {
  id: string;
  quote: string;
  rating: number;
  reviewer: {
    name: string;
    title: string;
    avatarSrc: string;
  };
  destination: {
    name: string;
    location: string;
    imageSrc: string;
  };
};

export const reviewsData: Review[] = [
  {
    id: 'rev1',
    quote: "Pattaya offers vibrant nightlife and serene beaches. From Walking Street to Jomtien Beach, every corner is unique. The Sanctuary of Truth and Nong Nooch Tropical Garden are must-sees. A must-visit for excitement and beauty!",
    rating: 4.5,
    reviewer: {
      name: 'Niki Lada',
      title: 'Professional tour guide',
      avatarSrc: '/images/avatar1.jpg',
    },
    destination: {
      name: 'Pattaya',
      location: 'Thailand',
      imageSrc: '/images/pattaya-review.jpg',
    },
  },
  {
    id: 'rev2',
    quote: "The Swiss Alps were absolutely breathtaking. The skiing was world-class and the scenery was like something out of a postcard. Our guide was knowledgeable and made the trip unforgettable. Highly recommended for adventure lovers!",
    rating: 5.0,
    reviewer: {
      name: 'Jane Doe',
      title: 'Travel Enthusiast',
      avatarSrc: '/images/avatar2.jpg',
    },
    destination: {
      name: 'Swiss Alps',
      location: 'Switzerland',
      imageSrc: '/images/swiss-alps-review.jpg',
    },
  },
  {
    id: 'rev3',
    quote: "Kyoto is a city of profound beauty and tranquility. The temples and gardens are immaculately maintained. We felt transported to another era. A truly spiritual and calming experience that I will cherish forever.",
    rating: 5.0,
    reviewer: {
      name: 'Kenji Tanaka',
      title: 'Photographer',
      avatarSrc: '/images/avatar3.jpg',
    },
    destination: {
      name: 'Kyoto',
      location: 'Japan',
      imageSrc: '/images/kyoto-review.jpg',
    },
  },
];
