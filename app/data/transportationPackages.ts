import type { Package } from './types';

export const transportationPackages: Package[] = [
    { id: 'trans-bali-airport', name: 'Bali Airport Transfer', location: 'Indonesia', price: 50, imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757767545/Bali-Ngurah-Rai-Airport_20180622073108_gyo5vr.jpg', category: 'Transportation', rating: 4.7, reviews: 100, description: 'Convenient airport transfer service in Bali.' },
    { id: 'trans-sydney-city', name: 'Sydney City Transfer', location: 'Australia', price: 70, imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757767577/25_sga3qp.jpg', category: 'Transportation', rating: 4.6, reviews: 80, description: 'Reliable city transfer service in Sydney.' },
    { id: 'trans-tokyo-rail', name: 'Tokyo Rail Pass', location: 'Japan', price: 100, imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757767614/25-98160_uku6pa.webp', category: 'Transportation', rating: 4.8, reviews: 60, description: 'Unlimited travel on Tokyo\'s rail network with this convenient pass.' },
    { id: 'trans-london-tube', name: 'London Underground Pass', location: 'UK', price: 120, imageSrc: 'https://res.cloudinary.com/dwvdjxgba/image/upload/v1757767662/three-london-tube-trains-pass-each-other-at-neasden-london-underground-train-depot-jubilee-line-north-west-london-england-uk-2KTM5KD_glmekf.jpg', category: 'Transportation', rating: 4.7, reviews: 90, description: 'Get around London easily with an unlimited underground pass.' },
];
