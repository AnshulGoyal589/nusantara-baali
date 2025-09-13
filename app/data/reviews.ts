
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
      avatarSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757768431/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305_qlxzy4.jpg',
    },
    destination: {
      name: 'Pattaya',
      location: 'Thailand',
      imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757768502/hotel-building_jphsiv.jpg',
    },
  },
  {
    id: 'rev2',
    quote: "The Swiss Alps were absolutely breathtaking. The skiing was world-class and the scenery was like something out of a postcard. Our guide was knowledgeable and made the trip unforgettable. Highly recommended for adventure lovers!",
    rating: 5.0,
    reviewer: {
      name: 'Jane Doe',
      title: 'Travel Enthusiast',
      avatarSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757768457/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo_vpmmcj.jpg',
    },
    destination: {
      name: 'Swiss Alps',
      location: 'Switzerland',
      imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757768527/shutterstock-1662649585-beautiful-mountain-hike-through-val-roseg-ValPoschiavo-rsz-06012021160542835_cmxg9v.jpg',
    },
  },
  {
    id: 'rev3',
    quote: "Kyoto is a city of profound beauty and tranquility. The temples and gardens are immaculately maintained. We felt transported to another era. A truly spiritual and calming experience that I will cherish forever.",
    rating: 5.0,
    reviewer: {
      name: 'Kenji Tanaka',
      title: 'Photographer',
      avatarSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757768459/5N7A0541-e1718042484447_oykc8b.jpg',
    },
    destination: {
      name: 'Kyoto',
      location: 'Japan',
      imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757768563/shutterstock_626644001-L_kbq5yo.jpg',
    },
  },
];
