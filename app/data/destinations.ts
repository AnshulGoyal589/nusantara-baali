
export type Destination = {
  id: number;
  name: string;
  location: string;
  price: number;
  imageSrc: string;
  isMostPopular?: boolean;
};

export const popularDestinationsData: Destination[] = [
  {
    id: 1,
    name: "Pattaya",
    location: "Thailand",
    price: 200,
    imageSrc: "/images/pattaya.jpg",
    isMostPopular: true,
  },
  {
    id: 2,
    name: "Mexico",
    location: "Mexico",
    price: 200,
    imageSrc: "/images/mexico.jpg",
  },
  {
    id: 3,
    name: "Aquarium",
    location: "Indonesia",
    price: 200,
    imageSrc: "https://res.cloudinary.com/dwvdjxgba/image/upload/v1757767013/aquarium_ty8c2k.avif",
  },
  {
    id: 4,
    name: "Raja Ampat",
    location: "Indonesia",
    price: 200,
    imageSrc: "/images/raja-ampat.jpg",
  },
];