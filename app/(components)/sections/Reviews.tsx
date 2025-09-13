
'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { reviewsData } from '@/app/data/reviews';
import { CarouselDots } from './CarouselDots';

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 text-orange-400 fill-current" />)}
      {halfStar && <Star key="half" className="h-5 w-5 text-orange-400 fill-current" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />)}
    </div>
  );
};


export const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const onDotClick = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500">What people say about these places</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">Reviews</h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviewsData.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] lg:flex-[0_0_80%] min-w-0 lg:pl-4">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row gap-8 items-center">
                
                  <div className="relative w-full md:w-2/5 h-64 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={review.destination.imageSrc} alt={review.destination.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{review.destination.name}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin size={14} />
                        <span>{review.destination.location}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Image src={review.reviewer.avatarSrc} alt={review.reviewer.name} width={40} height={40} className="rounded-full border-2 border-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600 italic">&apos;{review.quote}&apos;</p>
                    <div className="mt-4">
                      <StarRating rating={review.rating} />
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-gray-800">{review.reviewer.name}</p>
                      <p className="text-sm text-gray-500">{review.reviewer.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <CarouselDots
          scrollSnaps={scrollSnaps} 
          selectedIndex={selectedIndex} 
          onDotClick={onDotClick} 
        />
      </div>
    </section>
  );
};

export default Reviews;