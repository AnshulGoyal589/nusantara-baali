// app/(components)/ui/CarouselDots.tsx

import React from 'react';

type PropType = {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotClick: (index: number) => void;
};

export const CarouselDots = ({ scrollSnaps, selectedIndex, onDotClick }: PropType) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            index === selectedIndex ? 'bg-[#61a8a8] w-4' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};